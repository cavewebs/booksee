import * as React from "react"
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { Text } from "app/components/Text"
import { Icon } from "app/components/Icon"

export interface MainHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  pageTitle?: string
  icon1?: string
  icon2?: string
  icon3?: string
  onNamePress?: () => void
  onMapPress?: () => void
  onNotificationPress?: () => void
}

/**
 * Describe your component here
 */
export const MainHeader = observer(function MainHeader(props: MainHeaderProps) {
  const { onNamePress, onNotificationPress, onMapPress, style, pageTitle, icon1, icon2, icon3 } = props
  const $styles = [$container, style]

  return (
    <View style={$styles} >
      <View style={styles.containerStyle}>
        <Pressable onPress={() => onNamePress()} >
          <View style={styles.TextArea} >
            <Text text={pageTitle} weight="bold" style={styles.headerText} />
            {icon1 && <Icon icon={icon1} size={24} />}
          </View>
        </Pressable>
        <View style={styles.TextArea}>
          {icon2 && (
            <View style={styles.iconContainer}>
              <Icon icon={icon2} size={24} onPress={() => onMapPress()} />
            </View>)}
          {icon3 && (
            <View style={styles.iconContainer}>
              <Icon icon={icon3} size={24} onPress={() => onNotificationPress(
                
              )} />
            </View>
          )}
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
  TextArea: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexShrink: 1,
    gap: 2,
  },
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
  },
  iconContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.primary50,
    borderRadius: 40,
    display: "flex",
    height: 40,
    justifyContent: "center",
    padding: 8,
    width: 40,
  },
})
