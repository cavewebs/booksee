import * as React from "react"
import { Image, ImageSourcePropType, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
// import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Icon } from "../Icon"
import { useNavigation } from "@react-navigation/native"

export interface RecentSearchCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  rating?: string
  name?: string
  views?: string
  image?: ImageSourcePropType
  id: string
}

/**
 * Describe your component here
 */
export const RecentSearchCard = observer(function RecentSearchCard(props: RecentSearchCardProps) {
  const { id, style, rating, name, views, image } = props
  const $styles = [$container, style]
  const navigation = useNavigation()


  return (
    <Pressable onPress={() => navigation.navigate("ServiceProviderDetails", id)} >
      <View style={$styles}>
        <Image source={image} style={styles.image} />
        <Text text={name} size="sm" style={styles.name} />
        <View style={styles.belowImage}>
          <View style={styles.rating}>
            <Text text={rating} size="xxs" />
            <Icon icon="starFill" size={12} />
          </View>
          <Text text={`(${views})`} size="xxs" />
        </View>
      </View>
    </Pressable>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  // width: 122,
  marginBottom: 12
}

const styles = StyleSheet.create({
  belowImage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    width: 122,
  },
  image: {
    borderRadius: 16,
    height: 126,
    width: 122,
  },
  name: {
    marginBottom: 5,
  },
  rating: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 2,
  }
})


