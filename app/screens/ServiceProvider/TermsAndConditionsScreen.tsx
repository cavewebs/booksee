import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, BackArrowHeader } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface TermsAndConditionsScreenProps extends AppStackScreenProps<"TermsAndConditions"> {}

export const TermsAndConditionsScreen: FC<TermsAndConditionsScreenProps> = observer(
  function TermsAndConditionsScreen() {
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
          <BackArrowHeader header="Terms and Conditions" />

          <Text
            preset="default"
            size="xs"
            text="Booksee has been giving services to its clients by If you are facing financial challenges, you may be eligible for a discounted therapy costIf you are facing financial challenges, you may be eligible for a discounted therapy cost."
            style={styles.policyText}
          />
          <Text
            size="xs"
            text="What informaton does Booksee care capture about visitors to its website?"
            style={styles.policySubHeader}
          />
          <Text
            preset="default"
            size="xs"
            text="Booksee web server uses an extended log file format which captures date and time of visit, referring address (location from which visitor comes to Booksee.com), type of internet browser and visitor’s IP address. The log file does not capture a visitor’s email address"
            style={styles.policyText}
          />

          <Text
            size="xs"
            text="How does Booksee care use the information?"
            style={styles.policySubHeader}
          />
          <Text
            preset="default"
            size="xs"
            text="The information collected through this site helps us identify the type of website content our customers value most. We use this information to market and improve the website and our services. we also use this information to send you email notifications about updates on the website, and to contact you by other means for marketing and other purposes."
            style={styles.policyText}
          />
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  policyText: {
    fontWeight: "400",
    color: colors.palette.neutral600,
    marginBottom: 16,
  },
  policySubHeader: {
    fontWeight: "700",
    color: colors.text,
  },
})
