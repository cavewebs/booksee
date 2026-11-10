// @ts-nocheck - preexisting UI type errors; tracked for a later pass
/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import {
  StyleProp,
  ImageSourcePropType,
  View,
  ViewStyle,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { observer } from "mobx-react-lite"
// import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Icon, IconTypes } from "../Icon"
import { colors } from "app/theme"

export interface BookingCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  image?: ImageSourcePropType
  textTopLeft?: string
  textTopRight?: string
  midIconLeft?: IconTypes
  midTextLeft?: string
  midIconRight?: IconTypes
  midTextRight?: string
  rating?: string
  bottomIconLeft?: IconTypes
  bottomTextLeft?: string
  bottomIconRight: IconTypes
  bottomTextRight?: string
  navigate?: () => void
}

/**
 * Describe your component here
 */
export const BookingCard = observer(function BookingCard(props: BookingCardProps) {
  const {
    style,
    image,
    textTopLeft,
    textTopRight,
    midIconLeft,
    midTextLeft,
    midIconRight,
    midTextRight,
    rating,
    bottomIconLeft,
    bottomTextLeft,
    bottomIconRight,
    bottomTextRight,
    navigate,
  } = props
  const $styles = [$container, style]

  return (
    <TouchableOpacity
      onPress={() => {
        navigate && navigate()
      }}
    >
      <View style={$styles}>
        <Image source={image} style={styles.image} />
        <View style={styles.containerRight}>
          <View style={styles.containerStyle}>
            <Text text={textTopLeft} weight="medium" size="sm" />
            {textTopRight &&  <View style={[styles.itemContainer, textTopRight === 'Completed' ? styles.completed : textTopRight === 'Cancelled' ? styles.cancelled : styles.onHold]}>
           <Text text={textTopRight} weight="sm" size="xxs" style={textTopRight === 'Completed' ? styles.completeText : textTopRight === 'Cancelled' ? styles.cancelledText : styles.onHold} />
            </View>}
          </View>
          <View style={styles.containerStyle}>
            <View style={styles.rating}>
              {midIconLeft && <Icon icon={midIconLeft} size={12} />}
              <Text text={midTextLeft} size={"xxs"} />
            </View>
            <View style={styles.rating}>
              <Icon icon={midIconRight} size={12} />
              <Text text={midTextRight} size={"xxs"} />
            </View>
          </View>
          <View style={styles.containerStyle}>
            <View style={styles.rating}>
              <Text text={rating} size="xxs" />
              <Icon icon={bottomIconLeft} size={12} />
              <Text text={bottomTextLeft} size="xs" style={styles.bottomTextColor} />
            </View>
            <View style={styles.rating}>
              <Icon icon={bottomIconRight} size={12} />
              <Text text={bottomTextRight} size={"xs"} style={styles.bottomTextColor} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
})

const $container: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  gap: 10,
  // width: "100%",
  borderWidth: 0.5,
  borderRadius: 16,
  padding: 8,
  borderColor: "#D1D5DB",
  alignItems: "center",
  marginBottom: 10,
}

// const $text: TextStyle = {
//   fontFamily: typography.primary.normal,
//   fontSize: 14,
//   color: colors.palette.primary500,
// }

const styles = StyleSheet.create({
  bottomTextColor: {
    color: colors.palette.primary600,
  },
  cancelled: {
    backgroundColor: "#FEF2F2",
  },
  cancelledText:{
    color: "#EF4444"
  },
  completeText:{
    color: "#22C55E"
  },
  completed: {
    backgroundColor: "#F0FDF4",
  },
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
  image: {
    borderRadius: 16,
    flexShrink: 0,
    height: 82,
    width: 80,
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
  name: {
    marginBottom: 5,
  },
  onHold: {
    backgroundColor: "#F3F4F6",
  },
  rating: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexShrink: 1,
    gap: 2,
  },
})
