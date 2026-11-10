// @ts-nocheck - preexisting UI type errors; tracked for a later pass
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet, Image, Linking } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  HeaderWithBackButton,
  HorizontalTabs,
  Icon,
  PopularSearches,
  Ratings,
  Screen,
  SectionHeader,
  ServiceProviderCard,
  Services,
  Text,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { inspiredTabs, popularSearch, services } from "app/components/serviceUser/DummyData/HomeScreenData"
import { works } from "app/components/serviceUser/DummyData/BookingScreenData"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const image = require("../../../../assets/images/theNext.png")
interface ServiceProviderDetailsScreenProps extends AppStackScreenProps<"ServiceProviderDetails"> { }

export const ServiceProviderDetailsScreen: FC<ServiceProviderDetailsScreenProps> = observer(
  function ServiceProviderDetailsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
    const makePhoneCall = (phoneNumber) => {
      Linking.openURL(`tel:${phoneNumber}`);
    };
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = React.useState(0)

    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <HeaderWithBackButton title="Provider Details" />
        <ServiceProviderCard
          image={image}
          location="25 Montgomery Road, Yaba"
          views="5123"
          rating="4.5"
          name="The Next Barbing Salon"
        />
        <View style={styles.headContainer}>
          <Text text="The Next Barbing Salon" size="lg" weight="semiBold" />
          <View style={{ width: 40, height: 40, backgroundColor: colors.palette.neutral200, borderRadius: 100, alignContent: "center", justifyContent: "center", alignItems: "center" }}>
            <Icon icon="callPhone" size={20} style={{ alignContent: "center", justifyContent: "center", alignItems: "center" }} onPress={() => makePhoneCall("07700900000")} />
          </View>
        </View>
        <Text text="The best saloon to get a professional haircut with the best prices and facilities in Camden" style={styles.providerDescription} />
        <HorizontalTabs tabs={inspiredTabs} setActiveTab={setActiveTab} activeTab={activeTab} />
        <View>
          <SectionHeader leftText="Services Offered" leftTextStyle={{ fontSize: 20 }} rightText="See All" onRightTextPress={() => navigation.navigate("OfferedServicesCategory")} />
          <View style={styles.serviceContainer}>
            {services.map((service) => (
              <Services key={service.serviceName} icon={service.icon} text={service.serviceName} onPress={() => { navigation.navigate("Services", { params: service }) }} />
            ))}
          </View>
        </View>
        <View>
          <SectionHeader leftText="Offers Service For" />
          <View style={styles.popularSearchContainer}>
            <PopularSearches text={"Male"} key={"male"} textFontWeight="semiBold" textStyle={styles.servicesLabelText} />
            <PopularSearches text={"Female"} textFontWeight="semiBold" key={"female"} textStyle={styles.servicesLabelText} />
          </View>
        </View>
        <View>
          <SectionHeader leftText="Service Location" />
          <View style={styles.popularSearchContainer}>
            <PopularSearches text={"Salon"} key={"Salon"} textFontWeight="semiBold" textStyle={styles.servicesLabelText} />
            <PopularSearches text={"Home service"} textFontWeight="semiBold" key={"HomeService"} textStyle={styles.servicesLabelText} />
          </View>
        </View>
        <View>
          <SectionHeader leftText="Previous Work" rightText="See All" onRightTextPress={() => navigation.navigate("PreviousWork")} />
          <View style={styles.previousWorkContainer}>
            {works.map((work, index) => (
              <Image key={index} source={work} style={{ width: "30%", height: 100, }} />
            ))}

          </View>
        </View>

        <View>
          <SectionHeader leftText="Ratings and Reviews" />

        </View>
        <View>
          <Ratings />
        </View>
      </Screen>
    )
  },
)


const styles = StyleSheet.create({
  headContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30
  },
  previousWorkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "space-between"
  },
  servicesLabelText: { color: "#2895FE", fontSize: 16 },
  popularSearchContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  providerDescription: {
    marginVertical: 10
  },
  serviceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
})
