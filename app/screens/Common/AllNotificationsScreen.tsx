import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet, TouchableOpacity } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { HeaderWithBackButton, Icon, Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors, spacing, typography } from "app/theme"
import { notificationsList } from "app/components/serviceUser/DummyData/HomeScreenData"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface AllNotificationsScreenProps extends AppStackScreenProps<"AllNotifications"> {}

export const AllNotificationsScreen: FC<AllNotificationsScreenProps> = observer(
  function AllNotificationsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    // Function to close a swiped row
    const [notificationsToShow, setNotificationsToShow] = useState(notificationsList)
    const closeRow = (rowMap, rowKey) => {
      if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow()
      }
    }

    // Function to delete an item from the list
    const deleteItem = (rowMap, rowKey) => {
      closeRow(rowMap, rowKey)
      const newData = [...notificationsToShow]
      const prevIndex = notificationsToShow.findIndex((item) => item.id === rowKey)
      newData.splice(prevIndex, 1)
      setNotificationsToShow(newData)
    }

    // Function to handle row open event
    const onRowOpen = (rowKey) => {
      console.log("Opened row with key:", rowKey)
    }

    // TODO: will have to iplemenent a swipe to delete, see https://docs.nativebase.io/3.0.x/building-swipe-list
    const notificationsView = (notification) => {
      return (
        <View style={styles.notificationsWrapper}>
          <Icon icon="bell" color={colors.tint} style={styles.img} />
          <View style={styles.notificationInfo}>
            <View style={styles.notificationRow}>
              <Text text={notification.user} style={styles.notificationName} />
              <Text
                text={notification.message}
                style={[styles.notificationText, { color: colors.textDim }]}
              />
              <Text text={notification.service} style={styles.notificationService} />
            </View>
            <View style={styles.timeline}>
              <Text text={notification.timestamp} />
            </View>
          </View>
        </View>
      )
    }

    const notificationsListView = () => {
      return (
        <>
          {notificationsList.map((notification, index) => (
            <View style={styles.notificationsWrapper} key={index}>
              <Icon icon="bell" color={colors.tint} style={styles.img} />
              <View style={styles.notificationInfo}>
                <View style={styles.notificationRow}>
                  <Text text={notification.user} style={styles.notificationName} />
                  <Text
                    text={notification.message}
                    style={[styles.notificationText, { color: colors.textDim }]}
                  />
                  <Text text={notification.service} style={styles.notificationService} />
                </View>
                <View style={styles.timeline}>
                  <Text text={notification.timestamp} />
                </View>
              </View>
            </View>
          ))}
        </>
      )
    }

    const renderHiddenItem = (rowData, rowMap) => (
      <View style={styles.hiddenContainer}>
        <TouchableOpacity
          style={[styles.hiddenButton, styles.closeButton]}
          onPress={() => closeRow(rowMap, rowData.item.key)}
        >
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.hiddenButton, styles.deleteButton]}
          onPress={() => deleteItem(rowMap, rowData.item.key)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
    const renderItem = (notification) => (
      <TouchableOpacity
        onPress={() => console.log("Item touched", notification)}
        style={styles.itemContainer}
      >
        <>
          <View style={styles.notificationsWrapper}>
            <Icon icon="bell" color={colors.tint} style={styles.img} />
            <View style={styles.notificationInfo}>
              <View style={styles.notificationRow}>
                <Text text={notification.user} style={styles.notificationName} />
                <Text
                  text={notification.message}
                  style={[styles.notificationText, { color: colors.textDim }]}
                />
                <Text text={notification.service} style={styles.notificationService} />
              </View>
              <View style={styles.timeline}>
                <Text text={notification.timestamp} />
              </View>
            </View>
          </View>
        </>
      </TouchableOpacity>
    )
    return (
      <Screen preset="scroll" contentContainerStyle={screenContentContainer} safeAreaEdges={[ "bottom"]}>
        <HeaderWithBackButton title="Notifications" />
        <>
          {notificationsList.map((notification, index) => (
            <View style={styles.notificationsWrapper} key={index}>
              <View style={styles.imgWrapper}>
                <Icon icon="bell" color={colors.tint} style={[styles.img]} />
              </View>
              <View style={styles.notificationInfo}>
                <View style={styles.notificationRow}>
                  <Text text={notification.user} style={styles.notificationName} />
                  <Text
                    text={notification.message}
                    style={[styles.notificationText, { color: colors.textDim }]}
                  />
                  <Text text={notification.service} style={styles.notificationService} />
                </View>
                <View style={styles.timeline}>
                  <Text text={notification.timestamp} />
                </View>
              </View>
            </View>
          ))}
        </>
      </Screen>
    )
  },
)
const styles = StyleSheet.create({
  img: { flexDirection: "row", alignSelf: "center" },
  notificationsWrapper: {
    marginVertical: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  imgWrapper: {
    backgroundColor: colors.palette.neutral200,
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    // alignContent: "center",
    marginRight: 16,
  },
  notificationRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginRight: 10,
  },
  notificationInfo: {
    marginRight: 16,
  },
  timeline: {
    flexDirection: "column",
    marginTop: spacing.sm,
    color: colors.textDim,
  },
  notificationText: {
    flexDirection: "row",
    marginLeft: 5,
    fontSize: 15,
  },
  notificationName: {
    flexDirection: "row",
    fontSize: 15,
  },
  notificationService: {
    flexDirection: "row",
    fontSize: 15,
    marginLeft: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee", // Light Gray
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "green",
    margin: 20,
    textAlign: "center",
  },
  subheading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Dark Gray
    margin: 10,
    textAlign: "center",
  },
  itemContainer: {
    // backgroundColor: '#FFF', // White
    marginBottom: 10,
  },
  itemText: {
    color: "#333", // Dark Gray
    fontSize: 16,
    fontWeight: "bold",
  },
  hiddenContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: '#FFF',
    borderRadius: 20,
  },
  hiddenButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
  },
  closeButton: {
    backgroundColor: "green", // Blue
    borderRadius: 20,
  },
  deleteButton: {
    backgroundColor: "#E74C3C", // Red
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
})
