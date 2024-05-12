import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text, AutoImage, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import enableNotification from "assets/images/notbro.png"
import { colors } from "app/theme"
// import { useStores } from "app/models"

interface EnableNotificationsScreenProps extends AppStackScreenProps<"EnableNotifications"> {}

export const EnableNotificationsScreen: FC<EnableNotificationsScreenProps> = observer(
  function EnableNotificationsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()

    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <View style={styles.imageWrapper}>
          <AutoImage source={enableNotification} style={{ width: 240, height: 233.5 }} />
        </View>

        <Text preset="bold" size="xl" text="Enable Notifications" style={styles.headerText} />
        <Text
          preset="default"
          size="xs"
          weight="normal"
          text="Booksee would like to send you Notifications to keep you up to date on your bookings"
          style={styles.notificatinInfo}
        />

        <Button preset="primary" text="Turn on Notifications" />
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  notificatinInfo: {
    color: colors.palette.neutral500,
    marginBottom: 143,
    marginTop: 8,
    textAlign: "center",
  },
  headerText: {
    color: colors.text,
    textAlign: "center",
  },

  imageWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 140,
    marginBottom: 35,
  },
})
