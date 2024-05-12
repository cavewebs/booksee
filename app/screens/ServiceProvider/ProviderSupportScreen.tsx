import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Screen,
  Text,
  BackArrowHeader,
  TextField,
  Icon,
  Button,
  ImageUploader,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ProviderSupportScreenProps extends AppStackScreenProps<"ProviderSupport"> { }

export const ProviderSupportScreen: FC<ProviderSupportScreenProps> = observer(
  function ProviderSupportScreen() {
    const [subject, setSubject] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <View>
          <BackArrowHeader header="Support" />

          <TextField value={subject} onChangeText={(value) => setSubject(value)} label="Subject" />

          <View>
            <Text size="xs" text="Description" style={styles.inputLabel} />

            <TextField
              value={description}
              onChangeText={(value) => setDescription(value)}
              placeholder="Type here..."
              style={{ height: 85 }}
            />

            <Text
              size="xs"
              text="40 characters left"
              style={{ fontWeight: "400", color: " #667085", marginTop: 16, marginBottom: 40 }}
            />
          </View>
          <View style={{ marginBottom: 111 }}>
            <ImageUploader />
          </View>
          <Button preset="primary" text="Submit" style={{ marginBottom: 30 }} />
        </View>
      </Screen >
    )
  },
)

const styles = StyleSheet.create({
  inputLabel: {
    fontWeight: "500",
    color: "#344054",
    marginTop: 20,
    marginBottom: 8,
  },
})
