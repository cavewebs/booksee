import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, StyleSheet, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "app/components/Text"
// import Checkbox from "expo-checkbox"
import { Ionicons } from '@expo/vector-icons';
import { colors } from "app/theme";

export interface CheckBoxProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  checkboxSelectedStyle?: StyleProp<ViewStyle>
  checkboxStyle?: StyleProp<ViewStyle>
  label?: string
  onChange?: (value: boolean, id: string) => void
  disabled?: boolean,
  value?: boolean,
  id?: string
}

/**
 * Describe your component here
 */
export const CustomCheckBox = observer(function CustomCheckBox(props: CheckBoxProps) {

  const { style, label, id, checkboxSelectedStyle, checkboxStyle, value, onChange, disabled = false } = props

  const toggleCheckbox = () => {
    if (!disabled) {
      onChange && onChange(!value, id);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={toggleCheckbox}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.label, disabled && { color: '#999999' }]}>{label}</Text>
      <View style={styles.checkbox}>
        {value ? (
          <Ionicons name="checkbox-outline" size={24} color={colors.tint} style={checkboxSelectedStyle} />
        ) : (
          <Ionicons name="square-outline" size={24} style={checkboxStyle}  />
        )}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  label: {
    fontSize: 16,
  },
});
