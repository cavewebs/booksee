/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BookingCard, Header, Screen, Search, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import MapView from "react-native-maps"
import { FlatList } from "react-native"
import { UpcomingBookingData } from "app/components/serviceUser/DummyData/BookingScreenData"
import { bookingSearchResultData } from "app/components/serviceUser/DummyData/HomeScreenData"

// import { useStores } from "app/models"

interface MapSearchScreenProps extends AppStackScreenProps<"MapSearch"> { }

export const MapSearchScreen: FC<MapSearchScreenProps> = observer(function MapSearchScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <Screen style={$root}>
      {/* use what Header if you like or the Text if it suits better don't forget to delete the unused import at the end */}
      {/* <Text preset="heading" text="notifications" /> */}
      <MapView style={styles.map} />
      <View style={styles.overlayContainer}>
        <Header
          title="Search"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />

        <Search style={styles.search} />
      </View>
      <FlatList
        style={styles.overlayContainerBottom}
        horizontal
        data={bookingSearchResultData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <BookingCard
            image={item.image}
            key={index}
            textTopLeft={item.textTopLeft}
            midIconLeft={item.midLeftIcon}
            midTextLeft={item.midTextLeft}
            midTextRight={item.midTextRight}
            rating={item.rating}
            bottomIconLeft={item.bottomIconLeft}
            bottomTextLeft={item.bottomTextLeft}
            bottomIconRight={item.bottomIconRight}
            bottomTextRight={item.bottomTextRight}
            style={styles.bookingCarsContainer}
            navigate={() => navigation.navigate("ViewBookings", item)}
          />
        )}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  bookingCarsContainer: {
    backgroundColor: "#fff",
    marginRight: 10,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  map: {
    height: "100%",
    width: "100%",
  },
  overlayContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: '2%',
    paddingBottom: 10,
    position: "absolute",
    top: 0,
    width: "96%"
  },

  overlayContainerBottom: {
    bottom: 3,
    height: 120,
    marginBottom: 30,
    marginLeft: 8,
    position: "absolute",
    // width: "100%",
    gap: 10
  },
  search: {
    width: "80%"
  }
})
