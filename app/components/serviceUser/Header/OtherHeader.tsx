import * as React from "react"
import { StyleProp, View, ViewStyle, StyleSheet, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
// import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Icon } from "app/components/Icon"
import { useNavigation } from "@react-navigation/native"
import { Header } from "app/components"


export interface OtherHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  pageTitle?: string
}

/**
 * Describe your component here
 */
export const OtherHeader = observer(function OtherHeader(props: OtherHeaderProps) {
  const { style, pageTitle } = props
  const $styles = [$container, style]
  const navigation = useNavigation()

  return (
    <Header
      title={pageTitle}
      leftIcon="back"
      onLeftPress={() => navigation.goBack()}
      style={{ height: 60 }}
      titleStyle={styles.text}
    />
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20
  },
  iconStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexShrink: 1,
    gap: 2,
    textAlign: "center",
  },
  text: {
    flex: 1,
    textAlign: "center",
  },
})
