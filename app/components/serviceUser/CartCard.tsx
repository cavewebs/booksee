import * as React from "react"
import { StyleProp, Image, ImageSourcePropType, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Icon } from "../Icon"

const image = require("../../../assets/images/nailsPaint.png")
export interface CartCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  image?: ImageSourcePropType
  textTopLeft?: string
  textTopRight?: string
  midTextLeft?: string
  midTextRight?: string
  rating?: string
  bottomTextLeft?: string
  bottomTextRight?: string
}

/**
 * Describe your component here
 */
export const CartCard = observer(function CartCard(props: CartCardProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View>
      <View style={$styles}>
        <View style={styles.iconContainer}>
          <Icon icon="remove" size={24} />
        </View>
        
        <View style={$styledContainer}>
          <Image source={image} style={styles.image} />
          <View style={styles.containerRight}>
            <View style={styles.containerStyle}>
              <Text text={"Haircut"} weight="medium" size="sm" />
              <Text text={"£500"} weight="medium" size="sm" />
            </View>
            <View style={styles.containerStyle}>
              <Text text={"The Next Barbing Salon"} size={"xxs"} />
            </View>
            <View style={styles.containerStyle}>
              <View style={styles.rating}>
                <Icon icon="clock" size={12} />
                <Text text={"4:00PM"} size="xs" style={styles.bottomTextColor} />
              </View>
              <View style={styles.rating}>
                <Icon icon="calendarBlue" size={12} />
                <Text text={"27.01.23"} size={"xs"} style={styles.bottomTextColor} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerStyle}>
        <Text text="5 people" weight="medium" size="sm" />
        <Text text="2 hours" weight="medium" size="sm" />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  display: "flex",
  gap: 10,
  width: "100%",
  borderBottomWidth: 0.5,
  padding: 8,
  borderColor: "#D1D5DB",
  alignItems: "center",
  marginBottom: 10,
}
const $styledContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  gap: 10,
  width: "100%",
  padding: 8,
  alignItems: "center",
  marginBottom: 10,
}

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  containerRight: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: 82,
    justifyContent: "space-between",
  },
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  image: {
    borderRadius: 16,
    flexShrink: 0,
    height: 82,
    width: 80,
  },
  rating: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexShrink: 1,
    gap: 2,
  },
})
