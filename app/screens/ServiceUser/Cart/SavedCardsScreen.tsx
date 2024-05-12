import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BaseModal, Button, CreditCard, Header, Icon, Screen, Text } from "app/components"
import { useNavigation } from "@react-navigation/native"
import { colors, spacing } from "app/theme"
import { CheckCircleIcon } from "@gluestack-ui/themed"
// import { useStores } from "app/models"

interface SavedCardsScreenProps extends AppStackScreenProps<"SavedCards"> {}

export const SavedCardsScreen: FC<SavedCardsScreenProps> = observer(function SavedCardsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [activeCard, setActiveCard] = useState(false)
  const [activeCardId, setActiveCardId] = useState(0)

  const setCardActive = () => {
    setActiveCardId(0)
    setActiveCard(true)
  }

  return (
    <>
      <Screen preset="auto" style={styles.screen} contentContainerStyle={styles.container}>
        <Header title="Saved Cards" rightIcon="close" onRightPress={() => navigation.goBack()} />
        <View style={styles.pageWrapper}>
          <View style={styles.cardsWrapper}>
            <CreditCard onCardClicked={setCardActive} isActive={activeCard} dontShowText />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              preset="primary"
              text="Save"
              style={styles.saveButton}
              onPressIn={() => navigation.goBack()}
            />
          </View>
        </View>
      </Screen>
    </>
  )
})

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: 20,
  },
  cardsWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: spacing.md,
  },
  pageWrapper: {
    flex: 1,
    height: "100%",
  },
  saveButton: {
    marginBottom: 16,
    marginTop: 24,
  },
  screen: {
    backgroundColor: colors.transparent,
  },
})
