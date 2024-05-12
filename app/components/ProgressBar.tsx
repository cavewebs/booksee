import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import * as Progress from "react-native-progress"

interface Progress {
  progress: number
}

export interface ProgressBarProps extends Progress {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ProgressBar = observer(function ProgressBar(props: ProgressBarProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <Progress.Bar progress={props.progress} width={230} color={colors.palette.primary600} />
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
