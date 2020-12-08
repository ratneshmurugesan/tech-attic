import React from "react";
import ReactEcharts from "echarts-for-react";

const ChartWrapper = ({ chartOptions }) => {
  return (
    <ReactEcharts
      lazyUpdate
      notMerge={true}
      option={chartOptions.option}
      style={chartOptions.style}
    />
  );
};

export default ChartWrapper;
