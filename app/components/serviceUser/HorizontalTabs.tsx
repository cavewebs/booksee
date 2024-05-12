import * as React from "react"
import { StyleProp, View, ViewStyle, StyleSheet, Platform, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { Text } from "app/components/Text"

export interface HorizontalTabsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  tabs: Array<string>
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
  activeTab: number
}

/**
 * Describe your component here
 */
export const HorizontalTabs = observer(function HorizontalTabs(props: HorizontalTabsProps) {

  const { style, tabs, setActiveTab, activeTab } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      {tabs.map((tabName, index) => (
        <TouchableOpacity onPress={()=>setActiveTab(index)} style={[styles.tabContainer, index === activeTab && styles.activeTabContainer]} key={index}>
          <Text text={tabName} weight="semiBold" style={[styles.tabContainerText, index === activeTab && styles.activeTabContainerText]}/>
        </TouchableOpacity>
      ))}
    </View>
  )
})

const $container: ViewStyle = {
  display: "flex",
  height: 40,
  gap: 2,
  padding: 2,
  flexDirection: "row",
  justifyContent: "space-evenly",
  backgroundColor: colors.palette.primary50,
  marginVertical: 10,
  borderRadius: 6
}

const styles = StyleSheet.create({
  activeTabContainer: {
    backgroundColor: colors.palette.neutral100,
    borderRadius: 6,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      // Elevation for Android
      android: {
        elevation: 5,
      },
    }),

  },
  activeTabContainerText: {
    color: colors.palette.primary600

  },
  tabContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
    // eslint-disable-next-line react-native/no-color-literals
  tabContainerText:{
    color: "#6B7280"

  },

})
