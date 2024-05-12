import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text, AutoImage, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { colors } from "app/theme"
import bro from "assets/images/bro.png"
// import { useStores } from "app/models"

interface SubmitNotificationScreenProps extends AppStackScreenProps<"SubmitNotification"> {}

export const SubmitNotificationScreen: FC<SubmitNotificationScreenProps> = observer(
  function SubmitNotificationScreen() {
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
        <View style={styles.imageWrapper}>
          <AutoImage source={bro} style={{ width: 240, height: 233.5 }} />
        </View>

        <Text
          preset="bold"
          size="lg"
          text="Your service details were submitted"
          style={styles.headerText}
        />

        <Text
          size="sm"
          weight="normal"
          text="We will be contacted via your phone number +44 239897974 in a few minutes"
          style={styles.bottomText}
        />

        <Button
          preset="primary"
          text="View Account"
          onPress={() => navigation.navigate("OnboardingAddAddress")}
        />
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  bottomText: {
    color: "#667085",
    marginTop: 8,
    marginBottom: 200,
    textAlign: "center",
  },

  headerText: {
    color: colors.text,
    textAlign: "center",
  },

  imageWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 140,
    marginBottom: 35,
  },
})
