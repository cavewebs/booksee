// @ts-nocheck - preexisting UI type errors; tracked for a later pass
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet, TouchableOpacity } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, Button, Icon } from "app/components"
import { useStores } from "app/models"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors, spacing } from "app/theme"
import Checkbox from "expo-checkbox"
import {
  Toast,
  useToast,
  ToastDescription,
  ToastTitle,
  CheckCircleIcon,
  HStack,
  Icon as GsICon,
} from "@gluestack-ui/themed"

interface SwitchUserTypeScreenProps extends AppStackScreenProps<"SwitchUserType"> {}

export const SwitchUserTypeScreen: FC<SwitchUserTypeScreenProps> = observer(
  function SwitchUserTypeScreen(_props) {
    const { navigation } = _props

    // Pull in one of our MST stores
    const { authenticationStore, walkthroughStore } = useStores()
    const { userType } = authenticationStore
    const [isChecked, setIsChecked] = useState(false)
    const [noUserSelected, setNouserSelected] = useState(false)
    const toast = useToast()

    // Pull in navigation via hook
    const handleUserSelection = (userType: "su" | "sp") => {
      authenticationStore.setUserType(userType)
      toggleCheckbox(userType)
      setNouserSelected(isChecked)
    }

    const proceed = () => {
      if (!isChecked) {
        setNouserSelected(true)
        ToastT()
        return
      }
      navigation.goBack()
    }

    const toggleCheckbox = (user: string) => {
      if (userType === user) setIsChecked(!isChecked)
      else setIsChecked(true)
    }

    const ToastT = () => {
      toast.show({
        placement: "top",
        render: ({ id }: any) => {
          return (
            <RenderToast
              description="Please select an account type "
              nativeId={id}
              action="error"
            />
          )
        },
      })
    }
    const RenderToast = ({ description, title, id, action }: any) => {
      return (
        <Toast action={action} id={id} top={150}>
          <HStack alignItems="center" space="xs">
            <GsICon as={CheckCircleIcon} />
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>{description}</ToastDescription>
          </HStack>
        </Toast>
      )
    }
    return (
      <Screen
        style={{ flex: 1 }}
        preset="auto"
        contentContainerStyle={[screenContentContainer, { flex: 1 }]}
        safeAreaEdges={["top", "bottom"]}
      >
        <View style={styles.container}>
          <View style={styles.topView}>
            <Text preset="heading" size={18} style={styles.title}>
              Select Account Type
            </Text>
            <TouchableOpacity onPress={() => handleUserSelection("sp")}>
              <View
                style={[
                  styles.selectView,
                  {
                    borderColor:
                      isChecked && userType === "sp" ? colors.tint : colors.palette.neutral300,
                  },
                ]}
              >
                <View style={styles.selectViewIcon}>
                  <Icon
                    icon="serviceProvider"
                    color={isChecked && userType === "sp" ? colors.tint : undefined}
                    size={40}
                  />

                  <Text
                    preset="label"
                    style={{
                      paddingLeft: spacing.sm,
                      color: isChecked && userType === "sp" ? colors.tint : undefined,
                    }}
                  >
                    Service Provider
                  </Text>
                </View>
                <View>
                  <Checkbox
                    style={styles.checkBox}
                    value={isChecked && userType === "sp"}
                    onValueChange={setIsChecked}
                    color={isChecked && userType === "sp" ? colors.tint : undefined}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleUserSelection("su")}>
              <View
                style={[
                  styles.selectView,
                  {
                    borderColor:
                      isChecked && userType === "su" ? colors.tint : colors.palette.neutral300,
                  },
                ]}
              >
                <View style={styles.selectViewIcon}>
                  <Icon
                    icon="userAdd"
                    color={isChecked && userType === "su" ? colors.tint : undefined}
                    size={40}
                  />

                  <Text
                    preset="label"
                    style={{
                      paddingLeft: spacing.sm,
                      color: isChecked && userType === "su" ? colors.tint : undefined,
                    }}
                  >
                    Customer
                  </Text>
                </View>
                <View>
                  <Checkbox
                    style={styles.checkBox}
                    value={isChecked && userType === "su"}
                    onValueChange={setIsChecked}
                    color={isChecked && userType === "su" ? colors.tint : undefined}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomView}>
            <Button onPress={() => proceed()} text="Proceed" preset="primary" />
          </View>
        </View>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  bottomView: {
    marginBottom: 50,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  checkBox: {
    alignItems: "center",
    borderColor: colors.palette.neutral400,
    borderRadius: 5,
    borderWidth: 2,
    height: 20,
    justifyContent: "center",
    marginRight: 10,
    width: 20,
  },
  container: {
    flex: 1,
  },
  selectView: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderColor: colors.palette.neutral400,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  selectViewIcon: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    marginBottom: 44,
    textAlign: "center",
  },
  topView: {
    flex: 1,
  },
})
