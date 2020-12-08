import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";

import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/map";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/visualMap";

import { dataConfig } from "config/pgChartConfig";

import { getJSON, postJSON } from "lib/http";

import { capitalize } from "helpers/utils";
import { numberFormatter } from "helpers/utils";

import Shimmer from "components/1atoms/pgShimmer";
import ErrorContainer from "components/1atoms/pgErrorContainer";
import MetricSelector from "components/2molecules/MetricSelector";

const metrics = {
  dma: [
    { id: 1, value: "spend" },
    { id: 2, value: "leads" },
    { id: 3, value: "clicks" },
    { id: 5, value: "impressions" },
    { id: 6, value: "applications" },
    { id: 7, value: "prospects" },
    { id: 8, value: "va" },
  ],
};

const MapChart = ({
  apiDetails: {
    apiUrl,
    apiOptions: { params = {}, body = {} },
    apiMethod,
    apiResponseKey = "data",
  },
  chartDetails: { title, map },
}) => {
  const mapOptions = {
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
    },
    visualMap: {
      left: "right",
      min: 0,
      max: 3000,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
      text: ["High", "Low"],
      calculable: true,
    },
    series: [
      {
        name: "",
        type: "map",
        roam: true,
        zoom: 1.25,
        map: "USA",
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1.2,
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        textFixed: {
          Alaska: [20, -20],
        },
        data: [],
      },
    ],
    backgroundColor: "#bebebe",
  };
  const [options, setOptions] = useState(mapOptions);
  const [dmaData, setDmaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(metrics.dma[0].value);

  useEffect(
    _ => {
      (async _ => {
        try {
          setLoading(true);
          const response =
            apiMethod === "GET"
              ? await getJSON(apiUrl, params)
              : await postJSON(apiUrl, body);

          const apiResponse =
            response && Object.keys(response.data).length
              ? response.data
              : null;
          setDmaData(apiResponse);
          updateChart(response.data);
        } catch (ex) {
          setLoading(false);
          console.log(ex);
        }
      })();
    },
    [params]
  );

  const updateChart = data => {
    if (Object.keys(data).length) {
      const metricSeries = Object.keys(data).map(dma =>
        Object.assign({
          name: dma,
          value: data[dma][selectedMetric],
        })
      );

      const aggMetricSeries = [
        ...mapOptions.series[0].data,
        ...metricSeries,
      ].sort((a, b) => a.value - b.value);
      mapOptions.series[0].data = aggMetricSeries;
      mapOptions.series[0].name = selectedMetric;
      mapOptions.visualMap.max =
        aggMetricSeries[aggMetricSeries.length - 1].value;
      mapOptions.visualMap.min = aggMetricSeries[0].value;

      mapOptions.tooltip.formatter = function (params) {
        const { value, name, seriesName } = params;
        return value
          ? capitalize(name) +
              "<br/><b>" +
              seriesName.toUpperCase() +
              "</b>: " +
              numberFormatter(
                dataConfig[seriesName].type,
                value,
                dataConfig[seriesName].isDecimal,
                dataConfig[seriesName].decimalPoints,
                dataConfig[seriesName].formatting
              )
          : name + "<br/><b>" + seriesName.toUpperCase() + "</b>: 0";
      };
      setLoading(false);
    } else {
      mapOptions.series[0].data = [];
      setLoading(false);
    }
    setOptions(mapOptions);
  };

  useEffect(
    _ => {
      (_ => {
        dmaData && updateChart(dmaData);
      })();
    },
    [selectedMetric]
  );

  echarts.registerMap("USA", map, {
    Hawaii: {
      left: -110,
      top: 28,
      width: 5,
    },
  });

  if (!params.dma_regions.length)
    return (
      <ErrorContainer
        height={"100px"}
        color="error"
        text={"No data found, try changing some filters."}
      />
    );

  if (loading) return <Shimmer height={"80vh"} width={"100%"} speed={2} />;

  return (
    <Grid container spacing={3}>
      <Grid item xs={10}>
        <ReactEchartsCore
          option={Object.assign(options)}
          lazyUpdate
          notMerge={true}
          echarts={echarts}
          style={{ height: "80vh", width: "100%" }}
        />
      </Grid>
      <Grid
        item
        xs={2}
        style={{ padding: "10px", borderLeft: "1px solid #b3b3b3" }}
      >
        <MetricSelector
          metrics={metrics.dma}
          selectedMetric={selectedMetric}
          setSelectedMetric={setSelectedMetric}
        />
      </Grid>
    </Grid>
  );
};

export default MapChart;
