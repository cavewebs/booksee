import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text, ViewBookings } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"

import { Icon } from "app/components"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface BookViewScreenProps extends AppStackScreenProps<"BookView"> {}

export const BookViewScreen: FC<BookViewScreenProps> = observer(function BookViewScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen preset="scroll" contentContainerStyle={screenContentContainer}>
      <Header title="Booking Details" leftIcon="back" onLeftPress={() => navigation.goBack()} />

      <ViewBookings
        services="Haircut"
        min="30 minutes"
        people="2 People"
        date="27.01.23"
        hour="4:30PM"
        cancelDate="27.01.23"
        paymentStatus="Paid"
        amount="$ 50"
        name="Anita Joseph"
        address="24 Montgomery Road, New York"
        isCancelled={false}
        status={false}
        isView
      />
    </Screen>
  )
})
