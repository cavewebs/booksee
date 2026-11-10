// @ts-nocheck - preexisting UI type errors; tracked for a later pass
/* eslint-disable react-native/no-color-literals */
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BaseModal, Button, CartCard, Header, Icon, MainHeader, Screen, ServiceProviderCard, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors, spacing } from "app/theme"
import { useNavigation } from "@react-navigation/native"
import { SavedCardsScreen } from "./Cart/SavedCardsScreen"
// import { useStores } from "app/models"

const image = require("../../../assets/images/theNext.png")

interface CartScreenProps extends AppStackScreenProps<"ServiceUserCart"> { }

export const ServiceUserCartScreen: FC<CartScreenProps> = observer(function CartScreen(props) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // const { params } = props.route.params || {}; // Perform null-checking

  // Pull in navigation via hook
  // console.log("CART", params)
  const navigation = useNavigation()
  const onNotificationPress = () => {
    navigation.navigate("AllNotifications")
  }
  const [showPayment, setShowPayment] = useState(false)
  return (
    <Screen style={$root} preset="auto" contentContainerStyle={screenContentContainer} >
      <Header title="Cart" rightIcon="notification" onRightPress={onNotificationPress} />
      <ServiceProviderCard
        views="5123"
        rating="4.5"
        name="The Next Barbing Salon"
        location="25 Montgomery Road, New York"
        image={image}
      />
      <View>
        <Text text="Home Service" />
        <View style={styles.container}>
          <Icon icon="location" size={12} />
          <Text text="24 Montgomery Road, New York" size="sm" weight="medium" />
        </View>
      </View>
      <View style={styles.pricingContainer}>
        <Text text="5 people" size="md" weight="light" />
        <View style={styles.container}>
          <Icon icon="hourglass" size={12} />
          <Text text="2 hours" size="sm" weight="medium" style={styles.textColor} />
        </View>
      </View>
      <View style={styles.containerStyle}>
        <CartCard />
      </View>
      <View style={styles.totalContainer}>
        <View>
          <Text text="Total Price" weight="semiBold" />
          <Text text="(5 Persons)" size="xs" />
        </View>
        <Text text="£500" weight="bold" />
      </View>
      <View style={styles.buttonContainer}>
        <Button preset="primary" text="Continue" onPress={() => navigation.navigate("ConfirmPayment")} />
      </View>

      <BaseModal isOpen={showPayment} content={"hello guys"} />

    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: spacing.md,
    paddingBottom: 40
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  containerStyle: {
    marginVertical: 20,
    borderColor: colors.palette.neutral200,
    borderWidth: 2,
    padding: 5
  },
  pricingContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15
  },
  totalContainer: {
    backgroundColor: "#F9F9F9",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    padding: 20,
    marginVertical: 15
  },
  textColor: {
    color: colors.palette.primary600,
  },
})
