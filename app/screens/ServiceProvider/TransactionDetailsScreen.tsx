import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, Icon, BackArrowHeader, AutoImage, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import profilePics from "assets/images/profileImg.png"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface TransactionDetailsScreenProps extends AppStackScreenProps<"TransactionDetails"> { }

export const TransactionDetailsScreen: FC<TransactionDetailsScreenProps> = observer(
  function TransactionDetailsScreen() {
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
          <BackArrowHeader header="Booking View" />

          <View style={styles.centerAlign}>
            <AutoImage source={profilePics} style={{ width: 80, height: 80 }} />

            <Text
              preset="default"
              size="sm"
              text="Anita Joseph"
              style={{ fontWeight: "600", textAlign: "center", color: colors.text }}
            />

            <Text
              preset="default"
              size="xs"
              text="anitajoseph@gmail.com"
              style={{
                fontWeight: "400",
                textAlign: "center",
                color: colors.text,
                marginBottom: 25,
              }}
            />
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.wideSpacing}>
              <Text size="xs" text="Recieved" style={styles.bottomText} />
              <Text size="xs" text="$500" style={styles.amountText} />
            </View>

            <View style={styles.wideSpacing}>
              <Text size="xs" text="Booking ID" style={styles.bottomText} />
              <Text size="xs" text="91268469" style={styles.amountText} />
            </View>
            <View style={styles.mildSpacing}>
              <Text size="xs" text="04.09.2023" style={styles.amountText} />
              <Text size="xs" text="4.00PM" style={styles.amountText} />
            </View>
          </View>
        </View>
      </Screen >
    )
  },
)

const styles = StyleSheet.create({
  mildSpacing: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  wideSpacing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  bottomText: {
    fontWeight: "400",
    color: "#667085",
  },

  amountText: {
    fontWeight: "500",
    color: colors.text,
  },

  bottomContainer: {
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: "#F9F9F9",
    marginBottom: 16,
  },
})
