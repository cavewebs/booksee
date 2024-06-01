/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet, TextInput, TextStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  AutoImage,
  Icon,
  Screen,
  Text,
  TextField,
  Toggle,
  TextFieldAccessoryProps,
  Button,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import SplashImg1 from "assets/images/splash-1.png"
import { colors, spacing } from "app/theme"
import { useStores } from "app/models"

import FlagSelector from "app/components/Custom/FlagSelector"
import { useNavigation } from "@react-navigation/native"

interface SigninScreenProps extends AppStackScreenProps<"Signin"> {}

export const SigninScreen: FC<SigninScreenProps> = observer(function SigninScreen() {
  const navigation = useNavigation()
  const authPasswordInput = useRef<TextInput>()

  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(true)
  const {
    authenticationStore: {
      authPhone,
      setAuthPhone,
      setAuthToken,
      validationError,
      userType,
      setUserType,
    },
  } = useStores()

  const {
    onboardingStore: { hasCompletedOnboarding, setHasCompletedOnboarding },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    setAuthPhone("07324412345")
    setAuthPassword("TestPswd@123")
    console.log(userType)
    userType === "su" ? setUserType("su") : setUserType("sp")
    console.log(userType)

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      setAuthPhone("")
    }
  }, [])

  const error = isSubmitted ? validationError : ""

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)
    console.log(userType)
    userType === "su" ? setUserType("su") : setUserType("sp")
    console.log(userType)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthPhone("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
    setHasCompletedOnboarding(true)
    userType === "su"
      ? navigation.navigate("ServiceUser", { screen: "Home", params: {} })
      : navigation.navigate("ServiceProvider", { screen: "Home", params: {} })
  }

  const navigateTo = (url: string) => {
    navigation.navigate(url)
  }

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  return (
    <Screen preset="auto" contentContainerStyle={styles.loginContainer} safeAreaEdges={["bottom"]}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <View>
            <AutoImage source={SplashImg1} style={styles.splashImg} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text preset="subheading" size="xl" text="Sign In" />
            <Text text="Welcome Back" size="lg" style={{ color: colors.palette.neutral800 }} />
          </View>
          {attemptsCount > 2 && (
            <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />
          )}
        </View>
        <View style={styles.bottomView}>
          <TextField
            value={authPhone}
            LeftAccessory={FlagSelector}
            onChangeText={setAuthPhone}
            label={"Phone number"}
            keyboardType="phone-pad"
            helper={error}
            status={error ? "error" : undefined}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
          />
          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            label="Password"
            onSubmitEditing={() => login()}
            RightAccessory={PasswordRightAccessory}
          />
          <View style={styles.keepSignedIn}>
            <Toggle
              value={keepMeSignedIn}
              onValueChange={() => setKeepMeSignedIn(!keepMeSignedIn)}
              variant="checkbox"
              label="Keep me signed in"
              inputDetailStyle={{
                backgroundColor: colors.palette.neutral200,
                tintColor: colors.tint,
              }}
              inputInnerStyle={{
                borderColor: colors.tint,
              }}
              inputOuterStyle={{ borderColor: colors.tint }}
            />
          </View>
          <View style={styles.signInButton}>
            <Button preset="primary" text="Sign in" onPress={() => login()} />
          </View>
          <View style={styles.forgotPasswordTexts}>
            <Text text="Forgot Password?" />
            <Button
              style={styles.textButton}
              text="Reset"
              onPress={() => navigateTo("ForgotPassword")}
            />
          </View>
          <View style={styles.forgotPasswordTexts}>
            <Text text="Do not have an account?" />
            <Button style={styles.textButton} text="Sign Up" onPress={() => navigateTo("Signup")} />
          </View>
          <View style={styles.switchUserType}>
            <Text
              text={userType === "sp" ? "Not a Service Provider? " : "Not a Customer?"}
              style={{
                color: colors.tint,
              }}
            />
            <Button
              style={styles.textButton}
              textStyle={{ fontSize: 14 }}
              text={userType === "sp" ? "Switch to Customer? " : "Switch to Service Provider"}
              onPress={() => navigateTo("SwitchUserType")}
            />
          </View>
        </View>
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  bottomView: {
    marginBottom: 10,
    flex: 1,
    marginTop: 16,
  },
  loginContainer: {
    flex: 1,
    padding: spacing.md,
  },
  keepSignedIn: { marginVertical: 15, gap: 5, color: colors.tint },
  textButton: { width: "auto", backgroundColor: "transparent", height: "auto" },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  signInButton: { marginTop: 40, marginBottom: 15 },
  forgotPasswordTexts: {
    marginTop: -5,
    marginBottom: -10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  switchUserType: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  splashImg: {
    backgroundColor: colors.background,
    borderColor: colors.palette.neutral400,
    borderRadius: 20,
    borderWidth: 1,
    height: 165,
    justifyContent: "center",
    width: 345,
    overflow: "hidden",
    marginBottom: 32,
  },
  topView: {
    alignItems: "center",
    margin: 20,
  },
})
const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.md,
}
