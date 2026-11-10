// @ts-nocheck - preexisting UI type errors; tracked for a later pass
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, FlatList, StyleSheet, Pressable } from "react-native"
import { colors } from "app/theme"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, AutoImage, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { Icon, IconTypes } from "../../components/Icon"

import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

interface ProfileScreenProps extends AppStackScreenProps<"ServiceProviderProfile"> {}

interface Profile {
  icon: IconTypes
  title: string
  url?: string
}

const operationsData: Profile[] = [
  { icon: "addService", title: "Add Services", url: "ViewServices" },
  { icon: "personSupport", title: "Availability", url: "Availability" },
  { icon: "personSupport", title: "Availability 2", url: "AvailabilityCalendar" },
  { icon: "wallet", title: "Payment Information", url: "AccountDetails" },
  { icon: "History", title: "Booking History", url: "BookView" },
  { icon: "History", title: "Service Location", url: "ServiceDetail" },
  { icon: "History", title: "Earnings", url: "Earnings" },
]

const settingsData: Profile[] = [
  { icon: "History", title: "Enable Notifications", url: "Notifications" },
  { icon: "paddlock", title: "Change Password", url: "ChangePassword" },
  { icon: "signOut", title: "Sign Out", url: "" },
]

const policyData: Profile[] = [
  { icon: "account", title: "Contact Support", url: "Support" },
  { icon: "addService", title: "Terms and Conditions", url: "TermAndConditions" },
  { icon: "personSupport", title: "Privacy Policy", url: "PrivacyPolicy" },
]

export const ServiceProviderProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen(
  _props,
) {
  // Pull in one of our MST stores
  const {
    authenticationStore: { logout },
  } = useStores()
  const {
    onboardingStore: { setHasCompletedOnboarding },
    walkthroughStore: { setSeenWalkthrough },
  } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  // const { navigation } = _props
  const goTo = (url: any) => {
    if (url) navigation.navigate(url)
  }
  const doLogout = () => {
    //TODO: uncomment this if you want to test onboarding screens
    setHasCompletedOnboarding(false)
    setSeenWalkthrough(false)
    logout()
  }
  return (
    <Screen preset="scroll" contentContainerStyle={screenContentContainer} safeAreaEdges={["top"]}>
      <View>
        <View style={styles.wideSpacing}>
          <Text preset="subheading" text="Profile" />
          <View style={styles.mildSpacing}>
            <Button
              // onPress={() => Alert.alert("pressed")}
              LeftAccessory={(props) => (
                <Icon icon="bell" onPress={() => navigation.navigate("AllNotifications")} />
              )}
            />

            <Button
              // onPress={() => Alert.alert("pressed")}
              LeftAccessory={(props) => (
                <Icon icon="Edit" onPress={() => navigation.navigate("MainProfile")} />
              )}
            />
          </View>
        </View>
        <View style={styles.mildSpacing}>
          <Icon icon="userImage" />
          <View>
            <Text preset="bold" size="sm" text="Clean Kutz" />
            <Text
              preset="default"
              size="xs"
              text="anita@example.com"
              style={{ fontWeight: "400", color: colors.text }}
            />
          </View>
        </View>
        <View>
          <View style={styles.mildSpacing}>
            <Icon icon="pin" />
            <Text
              preset="default"
              size="xs"
              text="24 Montgomery Road, New York"
              style={{ color: colors.text, fontWeight: "400" }}
            />
          </View>
          <Text preset="bold" size="xs" text="Operations" style={styles.profileText} />
        </View>
        <FlatList
          data={operationsData}
          renderItem={({ item }) => (
            <Pressable onPress={() => goTo(item.url)}>
              <View style={styles.itemWrapper}>
                <View style={styles.mildSpacing}>
                  <Icon icon={item.icon} />
                  <Text preset="default" size="xs" text={item.title} style={styles.menuText} />
                </View>
                <Icon icon="caretRight" />
              </View>
            </Pressable>
          )}
          keyExtractor={(item, index) => item.title}
        />

        <Text preset="bold" size="xs" text="Security and Settings" style={styles.profileText} />

        <FlatList
          data={settingsData}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                item.title === "Sign Out" ? doLogout() : goTo(item.url)
              }}
            >
              <View style={styles.itemWrapper}>
                <View style={styles.mildSpacing}>
                  <Icon icon={item.icon} />
                  <Text preset="default" size="xs" text={item.title} style={styles.menuText} />
                </View>
                <Icon icon="caretRight" />
              </View>
            </Pressable>
          )}
          keyExtractor={(item, index) => item.title}
        />
        <Text preset="bold" size="xs" text="Subscription" style={styles.profileText} />

        <Pressable onPress={() => goTo("ProviderSubscription")}>
          <View style={styles.itemWrapper}>
            <Text preset="default" size="xs" text="Upgrade your plan" style={styles.menuText} />
            <Icon icon="caretRight" />
          </View>
        </Pressable>

        <Text preset="bold" size="xs" text="Policy" style={styles.profileText} />

        <FlatList
          data={policyData}
          renderItem={({ item }) => (
            <Pressable onPress={() => goTo(item.url)}>
              <View style={styles.itemWrapper}>
                <View style={styles.mildSpacing}>
                  <Icon icon={item.icon} />
                  <Text preset="default" size="xs" text={item.title} style={styles.menuText} />
                </View>
                <Icon icon="caretRight" />
              </View>
            </Pressable>
          )}
          keyExtractor={(item, index) => item.title}
        />
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  wideSpacing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  menuText: { fontWeight: "400", color: colors.text },

  mildSpacing: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginBottom: 8,
  },

  profileStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: colors.palette.neutral200,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderColor: colors.palette.neutral200,
    borderStyle: "solid",
  },
  profileText: {
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 8,
    marginTop: 24,
  },

  subscriptionStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.palette.neutral200,
  },
})
