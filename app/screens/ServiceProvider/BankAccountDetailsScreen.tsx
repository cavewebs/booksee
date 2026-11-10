import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, TextField, Text, Icon, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { colors } from "app/theme"
// import { useStores } from "app/models"

interface BankAccountDetailsScreenProps extends AppStackScreenProps<"BankAccountDetails"> {}

export const BankAccountDetailsScreen: FC<BankAccountDetailsScreenProps> = observer(
  function BankAccountDetailsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const [bnkName, setBnkName] = useState<string>("")
    const [accNumber, setAccNumber] = useState<string>("")
    const [confirmNum, setConfirmNum] = useState<string>("")
    const [holderName, setHolderName] = useState<string>("")
    const [holderType, setHolderType] = useState<string>("")
    const navigation = useNavigation()

    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <Header
          title="Bank Account Details"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />

        <View>
          <View style={styles.textFieldWrapper}>
            <Text
              preset="label"
              size="xs"
              weight="medium"
              text="Sort Code"
              style={styles.labelColor}
            />

            <TextField
              value={bnkName}
              onChangeText={(value) => setBnkName(value)}
              placeholder="GTB"
            />
          </View>

          <View style={styles.textFieldWrapper}>
            <Text
              preset="label"
              size="xs"
              weight="medium"
              text="Account Number"
              style={styles.labelColor}
            />

            <TextField
              value={accNumber}
              onChangeText={(value) => setAccNumber(value)}
              placeholder="00000000"
            />
          </View>

          <View style={styles.textFieldWrapper}>
            <Text
              preset="label"
              size="xs"
              weight="medium"
              text="Confirm Number"
              style={styles.labelColor}
            />

            <TextField
              value={confirmNum}
              onChangeText={(value) => setConfirmNum(value)}
              placeholder="00000000"
            />
          </View>

          <View style={styles.textFieldWrapper}>
            <Text
              preset="label"
              size="xs"
              weight="medium"
              text="Holder Name"
              style={styles.labelColor}
            />

            <TextField
              value={holderName}
              onChangeText={(value) => setHolderName(value)}
              placeholder="Example Account Holder"
            />
          </View>

          <View style={styles.textFieldWrapper}>
            <Text
              preset="label"
              size="xs"
              weight="medium"
              text="Holder Type"
              style={styles.labelColor}
            />

            <TextField
              value={holderType}
              onChangeText={(value) => setHolderType(value)}
              RightAccessory={() => <Icon icon="caretDown" />}
            />
          </View>
        </View>

        <Button
          preset="primary"
          text="Submit"
          onPress={() => navigation.navigate("ProviderSubscription")}
        />
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  labelColor: {
    color: "#344054",
    marginBottom: 6,
  },

  textFieldWrapper: {
    marginBottom: 20,
  },
})
