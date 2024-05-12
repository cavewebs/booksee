import * as React from "react"
import { StyleProp, ImageSourcePropType, View, ViewStyle, Image, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
// import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Icon, IconTypes } from "../Icon"

const image = require("../../../assets/images/reviewer.png")
export interface ReviewsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  icon?: IconTypes
  rating?: string
  review?: string
  image?: ImageSourcePropType
  reviewer?: string
}

/**
 * Describe your component here
 */
export const Reviews = observer(function Reviews(props: ReviewsProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <View style={styles.container}>
        <Icon icon="starFill" size={16} />
        <Text text="4.5"  size="md" weight="semiBold"/>
      </View>
      <Text text={`“Velios gave my father a haircut.He was thorough with his evaluation, kind and informative”`} style={styles.review}/>
      <View style={styles.container}>
        <Image source={image}/>
        <Text text="Moses Suez" size="md" weight="semiBold" />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
 container:{
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  review: {
    marginVertical: 10
  },
})
