import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BookingCard, HeaderWithBackButton, HorizontalTabs, OtherHeader, PopularSearches, Screen, Search, SectionHeader } from "app/components"
// import { screenContentContainer } from "app/styles/mainStyles"
import { bookingSearchResultData, inspiredTabs, popularSearch } from "app/components/serviceUser/DummyData/HomeScreenData"
import { spacing } from "app/theme"
import { screenContentContainer } from "app/styles/mainStyles"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface PopularInYourAreaScreenProps extends AppStackScreenProps<"PopularInYourArea"> { }

export const PopularInYourAreaScreen: FC<PopularInYourAreaScreenProps> = observer(function PopularInYourAreaScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const [activeTab, setActiveTab] = React.useState(0)

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen preset="auto" contentContainerStyle={screenContentContainer} >
       <HeaderWithBackButton title="Popular in your area" />
      <Search />
      <HorizontalTabs tabs={inspiredTabs} setActiveTab={setActiveTab} activeTab={activeTab} />

      <View style={styles.popularSearchContainer}>
        {
          popularSearch.map((popular, index) => (
            <PopularSearches text={popular.text} key={index} />
          ))
        }
      </View>

      <View>
        <SectionHeader leftText="1000+ results" />
        <View style={styles.bookingContainer}>
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
            />
          ))}
        </View>
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  bookingContainer: {
    marginBottom: 40
  },
  popularSearchContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
})
