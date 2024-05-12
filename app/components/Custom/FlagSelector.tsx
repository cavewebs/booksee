import React, { useState } from "react"
import { View, Text, StyleSheet, PixelRatio, Switch } from "react-native"
import CountryPicker, { Country, CallingCode, CountryCode } from "react-native-country-picker-modal"
import { Icon } from "../Icon"

export default function FlagSelector() {
  const [countryCode, setCountryCode] = useState<CountryCode>("GB")
  const [country, setCountry] = useState<Country>(null)
  const [withFlag, setWithFlag] = useState<boolean>(true)
  const [withFilter, setWithFilter] = useState<boolean>(false)
  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
    console.log(country)
  }
  return (
    <View style={styles.wrapper}>
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          // withCountryNameButton,
          // withAlphaFilter,
          // withCallingCode,
          // withEmoji,
          countryCodes: ["GB"],
          onSelect,
          containerButtonStyle: { width: 20, marginHorizontal: 3 },
        }}
        visible={false}
      />
      <Icon icon="caretDown" style={styles.caret} />
    </View>
  )
}
const styles = StyleSheet.create({
  caret: {
    flex: 1,
    marginLeft: 8,
    marginRight: -10
  },
  wrapper: {
    flexDirection: "row",
  }
})