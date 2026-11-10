// @ts-nocheck - preexisting UI type errors; tracked for a later pass
/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { Text } from "app/components/Text"
import { Icon } from "../Icon"
import { Button } from "../Button"
import { useNavigation } from "@react-navigation/native"

export interface ServicesCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  serviceDetails: ServiceDetails
}
interface ServiceDetails {
  serviceName: string
  icon: string
  serviceOfferings: [{
    categoryName: string
    icon: string, offerName: string, price: number, duration: number
  }]
}
/**
 * Describe your component here
 */
export const ServicesCard = observer(function ServicesCard(props: ServicesCardProps) {
  const { style, serviceDetails } = props
  const $styles = [$container, style]
  const navigation = useNavigation()
  console.log("SERVIC£S", serviceDetails)
  return (
    <View>
      {serviceDetails ? (
        serviceDetails.serviceOfferings.map((serviceDetail, index) => (
          <View key={index} style={$styles}>
            <View style={styles.containerStyle}>
              <Text text={serviceDetail.offerName} size="sm" weight="light" />
              <View style={styles.container}>
                <Icon icon="hourglass" size={12} />
                <Text text={serviceDetail.duration + " minutes"} size="xs" weight="medium" style={styles.textColor} />
              </View>
            </View>
            <View style={styles.containerStyle}>
              <View style={styles.container}>
                <Icon icon="pound" size={14} color={colors.tint} />
                <Text text={serviceDetail.price as unknown as string} size="sm" weight="medium" style={{ color: colors.text }} />
              </View>
              <Button
                text="Book"
                style={styles.button}
                textStyle={styles.buttonText}
                pressedStyle={styles.pressedButton}
                pressedTextStyle={styles.pressedButtonText}
                onPress={() => navigation.navigate("BookService", serviceDetail)}
              />
            </View>
          </View>
        ))
      ) : (
        <Text>No service details available</Text>
      )}
    </View>
  )
})



const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.palette.primary600,
    borderColor: colors.palette.primary600,
    borderRadius: 24,
    paddingVertical: 4,
    width: 93,
  },
  buttonText: {
    color: "#F5F5FF",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  containerStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: colors.palette.primary600,
  },

  textColor: {
    color: colors.palette.primary600,
  },
})
