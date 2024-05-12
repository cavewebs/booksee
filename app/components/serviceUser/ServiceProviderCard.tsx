import * as React from "react"
import {
  StyleProp,
  View,
  ViewStyle,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { Text } from "app/components/Text"
import { Icon } from "../Icon"

export interface ServiceProviderCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  image?: ImageSourcePropType
  location?: string
  views?: string
  rating?: string
  name?: string
  navigate?: () => void;
}

/**
 * Describe your component here
 */
export const ServiceProviderCard = observer(function ServiceProviderCard(
  props: ServiceProviderCardProps,
) {
  const { style, image, location, views, rating, name, navigate } = props
  const $styles = [$container, style]

  const ServiceCard = () => {
    return (
      <View style={$styles}>
        <ImageBackground source={image} style={styles.imageBackground} resizeMode="cover">
          <View style={styles.overlay}>
            <View style={styles.containerStyle}>
              <Text text={name} weight="light" size={"sm"} style={styles.text} />
              <View style={styles.rating}>
                <Text text={rating} style={styles.text} size={"xs"} />
                <Icon icon="starFill" />
                <Text text={`(${views})`} style={styles.text} size={"xs"} />
              </View>
            </View>
            <View style={styles.rating}>
              <Icon icon="locationAlt" size={16} />
              <Text text={location} weight="light" size={"xs"} style={styles.text} />
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
  return (
    <>
      {navigate ? (
        <TouchableOpacity onPress={() => navigate && navigate()}>

          <ServiceCard />
        </TouchableOpacity>

      ) :
        (<ServiceCard />)
      }
    </>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  marginBottom: 8,
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageBackground: {
    flex: 1,
    height: 261,
    justifyContent: "flex-end",
    // eslint-disable-next-line react-native/sort-styles
    borderRadius: 12,
    overflow: "hidden",
  },
  // eslint-disable-next-line react-native/no-color-literals
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    justifyContent: "space-between",
    marginBottom: 12,
    marginHorizontal: 8,
    padding: 8,
  },
  rating: {
    flexDirection: "row",
    // flexShrink: 1,
    gap: 2,
    alignI: "center"
  },
  text: {
    color: colors.palette.neutral100,
    marginBottom: 8
  },
})
