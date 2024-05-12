/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Image, StyleSheet, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Icon, Modals, Screen, Text } from "app/components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const NotificationImage = require("../../../assets/images/notification-bro.png")

interface NotificationsScreenProps extends AppStackScreenProps<"Notifications"> {}

export const NotificationsScreen: FC<NotificationsScreenProps> = observer(
  function NotificationsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
    const {
      authenticationStore: { userType },
    } = useStores()

    const {
      onboardingStore: { hasCompletedOnboarding, setHasCompletedOnboarding },
    } = useStores()

    const [showModal, setShowModal] = React.useState(false)

    // Pull in navigation via hook
    const navigation = useNavigation()
    const decodeNextRoute = () => {
      // setShowModal(false)
      console.log("has completed", hasCompletedOnboarding)
      console.log(userType, "userType")
      setTimeout(function () {
        if (hasCompletedOnboarding) {
          navigation.goBack()
        } else {
          userType === "sp"
            ? navigation.navigate("OfferServices")
            : navigation.navigate("ServiceUser")
        }
      }, 10)
      setHasCompletedOnboarding(true)
    }
    return (
      <Screen preset="fixed">
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon icon="x" style={styles.icon} onPress={() => decodeNextRoute()} />
          </View>
          <View style={styles.imageContainer}>
            <Image source={NotificationImage} style={styles.image} />
          </View>
          <View>
            <Text style={styles.title}>Enable Notifications</Text>
            <Text style={styles.notificationBodyText}>
              Booksee would like to send you Notifications to keep you up to date on your bookings
            </Text>
          </View>
          <View>
            <Button
              text="Turn on Notifications"
              textStyle={styles.buttonText}
              pressedStyle={styles.pressedButton}
              pressedTextStyle={styles.pressedButtonText}
              style={styles.button}
              onPress={() => setShowModal(true)}
            />
          </View>
          <Modals
            showModal={showModal}
            setShowModal={setShowModal}
            modalTitle={"Notifications"}
            modalBody={
              "Booksee would like to send you notifications to keep you up to date on your bookings"
            }
            navigate={() => decodeNextRoute()}
            modalCancelButtonText={"Don't Allow"}
            modalAcceptButtonText={"Allow"}
          />
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#2895FE",
    borderColor: "#2895FE",
    borderRadius: 27.2,
    height: 48,
    justifyContent: "center",
    marginBottom: 10,
    width: "95%",
  },
  buttonText: {
    color: "#F5F5FF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  container: {
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  icon: {
    // Adjust icon styles
  },
  iconContainer: {
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  image: {
    margin: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  notificationBodyText: {
    fontSize: 14,
    marginBottom: 16,
    marginHorizontal: 16,
    textAlign: "center",
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: "#2895FE",
  },
  title: {
    color: "#1F2937",
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 38,
    marginBottom: 8,
    textAlign: "center",
  },
})
