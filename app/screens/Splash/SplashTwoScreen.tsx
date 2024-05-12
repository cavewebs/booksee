import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageBackground, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Button, Screen, Text } from "app/components"
import SplashBackground from "assets/images/line-pattern.png"
import Logo from "assets/images/app-icon-all.png"
import SplashImg2 from "assets/images/splash-2.png"
import { colors, spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
interface SplashTwoScreenProps extends AppStackScreenProps<"SplashTwo"> {}

export const SplashTwoScreen: FC<SplashTwoScreenProps> = observer(function SplashTwoScreen(_props) {
  const { navigation } = _props
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const skip = () => {
    navigation.navigate("SelectUserType")
  }
  const next = () => {
    navigation.navigate("SplashThree")
  }
  return (
    <Screen preset="fixed" contentContainerStyle={styles.splashContainer}>
      <ImageBackground source={SplashBackground} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.topView}>
            <AutoImage source={Logo} style={styles.logo} />
            <View style={styles.skip}>
              <Button onPress={skip} text="Skip" />
            </View>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.selectView}>
              <AutoImage source={SplashImg2} style={styles.splashImg} />
            </View>
            <View style={styles.splashMsg}>
              <Text
                preset="heading"
                size="xl"
                style={{ color: colors.tint }}
                text="Grow your business"
              />
              <Text text="Boost your salon business with Booksee seller app. Manage bookings, expand your reach" />
            </View>
            <View style={styles.button}>
              <Button onPress={next} text="Next" preset="primary" />
            </View>
            <View style={styles.sliderIcon}>
              <View style={styles.inactiveSlide}></View>
              <View style={styles.activeSlide}></View>
              <View style={styles.inactiveSlide}></View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Screen>
  )
})

const styles = StyleSheet.create({
  activeSlide: {
    backgroundColor: colors.tint,
    width: 25,
    height: 12,
    borderRadius: 100,
    marginRight: 5,
  },
  splashContainer: {
    flex: 1,
    paddingVertical: spacing.md,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    paddingHorizontal: spacing.md,
  },
  bottomView: {
    marginBottom: 10,
  },
  button: {
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 45,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  inactiveSlide: {
    backgroundColor: colors.palette.neutral300,
    width: 10,
    height: 12,
    borderRadius: 100,
    marginHorizontal: 3,
  },
  logo: {
    height: 75,
    padding: 10,
    width: 70,
  },
  selectView: {
    marginBottom: 20,
  },
  selectViewIcon: {
    alignItems: "center",
    flexDirection: "row",
  },
  skip: {
    width: 90,
  },
  sliderIcon: {
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 35,
    flexDirection: "row",
  },
  splashImg: {
    backgroundColor: colors.background,
    borderColor: colors.palette.neutral400,
    borderRadius: 20,
    borderWidth: 1,
    height: 345,
    justifyContent: "space-between",
    width: "auto",
  },
  splashMsg: {
    alignItems: "center",
    gap: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 44,
    textAlign: "center",
  },
  topView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
})
