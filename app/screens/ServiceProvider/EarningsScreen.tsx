import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Screen,
  Text,
  BackArrowHeader,
  Icon,
  AutoImage,
  Button,
  BarCharts,
  SectionText,
  HeaderWithBackButton,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import HomeBanner from "assets/images/home-banner.png"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface EarningsScreenProps extends AppStackScreenProps<"Earnings"> {}

export const EarningsScreen: FC<EarningsScreenProps> = observer(function EarningsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen
      preset="scroll"
      contentContainerStyle={screenContentContainer}
      safeAreaEdges={["bottom"]}
    >
      <View>
        <HeaderWithBackButton title="Earnings" />

        <View style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
          <AutoImage source={HomeBanner} style={styles.bannerImg} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Text preset="bold" size="xs" text="Income" />
          <View style={styles.bookingIconText}>
            <Text
              preset="default"
              size="xxs"
              text="Last 7 days"
              style={{ fontWeight: "400", color: colors.palette.neutral600 }}
            />

            <Icon icon="carretdown" />
          </View>
        </View>

        <View style={styles.chartContainer}>
          <BarCharts />
        </View>

        <SectionText subheading="Transactions" text="View All" />
        <View style={styles.bottomContainer}>
          <View style={styles.wildSpacing}>
            <Text size="xs" text="Recieved" style={styles.bottomText} />
            <Text size="xs" text="$500" style={styles.amountText} />
          </View>

          <View style={styles.wildSpacing}>
            <Text size="xs" text="Booking ID" style={styles.bottomText} />
            <Text size="xs" text="91268469" style={styles.amountText} />
          </View>
          <View style={styles.mildSpacing}>
            <Text size="xs" text="04.09.2023" style={styles.amountText} />
            <Text size="xs" text="4.00PM" style={styles.amountText} />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.wildSpacing}>
            <Text size="xs" text="Recieved" style={styles.bottomText} />
            <Text size="xs" text="$500" style={styles.amountText} />
          </View>

          <View style={styles.wildSpacing}>
            <Text size="xs" text="Booking ID" style={styles.bottomText} />
            <Text size="xs" text="91268469" style={styles.amountText} />
          </View>
          <View style={styles.mildSpacing}>
            <Text size="xs" text="04.09.2023" style={styles.amountText} />
            <Text size="xs" text="4.00PM" style={styles.amountText} />
          </View>
        </View>
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  bannerImg: {
    borderRadius: 20,
    height: 147,
    width: 343,
  },

  bookingIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },

  chartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  wildSpacing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  mildSpacing: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  bottomText: {
    fontWeight: "400",
    color: "#667085",
  },

  amountText: {
    fontWeight: "500",
    color: colors.text,
  },

  bottomContainer: {
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: "#F9F9F9",
    marginBottom: 16,
  },
})
