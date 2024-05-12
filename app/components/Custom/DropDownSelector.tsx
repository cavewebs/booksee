import React, { useState } from "react"
import { View, TextInput, Modal, Text, TouchableOpacity, StyleSheet } from "react-native"

const DropdownTextField = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const dropdownValues = ["Option 1", "Option 2", "Option 3"] // Replace with your dropdown options

  const handleDropdownSelect = (value) => {
    setSelectedValue(value)
    setShowDropdown(false)
    // You can also perform other actions when a value is selected
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={selectedValue || ""}
        placeholder="Select an option"
        editable={false}
        onTouchStart={() => setShowDropdown(true)}
      />
      <Modal
        visible={showDropdown}
        animationType="slide"
        transparent
        onRequestClose={() => setShowDropdown(false)}
      >
        <View style={styles.modalContainer}>
          {dropdownValues.map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.dropdownItem}
              onPress={() => handleDropdownSelect(value)}
            >
              <Text>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  modalContainer: {
    marginTop: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
})

export default DropdownTextField
