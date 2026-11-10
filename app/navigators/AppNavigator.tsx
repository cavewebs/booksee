/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import * as Screens from "app/screens"
import Config from "../config"
import { useStores } from "../models"
import { ServiceProviderNavigator, ServiceProviderTabParamList } from "./ServiceProviderNavigator"
import { ServiceUserNavigator, ServiceUserTabParamList } from "./ServiceUserNavigator"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { colors } from "app/theme"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */

export type ServiceDetailsParamList = {
  data: {
    serviceName: string
    icon: string
    serviceOfferings: [
      {
        categoryName: string
        icon: string
        offerName: string
        price: number
        duration: number
      },
    ]
  }
}
export type ServiceDetailParamList = {
  data: {
    categoryName: string
    icon: string
    offerName: string
    price: number
    duration: number
  }
}
export type OnboardingParamList = {
  data: {
    nextPage?: string
  }
}
export type AppStackParamList = {
  ServiceProvider: NavigatorScreenParams<ServiceProviderTabParamList>
  ServiceUser: NavigatorScreenParams<ServiceUserTabParamList>
  Login: undefined
  Welcome: undefined
  Demo: NavigatorScreenParams<{
    DemoShowroom: { queryIndex?: string; itemIndex?: string }
    DemoDebug: undefined
    DemoPodcastList: undefined
    DemoCommunity: undefined
  }>
  PendingBookings: undefined
  ServicePoviderServices: undefined
  UserSelection: undefined
  // 🔥 Your screens go here
  SplashOne: undefined
  SplashTwo: undefined
  SplashThree: undefined
  LoginSignin: undefined
  SelectUserType: undefined
  Signup: undefined
  Otp: undefined
  Signin: undefined
  ResetPassword: undefined
  AllNotifications: undefined

  // ServiceUser Screens
  PrivacyPolicy: undefined
  ServiceUserBookings: undefined
  ServiceUserCart: undefined
  ServiceUserHome: undefined
  ServiceUserProfile: undefined
  Notifications: NavigatorScreenParams<OnboardingParamList>
  Search: undefined
  SearchResult: undefined
  InspiredByBooksee: undefined
  PopularInYourArea: undefined
  EditDetails: undefined
  SavedAddress: undefined
  AddNewAddress: undefined
  ViewBookings: undefined
  ServiceProviderDetails: undefined
  Services: NavigatorScreenParams<ServiceDetailsParamList>
  BookService: NavigatorScreenParams<ServiceDetailsParamList>
  SavedCards: undefined
  TermAndConditions: undefined
  Report: undefined
  Support: undefined

  // ServiceProvider Screens
  ServiceProviderBookings: undefined
  ServiceProviderProfile: undefined
  ServiceProviderHome: undefined
  ServiceProviderServices: undefined

  ServiceSettings: undefined
  ProviderSubscription: undefined

  ViewServices: undefined
  BookView: undefined
  ServiceDetail: undefined
  Availability: undefined
  TermsAndConditions: undefined
  Reviews: undefined
  Earnings: undefined
  TransactionDetails: undefined
  Reports: undefined
  AvailabilityCalendar: undefined
  ProviderSupport: undefined
  ChangePassword: undefined
  AddAddress: NavigatorScreenParams<OnboardingParamList>
  ProviderNotification: undefined
  AccountDetails: undefined
  BankAccountDetails: undefined
  PreviousWork: undefined
  OfferServices: undefined
  MainDetail: undefined
  MainProfile: undefined
  OfferedServicesCategory: undefined
  ConfirmPayment: undefined
  AddNewCard: undefined
  Success: undefined
  ActionStatus: undefined
  SubmitNotification: undefined
  ViewPendingBookings: undefined
  ViewCurrentBookings: undefined
  // PendingBookings: undefined
  SwitchUserType: undefined
  ForgotPassword: undefined
  MapSearch: undefined
  OnboardingOtp: NavigatorScreenParams<OnboardingParamList>
  EnableLocation: NavigatorScreenParams<OnboardingParamList>
  EnableNotifications: NavigatorScreenParams<OnboardingParamList>
  OnboardingAddAddress: NavigatorScreenParams<OnboardingParamList>

  OnboardingSetupProfile: NavigatorScreenParams<OnboardingParamList>
  // 🔥 Your screens go here
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start
  const {
    authenticationStore: { isAuthenticated, userType },
  } = useStores()
  const {
    walkthroughStore: { hasSeenWalkthrough },
  } = useStores()

  const {
    onboardingStore: { hasCompletedOnboarding },
  } = useStores()

  // @demo remove-block-end
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
      initialRouteName={hasSeenWalkthrough ? "LoginSignin" : "SplashOne"} // @demo remove-current-line
    >
      {/* @demo remove-block-start */}
      {isAuthenticated ? (
        <>
          {userType === "su" ? (
            <>
              {hasCompletedOnboarding === true ? (
                <>
                  {/* ServiceUser Screens  */}
                  {/* <Stack.Screen name="Report" component={Screens.ReportScreen} /> */}
                  <Stack.Screen name="ServiceUser" component={ServiceUserNavigator} />
                  <Stack.Screen name="ServiceUserHome" component={Screens.ServiceUserHomeScreen} />
                  <Stack.Screen
                    name="ServiceUserBookings"
                    component={Screens.ServiceUserBookingsScreen}
                  />
                  <Stack.Screen name="ServiceUserCart" component={Screens.ServiceUserCartScreen} />
                  <Stack.Screen
                    name="ServiceUserProfile"
                    component={Screens.ServiceUserProfileScreen}
                  />
                  <Stack.Screen name="Search" component={Screens.SearchScreen} />
                  <Stack.Screen name="SearchResult" component={Screens.SearchResultScreen} />
                  <Stack.Screen
                    name="InspiredByBooksee"
                    component={Screens.InspiredByBookseeScreen}
                  />
                  <Stack.Screen
                    name="PopularInYourArea"
                    component={Screens.PopularInYourAreaScreen}
                  />
                  <Stack.Screen name="EditDetails" component={Screens.EditDetailsScreen} />
                  <Stack.Screen name="ViewBookings" component={Screens.ViewBookingsScreen} />
                  <Stack.Screen
                    name="ServiceProviderDetails"
                    component={Screens.ServiceProviderDetailsScreen}
                  />
                  <Stack.Screen name="Services" component={Screens.ServicesScreen} />
                  <Stack.Screen name="BookService" component={Screens.BookServiceScreen} />
                  <Stack.Screen name="SavedCards" component={Screens.SavedCardsScreen} />
                  <Stack.Screen name="Report" component={Screens.ReportScreen} />
                  <Stack.Screen name="MapSearch" component={Screens.MapSearchScreen} />
                  <Stack.Screen name="PreviousWork" component={Screens.PreviousWorkScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name="OnboardingOtp" component={Screens.OtpScreen} />
                  <Stack.Screen name="EnableLocation" component={Screens.EnableLocationScreen} />
                  <Stack.Screen name="OnboardingAddAddress" component={Screens.AddAddressScreen} />
                  <Stack.Screen
                    name="EnableNotifications"
                    component={Screens.NotificationsScreen}
                  />
                </>
              )}
            </>
          ) : (
            <>
              {hasCompletedOnboarding ? (
                <>
                  {/* Service Provider Screens */}
                  <Stack.Screen name="ServiceProvider" component={ServiceProviderNavigator} />

                  <Stack.Screen
                    name="ServiceProviderHome"
                    component={Screens.ServiceProviderHomeScreen}
                  />

                  <Stack.Screen name="AccountDetails" component={Screens.AccountDetailsScreen} />

                  <Stack.Screen
                    name="ServiceProviderBookings"
                    component={Screens.ServiceProviderBookingsScreen}
                  />
                  <Stack.Screen
                    name="ViewPendingBookings"
                    component={Screens.PendingBookingsScreen}
                  />
                  {/* <Stack.Screen name="PendingBookings" component={Screens.PendingBookingsScreen} /> */}
                  <Stack.Screen
                    name="ServiceProviderServices"
                    component={Screens.ServiceProviderServicesScreen}
                  />
                  <Stack.Screen
                    name="ServiceProviderProfile"
                    component={Screens.ServiceProviderProfileScreen}
                  />

                  {/* <Stack.Screen name="ServiceSettings" component={Screens.ServiceSettingsScreen} /> */}
                  <Stack.Screen name="Earnings" component={Screens.EarningsScreen} />
                  <Stack.Screen
                    name="AvailabilityCalendar"
                    component={Screens.AvailabilityCalendarScreen}
                  />

                  {/* <Stack.Screen
                    name="ProviderSubscription"
                    component={Screens.ProviderSubscriptionScreen}
                  /> */}

                  <Stack.Screen name="ViewServices" component={Screens.ViewServicesScreen} />
                  <Stack.Screen name="BookView" component={Screens.BookViewScreen} />
                  <Stack.Screen name="ServiceDetail" component={Screens.ServiceDetailScreen} />
                  <Stack.Screen name="Availability" component={Screens.AvailabilityScreen} />
                  <Stack.Screen name="Reports" component={Screens.ReportsScreen} />
                  <Stack.Screen name="ProviderSupport" component={Screens.ProviderSupportScreen} />

                  {/* <Stack.Screen
                    name="BankAccountDetails"
                    component={Screens.BankAccountDetailsScreen}
                  /> */}
                  <Stack.Screen name="PreviousWork" component={Screens.PreviousWorkScreen} />

                  {/* <Stack.Screen name="MainProfile" component={Screens.MainProfileScreen} /> */}
                </>
              ) : (
                <>
                  <Stack.Screen name="OnboardingOtp" component={Screens.OtpScreen} />
                  <Stack.Screen name="MainProfile" component={Screens.MainProfileScreen} />
                  <Stack.Screen name="MainDetail" component={Screens.MainDetailScreen} />
                  <Stack.Screen
                    name="SubmitNotification"
                    component={Screens.SubmitNotificationScreen}
                  />
                  <Stack.Screen name="OnboardingAddAddress" component={Screens.AddAddressScreen} />
                  <Stack.Screen name="EnableLocation" component={Screens.EnableLocationScreen} />
                  {/* <Stack.Screen name="AccountDetails" component={Screens.AccountDetailsScreen} /> */}
                  <Stack.Screen
                    name="BankAccountDetails"
                    component={Screens.BankAccountDetailsScreen}
                  />
                  <Stack.Screen
                    name="ProviderSubscription"
                    component={Screens.ProviderSubscriptionScreen}
                  />
                  <Stack.Screen
                    name="EnableNotifications"
                    component={Screens.NotificationsScreen}
                  />
                  <Stack.Screen name="OfferServices" component={Screens.OfferServicesScreen} />
                  {/* <Stack.Screen name="OnboardingOtp" component={Screens.OtpScreen} /> */}
                </>
              )}
            </>
          )}
          <Stack.Screen name="ChangePassword" component={Screens.ChangePasswordScreen} />
          <Stack.Screen name="SavedAddress" component={Screens.SavedAddressScreen} />
          <Stack.Screen name="PrivacyPolicy" component={Screens.PrivacyPolicyScreen} />
          <Stack.Screen name="TermAndConditions" component={Screens.TermAndConditionsScreen} />
          <Stack.Screen name="Support" component={Screens.SupportScreen} />
          <Stack.Screen name="Notifications" component={Screens.NotificationsScreen} />
          <Stack.Screen name="AddNewAddress" component={Screens.AddNewAddressScreen} />
          <Stack.Screen name="AddAddress" component={Screens.AddAddressScreen} />

          <Stack.Screen name="Otp" component={Screens.OtpScreen} />
          {/* <Stack.Screen name="OnboardingOtp" component={Screens.OtpScreen} /> */}
        </>
      ) : (
        <>
          {hasSeenWalkthrough ? (
            <>
              <Stack.Screen name="LoginSignin" component={Screens.LoginSigninScreen} />
              <Stack.Screen name="Signup" component={Screens.SignupScreen} />
              <Stack.Screen name="Signin" component={Screens.SigninScreen} />
              <Stack.Screen name="ResetPassword" component={Screens.ResetPasswordScreen} />
              <Stack.Screen name="SwitchUserType" component={Screens.SwitchUserTypeScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="SplashOne" component={Screens.SplashOneScreen} />
              <Stack.Screen name="SplashTwo" component={Screens.SplashTwoScreen} />
              <Stack.Screen name="SplashThree" component={Screens.SplashThreeScreen} />
              <Stack.Screen name="SelectUserType" component={Screens.SelectUserTypeScreen} />
            </>
          )}
        </>
      )}

      <Stack.Screen name="AllNotifications" component={Screens.AllNotificationsScreen} />
      <Stack.Screen
        name="OfferedServicesCategory"
        component={Screens.OfferedServicesCategoryScreen}
      />
      <Stack.Screen
        name="ConfirmPayment"
        component={Screens.ConfirmPaymentScreen}
        // TODO: find a way to show modal over modal options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="ActionStatus"
        component={Screens.ActionStatusScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen name="AddNewCard" component={Screens.AddNewCardScreen} />
      <Stack.Screen name="ForgotPassword" component={Screens.ResetPasswordScreen} />
      {/* <Stack.Screen name="OnboardingOtp" component={Screens.OtpScreen} /> */}

      {/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList, ServiceUserTabParamList, ServiceProviderTabParamList {}
  }
}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
