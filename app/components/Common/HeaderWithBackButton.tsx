import * as React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { useNavigation } from "@react-navigation/native"
import { Header } from "../Header"
import { IconTypes } from "../Icon"

export interface HeaderWithBackButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  title?: string
  leftIcon?: IconTypes

}

/**
 * Describe your component here
 */
export const HeaderWithBackButton = observer(function HeaderWithBackButton(props: HeaderWithBackButtonProps) {
  const {leftIcon, style, title} = props;
   const navigation = useNavigation()


  return <Header title={title} leftIcon={leftIcon || "back"}  onLeftPress={() => navigation.goBack()} style={style} />
})
