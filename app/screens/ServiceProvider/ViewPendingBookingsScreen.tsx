import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text, ViewBookings } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ViewPendingBookingsScreenProps extends AppStackScreenProps<"ViewPendingBookings"> { }

export const ViewPendingBookingsScreen: FC<ViewPendingBookingsScreenProps> = observer(
  function ViewPendingBookingsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()

    return (
      <Screen
        style={$root}
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        {/* use what Header if you like or the Text if it suits better don't forget to delete the unused import at the end */}
        {/* <Text preset="heading" text="notifications" /> */}
        < Header title="Booking View" leftIcon="back" onLeftPress={() => navigation.goBack()} />
        < ViewBookings
          services="Haircut"
          min="60 minutes"
          people="2 people"
          date="21.01.23"
          hour="4PM"
          paymentStatus="Refunded"
          amount="$500"
          name="Anita Joseph"
          address="24 Montgomery Road, New York"
          isCancelled
          status={false}
          isView={false}
        />
      </Screen >
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
