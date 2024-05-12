import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Screen,
  Text,
  TextField,
  ImageUploader,
  Button,
  HeaderWithBackButton,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { colors } from "app/theme"
// import { useStores } from "app/models"

interface MainProfileScreenProps extends AppStackScreenProps<"MainProfile"> {}

export const MainProfileScreen: FC<MainProfileScreenProps> = observer(function MainProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const [bizName, setBizName] = useState<string>("")
  const [tagline, setTagline] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [address, setAddress] = useState<string>("")

  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={screenContentContainer}
      safeAreaEdges={["bottom"]}
    >
      <HeaderWithBackButton title="Main Profile" />
      <View>
        <Text
          preset="default"
          size="xs"
          weight="medium"
          text="Business Name"
          style={styles.labelText}
        />
        <Text
          preset="default"
          size="xs"
          weight="normal"
          text="This will be displayed on your profile."
          style={styles.descText}
        />

        <TextField
          value={bizName}
          onChangeText={setBizName}
          placeholder="Skin Republic"
          containerStyle={styles.textFieldContainer}
        />
      </View>
      <View style={styles.divider} />
      {/* @next line */}
      <View>
        <Text preset="default" size="xs" weight="medium" text="Tagline" style={styles.labelText} />
        <Text
          preset="default"
          size="xs"
          weight="normal"
          text="A quick description of your service"
          style={styles.descText}
        />

        <TextField
          value={tagline}
          onChangeText={setTagline}
          placeholder="Type here...."
          style={[styles.textFieldContainer, styles.textArea]}
        />
      </View>
      <Text
        preset="default"
        size="xs"
        weight="normal"
        text="40 Characters left"
        style={styles.descText}
      />
      <View style={styles.divider} />
      <View style={{ marginBottom: 18 }}>
        <ImageUploader />
      </View>

      <View style={styles.bottomSpace}>
        <Text
          preset="default"
          size="xs"
          weight="medium"
          text="Official Email Address"
          style={styles.labelText}
        />
        <TextField value={email} onChangeText={setEmail} placeholder="theplace@gmail.com" />
      </View>

      <View style={styles.bottomSpace}>
        <Text
          preset="default"
          size="xs"
          weight="medium"
          text="Official Phone Number"
          style={styles.labelText}
        />
        <TextField
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="e.g 09059436965"
        />
      </View>

      <View style={styles.bottomSpace}>
        <Text preset="default" size="xs" weight="medium" text="Address" style={styles.labelText} />
        <TextField value={address} onChangeText={setAddress} placeholder="25 Montgomery road, UK" />
      </View>

      <Text
        preset="default"
        size="xs"
        weight="medium"
        text="Use my current location"
        style={styles.close2meText}
      />

      <Button
        preset="primary"
        text="Save and Continue"
        style={{ marginBottom: 40 }}
        onPress={() => navigation.navigate("MainDetail")}
      />
    </Screen>
  )
})

const styles = StyleSheet.create({
  labelText: {
    color: "#344054",
  },

  descText: {
    color: "#667085",
    marginBottom: 8,
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E4E7EC",
    borderBottomStyle: "solid",
    marginVertical: 20,
  },

  textFieldContainer: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  textArea: {
    height: 90,
  },
  close2meText: {
    color: colors.palette.primary600,

    marginBottom: 24,
  },

  bottomSpace: {
    marginBottom: 20,
  },
})
