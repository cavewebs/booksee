/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View, TouchableOpacity } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, HeaderWithBackButton, ImageUploader, OtherHeader, Screen, SectionHeader, Text, TextField } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"
import { Camera, CameraType } from 'expo-camera';

// import { useStores } from "app/models"

interface SupportScreenProps extends AppStackScreenProps<"Support"> {}

export const SupportScreen: FC<SupportScreenProps> = observer(function SupportScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  

  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer} safeAreaEdges={["bottom"]} >
      <HeaderWithBackButton title="Support" />
      <TextField
        label="Subject"
        keyboardType="default"
        style={styles.textField}
        inputWrapperStyle={styles.textFieldContainer}
      />
      <TextField
        label="Description"
        keyboardType="default"
        style={styles.textField}
        inputWrapperStyle={styles.textFieldContainer}
        multiline
        placeholder="Type here..."
      />
      <Text text="40 characters left" style={styles.textFieldMessage} weight="medium" />

      <SectionHeader leftText="Images" />
      <Text text="Add Service Images" style={styles.textFieldMessage} weight="medium" />
      <ImageUploader dontShowText/>
      <Button
        text="Submit"
        style={styles.button}
        textStyle={styles.buttonText}
        pressedStyle={styles.pressedButton}
        pressedTextStyle={styles.pressedButtonText}
        onPress={()=>navigation.goBack()}
      />
    </Screen>
  )
})

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
    width: "100%",
  },
  buttonText: {
    color: "#F5F5FF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: colors.palette.primary600,
  },
  textField: {
    backgroundColor: colors.palette.neutral100,
  },
  textFieldContainer: {
    backgroundColor: colors.palette.neutral100,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
  textFieldMessage: {
    color: "#667085",
  },
  totalContainer: {
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-evenly",
    marginVertical: 15,
    padding: 20
  },
})