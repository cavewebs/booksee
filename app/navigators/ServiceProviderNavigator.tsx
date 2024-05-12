import React from "react"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { CompositeScreenProps } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors, spacing, typography } from "app/theme"
import { TextStyle, ViewStyle } from "react-native"
import { Icon } from "app/components"
import {
  ServiceProviderHomeScreen,
  ServiceProviderServicesScreen,
  ServiceProviderBookingsScreen,
  ServiceProviderProfileScreen,
  AvailabilityCalendarScreen,
  // BookViewScreen,
} from "app/screens"

export type ServiceProviderTabParamList = {
  Home: undefined
  Bookings: undefined
  Services: undefined
  Profile: undefined
}

export type ServiceProviderTabScreenProps<T extends keyof ServiceProviderTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<ServiceProviderTabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >

const Tab = createBottomTabNavigator<ServiceProviderTabParamList>()
export const ServiceProviderNavigator = () => {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 50 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={ServiceProviderHomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Icon icon="Home" color={focused && colors.tint} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={ServiceProviderBookingsScreen}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ focused }) => (
            <Icon icon="Calendar" color={focused && colors.tint} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServiceProviderServicesScreen}
        options={{
          tabBarLabel: "Services",
          tabBarIcon: ({ focused }) => (
            <Icon icon="scissors" color={focused && colors.tint} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ServiceProviderProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Icon icon="userImage" color={focused && colors.tint} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
