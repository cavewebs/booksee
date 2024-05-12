import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ProviderNotificationScreenProps extends AppStackScreenProps<"ProviderNotification"> {}

export const ProviderNotificationScreen: FC<ProviderNotificationScreenProps> = observer(function ProviderNotificationScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer} safeAreaEdges={["top", "bottom"]} >
      {/* use what Header if you like or the Text if it suits better don't forget to delete the unused import at the end */}
      {/* <Text preset="heading" text="notifications" /> */}
      <Header title="providerNotification" leftIcon="back" onLeftPress={()=> navigation.goBack()} />

    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
