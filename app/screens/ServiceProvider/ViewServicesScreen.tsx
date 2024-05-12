import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet, ScrollView } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, TextField, PreviousWork, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { Icon, IconTypes } from "../../components/Icon"
import Checkbox from "expo-checkbox"
import { colors } from "app/theme"

import { useNavigation } from "@react-navigation/native"

interface ViewServicesScreenProps extends AppStackScreenProps<"ViewServices"> { }

export const ViewServicesScreen: FC<ViewServicesScreenProps> = observer(
  function ViewServicesScreen() {
    const [serviceName, setServiceName] = useState<string>("")
    const [serviceDuration, setServiceDuration] = useState<string>("")
    const [servicePrice, setServicePrice] = useState<string>("")
    const [maleChecked, setMaleChecked] = useState<boolean>(false)
    const [femaleChecked, setFemaleChecked] = useState<boolean>(false)
    const [genderChecked, setCheckedGender] = useState<boolean>(false)
    const [checkedHome, setCheckedHome] = useState<boolean>(false)
    const [checkedSalon, setCheckedSalon] = useState<boolean>(false)
    const [checkedLocation, setCheckedLocation] = useState<boolean>(false)
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen
        preset="auto"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom", "top"]}
      >
        <View>
          <View style={styles.spaceItems}>
            <Button
              // onPress={() => Alert.alert("pressed")}
              LeftAccessory={(props) => <Icon icon="pin" />}
            />
            <View style={styles.mildSpacing}>
              <Button
                // onPress={() => Alert.alert("pressed")}
                LeftAccessory={(props) => <Icon icon="Edit" />}
              />

              <Button
                // onPress={() => Alert.alert("pressed")}
                LeftAccessory={(props) => <Icon icon="deletIcon" />}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Text preset="subheading" text="Hairs>" style={{ color: colors.text }} />
            <Text preset="subheading" text="Hairs Cut" style={{ color: colors.text }} />
          </View>
          <Text
            preset="default"
            size="xs"
            text="Get a nice haircut with a professional barber"
            style={{
              fontWeight: "400",
              color: colors.palette.neutral500,
              marginTop: 10,
              marginBottom: 26,
            }}
          />

          <View style={styles.spaceItems}>
            <Text preset="bold" size="xs" text="Available" style={{ color: "#344054" }} />
            <Icon icon="toggleButton" />
          </View>

          <TextField
            value={serviceName}
            onChangeText={(value) => setServiceName(value)}
            label="Service Name"
          />
          <TextField
            value={serviceDuration}
            onChangeText={(value) => setServiceDuration(value)}
            label="Set Duration"
          />

          <TextField
            value={servicePrice}
            onChangeText={(value) => setServicePrice(value)}
            label="Price"
          />
          <View>
            <Text
              size="xs"
              text="Offer service for"
              style={{ fontWeight: "500", color: "#344054", marginTop: 24, marginBottom: 12 }}
            />

            <View style={styles.spaceItems}>
              <View style={styles.checkedItem}>
                <Text size="xs" text="Male" style={styles.checkLabel} />
                <Checkbox
                  value={maleChecked}
                  onValueChange={setMaleChecked}
                  color={maleChecked ? colors.palette.primary600 : undefined}
                />
              </View>

              <View style={styles.checkedItem}>
                <Text size="xs" text="Female" style={styles.checkLabel} />
                <Checkbox
                  value={femaleChecked}
                  onValueChange={setFemaleChecked}
                  color={femaleChecked ? colors.palette.primary600 : undefined}
                />
              </View>
              <View style={styles.checkedItem}>
                <Text size="xs" text="Both" style={styles.checkLabel} />
                <Checkbox
                  value={genderChecked}
                  onValueChange={setCheckedGender}
                  color={genderChecked ? colors.palette.primary600 : undefined}
                />
              </View>
            </View>

            <View style={styles.spaceItems}>
              <View style={styles.checkedItem}>
                <Text size="xs" text="Male" style={styles.checkLabel} />
                <Checkbox
                  value={checkedHome}
                  onValueChange={setCheckedHome}
                  color={checkedHome ? colors.palette.primary600 : undefined}
                />
              </View>
              <View style={styles.checkedItem}>
                <Text size="xs" text="Female" style={styles.checkLabel} />
                <Checkbox
                  value={checkedSalon}
                  onValueChange={setCheckedSalon}
                  color={checkedSalon ? colors.palette.primary600 : undefined}
                />
              </View>
              <View style={styles.checkedItem}>
                <Text size="xs" text="Both" style={styles.checkLabel} />
                <Checkbox
                  value={checkedLocation}
                  onValueChange={setCheckedLocation}
                  color={checkedLocation ? colors.palette.primary600 : undefined}
                />
              </View>
            </View>
          </View>
          <Text
            size="xs"
            text="Previous Work"
            style={{ fontWeight: "500", color: colors.text, marginBottom: 14 }}
          />
          <PreviousWork />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 32 }}>
            <Button preset="default" text="Cancel" style={{ flex: 1 }} onPress={()=>navigation.goBack()} />
            <Button preset="primary" text="Save" style={{ flex: 1 }} onPress={()=>navigation.goBack()} />
          </View>
        </View>
      </Screen >
    )
  },
)

const styles = StyleSheet.create({
  spaceItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  mildSpacing: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },

  checkLabel: {
    fontWeight: "500",
    color: colors.palette.neutral500,
  },

  checkedItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
})
