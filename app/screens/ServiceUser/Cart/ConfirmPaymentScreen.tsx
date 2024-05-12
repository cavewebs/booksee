import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BaseModal, Button, CreditCard, Header, Modals, Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { colors, spacing } from "app/theme"
import { Icon, CheckCircleIcon } from "@gluestack-ui/themed"
// import { useStores } from "app/models"

interface ConfirmPaymentScreenProps extends AppStackScreenProps<"ConfirmPayment"> { }

export const ConfirmPaymentScreen: FC<ConfirmPaymentScreenProps> = observer(function ConfirmPaymentScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [activeCard, setActiveCard] = useState(false);
  const [activeCardId, setActiveCardId] = useState(0);
  const [showPaymentOK, setShowPaymentOk] = useState(false)

  const setCardActive = () => {
    setActiveCardId(0)
    setActiveCard(true)
  }
  const submit = () => {
    setShowPaymentOk(true)
  }
  const paymentOk = () => {
    setShowPaymentOk(false)
    navigation.navigate("ServiceUser", { screen: "Home" })
  }
  const PaymentModal = ()=>{
    return (
      <View style={{alignItems: "center"}}>
      <Icon as={CheckCircleIcon} size="xl" color={colors.tint} style={{padding: 20}} />
      <Text preset="subheading" text="Payment successful" size="lg" style={{padding: 20, marginVertical: 10}} />
      <Text text="Your payment has been processed" />
      <Button preset="primary" text="Okay" style={{paddingHorizontal: 20, marginVertical: 30, width: 200}} onPress={() => paymentOk()} />
      </View>
    )
  }
  return (
    <>
      <Screen preset="auto" style={styles.screen} contentContainerStyle={styles.container}  >
        <Header title="Confirm Payment" rightIcon="close" onRightPress={() => navigation.goBack()} />
        <View style={styles.pageWrapper}>
          <View style={styles.cardsWrapper}>
            <CreditCard onCardClicked={setCardActive} isActive={activeCard} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button preset="primary" text="Pay Now" style={styles.payButton} onPressIn={() => submit()} />
          </View>
        </View>
        <BaseModal
          modalVisible={showPaymentOK}
          modalBody={<PaymentModal />}
          setModalVisible={() => paymentOk()}
        />
      </Screen>

    </>
  )
})



const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    height: "100%"
  },
  buttonWrapper: {
    marginBottom: 20,
  },
  cardsWrapper: {
    flex: 1

  },
  screen: {
    backgroundColor: colors.transparent,
  },
  payButton: {
    marginTop: 24,
    marginBottom: 16
  },
  container: {
    margin: spacing.md,
    flex: 1
  },
})