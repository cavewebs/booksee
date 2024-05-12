import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, BackArrowHeader, Booking, Header } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { bookingsData } from "app/DummyData/BookingsData"
// import { useStores } from "app/models"

interface PendingBookingsScreenProps extends AppStackScreenProps<"PendingBookings"> {}

export const PendingBookingsScreen: FC<PendingBookingsScreenProps> = observer(
  function PendingBookingsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer}>
        <Header title="Pending Bookings" leftIcon="back" onLeftPress={() => navigation.goBack()} />
        <View>
          <Booking data={bookingsData.filter((data) => data.status === "Upcoming")} />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
