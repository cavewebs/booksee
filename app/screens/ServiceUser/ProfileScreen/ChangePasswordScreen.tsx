/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, HeaderWithBackButton, OtherHeader, Screen, Text, TextField } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ChangePasswordScreenProps extends AppStackScreenProps<"ChangePassword"> {}

export const ChangePasswordScreen: FC<ChangePasswordScreenProps> = observer(
  function ChangePasswordScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen
        style={$root}
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={[ "bottom"]}
      >
         <HeaderWithBackButton title="Change password" />
        <Text
          text="Your new password must be different fron the current password"
          style={styles.subTitle}
        />
        <TextField
          label="Enter Current Password"
          style={styles.textField}
          inputWrapperStyle={styles.textField}
          containerStyle={styles.containerStyle}
          keyboardType="default"
        />
        <TextField
          label="Enter New Password"
          style={styles.textField}
          inputWrapperStyle={styles.textField}
          containerStyle={styles.containerStyle}
          keyboardType="default"
        />
        <TextField
          label="Confirm New Password"
          style={styles.textField}
          inputWrapperStyle={styles.textField}
          containerStyle={styles.containerStyle}
          keyboardType="default"
        />
        <Text text="Both passwords must match" />
        <Button
          text="Update"
          style={styles.button}
          textStyle={styles.buttonText}
          pressedStyle={styles.pressedButton}
          pressedTextStyle={styles.pressedButtonText}
          onPress={()=>navigation.goBack()}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
 
  button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.palette.primary600,
    borderColor: colors.palette.primary600,
    borderRadius: 27.2,
    height: 48,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "#F5F5FF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  containerStyle: {
    marginBottom: 10,
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: colors.palette.primary600,
  },
  subTitle: {
    // textAlign: "center",
    marginVertical: 10,
    marginBottom: 30
  },
  textContainer: {
    borderBottomColor: colors.palette.neutral200,
    borderBottomWidth: 0.5,
    marginTop: 80,
    paddingBottom: 10,
  },
  textField: {
    backgroundColor: colors.palette.neutral100,
  },
})
