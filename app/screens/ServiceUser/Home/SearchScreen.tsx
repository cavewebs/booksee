import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { HeaderWithBackButton, Icon, OtherHeader, PopularSearches, Screen, Search, SectionHeader, ServiceProviderCard, Text } from "app/components"
// import { screenContentContainer } from "app/styles/mainStyles"
import { popularSearch, recentSearchCache, serviceProvider } from "app/components/serviceUser/DummyData/HomeScreenData"
import { spacing } from "app/theme"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface SearchScreenProps extends AppStackScreenProps<"Search"> { }

export const SearchScreen: FC<SearchScreenProps> = observer(function SearchScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={screenContentContainer}
      safeAreaEdges={["bottom"]}
    >
      <HeaderWithBackButton title="Search" />
      <Search />
      <View>
        <SectionHeader leftText="Recent Searches" rightText="Clear All" />
        {recentSearchCache.map((history, index) => (
          <View style={styles.container} key={index}>
            <Text text={history.text} size="md" weight="medium" style={styles.text} />
            <Icon icon="close" size={14} />
          </View>
        ))}
      </View>
      <View>
        <SectionHeader leftText="Popular Searches" />
        <View style={styles.popularSearchContainer}>
          {
            popularSearch.map((popular, index) => (
              <PopularSearches text={popular.text} key={index} textFontWeight={"light"}/>
            ))
          }
        </View>

      </View>
      <View style={styles.serviceProviderContainer}>
        <SectionHeader leftText="Suggestions for you" />
        {serviceProvider.map((providers, index) => (
          <ServiceProviderCard
            key={index}
            image={providers.image}
            location={providers.location}
            views={providers.views}
            rating={providers.rating}
            name={providers.name}
            navigate={() => navigation.navigate("ServiceProviderDetails", providers)}
          />
        ))}
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  popularSearchContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  serviceProviderContainer: {
    marginBottom: 40
  },
  // eslint-disable-next-line react-native/no-color-literals
  text: {
    color: "#6B7280",
  },

})
