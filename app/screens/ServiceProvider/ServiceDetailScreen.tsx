import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet, ScrollView } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, Icon, TextField, Button, BackArrowHeader, Header } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
import Checkbox from "expo-checkbox"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ServiceDetailScreenProps extends AppStackScreenProps<"ServiceDetail"> {}

export const ServiceDetailScreen: FC<ServiceDetailScreenProps> = observer(
  function ServiceDetailScreen() {
    const [serviceName, setServiceName] = useState<string>("")
    const [detailedPrice, setDetailedPrice] = useState<string>("")
    const [duration, setDuration] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [maleChecked, setMaleChecked] = useState(false)
    const [femaleChecked, setFemaleChecked] = useState(false)
    const [genderChecked, setCheckedGender] = useState(false)
    const [checkedHome, setCheckedHome] = useState(false)
    const [checkedSalon, setCheckedSalon] = useState(false)
    const [checkedLocation, setCheckedLocation] = useState(false)
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <Header title="Add Service" leftIcon="back" onLeftPress={() => navigation.goBack()} />

        <View>
          <TextField
            value={serviceName}
            onChangeText={(value) => setServiceName(value)}
            label="Service Name"
          />

          <View>
            <Text
              size="xs"
              text="Offer service for"
              style={{ fontWeight: "500", color: "#344054", marginBottom: 8, marginTop: 20 }}
            />

            <View style={styles.wideSpacing}>
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

            <View style={styles.wideSpacing}>
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

          <TextField
            value={duration}
            onChangeText={(value) => setDuration(value)}
            label="Duration"
          />

          <TextField
            value={detailedPrice}
            onChangeText={(value) => setDetailedPrice(value)}
            label="Price"
          />

          <View>
            <Text size="xs" text="Description" style={styles.inputLabel} />
            <Text
              size="xs"
              text=" A  quick description of your service"
              style={{ fontWeight: "400", color: " #667085", marginBottom: 8 }}
            />

            <TextField
              value={description}
              onChangeText={(value) => setDescription(value)}
              placeholder="Type here..."
              style={{ height: 147 }}
            />

            <Text
              size="xs"
              text="40 characters left"
              style={{ fontWeight: "400", color: " #667085", marginTop: 16, marginBottom: 40 }}
            />
          </View>

          <Button preset="primary" text="Add"  onPress={()=>navigation.goBack()} />
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  mildSpacing: {
    flexDirection: "row",
    alignItems: "center",
  },

  wideSpacing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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

  inputLabel: {
    fontWeight: "500",
    color: "#344054",
    marginTop: 20,
    marginBottom: 8,
  },
})
