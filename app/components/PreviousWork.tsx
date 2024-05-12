import React, { useState } from "react"
import Checkbox from "expo-checkbox"
import { View, ViewStyle, ImageRequireSource, FlatList, Pressable, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text, AutoImage } from "app/components"
import cutOne from "../../assets/images/first-cut.png"
import cutTwo from "assets/images/second-cut.png"
import cutThree from "assets/images/third-cut.png"
import cutFour from "assets/images/fourth-cut.png"
import cutFive from "assets/images/fifth-cut.png"
import featureIcon from "assets/images/feature-icon.png"

export interface PreviousWorkProps {
  isSelected?: boolean
  previousWork?: boolean
  /**
   * An optional style override useful for padding & margin.
   */
}

interface WorkImg {
  source: ImageRequireSource
  key: string
}

const previousWork: WorkImg[] = [
  { key: "feature", source: featureIcon },
  { key: "1", source: cutOne },
  { key: "2", source: cutTwo },
  { key: "3", source: cutThree },
  { key: "4", source: cutFour },
  { key: "5", source: cutFive },
]

const gridTwoData: WorkImg[] = [
  { key: "3", source: cutThree },
  { key: "4", source: cutFour },
]

const gridThreeData: WorkImg[] = [
  { key: "1", source: cutThree },
  { key: "2", source: cutFour },
  { key: "3", source: cutFive },
]

/**
 * Describe your component here
 */
export const PreviousWork = observer(function PreviousWork(props: PreviousWorkProps) {
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const handlePress = (item: WorkImg) => {
    const isSelected = selectedImages.includes(item.key)

    if (isSelected) {
      setSelectedImages(selectedImages.filter((key) => key !== item.key))
    } else {
      setSelectedImages([...selectedImages, item.key])
    }
  }
  return (
    <View>
      <FlatList
        data={previousWork}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <View style={styles.gridContainer}>
              <AutoImage
                source={item.source}
                style={{ height: 120, width: 102, borderRadius: 8 }}
              />
              <View style={{ position: "absolute", top: 4, right: 4 }}>
                {props.isSelected && item.key !== "feature" ? (
                  <Checkbox
                    value={selectedImages.includes(item.key)}
                    color={
                      selectedImages.includes(item.key) ? colors.palette.primary600 : undefined
                    }
                  />
                ) : null}
              </View>
            </View>
          </Pressable>
        )}
        numColumns={3}
        keyExtractor={(item) => item.key}
      />

      {props.previousWork && (
        <FlatList
          data={gridTwoData}
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePress(item)}>
              <View style={styles.twoColumnStyle}>
                <AutoImage
                  source={item.source}
                  style={{ height: 170, width: 157, borderRadius: 8 }}
                />
                <View style={{ position: "absolute", top: 4, right: 4 }}>
                  {props.isSelected && (
                    <Checkbox
                      value={selectedImages.includes(item.key)}
                      color={
                        selectedImages.includes(item.key) ? colors.palette.primary600 : undefined
                      }
                    />
                  )}
                </View>
              </View>
            </Pressable>
          )}
          numColumns={2}
          keyExtractor={(item) => item.key}
        />
      )}

      {props.previousWork && (
        <FlatList
          data={gridThreeData}
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePress(item)}>
              <View style={styles.gridContainer}>
                <AutoImage
                  source={item.source}
                  style={{ height: 120, width: 102, borderRadius: 8 }}
                />
                <View style={{ position: "absolute", top: 4, right: 4 }}>
                  {props.isSelected && (
                    <Checkbox
                      value={selectedImages.includes(item.key)}
                      color={
                        selectedImages.includes(item.key) ? colors.palette.primary600 : undefined
                      }
                    />
                  )}
                </View>
              </View>
            </Pressable>
          )}
          numColumns={3}
          keyExtractor={(item) => item.key}
        />
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 4,
    height: 120,
    width: 102,
    position: "relative",
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
  },

  twoColumnStyle: {
    flex: 1,
    flexDirection: "column",
    margin: 4,
    height: 170,
    width: 157,
    position: "relative",
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
  },
})
