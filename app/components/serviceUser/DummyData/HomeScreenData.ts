const damiImage = require("../../../../assets/images/Dami.png")
const rachealImage = require("../../../../assets/images/racheal.png")
const adeolaImage = require("../../../../assets/images/Adeola.png")
const nailPaint = require("../../../../assets/images/nailsPaint.png")
const next = require("../../../../assets/images/theNext.png")
const damiApparel = require("../../../../assets/images/damiApparel.png")
const beautyMakeover = require("../../../../assets/images/beautyMakeover.png")

export const services = [
  { serviceName: "Hair", icon: "hair", serviceOfferings: [{ serviceName: "Hair", icon: "hair", offerName: "Hair", price: 17.2, duration: 30 }, { serviceName: "Hair", icon: "hair", offerName: "Beard Trim", price: 5, duration: 15 }, { serviceName: "Hair", icon: "hair", offerName: "Clean Shave", price: 20, duration: 45 }] },
  { serviceName: "Nails", icon: "highFive", serviceOfferings: [{ serviceName: "Nails", icon: "highFive", offerName: "Polish", price: 17.2, duration: 30 }, { serviceName: "Nails", icon: "highFive", offerName: "Pedicure", price: 5, duration: 15 }, { serviceName: "Nails", icon: "highFive", offerName: "Manicure", price: 20, duration: 45 }] },
  { serviceName: "Beard", icon: "beard", serviceOfferings: [{ serviceName: "Beard", icon: "beard", offerName: "beard", price: 17.2, duration: 30 }, { serviceName: "Beard", icon: "beard", offerName: "Beard Trim", price: 5, duration: 15 }, { serviceName: "Beard", icon: "hair", offerName: "Clean Shave", price: 20, duration: 45 }] },
  { serviceName: "Eye", icon: "eyelashes", serviceOfferings: [{ serviceName: "Eye", icon: "eyelashes", offerName: "eyelashes", price: 17.2, duration: 30 }, { serviceName: "Eye", icon: "eyelashes", offerName: "Beard Trim", price: 5, duration: 15 }, { serviceName: "Eye", icon: "hair", offerName: "Clean Shave", price: 20, duration: 45 }] },
  { serviceName: "Makeup", icon: "makeup", serviceOfferings: [{ serviceName: "Makeup", icon: "makeup", offerName: "Makeup", price: 17.2, duration: 30 }, { serviceName: "Makeup", icon: "makeup", offerName: "Beard Trim", price: 5, duration: 15 }, { serviceName: "Makeup", icon: "makeup", offerName: "Clean Shave", price: 20, duration: 45 }] },
]

export const recentSearch = [
  { id: "1", rating: "4.8", name: "Dami Sarah", views: "5123", image: damiImage },
  { id: "12", rating: "4.5", name: "Rachael George", views: "1234", image: rachealImage },
  { id: "13", rating: "3.2", name: "Adeola Badmus", views: "2345", image: adeolaImage },
]

export const bookingData = [
  {
    image: nailPaint,
    textTopLeft: "Nails> Nail Paint",
    midTextLeft: "Dami’s Beauty Shop",
    bottomIconLeft: "hourglass",
    bottomTextLeft: "30 minutes",
    bottomIconRight: "clock",
    bottomTextRight: "4:00 PM",
  },
]

export const bookingSearchResultData = [
  {
    image: nailPaint,
    textTopLeft: "Nails> Nail Paint",
    midLeftIcon: "location",
    midTextLeft: "24 Montgomery Road, New York",
    midTextRight: "Open",
    rating: "4.5",
    bottomIconLeft: "starFill",
    bottomTextLeft: "(5123)",
    bottomIconRight: "clock",
    bottomTextRight: "8:00AM - 8:00PM",
  },
  {
    image: nailPaint,
    textTopLeft: "Nails> Nail Paint",
    midLeftIcon: "location",
    midTextLeft: "24 Montgomery Road, New York",
    midTextRight: "Closed",
    rating: "4.7",
    bottomIconLeft: "starFill",
    bottomTextLeft: "(23)",
    bottomIconRight: "clock",
    bottomTextRight: "8:00AM - 8:00PM",
  },
  {
    image: nailPaint,
    textTopLeft: "Nails> Nail Paint",
    midLeftIcon: "location",
    midTextLeft: "24 Montgomery Road, New York",
    midTextRight: "Open",
    rating: "4.9",
    bottomIconLeft: "starFill",
    bottomTextLeft: "(123)",
    bottomIconRight: "clock",
    bottomTextRight: "8:00AM - 8:00PM",
  },
  {
    image: nailPaint,
    textTopLeft: "Nails> Nail Paint",
    midLeftIcon: "location",
    midTextLeft: "24 Montgomery Road, New York",
    midTextRight: "Closed",
    rating: "4.0",
    bottomIconLeft: "starFill",
    bottomTextLeft: "(512)",
    bottomIconRight: "clock",
    bottomTextRight: "8:00AM - 8:00PM",
  },
  {
    image: nailPaint,
    textTopLeft: "Nails> Nail Paint",
    midLeftIcon: "location",
    midTextLeft: "24 Montgomery Road, New York",
    midTextRight: "Closed",
    rating: "4.0",
    bottomIconLeft: "starFill",
    bottomTextLeft: "(512)",
    bottomIconRight: "clock",
    bottomTextRight: "8:00AM - 8:00PM",
  },
]

export const serviceProvider = [
  {
    image: next,
    location: "25 Montgomery Road, Yaba",
    views: "5134",
    rating: "4.8",
    name: "The Next Barbing Salon",
  },
  {
    image: damiApparel,
    location: "25 Benson Ikorodu, Lagos",
    views: "673",
    rating: "4.2",
    name: "Dami's Apparels",
  },
  {
    image: beautyMakeover,
    location: "25 Awolowo Road, Ikeja",
    views: "884",
    rating: "4.5",
    name: "Gleaming Beauty makeovers",
  },
]

export const recentSearchCache = [
  {
    text: "Hair Service",
  },
  {
    text: "Beard Service",
  },
  {
    text: "Nail Service",
  },
  {
    text: "Wax",
  },
]

export const popularSearch = [
  {
    text: "Hair",
  },
  {
    text: "Nails",
  },
  {
    text: "Beards",
  },
  {
    text: "Eye",
  },
  {
    text: "Eye Lashes",
  },
  {
    text: "Makeup",
  },
]

export const inspiredTabs = ["Male", "Female"]

export const notificationsList = [
  {
    id: "121233234",
    user: "Anita Joseph",
    message: "cancelled your",
    timestamp: "Today, 4:23PM",
    service: "Appointment",
  },
  {
    id: "1212332334",
    user: "Kuluschenski Mkata",
    message: "accepted your",
    timestamp: "Friday, 12:23PM",
    service: "Home Service Appointment",
  },
  {
    id: "1212332344",
    user: "Benson Rayad Leno",
    message: "rescheduled your",
    timestamp: "1 month ago, 7:23AM",
    service: "Appointment",
  },
  {
    id: "1212332345",
    user: "Obioma Obirim",
    message: "cancelled your",
    timestamp: "6 weeks ago, 5:43PM",
    service: "Appointment",
  },
  {
    id: "1212332348",
    user: "Musalewmi Gutchaeremo",
    message: "accepted your",
    timestamp: "4 months ago, 2:23AM",
    service: "Appointment",
  },
]

