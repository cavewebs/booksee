/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TouchableOpacity, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  BookingCard,
  Button,
  Header,
  HorizontalTabs,
  ImageUploader,
  MainHeader,
  Screen,
  Search,
  SectionHeader,
  TextField,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import {
  UpcomingBookingData,
  bookingTabs,
} from "app/components/serviceUser/DummyData/BookingScreenData"
import { useNavigation } from "@react-navigation/native"
import { colors } from "app/theme"
// import { useStores } from "app/models"

interface BookingsScreenProps extends AppStackScreenProps<"ServiceUserBookings"> {}

export const ServiceUserBookingsScreen: FC<BookingsScreenProps> = observer(
  function BookingsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    const [activeTab, setActiveTab] = React.useState(0)

    // Pull in navigation via hook
    const navigation = useNavigation()
    const onNotificationPress = () => {
      navigation.navigate("AllNotifications")
    }
    return (
      <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer}>
        <Header
          titleMode="flex"
          titleContainerStyle={{ alignItems: "flex-start" }}
          title="Bookings"
          rightIcon="notification"
          onRightPress={onNotificationPress}
        />
        <Search />
        <HorizontalTabs tabs={bookingTabs} setActiveTab={setActiveTab} activeTab={activeTab} />
        <View>
          <SectionHeader leftText="Upcoming Bookings" />
        </View>
        {UpcomingBookingData.filter((data) => data.status === bookingTabs[activeTab]).map(
          (filteredData, index) => (
            <BookingCard
              key={index}
              image={filteredData.image}
              textTopLeft={filteredData.textTopLeft}
              textTopRight={filteredData.textTopRight}
              midTextLeft={filteredData.midTextLeft}
              midIconRight={filteredData.midIconRight}
              midTextRight={filteredData.midTextRight}
              bottomIconLeft={filteredData.bottomIconLeft}
              bottomTextLeft={filteredData.bottomTextLeft}
              bottomIconRight={filteredData.bottomIconRight}
              bottomTextRight={filteredData.bottomTextRight}
              navigate={() => navigation.navigate("ViewBookings", filteredData)}
            />
          ),
        )}
        {UpcomingBookingData.filter((data) => data.status === bookingTabs[activeTab]).every(
          (booking) => booking.status === "Cancelled" || booking.status === "Previous",
        ) && (
          <View>
            <SectionHeader leftText="Add a photo and video" />
            <ImageUploader dontShowText/>
            <TextField
        label="Description"
        keyboardType="default"
        style={styles.textField}
        inputWrapperStyle={styles.textFieldContainer}
        multiline
        placeholder="Type here..."
      />
       <Button
        text="Submit"
        style={styles.button}
        textStyle={styles.buttonText}
        pressedStyle={styles.pressedButton}
        pressedTextStyle={styles.pressedButtonText}
        onPress={()=>navigation.goBack()}
      />
          </View>
        )}
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.palette.primary600,
    borderColor: colors.palette.primary600,
    borderRadius: 27.2,
    height: 48,
    justifyContent: "center",
    marginBottom: 20,
    width: "100%",
  },
  buttonText: {
    color: "#F5F5FF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: colors.palette.primary600,
  },
  textField: {
    backgroundColor: colors.palette.neutral100,
  },
  textFieldContainer: {
    backgroundColor: colors.palette.neutral100,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
  textFieldMessage: {
    color: "#667085",
  },

})
