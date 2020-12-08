import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

import ChartWrapper from "components/1atoms/pgChartsWrapper";
import ChartFilters from "components/2molecules/pgChartWithFilters/chartFilters";
import Shimmer from "components/1atoms/pgShimmer";
import ErrorContainer from "components/1atoms/pgErrorContainer";

import { getJSON, postJSON } from "lib/http";
import { dataConfig } from "config/pgChartConfig";

import { chartOptionsConfigFn } from "config/pgChartConfig";
import { Grid } from "@material-ui/core";

const ChartWithFilters = ({
  apiDetails,
  chartDetails,
  filterOptions,
  dataConfig,
}) => {
  // Destructuring the props
  const { dimensions, metrics } = filterOptions;
  const {
    apiUrl,
    apiMethod,
    apiOptions: {
      reportType,
      body,
      params,
      params: { time_aggregate },
    },
    apiResponseKey,
  } = apiDetails;
  const { title, isStack } = chartDetails;
  // states to stores chart filters
  const [selectedMetrics, setSelectedMetrics] = useState([metrics[0]]);
  const setDimensions = () => {
    const dims = {};
    dimensions.forEach((dimension, index) => {
      Object.assign(dims, {
        [index]: dimension.map(item => item.name),
      });
    });
    return dims;
  };
  const [selectedDimensions, setSelectedDimensions] = useState(setDimensions());
  const [graphType, setGraphType] = useState("bar");
  const [dimensionsList] = useState(dimensions);
  // State to store data for charts
  const [data, setData] = useState(null);

  // states to handle loading and errors
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Methods to handle filters
  const handleGraphTypeChange = event => {
    setGraphType(event.target.value);
  };
  const handleChangeMetric = event => {
    setSelectedMetrics(event.target.value);
  };
  const handleChangeDim = (event, index) => {
    setSelectedDimensions({
      ...selectedDimensions,
      ...{ [index]: event.target.value },
    });
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setHasError(false);
        const response =
          apiMethod === "GET"
            ? await getJSON(apiUrl, params)
            : await postJSON(apiUrl, body);
        setData(response[apiResponseKey]);
        setSelectedDimensions(setDimensions());
      } catch (ex) {
        console.log(ex);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [apiMethod, apiResponseKey, apiUrl, body, params]);

  // Creating list of metrics objects with metadata
  const metricsConfig = selectedMetrics.map(metric => dataConfig[metric]);

  const chartOptions = {
    option: chartOptionsConfigFn(
      data,
      reportType,
      selectedDimensions,
      metricsConfig,
      graphType,
      isStack,
      time_aggregate || "dateindex"
    ),
    style: {
      height: "500px",
      width: "100%",
      marginBottom: 10,
    },
  };

  if (isLoading || !selectedDimensions)
    return <Shimmer height={"500px"} width={"100%"} speed={2} />;
  if (hasError)
    return (
      <ErrorContainer
        height={"500px"}
        text={
          "Error occurred while loading this chart. <br /> Please try reloading again."
        }
      />
    );

  return data && data.length ? (
    <Grid container spacing={3} direction="column">
      <Grid item container justify="space-between">
        <Grid item md={5}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item md={7}>
          <ChartFilters
            dimensions={dimensionsList}
            metrics={metrics}
            selectedDim={selectedDimensions}
            handleChangeDim={handleChangeDim}
            selectedMetrics={selectedMetrics}
            handleChangeMetric={handleChangeMetric}
            graphType={graphType}
            handleGraphTypeChange={handleGraphTypeChange}
            dataConfig={dataConfig}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ChartWrapper chartOptions={chartOptions} />
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={3} direction="column">
      <Grid item xs={12}>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <ErrorContainer
          height={"100px"}
          color="error"
          text={"No data found, try changing some filters."}
        />
      </Grid>
    </Grid>
  );
};

ChartWithFilters._meta = {
  category: "CCLS", // Should be the Project name..
  section: "Chart Component",
  description: "Chart with filters component",
};

ChartWithFilters.defaultProps = {
  apiDetails: {
    apiUrl: "",
    apiMethod: "GET",
    apiOptions: {
      params: {},
      body: {},
      reportType: "",
    },
    apiResponseKey: "data",
  },
  chartDetails: {
    title: "",
    isStack: true,
  },
  filterOptions: {
    dimensions: [],
    metrics: [],
  },
  dataConfig,
};

ChartWithFilters.propTypes = {
  apiDetails: PropTypes.shape({
    apiUrl: PropTypes.string,
    apiMethod: PropTypes.string,
    apiOptions: {
      params: PropTypes.object,
      body: PropTypes.object,
      reportType: PropTypes.string,
    },
    apiResponseKey: PropTypes.string,
  }),
  chartDetails: PropTypes.shape({
    title: PropTypes.string,
    isStack: PropTypes.bool,
  }),
  filterOptions: PropTypes.shape({
    dimensions: PropTypes.array,
    metrics: PropTypes.array,
  }),
  dataConfig: PropTypes.object,
};

export default memo(ChartWithFilters);
