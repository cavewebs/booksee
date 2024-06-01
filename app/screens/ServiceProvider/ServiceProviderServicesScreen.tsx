import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ImageRequireSource, FlatList, StyleSheet, Pressable } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { MyServices, Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
import { Icon } from "app/components"
import firstBeard from "assets/images/trim-beard0.png"
import secondBeard from "assets/images/trim-beard1.png"
import thirdBeard from "assets/images/trim-beard2.png"
import fourthBeard from "assets/images/trim-beard3.png"
import fifthBeard from "assets/images/trim-beard4.png"
import sixthBeard from "assets/images/trim-beard5.png"
import seventhBeard from "assets/images/trim-beard6.png"
import { useNavigation } from "@react-navigation/native"
import { PlusCircleIcon } from "lucide-react-native"
// import { useStores } from "app/models"

interface ServiceProviderServicesScreenProps
  extends AppStackScreenProps<"ServicePoviderServices"> { }

interface Beards {
  beard: ImageRequireSource
  headerText: string
  price: string
  time: string
  status: string
}

const beardData: Beards[] = [
  {
    beard: firstBeard,
    headerText: "Beard Trim",
    price: "$ 500",
    time: "30 minutes",
    status: "Available",
  },
  {
    beard: secondBeard,
    headerText: "Beard Trim",
    price: "$ 500",
    time: "30 minutes",
    status: "Available",
  },
  {
    beard: thirdBeard,
    headerText: "Beard Trim",
    price: "$ 500",
    time: "30 minutes",
    status: "Available",
  },
  {
    beard: fourthBeard,
    headerText: "Beard Trim",
    price: "$ 500",
    time: "30 minutes",
    status: "Available",
  },
  {
    beard: fifthBeard,
    headerText: "Beard Trim",
    price: "$ 500",
    time: "30 minutes",
    status: "Available",
  },
  {
    beard: sixthBeard,
    headerText: "Beard Trim",
    price: "$ 500",
    time: "30 minutes",
    status: "Available",
  },
  {
    beard: seventhBeard,
    headerText: "Beard Trim",
    price: "$ 500",
    time: "30 minutes",
    status: "Available",
  },
]

export const ServiceProviderServicesScreen: FC<ServiceProviderServicesScreenProps> = observer(
  function ServicePoviderServicesScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen preset="auto" contentContainerStyle={screenContentContainer} safeAreaEdges={["top"]}>
        <View>
          <Pressable onPress={() => navigation.navigate("ServiceDetail")} >
            <View style={styles.wideSpacing}>
              <Text preset="subheading" text="My Services" style={{ color: colors.text }} />
              <View style={styles.mildSpacing}>
                <Text
                  preset="bold"
                  size="xs"
                  text="Add Service"
                  style={{ color: colors.palette.primary600 }}
                />

<PlusCircleIcon fill={colors.tint} color={colors.palette.neutral100} />
              </View>
            </View>
          </Pressable>

          <FlatList
            data={beardData}
            renderItem={({ item, }) => (
              <MyServices
                headerText={item.headerText}
                price={item.price}
                time={item.time}
                status={item.status}
                serviceImg={item.beard}
              />
            )}
            keyExtractor={(item) => `${item.beard}`}
          />
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  mildSpacing: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  wideSpacing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    marginTop: 20
  },
})
