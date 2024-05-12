/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import {Picker} from "@react-native-picker/picker"
import { Text } from "./Text"
// import { colors, typography } from "app/theme"
// import { Text } from "app/components/Text"

export interface OptionPickerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const OptionPicker = observer(function OptionPicker(props: OptionPickerProps) {
  const [selectedValue, setSelectedValue] = React.useState("option1")
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <Text text="Select reason" size="sm" weight="medium"/>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

// const $text: TextStyle = {
//   fontFamily: typography.primary.normal,
//   fontSize: 14,
//   color: colors.palette.primary500,
// }

const styles = StyleSheet.create({
  pickerContainer:{
    borderColor: "#D1D5DB",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
  }
})
