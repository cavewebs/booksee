import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { Text } from "app/components/Text"
import { Icon, IconTypes } from "../Icon"
import Checkbox from "expo-checkbox"
import { Pressable } from "@gluestack-ui/themed"

export interface ProfileContentProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  leftText: string
  rightText?: string
  rightIcon?: IconTypes
  onPress?: ()=>void
}

/**
 * Describe your component here
 */
export const ProfileContent = observer(function ProfileContent(props: ProfileContentProps) {
  const { style, leftText, rightText, rightIcon, onPress } = props
  const $styles = [$container, style]

  return (
    <Pressable onPress={()=>onPress()} >
    <View style={$styles} >
      <View style={styles.container}>
        <Text text={leftText} weight="normal" size="sm" />

        <View>
          {leftText && (
            <Text text={rightText} weight="semiBold" size="sm"  />
          )}
          {rightIcon && <Icon icon={rightIcon} size={16} />}
          {!rightIcon && !leftText && <Checkbox />}
        </View>
      </View>
    </View>
    </Pressable>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: colors.palette.neutral200,
    borderBottomWidth: .5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 10
  },

})
