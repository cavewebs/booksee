import React, { FC, useState, useRef } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet, TextInput, Dimensions } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, TextField, Button } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
// import { useStores } from "app/models"

interface OtpScreenProps extends AppStackScreenProps<"Otp"> {}

export const OtpScreen: FC<OtpScreenProps> = observer(function OtpScreen() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const inputRef = useRef<TextInput[]>([])

  const {
    authenticationStore: {
      authPhone,
      setAuthPhone,
      setAuthToken,
      validationError,
      userType,
      logout,
      isAuthenticated,
    },
  } = useStores()
  const {
    onboardingStore: { hasCompletedOnboarding, setHasCompletedOnboarding },
  } = useStores()
  // useEffect(()=>{
  //   hasCompletedOnboarding ? navigation.navigate("ServiceProvider") : navigation.navigate("ServiceUser")
  // }, [])

  console.log("UISAI", isAuthenticated)
  const handleChange = (value, index) => {
    console.log(value, "new index " + index)
    console.log(otp)
    let newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value.length === 1 && index < inputRef.current.length - 1) {
      inputRef.current[index + 1].focus()
    }
  }

  const handleBackspace = (index) => {
    // console.log("otp index: ", otp[index])
    if (index > 0 && otp[index] === "") {
      console.log("is working")
      inputRef.current[index - 1].focus()
    }
  }
  const goTo = () => {
    console.log("hasCompletedOnboarding", hasCompletedOnboarding)
    console.log("isAuthenticated", isAuthenticated)
    console.log("userType", userType)
    if (hasCompletedOnboarding) {
      userType === "sp" ? navigation.navigate("ServiceProvider") : navigation.navigate("ServiceUser")
    } else {
      userType === "sp" ? navigation.navigate("MainProfile") : navigation.navigate("EnableLocation")
    }
  }

  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={screenContentContainer}>
      <View style={styles.otpContainer}>
        <Text preset="heading" size="lg" text="Authentication" style={{ textAlign: "center" }} />
        <Text
          size="xs"
          text="Enter the 6-digit authentication code sent to "
          style={styles.labelText}
        />
        <Text size="xs" text="+44 7700 900000" style={styles.phoneNo} />

        <View style={styles.inputWrapper}>
          {otp.map((text, index) => (
            <TextField
              key={index + "01"}
              value={text}
              onChangeText={(value) => handleChange(value, index)}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  handleBackspace(index)
                }
              }}
              ref={(TextField) => {
                if (TextField) {
                  inputRef.current[index] = TextField
                }
              }}
              containerStyle={styles.inputContainer}
              inputWrapperStyle={styles.textWrap}
            />
          ))}
        </View>

        <Button preset="primary" text="Submit" onPress={() => goTo()} />

        <View style={{ flexDirection: "row", justifyContent: "center", gap: 4 }}>
          <Text size="xs" text="Did not recieve an OTP? " style={styles.labelText} />
          <Text size="xs" text="Resend" style={[styles.labelText, styles.resendText]} />
        </View>
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  labelText: {
    fontWeight: "400",
    color: "#7A7A7A",
    marginBottom: 6,
    textAlign: "center",
  },
  phoneNo: {
    textAlign: "center",
    marginBottom: 16,
  },

  inputWrapper: {
    flexDirection: "row",

    justifyContent: "center",
    gap: 8,
    marginBottom: 350,
  },

  resendText: {
    color: colors.palette.primary600,
  },

  otpContainer: {
    marginTop: 55,
  },

  input: {
    textAlign: "center",
    fontSize: 18,
    flex: 1,
  },

  textWrap: {
    width: 40,
    height: 40,
  },
  inputContainer: {
    width: 40,
    height: 40,
  },
})
