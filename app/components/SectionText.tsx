import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, StyleSheet, Pressable } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"

export interface SectionTextProps extends SectionProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

interface SectionProps {
  subheading: string
  text: string
  onPress?: () => void
}
/**
 * Describe your component here
 */
export const SectionText = observer(function SectionText(props: SectionTextProps) {
  const { style } = props

  // const $styles = [$container, style]

  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.sectionText}>
        <Text
          preset="bold"
          size="sm"
          text={props.subheading}
          style={{ fontWeight: "600", color: "#101828" }}
        />
        <Text
          preset="default"
          size="xs"
          text={props.text}
          style={{ fontWeight: "500", color: colors.palette.primary600 }}
        />
      </View>
    </Pressable>
  )
})

const styles = StyleSheet.create({
  sectionText: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 30,
  },
})
