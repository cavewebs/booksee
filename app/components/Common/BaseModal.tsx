// @ts-nocheck - preexisting UI type errors; tracked for a later pass
import React, { useEffect } from "react"

import { Box, Button, ButtonText, Center, CloseIcon, HStack, Heading, Icon, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, VStack, useToast } from "@gluestack-ui/themed"
import { StyleProp, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

export interface BaseModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  modalVisible: boolean
  modalHeader?: string
  modalBody?: React.ReactNode
  size?: "full" | "xs" | "sm" | "md" | "lg",
  setModalVisible?: () => void
  showCloseIcon?: boolean
}

export const BaseModal = observer(function BaseModal(props: BaseModalProps) {
  const { style, modalVisible, modalHeader, setModalVisible, modalBody, size, showCloseIcon } = props

  useEffect(() => {
  }, []);


  return (
    <Box>
      {/* Modal: example */}
      <Modal
        size="md"
        isOpen={modalVisible}
        onClose={
          setModalVisible
        }
        avoidKeyboard
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            {modalHeader && (<HStack alignItems="center">
              <Heading size="sm" fontWeight="$semibold">
                {modalHeader}
              </Heading>
            </HStack>
            )}
            {showCloseIcon && (<ModalCloseButton>
              <Icon as={CloseIcon} sx={{ w: 16, h: 16 }} />
            </ModalCloseButton>
            )}
          </ModalHeader>
          <ModalBody>
            <VStack space="md">{modalBody}</VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
})
