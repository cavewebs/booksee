import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { HeaderWithBackButton, OtherHeader, Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface TermAndConditionsScreenProps extends AppStackScreenProps<"TermAndConditions"> {}

export const TermAndConditionsScreen: FC<TermAndConditionsScreenProps> = observer(
  function TermAndConditionsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen
        style={$root}
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <HeaderWithBackButton title="Terms and Conditions" />
        <Text
          text="Booksee has been giving services to its clients by If you are facing financial challenges, you may be eligible for a discounted therapy costIf you are facing financial challenges, you may be eligible for a discounted therapy cost."
          size="sm"
          weight="light"
        />
        <View>
          <Text
            text="What informaton does Booksee care capture about visitors to its website?"
            size="sm"
            weight="semiBold"
            style={styles.headerText}
          />
          <Text
            text="Booksee web server uses an extended log file format which captures date and time of visit, referring address (location from which visitor comes to blueroom.com), type of internet browser and visitor’s IP address. The log file does not capture a visitor’s email address"
            size="sm"
            weight="light"
          />
        </View>
        <View>
          <Text
            text="How does Booksee care use the information?"
            size="sm"
            weight="semiBold"
            style={styles.headerText}
          />
          <Text
            text="The information collected through this site helps us identify the type of website content our customers value most. We use this information to market and improve the website and our services. we also use this information to send you email notifications about updates on the website, and to contact you by other means for marketing and other purposes."
            size="sm"
            weight="light"
          />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 10,
    marginTop: 20,
  },
})
