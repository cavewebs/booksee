import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet, FlatList } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, Icon, TextField, Button, BackArrowHeader, Header } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"

import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface AvailabilityScreenProps extends AppStackScreenProps<"Availability"> {}

export const AvailabilityScreen: FC<AvailabilityScreenProps> = observer(
  function AvailabilityScreen() {
    const [input, setInput] = useState("")
    const openDays: string[] = [
      "Mondays",
      "Tuesdays",
      "Wednesdays",
      "Thursdays",
      "Fridays",
      "Saturdays",
      "Sundays",
    ]
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={[ "bottom", "left"]}
      >
        <Header
          title="Availability"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />
        <View>
          <Text
            size="xs"
            text="Specify opening and closing times on specific days"
            style={{ fontWeight: "500", textAlign: "center", color: colors.palette.neutral700, marginBottom: 25 }}
          />

          <View style={{ marginBottom: 24 }}>
            <Text preset="label" size="sm" text="Default" />

            <View style={styles.flexAlignment}>
              <View style={{ flex: 1 }}>
                <TextField
                  value={input}
                  onChangeText={(value) => setInput(value)}
                  RightAccessory={() => <Icon icon="carbonTime" style={styles.clockIcon} />}
                  placeholder="You Open"
                  inputWrapperStyle={styles.inputWrapper}
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextField
                  value={input}
                  onChangeText={(value) => setInput(value)}
                  RightAccessory={() => <Icon icon="carbonTime" style={styles.clockIcon} />}
                  placeholder="You Open"
                  inputWrapperStyle={styles.inputWrapper}
                />
              </View>
            </View>

            <FlatList
              data={openDays}
              renderItem={({ item }) => (
                <View>
                  <Text
                    preset="bold"
                    size="xs"
                    text={item}
                    style={{ color: colors.text, marginTop: 16, marginBottom: 4 }}
                  />
                  <View style={styles.flexAlignment}>
                    <View style={{ flex: 1 }}>
                      <TextField
                        value={input}
                        onChangeText={(value) => setInput(value)}
                        RightAccessory={() => <Icon icon="carbonTime" style={styles.clockIcon} />}
                        placeholder="You Open"
                        inputWrapperStyle={styles.inputWrapper}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <TextField
                        value={input}
                        onChangeText={(value) => setInput(value)}
                        RightAccessory={() => <Icon icon="carbonTime" style={styles.clockIcon} />}
                        placeholder="You Open"
                        inputWrapperStyle={styles.inputWrapper}
                      />
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item}
            />
          </View>

          <Button preset="primary" text="Update" onPress={()=>navigation.goBack()} />
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  availabilityTxt: {
    textAlign: "center",
    color: colors.text,
  },

  flexAlignment: {
    flexDirection: "row",
    gap: 8,
  },

  mildSpacing: {
    flexDirection: "row",
    alignItems: "center",
  },

  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 5
  },
  clockIcon: {
    marginRight: 5
  },

  // labelTxt: {
  //   color: colors.palette.neutral800,
  // },
})
