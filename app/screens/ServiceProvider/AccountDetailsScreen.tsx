import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface AccountDetailsScreenProps extends AppStackScreenProps<"AccountDetails"> { }

export const AccountDetailsScreen: FC<AccountDetailsScreenProps> = observer(
  function AccountDetailsScreen() {
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
        {/* use what Header if you like or the Text if it suits better don't forget to delete the unused import at the end */}
        {/* <Text preset="heading" text="notifications" /> */}
        < Header title="Acount Details" leftIcon="back" onLeftPress={() => navigation.goBack()} />
        < View style={{ marginTop: 32 }}>
          <View style={styles.bottomGap}>
            <Text size="xs" weight="medium" text="Sort Code" style={styles.firstText} />
            <Text size="sm" weight="normal" text="9079797073" style={styles.secondText} />
          </View>

          <View style={styles.bottomGap}>
            <Text size="xs" weight="medium" text="Account Number" style={styles.firstText} />
            <Text size="sm" weight="normal" text="0237154436" style={styles.secondText} />
          </View>

          <View style={styles.bottomGap}>
            <Text size="xs" weight="medium" text="Account Holder Name" style={styles.firstText} />
            <Text size="sm" weight="normal" text="Ayominde Gbenga" style={styles.secondText} />
          </View>

          <View style={styles.bottomGap}>
            <Text size="xs" weight="medium" text="Account Holder Type" style={styles.firstText} />
            <Text size="sm" weight="normal" text="Business" style={styles.secondText} />
          </View>
        </View >
      </Screen >
    )
  },
)

const styles = StyleSheet.create({
  firstText: {
    color: "#344054",
  },

  secondText: {
    color: "#667085",
  },

  bottomGap: {
    marginBottom: 32,
  },
})
