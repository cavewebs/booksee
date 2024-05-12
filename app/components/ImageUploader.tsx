import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import * as ImagePicker from "expo-image-picker"
import { colors, typography } from "app/theme"
import { Text, Icon, Button } from "app/components"

export interface ImageUploaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  dontShowText?: boolean
}

/**
 * Describe your component here
 */
export const ImageUploader = observer(function ImageUploader(props: ImageUploaderProps) {
  const { dontShowText } = props;
  const [image, setImage] = useState(null)
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }
  return (
    <View>
      {!dontShowText && (
        <>
          <Text
            preset="label"
            text="Upload Images"
            style={{ fontWeight: "500", color: "#344054", marginBottom: 8 }}
          />
          <Text
            size="xs"
            text="Add service images"
            style={{ fontWeight: "400", color: "#667085", marginBottom: 8 }}
          />
        </>
      )}

      <View style={styles.uploadBox}>
        <View style={styles.iconContainer}>
          <View style={styles.uploadButton}>
            <Button onPress={pickImage} LeftAccessory={(props) => <Icon icon="imgUpload" />} />
            <Text size="xs" text="Scan" style={styles.uploadText} />
          </View>
          <View style={styles.uploadButton}>
            <Button onPress={pickImage} LeftAccessory={(props) => <Icon icon="fileUpload" />} />
            <Text size="xs" text="Upload" style={styles.uploadText} />
          </View>
        </View>

        <Text
          size="xxs"
          text="SVG, PNG, JPG or GIF (max. 800x400px)"
          style={{ fontWeight: "400", color: "#667085" }}
        />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  uploadBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.palette.neutral200,
    borderStyle: "solid",
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 78,
  },

  uploadText: {
    fontWeight: "500",
    color: colors.palette.neutral700,
  },

  uploadButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
})
