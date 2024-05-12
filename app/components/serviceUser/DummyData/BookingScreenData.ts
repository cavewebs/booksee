const nailPaint = require("../../../../assets/images/nailsPaint.png")
const Haircut = require("../../../../assets/images/theNext.png")
const next = require("../../../../assets/images/theNext.png")
const damiApparel = require("../../../../assets/images/damiApparel.png")
const beautyMakeover = require("../../../../assets/images/beautyMakeover.png")

export const bookingTabs = ["Upcoming", "Previous", "Cancelled"]
export const addCardTab = ["Credit Card", "Debit Card"]
 
export const UpcomingBookingData = [
  {
    image:  Haircut,
    textTopLeft: "Haircut",
    textTopRight: "On Hold",
    midTextLeft: "The Next Salon",
    midIconRight: "hourglassAlt",
    midTextRight: "30 minutes",
    bottomIconLeft: "clock",
    bottomTextLeft: "4:00 PM",
    bottomIconRight: "calendarBlue",
    bottomTextRight: "27.01.23",
    status: "Upcoming"
  },
  {
    image: nailPaint,
    textTopLeft: "Nails> Nail Paint",
    textTopRight: "Completed",
    midTextLeft: "Dami’s Beauty Shop",
    midIconRight: "hourglassAlt",
    midTextRight: "30 minutes",
    bottomIconLeft: "clock",
    bottomTextLeft: "4:00 PM",
    bottomIconRight: "calendarBlue",
    bottomTextRight: "27.01.23",
    status: "Previous"
  },
  {
    image: nailPaint,
    textTopLeft: "Pedicure",
    textTopRight: "Cancelled",
    midTextLeft: "Dami’s Beauty Shop",
    midIconRight: "hourglassAlt",
    midTextRight: "30 minutes",
    bottomIconLeft: "clock",
    bottomTextLeft: "4:00 PM",
    bottomIconRight: "calendarBlue",
    bottomTextRight: "27.01.23",
    status: "Cancelled"
  },
  ]

  export const works = [
    next, damiApparel, beautyMakeover,
    next, damiApparel, beautyMakeover
  ]