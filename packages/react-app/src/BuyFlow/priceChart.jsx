import React, { useContext } from 'react';
import { Store } from "../store/store";
import { Chart } from 'react-charts'
import { VictoryChart, VictoryArea, VictoryAxis } from "victory";
import { FunctionPlot } from "./FunctionPlot";

{/* This chart is hard coded for now */}
export default function PriceChart() {
  const { state } = useContext(Store);
  const linearData = [
    {
      fn: "x",
      derivative: {
        fn: "1",
        updateOnMouseMove: true
      }
    }
  ]

  const polynomialData = [
    {
      fn: "",
      derivative: {
        fn: "",
        updateOnMouseMove: true
      }
    }
  ]
  const options = {
    data: state.
  }

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[1, 1]]
      },
      {
        label: 'Series 1',
        data: [[0, 1], [1.5, 1.5], [2, 3], [2.2, 7]]
      },
      // {
      //   label: 'Series 2',
      //   data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      // }
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div
      style={{
        width: '200px',
        height: '150px'
      }}
    >
      <FunctionPlot options={options} />
    </div>
  )
}