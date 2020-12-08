import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import { getJSON, postJSON } from "lib/http";

import useStyles from "./style";

import SimpleCard from "components/1atoms/SimpleCard";
import ErrorContainer from "components/1atoms/pgErrorContainer";
import Shimmer from "components/1atoms/pgShimmer";

import { dataConfig } from "config/pgChartConfig";

import { DASHBOARD_DATA_MOCK } from "constants/urlConstants";

const CardGrid = ({
  apiDetails: { apiUrl, apiOptions, apiMethod, apiResponseKey = "data" },
  chartDetails: { cardsOrder = [], chartOptions = {} },
  filterOptions,
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const classes = useStyles();

  const cardsOrderObj = cardsOrder.reduce((acc, card) => {
    acc[card.key] = card;
    return acc;
  }, {});

  useEffect(
    _ => {
      (async _ => {
        try {
          setLoading(true);
          const response =
            apiMethod === "GET"
              ? await getJSON(apiUrl, apiOptions && apiOptions.params)
              : await postJSON(apiUrl, apiOptions && apiOptions.body);
          setData(response[apiResponseKey][0]);
          setLoading(false);
        } catch (ex) {
          console.log(ex);
          setHasError(true);
        }
      })();
    },
    [apiUrl, apiOptions, apiResponseKey, apiMethod, filterOptions]
  );

  if (hasError)
    return (
      <ErrorContainer
        height={"200px"}
        text={
          "Error occurred while loading this chart. <br /> Please try reloading again."
        }
      />
    );

  if (isLoading)
    return (
      <Grid
        container
        className={classes.container}
        justify="center"
        spacing={3}
      >
        {[...new Array(8).fill(1)].map(loader => (
          <Grid item xs={12} sm={6} md={3} key={loader + Math.random()}>
            <Shimmer height={"107px"} width={"100%"} speed={2} />
          </Grid>
        ))}
      </Grid>
    );

  return (
    <Grid container className={classes.container} justify="center" spacing={3}>
      {(
        (cardsOrder.length && cardsOrder.map(datum => datum.key)) ||
        Object.keys(data)
      )
        .filter(card => Object.keys(data).includes(card))
        .map(card => (
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={card}>
            <SimpleCard
              title={card}
              value={data[card]}
              showPieChart={
                (cardsOrderObj[card] && cardsOrderObj[card]["showPieChart"]) ||
                false
              }
              chartOptions={chartOptions}
              pieChartData={
                cardsOrderObj[card] &&
                cardsOrderObj[card]["chartKeys"].map(key => ({
                  value: data[key] || 0,
                  name: (dataConfig[key] && dataConfig[key]["title"]) || key,
                }))
              }
              colors={cardsOrderObj[card] && cardsOrderObj[card]["colors"]}
            />
          </Grid>
        ))}
    </Grid>
  );
};

CardGrid.defaultProps = {
  apiDetails: {
    apiUrl: DASHBOARD_DATA_MOCK || "",
    apiMethod: "GET",
    apiResponseKey: "data",
    apiOptions: {
      params: {},
      body: {},
    },
  },
  chartDetails: {
    cardsOrder: [],
    chartOptions: {},
  },
};

CardGrid.propTypes = {
  apiDetails: PropTypes.shape({
    apiUrl: PropTypes.string,
    apiMethod: PropTypes.string,
    apiResponseKey: PropTypes.string,
    apiOptions: {
      params: { order_by: PropTypes.array },
      body: PropTypes.object,
    },
  }),
  chartDetails: PropTypes.shape({
    cardsOrder: PropTypes.array,
    chartOptions: PropTypes.object,
  }),
};

export default CardGrid;
