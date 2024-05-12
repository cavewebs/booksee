import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, StyleSheet, Pressable } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Icon } from "./Icon"
import { EmptyState } from "./EmptyState"
import { useNavigation } from "@react-navigation/native"
import { AutoImage } from "./AutoImage"

export interface BookingProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  data: BookingDataProps[]
}
export interface BookingDataProps {
  userImg?: string
  name?: string
  price?: string
  service?: string
  date?: string
  timeLine?: "BiClock" | "HourGlass"
  time?: string
  status?: string
}

/**
 * Describe your component here
 */
export const Booking = observer(function Booking(props: BookingProps) {
  const { style, data } = props
  const navigation = useNavigation()
  return (
    <>
      {data && data.length > 0 ? (
        data.map((booking, index) => (
          <View style={[styles.bookingContainer, style]} key={"k46" + index}>
            <View style={styles.bookingStyle} key={index + booking.time}>
              <Pressable onPress={() => navigation.navigate("BookView")}>
                <View style={styles.spaceItems}>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <AutoImage source={{ uri: booking.userImg }} style={styles.img} />
                    <Text
                      preset="default"
                      size="xs"
                      text={booking.name}
                      style={styles.priceTextStyle}
                    />
                  </View>
                  <Text
                    preset="default"
                    size="xs"
                    text={booking.price}
                    style={styles.priceTextStyle}
                  />
                </View>
                <View style={[styles.spaceItems, styles.bottomMargin]}>
                  <View style={[styles.spaceMargin, styles.bookingIconText]}>
                    <Text
                      preset="default"
                      size="xxs"
                      text={booking.service}
                      style={styles.timeTextStyle}
                    />
                  </View>
                  <View style={styles.bookingIconText}>
                    <Icon icon="Calendar" size={14} />
                    <Text
                      preset="default"
                      size="xxs"
                      text={booking.date}
                      style={styles.timeTextStyle}
                    />
                  </View>

                  <View style={styles.bookingIconText}>
                    <Icon icon={booking.timeLine} size={12} />
                    <Text
                      preset="default"
                      size="xxs"
                      text={booking.service}
                      style={styles.timeTextStyle}
                    />
                  </View>
                </View>
              </Pressable>

              {booking.status === "Upcoming" && (
                <View style={styles.spaceItems}>
                  <View style={styles.declineBg}>
                    <Icon icon="x" size={16} />
                    <Text
                      preset="default"
                      size="xxs"
                      text="Decline"
                      style={{ fontWeight: "500", color: "#EF4444 " }}
                    />
                  </View>
                  <View style={styles.acceptBg}>
                    <Icon icon="check" size={16} />
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
          </View>
        ))
      ) : (
        <View style={[styles.bookingContainer, style]}>
          <EmptyState heading="Nothing to show" content="There is nothing to see here" />
        </View>
      )}
    </>
  )
})

const styles = StyleSheet.create({
  acceptBg: {
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  bookingContainer: {
    alignContent: "center",
    borderColor: "#E1E1FE",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 16,
  },

  bookingIconText: {
    alignItems: "center",
    backgroundColor: colors.palette.primary50,
    borderRadius: 16,
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    paddingBottom: 4,
    paddingHorizontal: 8,
    paddingTop: 4,
  },

  bookingStyle: {
    paddingBottom: 4,
    paddingHorizontal: 8,
    paddingTop: 4,
    // border: `1px solid ${colors.palette.primary100}`,
  },

  declineBg: {
    alignItems: "center",
    backgroundColor: "#FEF2F2",
    borderRadius: 16,
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  iconChips: {
    alignItems: "center",
    backgroundColor: colors.palette.primary50,
    borderRadius: 16,
    justifyContent: "center",
    paddingBottom: 4,
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },

  priceTextStyle: {
    color: colors.text,
    fontWeight: "500",
  },

  spaceItems: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  spaceMargin: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  timeTextStyle: {
    color: colors.palette.primary600,
    fontWeight: "500",
  },

  bottomMargin: {
    marginBottom: 16,
    marginTop: 8,
  },
})
