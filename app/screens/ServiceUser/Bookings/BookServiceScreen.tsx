/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Image, StyleSheet, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, CustomCheckBox, DateTimePicker, HeaderWithBackButton, Icon, OtherHeader, PopularSearches, Screen, SectionHeader, Text, TextField } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { works } from "app/components/serviceUser/DummyData/BookingScreenData"
import { colors } from "app/theme"
import Checkbox from "expo-checkbox"
import { addressType } from "app/components/serviceUser/DummyData/AddAddressConstants"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface BookServiceScreenProps extends AppStackScreenProps<"BookService"> { }

export const BookServiceScreen: FC<BookServiceScreenProps> = observer(function BookServiceScreen(props) {
  const [selectType, setSelectType] = React.useState(null)

  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const { params } = props.route.params || {}; // Perform null-checking
  // Pull in navigation via hook
  console.log("BOO SRE", params)

  const navigation = useNavigation()
  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={screenContentContainer}
      safeAreaEdges={["bottom"]}
    >
      <HeaderWithBackButton title="Book Service" />
      <SectionHeader leftText="Previous Work" rightText="View All" onRightTextPress={() => navigation.navigate("PreviousWork")} />
      <View style={styles.worksContainer}>
        {works.map((work, index) => (
          <Image key={index} source={work} style={{ width: "30%", height: 100, gap: 10, borderRadius: 4, }}  />
        ))}
      </View>

      <View style={styles.containerStyle}>
        <Text text={params?.serviceName ? params.serviceName : "Hair Cut"} size="md" weight="medium" />
        <View style={styles.container}>
          <Icon icon="hourglass" size={12} />
          <Text text="30 minutes" size="sm" weight="medium" style={styles.textColor} />
        </View>
      </View>

      <TextField
        label="Number of Persons"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.textContainer}
        keyboardType="number-pad"
      />
      <TextField
        label="Select Appointment Date"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.textContainer}
        keyboardType="numbers-and-punctuation"
        status="disabled"
        RightAccessory={() => <Icon icon="date" size={24} style={{ alignContent: "center", alignItems: "center", justifyContent: "center", margin: 5 }} />}
      />

      <SectionHeader leftText="Available Slots" />
      <View style={styles.selectWrapper}>
        {addressType.map((type, index) => (
          <View key={type.id} style={styles.selectWrapper}>
            <PopularSearches text={index + 1 + ":00PM"} key={"male"} textFontWeight="semiBold" />
            <PopularSearches text={index + 4 + ":00PM"} key={"male2"} textFontWeight="semiBold" />
            <PopularSearches text={index + 7 + ":00PM"} key={"male3"} textFontWeight="semiBold" />
          </View>
        ))}
      </View>



      <SectionHeader leftText="Service Location" />
      <View style={styles.selectWrapper}>
        {addressType.map((type) => (
          <View key={type.id} style={styles.selectWrapper}>
            <Text text={type.type} />
            <Checkbox value={selectType === type.type}
                  onValueChange={() => {
                    setSelectType(type.type);
                  }}
                  color={selectType === type.type ? colors.tint : undefined}/>
          </View>
        ))}
      </View>

      <View style={styles.priceContainer}>
        <Text text="Total Price" />
        <Text text="£500" />
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.cancelButton} onPress={() => navigation.navigate("ServiceUser", { screen: "Cart", params: params })}>
          <Text style={styles.cancelButtonText} text="Add to Cart" />
        </Button>
        <Button
          text={"Book Appointment"}
          style={styles.acceptButton}
          textStyle={styles.buttonText}
          pressedStyle={styles.pressedButton}
          pressedTextStyle={styles.pressedButtonText}
          onPress={() => navigation.navigate("ConfirmPayment")}
        />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
const styles = StyleSheet.create({
  acceptButton: {
    borderRadius: 24,
    backgroundColor: colors.palette.primary600,
    borderColor: colors.palette.primary600,
    width: "48%",
  },
  acceptButtonText: { fontSize: 14, fontWeight: "500", color: colors.palette.primary50 },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    paddingVertical: 20
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: colors.palette.primary600,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#F5F5FF",
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    backgroundColor: colors.palette.primary50,
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  containerStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  priceContainer: {
    backgroundColor: "#F9F9F9",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 8,
  },
  selectWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textColor: {
    color: colors.palette.primary600,
  },
  textContainer: {
    marginBottom: 10,
  },
  textField: {
    backgroundColor: colors.palette.neutral100,
    alignContent: "center",
    alignItems: "center"
  },
  worksContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  cancelButton: {
    backgroundColor: colors.palette.primary50,
    borderRadius: 24,
    borderColor: "#D0D5DD",
    paddingHorizontal: 26
  },
  cancelButtonText: { fontSize: 14, fontWeight: "500", color: "#374151" },
})
