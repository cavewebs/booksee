import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet, Pressable } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, Text, Icon, PreviousWork } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
import { colors } from "app/theme"
import { PlusCircleIcon } from "lucide-react-native"
// import { useStores } from "app/models"

interface PreviousWorkScreenProps extends AppStackScreenProps<"PreviousWork"> { }

export const PreviousWorkScreen: FC<PreviousWorkScreenProps> = observer(
  function PreviousWorkScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const navigation = useNavigation()

    return (
      <Screen
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <View style={styles.headerStyle}>
          <View style={{ flex: 1 }}>
            <Header title="previousWork" leftIcon="back" onLeftPress={() => navigation.goBack()} />
          </View>
          {!isSelected && <PlusCircleIcon size={24} fill={colors.tint} color={colors.palette.neutral100} style={{ flex: 1, marginTop: 33 }} />}
        </View>
        <View style={styles.endText}>
          {!isSelected && (
            <Text
              size="xs"
              weight="medium"
              text="Select"
              style={styles.close2meText}
              onPress={() => setIsSelected(true)}
            />
          )}

          {isSelected && (
            <View style={styles.assingDeleteWrapper}>
              <Text
                size="xs"
                weight="medium"
                text="Asign To"
                style={styles.close2meText}
                onPress={() => setIsSelected(false)}
              />
              <Text size="xs" weight="medium" text="Delete" style={{ color: "#EF4444" }} />
            </View>
          )}
        </View>

        <PreviousWork isSelected={isSelected} previousWork />
      </Screen >
    )
  },
)

const styles = StyleSheet.create({
  close2meText: {
    color: colors.palette.primary600,
  },

  endText: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 4,
    marginBottom: 16,
  },

  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  assingDeleteWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
})
