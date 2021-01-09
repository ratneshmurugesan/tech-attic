import * as React from "react";
import { useEffect, useState, useCallback } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./index.scss";

interface MyObject {
  foo: string;
  bar?: number;
}

const MockStackOverflow: React.FunctionComponent<> = (_) => {
  const [apiDataItems, setApiData] = useState([]);
  const [errorObj, setErrorObj] = useState({ error_status: false });
  const [openObj, setOpen] = React.useState({});

  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleClickOpen = (key) => {
    setOpen({ ...openObj, [key]: true });
  };

  const handleClose = (key) => {
    setOpen({ ...openObj, [key]: false });
  };

  const fetchAPIData = useCallback(async (page = 1) => {
    const _page = page;
    try {
      const response = await fetch(
        `https://api.stackexchange.com/2.2/questions?page=${_page}&pagesize=5&order=desc&sort=activity&site=stackoverflow&filter=withbody`
      );
      const apiData = await response.json();

      console.log("fetchAPIData", apiData);
      if (apiData && apiData.error_id) {
        setErrorObj({
          error_id: apiData.error_id,
          error_name: apiData.error_name,
          error_message: apiData.error_message,
          error_status: true,
        });
      } else {
        setApiData((apiDataItems) => [...apiDataItems, ...apiData.items]);
      }
    setPage((pageState) => pageState + 1);
    } catch (err) {
      setErrorObj({
        error_id: err.error_id,
        error_name: err.err_name,
        error_message: err.error_message,
        error_status: true,
      });
    }
  }, [setPage]);

  useEffect(
    (_) => {
      console.log("useEffect");
      fetchAPIData();
    },
    [fetchAPIData]
  );

  const fetchMoreData = () => {
    console.log("fetchMoreData", apiDataItems.length);
    if (apiDataItems.length >= 50) {
      setHasMore(false);
      return;
    }
    setTimeout(async () => {
      await fetchAPIData(page);
    }, 1000);
  };

  const popUp = (item, i) => {
    return (
      <div key={i}>
        <Dialog
          open={openObj[i] || false}
          onClose={() => handleClose(i)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{item.title}</DialogTitle>
          <DialogContent>
            <div dangerouslySetInnerHTML={{ __html: item.body }} />
            <DialogContentText id="alert-dialog-description">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                See all contents on stackoverflow
              </a>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  const getCreationDate = (dateInSec) => {
    const utcSeconds = dateInSec;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    const date = new Date(d);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  const renderList = (_) => {
    console.log("apiDataItems", apiDataItems);

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Author</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Creation Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiDataItems.length
              ? apiDataItems.map((item, i) => {
                  const author = item.owner.display_name;
                  const question_id = item.question_id;
                  const title = item.title;
                  const cDate = getCreationDate(item.creation_date);
                  return [
                    <TableRow id={i} key={question_id}>
                      <TableCell
                        id={`name-${i}`}
                        align="center"
                        key={`name-${i}`}
                      >
                        {author}
                      </TableCell>
                      <TableCell
                        id={`title-${i}`}
                        align="center"
                        key={`title-${i}`}
                      >
                        <span
                          id={`span-title-${i}`}
                          key={`span-title-${i}`}
                          className={"title"}
                          onClick={() => handleClickOpen(i)}
                        >
                          {title}
                        </span>
                      </TableCell>
                      <TableCell
                        align="center"
                        id={`cDate-${i}`}
                        key={`cDate-${i}`}
                      >
                        {cDate}
                      </TableCell>
                    </TableRow>,
                    popUp(item, i),
                  ];
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  console.log("page", page);
  console.log("apiDataItems", apiDataItems);
  console.log("apiDataItems.length", apiDataItems.length);

  if (errorObj.error_status)
    return `${errorObj.error_name} | ${errorObj.error_message}`;
  if (!apiDataItems.length) return "Loading Question List...";
  return (
    <div style={{ backgroundColor: "white"}}>
      <Grid container spacing={4}>
        <InfiniteScroll
          dataLength={apiDataItems.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Reached the set limit of 50 records!</b>
            </p>
          }
        >
          {renderList()}
        </InfiniteScroll>
      </Grid>
    </div>
  );
};

export default MockStackOverflow;
