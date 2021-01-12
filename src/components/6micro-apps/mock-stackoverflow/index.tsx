import * as React from "react";
import { useEffect, useState, useCallback } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';

import QuestionList from "./QuestionList";

import { TErrorObj, TOpenStateObj, TQuestionItem } from "./interface";

import "./index.scss";

const MockStackOverflow = (): JSX.Element => {
  const [apiDataItems, setApiData] = useState<TQuestionItem[]>([]);
  const [errorObj, setErrorObj] = useState<TErrorObj>({
    error_id: null,
    error_name: "",
    error_message: "",
    error_status: false,
  });
  const [openStateObj, setOpen] = useState<TOpenStateObj>({});

  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleClickOpen = (index: number) => {
    console.log("handleClickOpen", openStateObj);
    setOpen({ ...openStateObj, [index]: true });
  };

  const handleClose = (index: number) => {
    setOpen({ ...openStateObj, [index]: false });
  };

  const fetchAPIData = useCallback(async (page: number = 1) => {
    const _page = page;
    try {
      const response = await fetch(
        `https://api.stackexchange.com/2.2/questions?page=${_page}&pagesize=10&order=desc&sort=activity&site=stackoverflow&filter=withbody`
      );
      const apiData = await response.json();

      if (apiData && apiData.error_id) {
        setErrorObj({
          error_id: apiData.error_id,
          error_name: apiData.error_name,
          error_message: apiData.error_message,
          error_status: true,
        });
      } else {
        setApiData((apiDataItems: TQuestionItem[]) => [...apiDataItems, ...apiData.items]);
      }
      setPage((pageState: number) => pageState + 1);
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
    () => {
      fetchAPIData();
    },
    [fetchAPIData]
  );

  const fetchMoreData = () => {
    if (apiDataItems.length >= 50) {
      setHasMore(false);
      return;
    }
    setTimeout(async () => {
      await fetchAPIData(page);
    }, 1000);
  };

  if (errorObj.error_status) return <p className="white-text">`${errorObj.error_name} | ${errorObj.error_message}`</p>;
  if (!apiDataItems.length) return <CircularProgress />;
  return (
    <div>
      <Grid container spacing={4}>
        <InfiniteScroll
          dataLength={apiDataItems.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h2 className="white-text">Loading...</h2>}
          endMessage={
            <p className="white-text">
              <b>Reached the set limit of 50 records!</b>
            </p>
          }
        >
          <QuestionList
            apiDataItems={apiDataItems}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            openStateObj={openStateObj}
          />
        </InfiniteScroll>
      </Grid>
    </div>
  );
};

export default MockStackOverflow;
