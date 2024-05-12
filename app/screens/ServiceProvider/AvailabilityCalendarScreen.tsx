import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import Checkbox from "expo-checkbox"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, Header, Calendars, TextField, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { colors } from "app/theme"
// import { useStores } from "app/models"

interface AvailabilityCalendarScreenProps extends AppStackScreenProps<"AvailabilityCalendar"> {}

export const AvailabilityCalendarScreen: FC<AvailabilityCalendarScreenProps> = observer(
  function AvailabilityCalendarScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const [openTime, setOpenTime] = useState("")
    const [closeTime, setCloseTime] = useState("")
    const [applyChanges, setChanges] = useState(false)
    const navigation = useNavigation()
    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <View>
          <Header title="Availability" leftIcon="back" onLeftPress={() => navigation.goBack()} />
          <Text text="Specify opening time on specific days" style={{ marginBottom: 39 }} />
          <Calendars />

          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <Text size="xs" text="You open" style={styles.labelText} />
              <TextField
                value={openTime}
                onChangeText={(value) => setOpenTime(value)}
                placeholder="10:00 AM"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text size="xs" text="You close" style={styles.labelText} />
              <TextField
                value={closeTime}
                onChangeText={(value) => setCloseTime(value)}
                placeholder="10:30 AM"
              />
            </View>
          </View>

          <View style={styles.checkContainer}>
            <Checkbox
              value={applyChanges}
              onValueChange={setChanges}
              color={applyChanges ? colors.palette.primary600 : undefined}
            />

            <Text size="xs" text="Apply same for upcoming days" style={styles.checkText} />
          </View>

          <Button preset="primary" text="Update" />
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  labelText: {
    color: "#344054",
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 27,
  },

  checkText: {
    fontWeight: "500",
    color: colors.palette.primary500,
  },

  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 137,
  },
})
