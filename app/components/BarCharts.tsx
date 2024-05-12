import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Dimensions } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { BarChart } from "react-native-chart-kit"

type Datasets = {
  data: number[]
}

interface Data {
  labels: string[]
  datasets: Datasets[]
}

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 60],
    },
  ],
}

const chartConfig = {
  backgroundGradientFrom: "#F9F9F9",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => colors.palette.primary600,
  barPercentage: 0.4,
  useShadowColorFromDataset: false, // optional
  fillShadowGradientFrom: colors.palette.primary600,
  fillShadowGradientFromOpacity: 1,
  fillShadowGradientTo: colors.palette.primary600,
  fillShadowGradientToOpacity: 1,
}

export interface BarChartsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const BarCharts = observer(function BarCharts(props: BarChartsProps) {
  const screenWidth = Dimensions.get("window").width

  return (
    <BarChart
      style={{ borderRadius: 16 }}
      data={data}
      width={343}
      height={162}
      yAxisLabel="$"
      chartConfig={chartConfig}
      verticalLabelRotation={0}
      yAxisSuffix=""
      fromZero={false}
    />
  )
})

// const $container: ViewStyle = {
//   justifyContent: "center",
// }

// const $text: TextStyle = {
//   fontFamily: typography.primary.normal,
//   fontSize: 14,
//   color: colors.palette.primary500,
// }
