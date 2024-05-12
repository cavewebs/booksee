import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Icon, AutoImage, BackArrowHeader, Button } from "app/components"
import profilePics from "assets/images/profileImg.png"

export interface ViewBookingsProps extends BookingProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
interface BookingProps {
  services: string
  min: string
  people: string
  date: string
  hour: string
  cancelDate?: string
  paymentStatus: string
  amount: string
  name: string
  address: string
  isCancelled: boolean
  status: boolean
  isView: boolean
}

export const ViewBookings = observer(function ViewBookings(props: ViewBookingsProps) {
  return (
    <View>
      <View style={styles.centerAlign}>
        <AutoImage source={profilePics} style={{ width: 80, height: 80 }} />

        <Button
          // onPress={() => Alert.alert("pressed")}
          LeftAccessory={(props) => <Icon icon="phone" />}
        />
        <Text
          preset="default"
          size="sm"
          text={props.name}
          style={{ fontWeight: "600", textAlign: "center", color: colors.text }}
        />

        <View style={styles.mildSpace}>
          <Icon icon="pin" />
          <Text
            preset="default"
            size="xs"
            text={props.address}
            style={{ fontWeight: "400", textAlign: "center", color: colors.text }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 34,
        }}
      >
        <Text preset="bold" size="sm" text={props.services} style={{ color: colors.text }} />

        {props.isCancelled && (
          <View style={styles.cancelWrapper}>
            <Text
              preset="default"
              size="xxs"
              text="Cancelled"
              style={{ fontWeight: "500", color: "#EF4444" }}
            />
          </View>
        )}

        {props.status && (
          <View style={styles.mildSpace}>
            <View style={styles.declineBg}>
              <Icon icon="x" size={14} />
              <Text
                preset="default"
                size="xxs"
                text="Decline"
                style={{ fontWeight: "500", color: "#EF4444 " }}
              />
            </View>
            <View style={styles.acceptBg}>
              <Icon icon="check" size={14} />
              <Text
                preset="default"
                size="xxs"
                text="Accept"
                style={{ fontWeight: "500", color: "#22C55E " }}
              />
            </View>
          </View>
        )}
      </View>

      <View style={{ marginTop: 16 }}>
        <View style={styles.wideSpace}>
          <View style={styles.bookIconText}>
            <Icon icon="HourGlass" />
            <Text preset="default" size="xxs" text={props.min} style={styles.bookText} />
          </View>
          <View style={styles.bookIconText}>
            <Text preset="default" size="xxs" text={props.people} style={styles.bookText} />
          </View>
        </View>

        <View style={styles.wideSpace}>
          <View style={styles.bookIconText}>
            <Icon icon="Calendar" size={16} />
            <Text preset="default" size="xxs" text={props.date} style={styles.bookText} />
          </View>

          <View style={styles.bookIconText}>
            <Icon icon="BiClock" />
            <Text preset="default" size="xxs" text={props.hour} style={styles.bookText} />
          </View>
        </View>
      </View>
      {props.isView && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Text
            preset="default"
            size="sm"
            style={{ fontWeight: "600", color: colors.palette.neutral500 }}
            text="Cancelled On"
          />

          <Text
            preset="default"
            size="xs"
            style={{ fontWeight: "500", color: colors.palette.neutral500 }}
            text={props.cancelDate}
          />
        </View>
      )}

      <View style={styles.wideSpace}>
        <Text preset="bold" size="sm" text="$500" style={{ color: colors.text }} />
        <View style={styles.acceptBg}>
          <Text
            preset="default"
            size="xxs"
            text={props.paymentStatus}
            style={{ fontWeight: "500", color: "#22C55E " }}
          />
        </View>
      </View>
      {props.isView && (
        <View>
          <Text
            preset="bold"
            size="sm"
            text="Reason for Cancellation"
            style={{ color: colors.palette.neutral800 }}
          />
          <Text
            preset="default"
            size="xs"
            text="Bad weather"
            style={{ fontWeight: "400", color: colors.palette.neutral500 }}
          />
        </View>
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  bookText: {
    fontWeight: "500",
    color: colors.palette.primary600,
  },

  wideSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  mildSpace: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bookIconText: {
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

  acceptBg: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 16,
    backgroundColor: "#F0FDF4",
    paddingVertical: 4,
    paddingHorizontal: 6,
  },

  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  cancelWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#FEF2F2",
    borderRadius: 16,
  },

  declineBg: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 16,
    backgroundColor: "#FEF2F2",
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
})
