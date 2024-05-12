import React from "react"
import { View, StyleSheet } from "react-native"
import { AuthenticationStore } from "app/models/AuthenticationStore"
import { Button, Icon, Screen, Text } from "../components"
import { screenContentContainer } from "app/styles/mainStyles"

interface UserSelectionScreenProps {
  navigation: any
  authenticationStore: AuthenticationStore
}

const UserSelectionScreen: React.FC<UserSelectionScreenProps> = ({
  navigation,
  authenticationStore,
}) => {
  const handleUserSelection = (userType: "su" | "sp") => {
    authenticationStore.setUserType(userType)
  }

  const proceed = () => {
    navigation.navigate("Login")
  }


  return (
    <>
      <Screen
        preset="auto"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <View style={styles.container}>
          <Text preset="bold" style={styles.title}>
            Select Account Type
          </Text>
          <Button
            RightAccessory={(props) => <Icon icon="check" />}
            LeftAccessory={(props) => <Icon icon="Home" />}
            style={styles.button}
            onPress={() => handleUserSelection("su")}
          >
            <Text>Service User</Text>
          </Button>
          <Button style={styles.button} onPress={() => handleUserSelection("sp")}>
            <Text>Service Provider</Text>
          </Button>
        </View>
      </Screen >
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  container: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 64,
  },
})

export default UserSelectionScreen
