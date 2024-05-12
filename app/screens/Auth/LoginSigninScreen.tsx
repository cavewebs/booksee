import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageBackground, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Screen, Button, Text, Modals } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors, spacing } from "app/theme"
import SplashBackground from "assets/images/line-pattern.png"
import Logo from "assets/images/app-icon-all.png"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface LoginSigninScreenProps extends AppStackScreenProps<"LoginSignin"> {}

export const LoginSigninScreen: FC<LoginSigninScreenProps> = observer(function LoginSigninScreen(
  _props,
) {
  const { navigation } = _props
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const [showModal, setShowModal] = React.useState(false)

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const register = () => {
    navigation.navigate("Signup")
  }
  const login = () => {
    navigation.navigate("Signin")
  }
  return (
    <Screen preset="fixed" contentContainerStyle={styles.splashContainer}>
      <ImageBackground source={SplashBackground} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.topView}>
            <AutoImage source={Logo} style={styles.logo} />
          </View>
          <View style={styles.bottomView}>
            <View style={styles.button}>
              <Button onPress={register} text="Create Account" preset="primary" />
            </View>
            <View style={styles.button}>
              <Button onPress={login} text="Sign In" preset="primary" />
            </View>
          </View>
        </View>
        <Modals
          showModal={showModal}
          setShowModal={setShowModal}
          modalTitle={"Allow Location"}
          modalBody={"We need your permission to access your location"}
          navigate={() => navigation.navigate("Notifications")}
          modalCancelButtonText={"Don't Allow"}
          modalAcceptButtonText={"Allow"}
        />
      </ImageBackground>
    </Screen>
  )
})

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  bottomView: {
    marginBottom: 20,
  },
  splashContainer: {
    flex: 1,
    paddingVertical: spacing.md,
  },
  button: {
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  logo: {
    height: 120,
    width: 120,
  },
  selectView: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderColor: colors.palette.neutral400,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  selectViewIcon: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    marginBottom: 44,
    textAlign: "center",
  },
  topView: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})
