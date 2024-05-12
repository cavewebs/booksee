import React from "react"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { CompositeScreenProps } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors, spacing, typography } from "app/theme"
import { TextStyle, ViewStyle } from "react-native"
// import { ServiceUserHomeScreen } from "app/screens/ServiceUser/HomeScreen"
import { Icon } from "app/components"
import { ServiceUserBookingsScreen } from "app/screens/ServiceUser/BookingsScreen"
import { ServiceUserCartScreen } from "app/screens/ServiceUser/CartScreen"
import { ServiceUserProfileScreen } from "app/screens/ServiceUser/ProfileScreen"
import { ServiceUserHomeScreen,   } from "app/screens"

export type ServiceUserTabParamList = {
  Home: undefined
  Bookings: undefined
  Cart: undefined
  Profile: undefined
}

export type ServiceUserTabScreenProps<T extends keyof ServiceUserTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<ServiceUserTabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >

const Tab = createBottomTabNavigator<ServiceUserTabParamList>()
export const ServiceUserNavigator = () => {
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
        component={ServiceUserHomeScreen}
        options={{
          tabBarLabel:"",
          tabBarIcon: ({ focused }) => (
            <Icon icon="Home" color={focused && colors.tint} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={ServiceUserBookingsScreen}
        options={{
          tabBarLabel:"",
          tabBarIcon: ({ focused }) => (
            <Icon icon="Calendar" color={focused && colors.tint} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ServiceUserCartScreen}
        options={{
          tabBarLabel:"",
          tabBarIcon: ({ focused }) => (
            <Icon icon="market" color={focused && colors.tint} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ServiceUserProfileScreen}
        options={{
          tabBarLabel:"",
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
