import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Header,
  Icon,
  MainHeader,
  ProfileContent,
  Screen,
  SectionHeader,
  Text,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { AuthenticationStoreModel } from "app/models/AuthenticationStore"

interface ProfileScreenProps extends AppStackScreenProps<"ServiceUserProfile"> {}

export const ServiceUserProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const {
    onboardingStore: { setHasCompletedOnboarding },
    walkthroughStore: { setSeenWalkthrough },
    authenticationStore,
  } = useStores()

  const onNotificationPress = () => {
    navigation.navigate("AllNotifications")
  }
  const onEditPress = () => {
    navigation.navigate("EditDetails")
  }

  const {
    authenticationStore: { logout },
  } = useStores()
  const doLogout = () => {
    //TODO: uncomment this if you want to test onboarding screens
    setHasCompletedOnboarding(true)
    setSeenWalkthrough(true)
    authenticationStore.setUserType("su")
    logout()
  }
  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer}>
      <Header
        leftIcon="notification"
        title="Profile"
        rightIcon="editPencil"
        onLeftPress={onNotificationPress}
        onRightPress={onEditPress}
      />

      <View style={styles.topContainer}>
        <Icon icon="userImage" size={48} />
        <View>
          <Text text="Clean Kutz" weight="semiBold" size="lg" />
          <Text text="anitajoseph@gmail.com" weight="light" size="sm" />
        </View>
      </View>
      <View style={styles.topContainer}>
        <Icon icon="location" size={16} />
        <Text text="24 Montgomery Road, New Yotk" />
      </View>
      <View>
        <SectionHeader leftText="Personal Details" />
        <ProfileContent leftText="Mobile Number" rightText="09096631152" />
        <ProfileContent leftText="Gender" rightText="Female" />
        <ProfileContent
          leftText="Addresses"
          rightIcon="chevronRight"
          onPress={() => {
            navigation.navigate("SavedAddress")
          }}
        />
      </View>
      <View>
        <SectionHeader leftText="Payment" />
        <ProfileContent
          leftText="Saved Cards"
          rightIcon="chevronRight"
          onPress={() => {
            navigation.navigate("SavedCards")
          }}
        />
      </View>
      <View>
        <SectionHeader leftText="Support" />
        <ProfileContent
          leftText="Booksee Support"
          rightIcon="chevronRight"
          onPress={() => {
            navigation.navigate("Support")
          }}
        />
        <ProfileContent leftText="Enable Notifications" />
      </View>
      <View>
        <SectionHeader leftText="Policy" />
        <ProfileContent
          leftText="Terms and Conditions"
          rightIcon="chevronRight"
          onPress={() => {
            navigation.navigate("TermAndConditions")
          }}
        />
        <ProfileContent
          leftText="Privacy Policy"
          rightIcon="chevronRight"
          onPress={() => {
            navigation.navigate("PrivacyPolicy")
          }}
        />
      </View>
      <View>
        <SectionHeader leftText="Security" />
        <ProfileContent
          leftText="Change Password"
          rightIcon="chevronRight"
          onPress={() => {
            navigation.navigate("ChangePassword")
          }}
        />
        <ProfileContent
          leftText="Sign Out"
          rightIcon="chevronRight"
          onPress={() => {
            doLogout()
          }}
        />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
})
