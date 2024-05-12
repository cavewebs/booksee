import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, TextField, Text, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ChangePasswordScreenProps extends AppStackScreenProps<"ChangePassword"> {}

export const ChangePasswordScreen: FC<ChangePasswordScreenProps> = observer(
  function ChangePasswordScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["top", "bottom"]}
      >
        {/* use what Header if you like or the Text if it suits better don't forget to delete the unused import at the end */}
        {/* <Text preset="heading" text="notifications" /> */}
        <Header title="change Password" leftIcon="back" onLeftPress={() => navigation.goBack()} />

        <Text
          preset="default"
          size="xs"
          text="Your new password must be different fron the previous password"
          style={styles.passwordText}
        />

        <View style={{ marginBottom: 12 }}>
          <TextField
            value={password}
            onChangeText={(value) => setPassword(value)}
            label="Enter New Password"
            style={{ marginBottom: 12 }}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <TextField
            value={confirmPassword}
            onChangeText={(value) => setConfirmPassword(value)}
            label="Confirm New Password"
          />
        </View>

        <Text size="xxs" text="Both passwords must match" style={styles.textTip} />

        <Button preset="primary" text="Update" />
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  passwordText: {
    textAlign: "center",
    fontWeight: "400",
    color: "#596780",
    marginTop: 16,
    marginBottom: 32,
  },
  textTip: {
    color: "#596780",
    fontWeight: "400",
    marginBottom: 32,
  },
})
