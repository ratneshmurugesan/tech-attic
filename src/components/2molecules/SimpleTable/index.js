import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Shimmer from "components/1atoms/pgShimmer";
import ErrorContainer from "components/1atoms/pgErrorContainer";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "@material-ui/core/Tooltip";

import { getJSON, postJSON, downloadFile } from "lib/http";
import { format } from "date-fns";
import { dataConfig } from "config/pgChartConfig";
import { numberFormatter, calculateCellColor } from "helpers/utils";

import useStyles from "./style";

const style = {
  color: "initial",
  fontWeight: "bold",
};

const SimpleTable = ({
  apiDetails: {
    apiUrl,
    apiOptions: { params = {}, body = {} },
    apiMethod,
    apiResponseKey = "data",
  },
  chartDetails: { tableOf, highlightedMetrics, tableHeadersSortOrder, title },
  download,
  striped,
}) => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [table, setTable] = useState({ tableHeaders: [], tableBody: [] });
  const [highlightedMetricsMap, setHighlightedMetricsMap] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [downloading, setDownloading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          const tableBody = response[apiResponseKey].map(datum => {
            return {
              ...datum,
              ...{ [tableOf]: datum[tableOf] || datum.name },
            };
          });
          const uniqueHeaders = [...new Set(tableHeaders)];
          setTable(table => ({
            ...table,
            ...{
              tableHeaders: tableHeadersSortOrder
                ? tableHeadersSortOrder
                : [tableOf, ...uniqueHeaders],
              tableBody,
            },
          }));
          const highlightedMetricsHashMap = (highlightedMetrics || []).reduce(
            (acc, metric) => {
              acc[metric] = [];
              return acc;
            },
            {}
          );

          tableBody.forEach(tbItem => {
            return Object.keys(tbItem).forEach(
              item =>
                (highlightedMetrics || []).includes(item) &&
                highlightedMetricsHashMap[item].push(tbItem[item])
            );
          });

          setHighlightedMetricsMap(highlightedMetricsHashMap);
          setRowsPerPage(15);
          setPage(0);
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
              disabled={true}
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
      {table.tableBody.length ? (
        <TableContainer>
          <Table stickyHeader className={classes.table}>
            <TableHead>
              <TableRow>
                {table.tableHeaders.map(
                  (row, index) =>
                    dataConfig[row] && (
                      <TableCell
                        key={dataConfig[row].title + index}
                        align={dataConfig[row].align}
                        className={`${classes.tableCellHeader} ${
                          index === 0 && "sticky"
                        }`}
                      >
                        {dataConfig[row].title}
                      </TableCell>
                    )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {table.tableBody
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow
                    key={i + 1}
                    className={striped ? classes.stripes : null}
                  >
                    {table.tableHeaders.map(
                      (item, index) =>
                        dataConfig[item] && (
                          <TableCell
                            key={`${row[item]}-${index}`}
                            align={dataConfig[item].align}
                            className={`${classes.tableCellBody} ${
                              index === 0 && "sticky"
                            }`}
                            style={
                              (highlightedMetrics || []).includes(item)
                                ? calculateCellColor(
                                    row[item],
                                    Math.min(...highlightedMetricsMap[item]),
                                    Math.max(...highlightedMetricsMap[item]),
                                    dataConfig[item].heatMapFactor
                                  )
                                : row.name === "total"
                                ? index === 0
                                  ? {
                                      ...style,
                                      ...{ textTransform: "capitalize" },
                                    }
                                  : style
                                : { ...style, ...{ fontWeight: "normal" } }
                            }
                            component="td"
                            scope="row"
                          >
                            {item !== tableOf
                              ? numberFormatter(
                                  dataConfig[item].type,
                                  row[item],
                                  dataConfig[item].isDecimal,
                                  dataConfig[item].decimalPoints,
                                  dataConfig[item].formatting,
                                  params
                                )
                              : row[item]}
                          </TableCell>
                        )
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <ErrorContainer
          height={"100px"}
          color="error"
          text={"No data found, try changing some filters."}
        />
      )}
      {table.tableBody.length > rowsPerPage && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          component="div"
          count={table.tableBody.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
};

SimpleTable.defaultProps = {
  apiDetails: {
    apiUrl: "",
    apiMethod: "GET",
    apiOptions: {
      params: { order_by: [] },
      body: {},
    },
    apiResponseKey: "data",
  },
  chartDetails: {
    tableOf: "",
    highlightedMetrics: [],
    tableHeadersSortOrder: [],
    title: function () {},
  },
  striped: true,
  download: true,
};

SimpleTable.propTypes = {
  apiDetails: PropTypes.shape({
    apiUrl: PropTypes.string,
    apiMethod: PropTypes.string,
    apiOptions: {
      params: { order_by: PropTypes.array },
      body: PropTypes.object,
    },
    apiResponseKey: PropTypes.string,
  }),
  chartDetails: PropTypes.shape({
    tableOf: PropTypes.string,
    highlightedMetrics: PropTypes.array,
    tableHeadersSortOrder: PropTypes.array,
    title: PropTypes.func,
  }),
  striped: PropTypes.bool,
  download: PropTypes.bool,
};

export default SimpleTable;
