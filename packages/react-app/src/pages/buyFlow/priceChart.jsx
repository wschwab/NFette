import React, { useContext } from 'react';
import { Store } from "../../store/store";
import { FunctionPlot } from "./FunctionPlot";

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
      fn: "x^2 + x",
      derivative: {
        fn: "2x + 1",
        updateOnMouseMove: true
      }
    }
  ]

  const data = state.curve.curveShape === "linear" ? linearData : polynomialData;

  // width, height properties can be added to control the height and width of the graph
  const options = {
    grid: true,
    data,
    xAxis: {
      label: "Total Supply",
      domain: [0,20]
    },
    yAxis: {
      label: "Price",
      domain: [0,500]
    }
  }

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