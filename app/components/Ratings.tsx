import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text, Icon, ProgressBar } from "app/components"
import Moscoas from "../../assets/images/accept-mark.png"

const Mosco = require("assets/images/reviewer.png")

interface Review {
  isReview?: boolean
}

export interface RatingsProps extends Review {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Ratings = observer(function Ratings(props: RatingsProps) {
  const { style } = props

  return (
    <View>
      {props.isReview && (
        <Text preset="bold" text="Ratings and Reviews" style={{ marginBottom: 16 }} />
      )}
      <View style={{ marginBottom: 35 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <View style={styles.spaceItems}>
            <View style={styles.bookingIconText}>
              <Icon icon="stars" />
              <Text preset="default" text={`${i + 1}`} />
            </View>
            {/* <View style={styles.progressBar}></View> */}
            <ProgressBar progress={0.3} />
            <Text preset="default" text="20%" />
          </View>
        ))}
      </View>

      <View>
        {Array.from({ length: 3 }).map((_, i) => (
          <View style={{ flexDirection: "column", marginBottom: 25 }}>
            <View style={styles.bookingIconText}>
              <Icon icon="stars" />
              <Text text="4.5" />
            </View>
            <Text text="Velios gave my father a haircut.He was thorough with his evaluation, kind and informative" />
            <View style={styles.bookingIconText}>
              <View style={styles.userImg} >
                <Image source={Mosco} style={styles.userImg} />
              </View>
              <Text preset="bold" text="Moses Sauez" />
            </View>
          </View>
        ))}
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  userImg: { width: 34, height: 34, borderRadius: 100, marginVertical: 5 },
  spaceItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  progressBar: {
    width: 237,
    height: 8,
    backgroundColor: colors.tint,
  },

  bookingIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
})
