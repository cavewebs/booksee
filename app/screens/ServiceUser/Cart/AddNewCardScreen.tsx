import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Button,
  Header,
  HorizontalTabs,
  Screen,
  SectionHeader,
  Text,
  TextField,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { addCardTab } from "app/components/serviceUser/DummyData/BookingScreenData"
import { TextFieldData } from "app/components/serviceUser/DummyData/AddAddressConstants"
import { colors } from "app/theme"
// import { useStores } from "app/models"

interface AddNewCardScreenProps extends AppStackScreenProps<"AddNewCard"> {}

export const AddNewCardScreen: FC<AddNewCardScreenProps> = observer(function AddNewCardScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const [activeTab, setActiveTab] = React.useState(0)

  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      {/* use what Header if you like or the Text if it suits better don't forget to delete the unused import at the end */}
      {/* <Text preset="heading" text="notifications" /> */}
      <Header title="Add New Card" leftIcon="back" onLeftPress={() => navigation.goBack()} />
      <SectionHeader leftText="Add Card" />
      <HorizontalTabs tabs={addCardTab} setActiveTab={setActiveTab} activeTab={activeTab}/>
      <TextField
        label="Card Number"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.containerStyle}
        keyboardType={"number-pad"}
      />
      <View style={styles.textFieldContainer}>
      <TextField
        label="Expiry Date"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.textFieldWrapper}
        keyboardType={"number-pad"}
      />
        <TextField
          label="CVV"
          style={styles.textField}
          inputWrapperStyle={styles.textField}
          containerStyle={styles.textFieldWrapper}
          keyboardType={"number-pad"}
        />
      </View>
        <TextField
          label="Card Holder"
          style={styles.textField}
          inputWrapperStyle={styles.textField}
          containerStyle={styles.containerStyle}
          keyboardType={"default"}
        />

      <View style={styles.buttonWrapper}>
        <Button
          preset="primary"
          text="Save"
          style={styles.saveButton}
          onPressIn={() => navigation.goBack()}
        />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: 20,
  },
  containerStyle: {
    marginBottom: 10,
  },
  saveButton: {
    marginBottom: 16,
    marginTop: 24,
  },
  textField: {
    backgroundColor: colors.palette.neutral100,
  },
  textFieldContainer:{
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-evenly",
  },
  textFieldWrapper:{
    flex: 1
  }
})
