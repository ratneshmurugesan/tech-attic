import { useState, useEffect } from "react";
import { getJSON } from "lib/http";
import {
  FILTERS_METADATA,
  FILTERS_METADATA_MOCK,
} from "constants/urlConstants";
import { dashboardFilters } from "config/filtersConfig";
import { START_DATE } from "config/dashboardConfig";

export default function useFilters(dashboard, isMock) {
  const [filters, setFilters] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(null);
  const [hasErrored, setHasErrored] = useState(false);
  const [dates] = useState({
    start_date: new Date(START_DATE),
    end_date: new Date(),
  });

  useEffect(() => {
    const getFilters = JSON.parse(localStorage.getItem(`${dashboard}-filters`));
    (async () => {
      try {
        const response = await getJSON(
          isMock ? FILTERS_METADATA_MOCK : FILTERS_METADATA,
          {
            dashboard_type: dashboard,
          }
        );
        const selectedFilters = {
          ...dashboardFilters[dashboard].reduce((acc, datum) => {
            switch (datum.component) {
              case "datePicker":
                acc["dates"] = dates;
                return acc;
              case "singleSelect":
                datum.filter === "time_aggregate"
                  ? (acc[datum.filter] = response.data[datum.filter][2].id)
                  : (acc[datum.filter] = response.data[datum.filter][0].id);
                return acc;
              default:
                acc[datum.filter] = response.data[datum.filter];
                return acc;
            }
          }, {}),
        };

        !getFilters
          ? setSelectedFilters(selectedFilters)
          : setSelectedFilters(getFilters);

        setFilters(response.data);
      } catch (err) {
        console.log(err);
        setHasErrored(true);
      }
    })();
  }, [dashboard, dates, isMock]);

  return [filters, selectedFilters, setSelectedFilters, dates, hasErrored];
}
