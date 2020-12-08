import React, { useEffect, useState } from "react";

import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Shimmer from "components/1atoms/pgShimmer";
import ErrorContainer from "components/1atoms/pgErrorContainer";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "@material-ui/core/Tooltip";
import DummyTableWithPagination from "./dummyTableWithPagination";

import { getJSON, postJSON, downloadFile } from "lib/http";
import { format } from "date-fns";
import { dataConfig } from "config/pgChartConfig";

import useStyles from "./style";

const NestedTableWithLegend = ({
  apiDetails: {
    apiUrl,
    apiOptions: { params = {}, body = {} },
    apiMethod,
    apiResponseKey = "data",
  },
  chartDetails,
  chartDetails: {
    tableOf,
    highlightedMetrics,
    tableHeadersSortOrder,
    title,
    legendTitle,
  },
  download,
  striped,
}) => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [table, setTable] = useState({ tableHeaders: [], tableBody: [] });
  const [highlightedMetricsMap, setHighlightedMetricsMap] = useState({});
  const [downloading, setDownloading] = useState(false);

  useEffect(
    _ => {
      (async _ => {
        try {
          setLoading(true);
          setHasError(false);
          const response =
            apiMethod === "GET"
              ? await getJSON(apiUrl, params)
              : await postJSON(apiUrl, body);
          const tableHeaders = response[apiResponseKey]
            .map(datum => Object.keys(datum))
            .flat();
          const tableBody = response[apiResponseKey]
            .filter(product => product.name !== "Others")
            .map(datum => ({
              ...datum,
              ...{ [tableOf]: datum[tableOf] || datum.name },
            }));

          const uniqueHeaders = [...new Set(tableHeaders)];
          setTable({
            ...table,
            ...{
              tableHeaders: tableHeadersSortOrder
                ? tableHeadersSortOrder
                : [tableOf, ...uniqueHeaders],
              tableBody,
            },
          });
          const highlightedMetricsHashMap = (highlightedMetrics || []).reduce(
            (acc, metric) => {
              acc[metric] = [];
              return acc;
            },
            {}
          );

          setHighlightedMetricsMap(highlightedMetricsHashMap);
        } catch (ex) {
          console.error(ex);
          setHasError(true);
        } finally {
          setLoading(false);
        }
      })();
    },
    [params, apiUrl, tableOf]
  );

  const handleDownloadClick = async ev => {
    (async () => {
      setDownloading(true);
      await downloadFile(apiUrl, {
        ...params,
        ...{ download },
      })
        .then(response => {
          const url = window.URL.createObjectURL(
            new Blob([response.data], {
              type:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            })
          );
          const link = document.createElement("a");
          link.href = url;
          const { dashboard_type, report_type, start_date, end_date } = params;
          const capitalizeFn = str =>
            str.substr(0, 1).toUpperCase() + str.substr(1);
          const fileName = `${capitalizeFn(dashboard_type)} - ${
            report_type && capitalizeFn(report_type).replace(/_/g, " ")
          } - ${format(new Date(start_date), "dd-MMM-yyyy")} to ${format(
            new Date(end_date),
            "dd-MMM-yyyy"
          )}.xlsx`;
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
          link.remove();
          setDownloading(false);
        })
        .catch(err => {
          console.error(err);
          setDownloading(false);
        });
    })();
  };

  if (isLoading) return <Shimmer height={"300px"} width={"100%"} speed={2} />;
  if (hasError)
    return (
      <ErrorContainer
        height={"200px"}
        text={
          "Error occurred while loading this table. <br /> Please try reloading again."
        }
      />
    );
  return (
    <div>
      <Typography variant="h6" className={classes.tableHeading}>
        <Box display="flex" justifyContent="space-between">
          {title ? title : dataConfig[tableOf].title}
          {download && (
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleDownloadClick}
              disabled={downloading}
              m={0}
              p={1}
              disableElevation
            >
              {!downloading && (
                <Tooltip title={"Download report"} placement="top">
                  <CloudDownloadOutlinedIcon />
                </Tooltip>
              )}
              {downloading && <CircularProgress size={24} />}
            </Button>
          )}
        </Box>
      </Typography>
      {table.tableBody.filter(tableRow => tableRow.items.length).length ? (
        <TableContainer>
          {table.tableBody.map(tableItem =>
            tableItem.items.length ? (
              <Table>
                <TableRow>
                  <TableCell className={classes.tableHeadRow}>
                    <Typography className={classes.tableHeadliner} noWrap>
                      {legendTitle}
                    </Typography>
                    {tableItem.name}
                  </TableCell>
                  <TableCell>
                    <DummyTableWithPagination
                      table={table}
                      tableItem={tableItem}
                      dataConfig={dataConfig}
                      classes={classes}
                      chartDetails={chartDetails}
                      striped={striped}
                      params={params}
                      highlightedMetricsMap={highlightedMetricsMap}
                      showTotal={false}
                    />
                  </TableCell>
                </TableRow>
              </Table>
            ) : null
          )}
        </TableContainer>
      ) : (
        <ErrorContainer
          height={"100px"}
          color="error"
          text={"No data found, try changing some filters."}
        />
      )}
    </div>
  );
};

NestedTableWithLegend.defaultProps = {
  apiDetails: {
    apiUrl: "",
    apiMethod: "GET",
    apiOtions: {
      params: { order_by: [] },
      body: {},
    },
    apiResponseKey: "data",
  },
  chartDetails: {
    tableOf: "",
    highlightedMetrics: [],
    tableHeadersSortOrder: [],
    title: "",
  },
  striped: true,
  download: false,
};

export default NestedTableWithLegend;
