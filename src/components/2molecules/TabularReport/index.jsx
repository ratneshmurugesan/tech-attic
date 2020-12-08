import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getJSON, postJSON } from "lib/http";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ErrorContainer from "components/1atoms/pgErrorContainer";
import Shimmer from "components/1atoms/pgShimmer";

import StyledTable from "components/2molecules/StyledTable";

import useStyles from "./styles.js";

const TabularReport = ({
  apiDetails: { apiUrl, apiOptions, apiMethod, apiResponseKey = "data" },
  chartDetails: { cardsOrder = [], metricsOrder = [], title = "" },
  shimmerDetails: { filterOptionsLength },
}) => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(
    _ => {
      (async _ => {
        try {
          setLoading(true);
          const response =
            apiMethod === "GET"
              ? await getJSON(apiUrl, apiOptions && apiOptions.params)
              : await postJSON(apiUrl, apiOptions && apiOptions.body);

          const collection = [];
          cardsOrder &&
            cardsOrder.forEach(card => {
              const datum = response[apiResponseKey].find(
                o => o.name === card.name
              );
              if (!!datum) {
                collection.push({ ...datum, ...{ color: card.color } });
              }
            });
          setData(collection.length ? collection : response[apiResponseKey]);
          setLoading(false);
        } catch (ex) {
          console.log(ex);
          setHasError(true);
        }
      })();
    },
    [apiMethod, apiOptions, apiResponseKey, apiUrl, cardsOrder]
  );

  if (isLoading) {
    return (
      <Grid container justify="center" spacing={4}>
        {[...new Array(filterOptionsLength).fill(1)].map(loader => (
          <Grid
            item
            xs={12}
            md={6}
            lg={filterOptionsLength >= 4 ? 3 : 12 / filterOptionsLength}
            key={loader + Math.random()}
          >
            <Shimmer height={"400px"} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (hasError)
    return (
      <ErrorContainer
        height={"200px"}
        text={
          "Error occurred while loading this chart. <br /> Please try reloading again."
        }
      />
    );

  return (
    <div className={classes.tabularReport}>
      <Typography variant="h6">{title}</Typography>
      <Grid container direction="row" spacing={4}>
        {data && data.length ? (
          data.map(channelObj => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={data.length >= 4 ? 3 : 12 / data.length}
              key={channelObj.name}
            >
              <StyledTable
                dataObj={metricsOrder.reduce((acc, metric) => {
                  acc[metric] = channelObj[metric];
                  return acc;
                }, {})}
                color={channelObj["color"] || "#4834d4"}
                name={channelObj.name}
                title={title}
              />
            </Grid>
          ))
        ) : (
          <ErrorContainer
            height={"100px"}
            color="error"
            text={"No data found, try changing some filters."}
          />
        )}
      </Grid>
    </div>
  );
};

TabularReport.defaultProps = {
  apiDetails: {
    apiUrl: "",
    apiMethod: "GET",
    apiResponseKey: "data",
    apiOptions: {
      params: {},
      body: {},
    },
  },
  chartDetails: {
    cardsOrder: [],
    metricsOrder: [],
    title: () => null,
  },
  shimmerDetails: {
    filterOptionsLength: 0,
  },
};

TabularReport.propTypes = {
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
    metricsOrder: PropTypes.array,
    title: PropTypes.element,
  }),
  shimmerDetails: PropTypes.object,
};

export default TabularReport;
