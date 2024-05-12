import React, { useEffect, useState } from "react"
import { StyleSheet, View, Button, Platform } from "react-native"
import * as Calendar from "expo-calendar"
import CalendarPicker from "react-native-calendar-picker"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"

export interface CalendarProps {
  /**
   * An optional style override useful for padding & margin.
   */
}

/**
 * Describe your component here
 *
 */

async function getDefaultCalendarSource() {
  const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
  const defaultCalendars = calendars.filter((each) => each.source.name === "Default")
  return defaultCalendars.length ? defaultCalendars[0].source : calendars[0].source
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === "ios"
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: "Expo Calendar" }

  let sourceId: string | null = null

  if ("id" in defaultCalendarSource) {
    // Check if 'id' property exists
    sourceId = defaultCalendarSource.id
  }
  const newCalendarID = await Calendar.createCalendarAsync({
    title: "Expo Calendar",
    color: "blue",
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: sourceId,
    source: defaultCalendarSource as any,
    name: "internalCalendarName",
    ownerAccount: "personal",
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  })
  console.log(`Your new calendar ID is: ${newCalendarID}`)
  return newCalendarID
}

export const Calendars = observer(function Calendars(props: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  useEffect(() => {
    ;(async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync()
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
        console.log("Here are all your calendars:")
        console.log({ calendars })
      }
    })()
  }, [])
  return (
    <View>
      <CalendarPicker onDateChange={setSelectedDate} />
    </View>
  )
})
