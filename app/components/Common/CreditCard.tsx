/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { Pressable, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Icon } from "../Icon"
import { Button } from "../Button"
import { useNavigation } from "@react-navigation/native"
import { CustomCheckBox } from "./CheckBox"
import { TextField } from "../TextField"
import { useState } from "react"

export interface CreditCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  onCardClicked?: () => void
  isActive?: boolean
  dontShowText? : boolean
}

/**
 * Describe your component here
 */
export const CreditCard = observer(function CreditCard(props: CreditCardProps) {
  const { style, isActive, onCardClicked, dontShowText } = props
  const navigation = useNavigation()
  const [activeCard, setActiveCard] = useState(false)
  const [activeCardId, setActiveCardId] = useState(0)

  const setCardActive = (id) => {
    setActiveCardId(id)
    if (activeCardId === id) {
      setActiveCard(!activeCard)
    } else {
      setActiveCard(true)
    }
  }
  return (
    <View style={[style, styles.wrapper]}>
      {!dontShowText && (
        <>
          <Text text="Home Service" />
          <View style={styles.addressBox}>
            <Icon icon="pin" size={16} />
            <Text text="24 Montegro road, HR1 43X, Hereford" size="xs" style={styles.address} />
          </View>
        </>
      )}
      <Button
        text="Add new card  + "
        textStyle={{ fontSize: 18, fontWeight: "600" }}
        style={{
          backgroundColor: colors.background,
          width: "auto",
          paddingHorizontal: 10,
          justifyContent: "flex-start",
          marginVertical: 20,
        }}
        onPress={() => navigation.navigate("AddNewCard")}
      />
      <Pressable onPress={() => setCardActive(0)}>
        <View style={styles.cardWrapper}>
          <View style={styles.cardSelector}>
            <View style={styles.cardType}>
              <Icon icon="visa" size={56} />
              <Text text="Debit Card" style={styles.cardCo} />
            </View>
            <CustomCheckBox
              value={activeCard && activeCardId === 0}
              onChange={() => onCardClicked}
            />
          </View>
          <Text text="XXXX XXXX XXXX 9876" size="xs" style={styles.cardNo} />
          {activeCard && activeCardId === 0 && (
            <View style={styles.cvvWrapper}>
              <Text text="Enter CVV" size="lg" style={styles.cardNo} />
              <View style={styles.cvvText}>
                <TextField
                  placeholder="cvv"
                  returnKeyType="done"
                  enablesReturnKeyAutomatically
                  inputMode="numeric"
                />
              </View>
            </View>
          )}
        </View>
      </Pressable>
      <Pressable onPress={() => setCardActive(1)}>
        <View style={styles.cardWrapper}>
          <View style={styles.cardSelector}>
            <View style={styles.cardType}>
              <Icon icon="mastercard" size={56} />
              <Text text="Credit Card" style={styles.cardCo} />
            </View>
            <CustomCheckBox
              value={activeCard && activeCardId === 1}
              onChange={() => onCardClicked}
            />
          </View>
          <Text text="XXXX XXXX XXXX 2233" size="xs" style={styles.cardNo} />
          {activeCard && activeCardId === 1 && (
            <View style={styles.cvvWrapper}>
              <Text text="Enter CVV" size="lg" style={styles.cardNo} />
              <View style={styles.cvvText}>
                <TextField
                  placeholder="cvv"
                  returnKeyType="done"
                  enablesReturnKeyAutomatically
                  inputMode="numeric"
                />
              </View>
            </View>
          )}
        </View>
      </Pressable>
    </View>
  )
})

const styles = StyleSheet.create({
  cardSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cvvWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    marginRight: 10,
  },
  cardNo: {
    paddingHorizontal: 10,
    marginTop: -15,
    marginBottom: 16,
  },
  cardCo: {
    paddingHorizontal: 10,
  },
  cvvText: {
    color: colors.text,
    width: 120,
    // height: 20,
    // paddingHorizontal: 50
  },
  cardType: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.palette.neutral200,
    marginVertical: 10,
  },
  addressBox: {
    flexDirection: "row",
    backgroundColor: colors.transparent,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  address: { margin: 5 },
  container: {
    margin: spacing.md,
  },
})
