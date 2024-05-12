/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, StyleSheet, Pressable } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, BaseModal, HeaderWithBackButton, OtherHeader, Screen, SectionHeader, } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { works } from "app/components/serviceUser/DummyData/BookingScreenData"
import { spacing } from "app/theme"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface PreviousWorkScreenProps extends AppStackScreenProps<"PreviousWork"> { }

export const PreviousWorkScreen: FC<PreviousWorkScreenProps> = observer(
  function PreviousWorkScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
    const [loadModal, setLoadModal] = useState(false);
    const [activeImg, setActiveImg] = useState();
    // Pull in navigation via hook
    const navigation = useNavigation()
    const loadImg = (img) => {
      setActiveImg(img)
      setLoadModal(true)
    }
    return (
      <Screen
        style={$root}
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <HeaderWithBackButton title="Previous Work" />
        <View>
          <SectionHeader leftText="Beards" />
          <View style={styles.worksContainer}>
            {works.map((work, index) => (
              <Pressable  key={index} onPress={() => loadImg(work)} style={styles.imageContainer} >
                <Image source={work} style={styles.image} />
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{ marginVertical: spacing.md }}>
          <SectionHeader leftText="Haircut" />
          <View style={styles.worksContainer}>
            {works.map((work, index) => (
              <Pressable  key={index} onPress={() => loadImg(work)} style={styles.imageContainer} >
                <Image source={work}  style={styles.image}/>
              </Pressable>
            ))}
          </View>
        </View>
        <View>
          <SectionHeader leftText="Makeup" />
          <View style={styles.worksContainer}>
            {works.map((work, index) => (
              <Pressable  key={index} onPress={() => loadImg(work)} style={styles.imageContainer} >
                <Image source={work} style={styles.image} />
              </Pressable>
            ))}
          </View>
        </View>
        <BaseModal
          modalVisible={loadModal}
          modalBody={<Image source={activeImg} style={styles.img} />}
          setModalVisible={() => setLoadModal(false)}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
    width: "100%",
  },
  imageContainer: {
    gap: 10,
    height: 100,
    width: "30%"
  },
  img: {
    borderRadius: 10,
    height: 300,
    padding: 10,
    width: "100%",
  },
  worksContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    width: "100%"
  }
})
