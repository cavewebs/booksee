// @ts-nocheck - preexisting UI type errors; tracked for a later pass
/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, Touchable, TouchableOpacity, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { HeaderWithBackButton, Icon, OtherHeader, Screen, ServiceProviderCard, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ViewBookingsScreenProps extends AppStackScreenProps<"ViewBookings"> {}

export const ViewBookingsScreen: FC<ViewBookingsScreenProps> = observer(
  function ViewBookingsScreen({ route }) {
    const { textTopLeft, image,  } = route.params
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen
        style={$root}
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
         <HeaderWithBackButton title="Booking" />
        <TouchableOpacity>
          <ServiceProviderCard
            image={image}
            location="25 Montgomery Road, Yaba"
            views="5123"
            rating="4.5"
            name="The Next Barbing Salon"
            style={styles.serviceProvider}
          />
        </TouchableOpacity>
        <View>
          <View style={styles.rowContainer}>
            <View>
              <Text text={textTopLeft} size="lg" weight="semiBold" />
            </View>
            <View style={[styles.itemContainer, styles.refunded]}>
              <Text text="Waiting for Approval" size="sm" weight="medium"  />
            </View>
            <View>
              <Icon icon="menuDots" size={16} />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={[styles.itemContainer, styles.normal]}>
              <Icon icon="hourglass" size={12} />
              <Text text="60 minutes" size="sm" weight="medium" style={styles.normalText} />
            </View>

            <View style={[styles.itemContainer, styles.normal]}>
              <Text text="2 people" size="sm" weight="medium" style={styles.normalText}/>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={[styles.itemContainer, styles.normal]}>
              <Icon icon="clock" size={12} />
              <Text text="27.01.23" size="sm" weight="medium" style={styles.normalText}/>
            </View>

            <View style={[styles.itemContainer, styles.normal]}>
              <Icon icon="clock" size={12} />
              <Text text="4:00PM" size="sm" weight="medium" style={styles.normalText} />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={[styles.itemContainer, styles.normal]}>
              <Icon icon="pound" size={14} />
              <Text text="500" size="lg" weight="light" />
            </View>

            <View style={[styles.itemContainer, styles.normal]}>
              <Text text="Paid" size="sm" weight="medium" style={styles.confirmedText} />
            </View>
          </View>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  cancelled: {
    backgroundColor: "#FEF2F2",
  },
  cancelledText:{
    color: "#EF4444",
  },
  confirmed: {
    backgroundColor: "#F0FDF4",
  },
  confirmedText:{
    color: "#22C55E"
  },
  itemContainer: {
    alignItems: "center",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    gap:  5,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  normal: {
    backgroundColor: colors.palette.primary50,
  },
  normalText:{
    color: colors.palette.primary600
  },
  refunded: {
    backgroundColor: "#F3F4F6",
  },
  rowContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24
  },
  serviceProvider: {
    marginBottom: 40,
  },
})
