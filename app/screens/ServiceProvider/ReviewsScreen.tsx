import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, BackArrowHeader, Ratings} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ReviewsScreenProps extends AppStackScreenProps<"Reviews"> {}

export const ReviewsScreen: FC<ReviewsScreenProps> = observer(function ReviewsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer} safeAreaEdges={["top", "bottom"]} >
      <BackArrowHeader header="Reviews" />
      <Ratings />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
