import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import { Typography } from "@material-ui/core";

import { numberFormatter, calculateCellColor } from "helpers/utils";

const style = {
  color: "initial",
  fontWeight: "bold",
};

const DummyTableWithPagination = ({
  table,
  dataConfig,
  classes,
  tableItem,
  chartDetails: { tableOf, highlightedMetrics, tableHeadersSortOrder, title },
  striped,
  params,
  highlightedMetricsMap,
  showTotal,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = newPage => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <Table className={classes.table}>
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
                    <Typography noWrap variant={"body"}>
                      {dataConfig[row].title}
                    </Typography>
                  </TableCell>
                )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItem.items
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
                            : {
                                ...style,
                                ...{ fontWeight: "normal" },
                              }
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
          {showTotal &&
            tableItem.total.map((row, i) => (
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
                        style={{
                          ...((highlightedMetrics || []).includes(item)
                            ? calculateCellColor(
                                row[item],
                                Math.min(...highlightedMetricsMap[item]),
                                Math.max(...highlightedMetricsMap[item]),
                                dataConfig[item].heatMapFactor
                              )
                            : {
                                ...style,
                                ...{ fontWeight: "normal" },
                              }),
                          ...{ fontWeight: "bold" },
                        }}
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
      {tableItem.items.length > rowsPerPage && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          component="div"
          count={tableItem.items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </>
  );
};

export default DummyTableWithPagination;
