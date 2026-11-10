// @ts-nocheck - preexisting UI type errors; tracked for a later pass
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, Button, BackArrowHeader, HeaderWithBackButton } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { Icon } from "../../components"
import { colors } from "app/theme"
import { FlatList } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ProviderSubscriptionScreenProps extends AppStackScreenProps<"ProviderSubscription"> {}
const premiumData: string[] = [
  "Access to Therapy",
  "Chat Therapy Sessions (Not real-time)",
  "Smart Provider Matching",
  "Session Scheduling",
  "Access to message history",
  "Switching Providers",
]

export const ProviderSubscriptionScreen: FC<ProviderSubscriptionScreenProps> = observer(
  function ProviderSubscriptionScreen() {
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
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 70, marginBottom: 8 }}>
            <HeaderWithBackButton title="Subscription" />
          </View>
          <Text
            preset="default"
            size="xs"
            text="Purchase subscription to unlock the added benefits of booksee"
            style={{
              textAlign: "center",
              fontWeight: "400",
              color: colors.palette.neutral500,
              marginBottom: 16,
            }}
          />

          <View style={styles.bannerWrapper}>
            <View style={styles.subBanner1}>
              <View style={styles.wideSpace}>
                <View style={styles.mildSpace}>
                  <Icon icon="lovely" />
                  <Text
                    preset="formHelper"
                    size="sm"
                    text="Premium"
                    style={{ fontWeight: "600", fontSize: 16, color: colors.palette.primary50 }}
                  />
                </View>

                <View style={styles.mildSpace}>
                  <Text preset="subheading" size="lg" text="$9.99" />
                  <Text
                    preset="formHelper"
                    size="sm"
                    text="monthly"
                    style={{ fontWeight: "400", color: colors.palette.primary100 }}
                  />
                </View>
              </View>

              {
                <FlatList
                  data={premiumData}
                  renderItem={({ item }) => (
                    <View style={styles.mildSpace}>
                      <Icon icon="tickCircle" />
                      <Text
                        preset="default"
                        size="xs"
                        text={item}
                        style={{ fontWeight: "400", color: colors.palette.primary50 }}
                      />
                    </View>
                  )}
                  keyExtractor={(item) => item}
                />
              }

              <Button preset="default" text="Try Now" onPress={() => navigation.goBack()} />
            </View>
          </View>

          <View style={styles.bannerWrapper}>
            <View style={styles.subBanner2}>
              <View>
                <View style={styles.mildSpace}>
                  <Icon icon="blueLovely" />
                  <Text
                    preset="formHelper"
                    size="sm"
                    text="Free"
                    style={{ fontWeight: "600", fontSize: 16, color: colors.palette.primary50 }}
                  />
                </View>

                {
                  // <FlatList
                  //   data={premiumData}
                  //   renderItem={({ item }) => (
                  //     <View style={{ display: "flex", alignItems: "center" }}>
                  //       <Icon icon="tickCircle" />
                  //       <Text
                  //         preset="default"
                  //         size="xs"
                  //         text={item}
                  //         style={{ fontWeight: "400", color: colors.palette.primary50 }}
                  //       />
                  //     </View>
                  //   )}
                  //   keyExtractor={(item) => item}
                  // />

                  premiumData.map((item, index) => (
                    <View key={index} style={styles.mildSpace}>
                      <Icon icon={index < 3 ? "tickCircle" : "closeCircle"} />
                      <Text
                        preset="default"
                        size="xs"
                        text={item}
                        style={{ fontWeight: "400", color: colors.palette.primary50 }}
                      />
                    </View>
                  ))
                }

                <Button preset="default" text="Try Now" onPress={() => navigation.goBack()} />
              </View>
            </View>
          </View>
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  bannerWrapper: {
    display: "flex",
    justifContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  subBanner1: {
    display: "flex",
    width: 343,
    padding: 16,
    flexDirection: "column",
    justifyContent: "flex-end",
    // alignItems: "center",
    gap: 24,
    borderRadius: 16,
    backgroundColor: colors.palette.primary600,
  },
  subBanner2: {
    display: "flex",
    width: 343,
    padding: 16,
    flexDirection: "column",
    justifyContent: "flex-end",
    // alignItems: "center",
    gap: 24,
    borderRadius: 16,
    backgroundColor: "#9B9DFD",
  },

  wideSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  mildSpace: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 16,
  },
})
