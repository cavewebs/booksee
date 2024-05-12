import * as React from "react"
import { StyleProp, View, ViewStyle, StyleSheet, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { Text } from "app/components/Text"
import { TouchableOpacity } from "react-native-gesture-handler"

export interface PopularSearchesProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  text: string
  textFontWeight: "bold" | "normal" | "light" | "semiBold" | "medium"
}

/**
 * Describe your component here
 */
export const PopularSearches = observer(function PopularSearches(props: PopularSearchesProps) {
  const { style, textFontWeight, textStyle, text } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <TouchableOpacity>
        <View style={styles.textContainer}>
          <Text text={text} style={[styles.text, textStyle]} weight={textFontWeight} />
        </View>
      </TouchableOpacity>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  text: {
    color: colors.palette.primary600,
  },
  textContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.primary50,
    borderRadius: 16,
    margin: 4,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6,
  },
})
