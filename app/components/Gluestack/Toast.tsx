import * as React from "react"
import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"

import {
  Toast as GsToast,
  useToast,
  ToastDescription,
  ToastTitle,
  CheckCircleIcon,
  HStack,
  Icon as GsICon,
} from "@gluestack-ui/themed"
export interface ToastProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  message: string
  title?: string
  variant?: string
  position?: "top" | "top right" | "top left" | "bottom" | "bottom left" | "bottom right"
}

/**
 * Describe your component here
 */
export const Toast = observer(function Toast(props: ToastProps) {
  const { style, title, message, variant, position } = props
  const toast = useToast()

  return toast.show({
    placement: position || "top",
    render: ({ id }: any) => {
      return <RenderToast description={message} nativeId={id} action={variant} title={title} />
    },
  })
})

const RenderToast = ({ description, title, id, action }: any) => {
  return (
    <GsToast action={action} id={id} top={150}>
      <HStack alignItems="center" space="xs">
        <GsICon as={CheckCircleIcon} />
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </HStack>
    </GsToast>
  )
}
