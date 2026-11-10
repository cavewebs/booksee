import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes | string

  /**
   * An optional tint color for the icon
   */
  color?: string | false

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Icon/}
 * @param {IconProps} props - The props for the `Icon` component.
 * @returns {JSX.Element} The rendered `Icon` component.
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper = (WrapperProps?.onPress ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    color !== undefined && color !== false && { tintColor: color },
    size !== undefined && { width: size, height: size },
    $imageStyleOverride,
  ]

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image style={$imageStyle} source={iconRegistry[icon as IconTypes]} />
    </Wrapper>
  )
}

export const iconRegistry = {
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  check: require("../../assets/icons/check.png"),
  clap: require("../../assets/icons/demo/clap.png"),
  community: require("../../assets/icons/demo/community.png"),
  components: require("../../assets/icons/demo/components.png"),
  debug: require("../../assets/icons/demo/debug.png"),
  github: require("../../assets/icons/demo/github.png"),
  heart: require("../../assets/icons/demo/heart.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  more: require("../../assets/icons/more.png"),
  pin: require("../../assets/icons/demo/pin.png"),
  podcast: require("../../assets/icons/demo/podcast.png"),
  settings: require("../../assets/icons/settings.png"),
  slack: require("../../assets/icons/demo/slack.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
  briefcase: require("../../assets/icons/Briefcase.png"),
  userAdd: require("../../assets/icons/userAdd.png"),
  serviceProvider: require("../../assets/icons/serviceProvider.png"),
  userImage: require("../../assets/icons/userImage.png"),
  Home: require("../../assets/icons/Home.png"),
  market: require("../../assets/icons/market.png"),
  Calendar: require("../../assets/icons/Calendar.png"),
  scissors: require("../../assets/icons/Scissors.png"),
  BiClock: require("../../assets/icons/bi_clock.png"),
  HourGlass: require("../../assets/icons/hourglass.png"),
  addService: require("../../assets/icons/table-material.png"),
  paddlock: require("../../assets/icons/lock-paddlock.png"),
  account: require("../../assets/icons/account.png"),
  wallet: require("../../assets/icons/wallet.png"),
  History: require("../../assets/icons/round_history.png"),
  personSupport: require("../../assets/icons/person-support.png"),
  Edit: require("../../assets/icons/edit-icon.png"),
  signOut: require("../../assets/icons/log-out.png"),
  lovely: require("../../assets/icons/lovely.png"),
  tickCircle: require("../../assets/icons/tick-circle.png"),
  blueLovely: require("../../assets/icons/blue-lovley.png"),
  closeCircle: require("../../assets/icons/close-circle.png"),
  phone: require("../../assets/icons/phone.png"),
  carretdown: require("../../assets/icons/carret-down.png"),
  caretDown: require("../../assets/icons/carret-down.png"),
  female: require("../../assets/icons/la_female.png"),
  solarHome: require("../../assets/icons/solar-home.png"),
  add: require("../../assets/icons/addIcon.png"),
  deletIcon: require("../../assets/icons/bin_delete.png"),
  toggleButton: require("../../assets/icons/ion_toggle.png"),
  fileUpload: require("../../assets/icons/fileUpload.png"),
  imgUpload: require("../../assets/icons/imgUpload.png"),
  stars: require("../../assets/icons/bi_star-fill.png"),
  carbonTime: require("../../assets/icons/carbon_time.png"),
  searchIcon: require("../../assets/icons/search-icon.png"),
  bookingIcon: require("../../assets/icons/bookings.png"),
  maleIcon: require("../../assets/icons/la_male.png"),
  bothSex: require("../../assets/icons/male_female.png"),
  office: require("../../assets/icons/office-building.png"),
  arrowDown: require("../../assets/icons/arrow-drop-down.png"),
  beard: require("../../assets/icons/beard.png"),
  clock: require("../../assets/icons/clock.png"),
  eyelashes: require("../../assets/icons/eyelashes.png"),
  makeup: require("../../assets/icons/foundation-makeup.png"),
  highFive: require("../../assets/icons/highFive.png"),
  hourglass: require("../../assets/icons/hourglass.png"),
  location: require("../../assets/icons/location.png"),
  hair: require("../../assets/icons/mingcute_hair.png"),
  notification: require("../../assets/icons/notification-bell.png"),
  search: require("../../assets/icons/search.png"),
  starFill: require("../../assets/icons/star-fill.png"),
  locationAlt: require("../../assets/icons/locationWhite.png"),
  arrowBack: require("../../assets/icons/ArrowLeft.png"),
  editPencil: require("../../assets/icons/editPencil.png"),
  close: require("../../assets/icons/close.png"),
  calendarBlue: require("../../assets/icons/CalendarBlue.png"),
  hourglassAlt: require("../../assets/icons/hourglassAlt.png"),
  chevronRight: require("../../assets/icons/chevronRight.png"),
  solarMapLinear: require("../../assets/icons/solar_map-linear.png"),
  solarMap: require("../../assets/icons/solar_map-linear.png"),
  menuDots: require("../../assets/icons/menuDots.png"),
  pound: require("../../assets/icons/pound.png"),
  callPhone: require("../../assets/icons/callPhone.png"),
  remove: require("../../assets/icons/remove.png"),
  date: require("../../assets/icons/date.png"),
  visa: require("../../assets/icons/visa.png"),
  mastercard: require("../../assets/icons/mastercard.png"),
}

const $imageStyleBase: ImageStyle = {
  resizeMode: "contain",
}
