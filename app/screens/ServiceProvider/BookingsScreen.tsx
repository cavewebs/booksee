/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Screen,
  Text,
  Icon,
  TextField,
  SectionText,
  Booking,
  Button,
  BookingDataProps,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
import { bookingsData } from "app/DummyData/BookingsData"

import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface BookingsScreenProps extends AppStackScreenProps<"ServiceProviderBookings"> { }

export const ServiceProviderBookingsScreen: FC<BookingsScreenProps> = observer(
  function BookingsScreen() {
    const navigation = useNavigation()
    const [searchItem, setSearchItem] = useState<string>("")
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
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
    const searchBookings = () => {
      setDataToShow(bookingsData.filter((data) => data.name.includes(searchItem)))
    }

    return (
      <Screen
        preset="scroll"
        safeAreaEdges={["top", "bottom"]}
        contentContainerStyle={screenContentContainer}
      >
        <View>
          <View style={styles.wideSpacing}>
            <Text
              preset="bold"
              size="md"
              text="Bookings"
              style={{ color: colors.palette.neutral900 }}
            />
            <Icon icon="bookingIcon" />
          </View>
          <TextField
            value={searchItem}
            onChangeText={(value) => setSearchItem(value)}
            RightAccessory={() => <Icon icon="searchIcon" style={{ marginHorizontal: 5 }} onPress={() => searchBookings()} />}
            onBlur={() => searchBookings()}
            placeholder="Search"
            inputWrapperStyle={styles.inputWrapperStyle}
          />
          <>
            {!searchItem && (
              <>
                <SectionText
                  subheading="Pending Bookings"
                  text="View All"
                  onPress={() => navigation.navigate("ViewPendingBookings")}
                />
                <Booking data={bookingsData.filter((data) => data.status === "Upcoming")} />
              </>
            )}
          </>
          <SectionText
            subheading="Bookings"
            text="View All"
            onPress={() => navigation.navigate("ViewCurrentBookings")}
          />
          <View style={styles.tabs}>
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
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 6,
    backgroundColor: colors.palette.primary50,
    gap: 8,
    padding: 4,
  },
  wideSpacing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  inputWrapperStyle: {
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
  },

  buttonWrapper: {
    paddingTop: 8,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    gap: 8,
    height: 32,
  },
})
