import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, AutoImage, SectionText, TextField, MyServices, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { Icon } from "app/components"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import HomeBanner from "assets/images/home-banner.png"
import beardImg from "assets/images/trim-beard0.png"

interface ServiceSettingsScreenProps extends AppStackScreenProps<"ServiceSettings"> { }

export const ServiceSettingsScreen: FC<ServiceSettingsScreenProps> = observer(
  function ServiceSettingsScreen() {
    const [inputData, setInputData] = useState<string>("")
    const statuses = true
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <View>
          <View style={styles.widespacing}>
            <View style={styles.serviceAlignment}>
              <Text preset="default" size="xs" text="7 Montgomery road, UK" />
              <Icon icon="carretdown" />
            </View>

            <View style={styles.iconAlignment}>
              <Button
                // onPress={() => Alert.alert("pressed")}
                LeftAccessory={(props) => <Icon icon="solarMapLinear" />}
              />

              <Button
                // onPress={() => Alert.alert("pressed")}
                LeftAccessory={(props) => <Icon icon="bell" />}
              />
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <AutoImage source={HomeBanner} style={styles.bannerImg} />
          </View>

          <SectionText subheading="Offering Services for" text="Edit" />

          <View>
            <TextField
              value={inputData}
              onChangeText={(value) => setInputData(value)}
              placeholder="Females"
              LeftAccessory={() => <Icon icon="female" />}
              status={statuses ? "disabled" : null}
              style={styles.inputContainer}
              inputWrapperStyle={styles.inputWrapper}
            />
          </View>

          <SectionText subheading="Service Location" text="Edit" />

          <View>
            <TextField
              value={inputData}
              onChangeText={(value) => setInputData(value)}
              placeholder="Females"
              LeftAccessory={() => <Icon icon="solarHome" />}
              status={statuses ? "disabled" : null}
              style={styles.inputContainer}
              inputWrapperStyle={styles.inputWrapper}
            />
          </View>

          <SectionText subheading="Services" text="View All" />

          <MyServices
            headerText="Beard Trim"
            price="$500"
            time="30 minutes"
            status="Available"
            serviceImg={beardImg}
          />

          <MyServices
            headerText="Beard Trim"
            price="$500"
            time="30 minutes"
            status="Available"
            serviceImg={beardImg}
          />
        </View>
      </Screen >
    )
  },
)

const styles = StyleSheet.create({
  serviceAlignment: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },

  iconAlignment: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  widespacing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 45,
  },

  inputWrapper: { alignItems: "center", paddingLeft: 16 },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 1,
    paddingRight: 1,
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: colors.palette.primary100,
    // borderStyle: "solid",
  },

  bannerImg: {
    borderRadius: 20,
    height: 147,
    width: 343,
  },
})
