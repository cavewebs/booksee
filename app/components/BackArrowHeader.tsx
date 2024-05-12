import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text, Icon, Button } from "app/components"

export interface BackArrowHeaderProps extends ArrowProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */

interface ArrowProps {
  header: string
}
export const BackArrowHeader = observer(function BackArrowHeader(props: BackArrowHeaderProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Button
          // onPress={() => Alert.alert("pressed")}
          LeftAccessory={(props) => <Icon icon="back" />}
        />
        <View style={{ flex: 1 }}>
          <Text
            preset="subheading"
            size="lg"
            text={props.header}
            style={{ textAlign: "center", marginRight: 40 }}
          />
        </View>
      </View>
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
