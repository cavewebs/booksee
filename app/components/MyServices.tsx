import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, StyleSheet, ImageRequireSource } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text, AutoImage } from "app/components"
import { Icon } from "app/components"

export interface MyServicesProps extends ServiceProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

interface ServiceProps {
  headerText: string
  price: string
  time: string
  status: string
  serviceImg: ImageRequireSource
}

/**
 * Describe your component here
 */
export const MyServices = observer(function MyServices(props: MyServicesProps) {
  const { style } = props

  return (
    <View style={styles.containerStyle}>
      <View>
        <AutoImage source={props.serviceImg} style={{ width: 74, height: 70 }} />
      </View>

      <View>
        <Text preset="bold" text={props.headerText} style={styles.headerText} />
        <View style={styles.mildSpacing}>
          <View style={styles.serviceTextContainer}>
            <Text preset="default" size="xxs" text={props.price} style={styles.timeTextStyle} />
          </View>
          <View style={styles.serviceTextContainer}>
            <Icon icon="HourGlass" />
            <Text preset="default" size="xxs" text={props.time} style={styles.timeTextStyle} />
          </View>
          <View style={styles.availableBg}>
            <Text
              preset="default"
              size="xxs"
              text={props.status}
              style={{ fontWeight: "500", color: "#22C55E " }}
            />
          </View>
        </View>
      </View>
      <Icon icon="caretRight" />
    </View>
  )
})

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    gap: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E1E1FE",
    borderStyle: "solid",
    marginBottom: 8,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 15,
    color: colors.text,
  },

  timeTextStyle: {
    fontWeight: "500",
    color: colors.palette.primary600,
  },

  mildSpacing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  serviceTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 16,
    backgroundColor: colors.palette.primary50,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },

  availableBg: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 16,
    backgroundColor: "#F0FDF4",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
})
