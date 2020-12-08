import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Grid, IconButton } from "@material-ui/core";
import { numberFormatter } from "helpers/utils";
import { dataConfig } from "config/pgChartConfig";

import ChartWrapper from "components/1atoms/pgChartsWrapper";

import useStyles from "./styles";

const SimpleCard = ({
  title,
  value,
  showPieChart,
  pieChartData,
  chartOptions,
  colors,
}) => {
  const piePercentage = +(pieChartData && pieChartData[0]
    ? (pieChartData[0]["value"] /
        pieChartData.reduce((acc, datum) => {
          acc += datum.value;
          return acc;
        }, 0)) *
      100
    : 0
  ).toFixed(0);

  const classes = useStyles();
  return dataConfig && dataConfig[title] ? (
    <Card
      className={classes.root}
      style={{
        borderColor: dataConfig[title].color,
        textAlign: dataConfig[title].align,
      }}
    >
      <Grid container justify="flex-start" spacing={4}>
        <Grid item xs={3} sm={3} md={2} lg={3} xl={2}>
          <IconButton
            className={classes.icon}
            style={{ backgroundColor: dataConfig[title].color }}
          >
            {dataConfig[title].icon}
          </IconButton>
        </Grid>
        <Grid
          item
          xs={showPieChart ? 6 : 8}
          sm={showPieChart ? 6 : 8}
          md={showPieChart ? 7 : 8}
          lg={showPieChart ? 6 : 8}
          xl={showPieChart ? 6 : 8}
        >
          <Grid item>
            <Typography
              className={classes.cardValue}
              style={{
                color: dataConfig[title].color,
              }}
            >
              {value === -1
                ? "N/A"
                : numberFormatter(
                    dataConfig[title].type,
                    value,
                    dataConfig[title].isDecimal,
                    dataConfig[title].decimalPoints,
                    dataConfig[title].formatting
                  )}
            </Typography>
          </Grid>
          <Grid item>
            <Typography noWrap style={{ color: dataConfig[title].color }}>
              {dataConfig[title].cardTitle}
            </Typography>
          </Grid>
        </Grid>
        {/* Pie-chart */}
        <Grid
          item
          xs={3}
          sm={3}
          md={showPieChart ? 3 : 8}
          lg={showPieChart ? 3 : 8}
          xl={showPieChart ? 3 : 8}
        >
          <ChartWrapper
            chartOptions={{
              ...chartOptions,
              option: {
                tooltip: {
                  trigger: "item",
                  formatter: "{b}: {c} ({d}%)",
                },
                series: [
                  {
                    name: null,
                    type: "pie",
                    radius: ["47%", "67%"],
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    label: {
                      show: true,
                      position: "center",
                      fontSize: "13",
                      fontWeight: 700,
                      color: "#000",
                      formatter: piePercentage ? `${piePercentage}%` : "{d}%",
                    },
                    labelLine: {
                      show: false,
                    },
                    data: pieChartData || [],
                    ...(colors && { color: colors }),
                    animationEasing: "backInOut",
                  },
                ],
              },
            }}
          />
        </Grid>
      </Grid>
    </Card>
  ) : null;
};

export default SimpleCard;
