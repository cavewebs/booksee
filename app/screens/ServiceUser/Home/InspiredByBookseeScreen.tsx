import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import {  View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  BookingCard,
  HeaderWithBackButton,
  HorizontalTabs,
  Screen,
  Search,
  SectionHeader,
  Services,
} from "app/components"
// import { screenContentContainer } from "app/styles/mainStyles"
import {
  bookingSearchResultData,
  inspiredTabs,
  services,
} from "app/components/serviceUser/DummyData/HomeScreenData"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface InspiredByBookseeScreenProps extends AppStackScreenProps<"InspiredByBooksee"> {}

export const InspiredByBookseeScreen: FC<InspiredByBookseeScreenProps> = observer(
  function InspiredByBookseeScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
    const [activeTab, setActiveTab] = React.useState(0)

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen
        preset="scroll"
        safeAreaEdges={["bottom"]}
        contentContainerStyle={screenContentContainer}
      >
        <HeaderWithBackButton title="Inspired by Booksee" />
        <Search />
        <HorizontalTabs tabs={inspiredTabs} setActiveTab={setActiveTab} activeTab={activeTab} />
        <View style={styles.serviceContainer}>
          {services.map((service) => (
            <Services
              key={service.serviceName}
              icon={service.icon}
              text={service.serviceName}
              onPress={() => {
                navigation.navigate("Services", { params: service })
              }}
            />
          ))}
        </View>

        <View>
          <SectionHeader leftText="Near You" />
          <View style={styles.container}>
            {bookingSearchResultData.map((results, index) => (
              <BookingCard
                image={results.image}
                key={index}
                textTopLeft={results.textTopLeft}
                midIconLeft={results.midLeftIcon}
                midTextLeft={results.midTextLeft}
                midTextRight={results.midTextRight}
                rating={results.rating}
                bottomIconLeft={results.bottomIconLeft}
                bottomTextLeft={results.bottomTextLeft}
                bottomIconRight={results.bottomIconRight}
                bottomTextRight={results.bottomTextRight}
                navigate={() => navigation.navigate("ViewBookings", results)}
              />
            ))}
          </View>
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  serviceContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
})
