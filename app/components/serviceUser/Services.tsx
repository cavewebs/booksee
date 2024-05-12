import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Icon, IconTypes } from "../Icon"

export interface ServicesProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  icon?: IconTypes
  text?: string
  onPress?: () => void;
}


/**
 * Describe your component here
 */
export const Services = observer(function Services(props: ServicesProps) {
  const { style, icon, text, onPress, } = props
  const $styles = [$container, style]

  return (
    <TouchableOpacity onPress={() => {
      onPress && onPress();
    }}>
      <View style={$styles}>
        <Text style={$text} text={text} size="md" weight="semiBold" />
        <Icon icon={icon} size={56} />
      </View>
    </TouchableOpacity>
  )
})

const $container: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  gap: 10,
  height: 106.5,
  backgroundColor: colors.palette.primary600,
  borderRadius: 14,
  paddingVertical: 12,
  paddingLeft: 12,
  flex: 1,
  paddingRight: "auto",
  // paddingLeft: "auto"
  minWidth: "30%",
  // width: "auto"
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary50,
}
