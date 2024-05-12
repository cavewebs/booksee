import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Header,
  Screen,
  Text,
  TextField,
  Icon,
  ImageUploader,
  Button,
  HeaderWithBackButton,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface MainDetailScreenProps extends AppStackScreenProps<"MainDetail"> {}

export const MainDetailScreen: FC<MainDetailScreenProps> = observer(function MainDetailScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const [serviceName, setService] = useState<string>("")
  const [serviceCategory, setServiceCategory] = useState<string>("")
  const [duration, setDuration] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [tagline, setTagline] = useState<string>("")
  const navigation = useNavigation()

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={screenContentContainer}
      safeAreaEdges={["bottom"]}
    >
      <HeaderWithBackButton title="Main Details" />
      <View style={styles.bottomSpace}>
        <Text
          preset="default"
          size="xs"
          weight="medium"
          text="Service Name"
          style={styles.labelText}
        />
        <Text
          preset="default"
          size="xs"
          weight="normal"
          text="You can add multiple services later"
          style={styles.descText}
        />

        <TextField value={serviceName} onChangeText={setService} placeholder="Haircuts" />
      </View>

      <View style={styles.bottomSpace}>
        <Text
          preset="default"
          size="xs"
          weight="medium"
          text="Service Category"
          style={styles.labelText}
        />
        <TextField
          value={serviceCategory}
          onChangeText={setServiceCategory}
          style={styles.textFieldContainer}
          RightAccessory={() => <Icon icon="caretDown" />}
        />
      </View>

      <View style={styles.bottomSpace}>
        <Text
          preset="default"
          size="xs"
          weight="medium"
          text="Set Duration"
          style={styles.labelText}
        />
        <TextField value={duration} onChangeText={setDuration} placeholder="45 Minutes" />
      </View>

      <View style={{ marginBottom: 18 }}>
        <ImageUploader />
      </View>

      <View style={styles.bottomSpace}>
        <Text preset="default" size="xs" weight="medium" text="Price" style={styles.labelText} />
        <TextField value={price} onChangeText={setPrice} placeholder="$500" />
      </View>

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

        <Text
          preset="default"
          size="xs"
          weight="normal"
          text="40 Characters left"
          style={styles.descText}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.buttonWrapper}>
        <Button
          preset="default"
          text="Cancel"
          style={{ flex: 1 }}
          onPress={() => navigation.goBack()}
        />
        <Button
          preset="primary"
          text="Save"
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("SubmitNotification")}
        />
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  textFieldContainer: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  labelText: {
    color: "#344054",
  },

  descText: {
    color: "#667085",
    marginBottom: 8,
  },
  textArea: {
    height: 90,
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E4E7EC",
    borderBottomStyle: "solid",
    marginVertical: 20,
  },

  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },

  bottomSpace: {
    marginBottom: 20,
  },
})
