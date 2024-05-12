/* eslint-disable react-native/no-color-literals */
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, KeyboardAvoidingView, Platform, ScrollView, Image, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, CustomCheckBox, HeaderWithBackButton, OtherHeader, Screen, Search, Text, TextField } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { TextFieldData, addressType } from "app/components/serviceUser/DummyData/AddAddressConstants"
import Checkbox from "expo-checkbox"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const dummyMap = require("../../../../assets/images/dummyMap.png");


interface AddNewAddressScreenProps extends AppStackScreenProps<"AddNewAddress"> { }

export const AddNewAddressScreen: FC<AddNewAddressScreenProps> = observer(function AddNewAddressScreen() {
  const [isChecked, setChecked] = useState(false);
  const [selectType, setSelectType] = useState(null)


  const handleCheckboxChange = (newValue: boolean) => {
    setChecked(newValue);
  };
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen preset="scroll" contentContainerStyle={screenContentContainer} safeAreaEdges={["bottom"]}
    >
       <HeaderWithBackButton title="Add New Address" />
      <Search />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flex: 1, marginTop: 10 }}
      >
        <ScrollView>
          <Text
            text="Use My Current Address"
            preset="subheading"
            weight="semiBold"
            size="md"
            style={styles.mapTextStyle}
          />
          <Image source={dummyMap} style={styles.image} />
          <Text text="Address Type" preset="label" weight="normal" size="md" style={styles.textStyle} />
          <View style={styles.selectWrapper}>
            {addressType.map((type) => (
              <View key={type.id} style={styles.selectWrapper}>
                <Text text={type.type} />
                <Checkbox
                  value={selectType === type.type}
                  onValueChange={() => {
                    setSelectType(type.type);
                  }}
                  color={selectType === type.type ? colors.tint : undefined}
                />
              </View>
            ))}
          </View>
          {TextFieldData.map((data) => (
            <TextField
              key={data.id}
              placeholder={data.placeholder}
              style={styles.textField}
              inputWrapperStyle={styles.textField}
              containerStyle={styles.containerStyle}
              keyboardType={data.type}
            />
          ))}
          <View style={[styles.leftContainer, { marginTop: 20 }]}>
            <CustomCheckBox
              label="Mark as default address"
              value={isChecked}
              onChange={handleCheckboxChange}
            />
          </View>
          <Button
            text="Confirm"
            style={styles.button}
            textStyle={styles.buttonText}
            pressedStyle={styles.pressedButton}
            pressedTextStyle={styles.pressedButtonText}
            onPress={() => navigation.navigate("SavedAddress")}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  )
})


const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.palette.primary600,
    borderColor: colors.palette.primary600,
    borderRadius: 27.2,
    height: 48,
    justifyContent: "center",
    marginBottom: 20,
    width: "100%",
  },
  buttonText: {
    color: "#F5F5FF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  containerStyle: {
    marginBottom: 10,
  },
  headerTitle: {
    color: "#101828",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 32,
    marginBottom: 8,
  },
  image: {
    marginBottom: 16,
  },
  leftContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginBottom: 20
  },
  mapTextStyle: {
    color: colors.palette.primary600,
    marginBottom: 16,
    marginTop: 24
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },

  pressedButtonText: {
    color: colors.palette.primary600,
  },
  selectWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textField: {
    backgroundColor: colors.palette.neutral100,
  },
  textStyle: {
    color: "#344054",
    marginBottom: 8,
  },
});