// @ts-nocheck - preexisting UI type errors; tracked for a later pass
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet, Pressable } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Screen,
  Text,
  AutoImage,
  Booking,
  Button,
  SectionText,
  PreviousWork,
  Ratings,
  BarCharts,
  BookingDataProps,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import HomeBanner from "assets/images/home-banner.png"

import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

import { colors } from "app/theme"
import { Icon } from "../../components/Icon"
import { bookingsData } from "app/DummyData/BookingsData"

interface HomeScreenProps extends AppStackScreenProps<"ServiceProviderHome"> {}

export const ServiceProviderHomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState<string>("All")
  const [dataToShow, setDataToShow] = useState<BookingDataProps[]>(bookingsData)

  const homeTab: string[] = ["All", "Upcoming", "Completed", "Cancelled"]

  const tabChanged = (index: number) => {
    setActiveTab(homeTab[index])
    if (homeTab[index] === "All") {
      setDataToShow(bookingsData)
    } else {
      setDataToShow(bookingsData.filter((data) => data.status === homeTab[index]))
    }
  }

  const goTo = (url) => {
    if (url) navigation.navigate(url)
  }

  return (
    <Screen preset="auto" contentContainerStyle={screenContentContainer} safeAreaEdges={["top"]}>
      <View style={styles.wideSpacing}>
        <Text preset="bold" text="Home" size="lg" />
        <View style={styles.spaceItems}>
          <Button
            onPress={() => navigation.navigate("SavedAddress")}
            LeftAccessory={(props) => <Icon icon="solarMapLinear" />}
          />

          <Button
            onPress={() => navigation.navigate("AllNotifications")}
            LeftAccessory={(props) => <Icon icon="bell" />}
          />
        </View>
      </View>
      <Pressable onPress={() => navigation.navigate("Earnings")}>
        <View style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
          <AutoImage source={HomeBanner} style={styles.bannerImg} />
        </View>
      </Pressable>
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
      <SectionText
        subheading="Pending Bookings"
        text="View All"
        onPress={() => goTo("ViewPendingBookings")}
      />
      <Booking data={bookingsData.filter((data) => data.status === "Upcoming")} />

      <SectionText subheading="Bookings" text="View All" onPress={() => goTo("Bookings")} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          borderRadius: 6,
          backgroundColor: colors.palette.primary50,
          gap: 8,
          padding: 4,
        }}
      >
        {homeTab.map((item, i) => (
          <Button
            key={i}
            onPress={() => tabChanged(i)}
            text={item}
            style={{
              borderRadius: 6,
              height: 44,
              backgroundColor: item === activeTab ? "#fff" : colors.palette.primary50,
            }}
          />
        ))}
      </View>
      <Booking data={dataToShow} />
      <SectionText subheading="Previous Work" text="View All" onPress={() => goTo("Bookings")} />
      <View style={{ marginBottom: 25 }}>
        <PreviousWork />
      </View>
      <Ratings isReview />
    </Screen>
  )
})

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },

  wideSpacing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topIconsStyles: {
    display: "flex",
    alignItems: "center",
    gap: 24,
  },

  spaceItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  bookingStyle: {
    padding: "16px 8px",
    border: `1px solid ${colors.palette.primary100}`,
  },
  bookingIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  gridContainer: {
    padding: 10,
  },

  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  bannerImg: {
    borderRadius: 20,
    height: 147,
    width: 343,
  },

  chartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})
