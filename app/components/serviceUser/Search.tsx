import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { TextField } from "../TextField"
import { Icon } from "../Icon"
import { useNavigation } from "@react-navigation/native"

export interface SearchProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Search = observer(function Search(props: SearchProps) {
  const { style } = props
  const $styles = [$container, style]
  const navigation = useNavigation()
  return (
      <View style={$styles}>
        <View style={styles.TextFieldContainer}>
          <TextField
            style={styles.TextField}
            inputWrapperStyle={styles.TextField}
            placeholder="Search"
            RightAccessory={() => <Icon icon="search" style={styles.accessory} onPress={()=>navigation.navigate("SearchResult")} />}
          />
        </View>
      </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
  TextField: {
    alignItems: "center",
    backgroundColor: colors.palette.neutral100,
    borderColor: colors.border,
    borderRadius: 27.2,
    display: "flex",
    justifyContent: "space-between",
  },
  TextFieldContainer: {
    marginBottom: 3,
  },
  accessory: {
    marginRight: 20,
  },
})
