/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, HeaderWithBackButton, OtherHeader, Screen, Text, TextField } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface EditDetailsScreenProps extends AppStackScreenProps<"EditDetails"> {}

export const EditDetailsScreen: FC<EditDetailsScreenProps> = observer(function EditDetailsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={screenContentContainer}
      safeAreaEdges={[ "bottom"]}
    >
       <HeaderWithBackButton title="Edit Details" />
      <TextField
        label="Full Name"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.containerStyle}
        keyboardType="default"
      />
      <TextField
        label="Enter Address"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.containerStyle}
        keyboardType="email-address"
      />
      <TextField
        label="Phone Number"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.containerStyle}
        keyboardType="number-pad"
      />
      <TextField
        label="Gender"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.containerStyle}
        keyboardType="number-pad"
      />
      <Button
        text="Save"
        style={styles.button}
        textStyle={styles.buttonText}
        pressedStyle={styles.pressedButton}
        pressedTextStyle={styles.pressedButtonText}
      />

    <View style={styles.textContainer}>
      <Text text="Delete Account" style={styles.deleteText} size="md" weight="medium"/>
    </View>
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
  containerStyle: {
    marginBottom: 10,
  },
  deleteText :{
    color: "#EF4444"
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: colors.palette.primary600,
  },
  textContainer: {
    borderBottomColor: colors.palette.neutral200,
    borderBottomWidth: .5,
    marginTop: 80,
    paddingBottom: 10
  },
  textField: {
    backgroundColor: colors.palette.neutral100,
  },
})
