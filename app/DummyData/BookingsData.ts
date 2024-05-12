import { BookingDataProps } from "app/components"
import { Image } from 'react-native';
const DummyImg = require("../../assets/images/anita-joseph.png")

const Anita = Image.resolveAssetSource(DummyImg).uri;

export const bookingsData: BookingDataProps[] = [
    {
        userImg: Anita,
        name: "Anita Juba",
        price: "$30",
        service: "Nails",
        date: "01.27.23",
        time: "4.00 Pm",
        timeLine: "BiClock",
        status: "Completed",
    },
    {
        userImg: Anita,
        name: "Benson Kubna",
        price: "$17",
        service: "Hair Cut",
        date: "01.27.23",
        time: "12.00 Pm",
        timeLine: "BiClock",
        status: "Upcoming",
    },
    {
        userImg: Anita,
        name: "Bisham Mnajiku",
        price: "$50",
        service: "Pedicure",
        date: "01.27.23",
        time: "4.00 Pm",
        timeLine: "BiClock",
        status: "Cancelled",
    },
    {
        userImg: Anita,
        name: "Shalam Bercetov",
        price: "$500",
        service: "Spa Treatment",
        date: "11.04.23",
        time: "11.00 Am",
        timeLine: "BiClock",
        status: "Upcoming",
    },
]