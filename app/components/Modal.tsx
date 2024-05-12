/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import * as React from "react"
import { View, StyleSheet, Modal } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "app/components/Text"
import { Button } from "./Button"
import { colors } from "app/theme"

export interface ModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  modalTitle: string
  modalBody: string
  modalCancelButtonText?: string
  modalAcceptButtonText: string
  navigate?: () => void;
}

/**
 * Describe your component here
 */
export const Modals = observer(function Modals(props: ModalProps) {
  const {
    showModal,
    setShowModal,
    modalTitle,
    modalBody,
    modalCancelButtonText,
    modalAcceptButtonText,
    navigate,
  } = props

  return (
    <Modal
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false)
      }}
      animationType="slide"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{modalTitle}</Text>
          <Text style={styles.body}>{modalBody}</Text>

          <View style={styles.buttonContainer}>
            {modalCancelButtonText && (
              <Button style={styles.cancelButton} onPress={() => setShowModal(false)}>
                <Text style={styles.cancelButtonText}>{modalCancelButtonText}</Text>
              </Button>
            )}
            <Button
              text={modalAcceptButtonText}
              style={styles.acceptButton}
              textStyle={styles.buttonText}
              onPress={() => {
                navigate && navigate();
                setShowModal(false)
              }}
              pressedStyle={styles.pressedButton}
              pressedTextStyle={styles.pressedButtonText}
            />


          </View>
        </View>
      </View>
    </Modal>
  )
})

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: colors.palette.primary50,
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 16,
  },
  body: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280",
    marginBottom: 24,
  },
  cancelButton: { backgroundColor: colors.palette.primary50, borderRadius: 24, borderColor: "#D0D5DD", width: "48%" },
  cancelButtonText: { fontSize: 14, fontWeight: "500", color: "#374151" },
  acceptButton: {
    borderRadius: 24,
    backgroundColor: colors.palette.primary600,
    borderColor: colors.palette.primary600,
    width: "48%",
  },
  acceptButtonText: { fontSize: 14, fontWeight: "500", color: colors.palette.primary50 },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: colors.palette.primary600,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F5F5FF",
    textAlign: "center",
  },
})
