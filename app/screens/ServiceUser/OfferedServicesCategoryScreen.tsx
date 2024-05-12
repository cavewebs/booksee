import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, HeaderWithBackButton, HorizontalTabs, Screen, Search, SectionHeader, Services, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { inspiredTabs, services } from "app/components/serviceUser/DummyData/HomeScreenData"
// import { useStores } from "app/models"

interface OfferedServicesCategoryScreenProps extends AppStackScreenProps<"OfferedServicesCategory"> {}

export const OfferedServicesCategoryScreen: FC<OfferedServicesCategoryScreenProps> = observer(function OfferedServicesCategoryScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const [activeTab, setActiveTab] = React.useState(0)

  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <Screen preset="scroll" contentContainerStyle={screenContentContainer} safeAreaEdges={[ "bottom"]} >
      {/* use what Header if you like or the Text if it suits better don't forget to delete the unused import at the end */}
      {/* <Text preset="heading" text="notifications" /> */}
      <HeaderWithBackButton title="Offered Services" />
      <Search />
        <HorizontalTabs tabs={inspiredTabs} setActiveTab={setActiveTab} activeTab={activeTab}/>
        <View style={styles.serviceContainer}>
          {services.map((service) => (
            <Services key={service.serviceName} icon={service.icon} text={service.serviceName} onPress={()=>{navigation.navigate("Services", {params: service})}} />
          ))}
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
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
})
