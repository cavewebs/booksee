import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import Checkbox from "expo-checkbox"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text, Icon, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { colors } from "app/theme"
// import { useStores } from "app/models"

interface OfferServicesScreenProps extends AppStackScreenProps<"OfferServices"> {}

export const OfferServicesScreen: FC<OfferServicesScreenProps> = observer(
  function OfferServicesScreen() {
    const [maleChecked, setMaleChecked] = useState(false)
    const [femaleChecked, setFemaleChecked] = useState(false)
    const [serviceChecked, setServices] = useState(false)
    const [locationChecked, setServiceLocation] = useState(false)
    const [homeSalon, setHomeSalon] = useState(false)
    const [genderChecked, setCheckedGender] = useState(false)
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    const {
      onboardingStore: { hasCompletedOnboarding, setHasCompletedOnboarding },
    } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()

    const nextPage = () => {
      console.log(hasCompletedOnboarding)
      setHasCompletedOnboarding(true)
      navigation.navigate("ServiceProvider")
    }

    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <View style={{ marginTop: 130 }}>
          <Text
            preset="bold"
            size="sm"
            text="Offer Services to"
            style={{ marginTop: 25, marginBottom: 16 }}
          />
          <View>
            <View style={styles.wideSpacing}>
              <View style={styles.mildSpacing}>
                <Icon
                  icon="maleIcon"
                  size={25}
                  color={maleChecked ? colors.palette.primary600 : colors.palette.neutral500}
                />
                <Text
                  weight="medium"
                  size="xs"
                  text="Male"
                  style={{
                    color: maleChecked ? colors.palette.primary600 : colors.palette.neutral500,
                  }}
                />
              </View>

              <Checkbox
                value={maleChecked}
                onValueChange={setMaleChecked}
                color={maleChecked ? colors.palette.primary600 : undefined}
              />
            </View>
            <View style={styles.wideSpacing}>
              <View style={styles.mildSpacing}>
                <Icon
                  icon="female"
                  size={25}
                  color={femaleChecked ? colors.palette.primary600 : colors.palette.neutral500}
                />
                <Text
                  weight="medium"
                  text="Female"
                  size="xs"
                  style={{
                    color: femaleChecked ? colors.palette.primary600 : colors.palette.neutral500,
                  }}
                />
              </View>

              <Checkbox
                value={femaleChecked}
                onValueChange={setFemaleChecked}
                color={femaleChecked ? colors.palette.primary600 : undefined}
              />
            </View>
            <View style={styles.wideSpacing}>
              <View style={styles.mildSpacing}>
                <Icon
                  icon="bothSex"
                  size={25}
                  color={genderChecked ? colors.palette.primary600 : colors.palette.neutral500}
                />
                <Text
                  weight="medium"
                  size="xs"
                  text="Male and Female"
                  style={{
                    color: genderChecked ? colors.palette.primary600 : colors.palette.neutral500,
                  }}
                />
              </View>

              <Checkbox
                value={genderChecked}
                onValueChange={setCheckedGender}
                color={genderChecked ? colors.palette.primary600 : undefined}
              />
            </View>
            {/* service location sections */}
            <Text preset="bold" size="sm" text="Service Location" style={{ marginBottom: 16 }} />
            <View style={styles.wideSpacing}>
              <View style={styles.mildSpacing}>
                <Icon
                  icon="office"
                  size={25}
                  color={serviceChecked ? colors.palette.primary600 : colors.palette.neutral500}
                />
                <Text
                  weight="medium"
                  size="xs"
                  text="Salon Service"
                  style={{
                    color: serviceChecked ? colors.palette.primary600 : colors.palette.neutral500,
                  }}
                />
              </View>

              <Checkbox
                value={serviceChecked}
                onValueChange={setServices}
                color={serviceChecked ? colors.palette.primary600 : undefined}
              />
            </View>

            <View style={styles.wideSpacing}>
              <View style={styles.mildSpacing}>
                <Icon
                  icon="solarHome"
                  size={25}
                  color={locationChecked ? colors.palette.primary600 : colors.palette.neutral500}
                />
                <Text
                  weight="medium"
                  size="xs"
                  text="Home Service"
                  style={{
                    color: locationChecked ? colors.palette.primary600 : colors.palette.neutral500,
                  }}
                />
              </View>

              <Checkbox
                value={locationChecked}
                onValueChange={setServiceLocation}
                color={locationChecked ? colors.palette.primary600 : undefined}
              />
            </View>
            <View style={styles.wideSpacing}>
              <View style={styles.mildSpacing}>
                <Icon
                  icon="serviceProvider"
                  size={25}
                  color={homeSalon ? colors.palette.primary600 : colors.palette.neutral500}
                />
                <Text
                  weight="medium"
                  text="Home and Salon Service"
                  size="xs"
                  style={{
                    color: homeSalon ? colors.palette.primary600 : colors.palette.neutral500,
                  }}
                />
              </View>

              <Checkbox
                value={homeSalon}
                onValueChange={setHomeSalon}
                color={homeSalon ? colors.palette.primary600 : undefined}
              />
            </View>
          </View>

          <Button preset="primary" text="Continue" style={{ marginTop: 200 }} onPress={nextPage} />
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
    marginBottom: 18,
  },
})
