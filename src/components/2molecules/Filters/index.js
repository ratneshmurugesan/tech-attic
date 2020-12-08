import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import ContainerLoader from "components/1atoms/ContainerLoader";
import CustomDateRangePicker from "components/2molecules/customDatePicker";

import useStyles from "./style";

const Filters = ({
  config,
  filters,
  selectedFilters,
  setSelectedFilters,
  reportType,
}) => {
  const classes = useStyles();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [filterConfig] = useState(_ =>
    config.map(filter => ({
      ...filter,
      ...{ values: filters[filter.filter] || [] },
    }))
  );

  const handleChange = (label, ev) => {
    let sFilters = {};
    let analyticsData = {};

    if (label === "dateSelect") {
      sFilters = {
        ...selectedFilters,
        ...{
          dates: {
            start_date: ev.selection.startDate,
            end_date: ev.selection.endDate,
          },
        },
      };
      analyticsData.value = sFilters.dates;
    } else {
      const availableFilterIds = ev.target.value;
      if (typeof availableFilterIds === "object") {
        if (
          availableFilterIds.includes("all") &&
          availableFilterIds.indexOf("all") >= 0
        ) {
          sFilters = {
            ...selectedFilters,
            ...{
              [label]: [],
            },
          };
        } else if (
          availableFilterIds.includes("selectAll") &&
          availableFilterIds.indexOf("selectAll") >= 0
        ) {
          sFilters = {
            ...selectedFilters,
            ...{
              [label]: filters[label],
            },
          };
        } else {
          sFilters = {
            ...selectedFilters,
            ...{
              [label]: availableFilterIds.map(id =>
                filters[label].find(e => e.id === id)
              ),
            },
          };
        }
      } else {
        sFilters = {
          ...selectedFilters,
          ...{
            [label]: availableFilterIds,
          },
        };
      }
      analyticsData.value = sFilters[label];
    }
    setSelectedFilters(sFilters);
    localStorage.setItem(`${reportType}-filters`, JSON.stringify(sFilters));
  };

  const labelMap = label =>
    ({
      dateSelect: "Selected Dates",
      time_aggregate: "Selected Time aggregation",
      channels: "Selected Channels",
      platforms: "Selected Platforms",
      geo: "Selected Geography",
      conversion_source: "Selected Conversion source",
      brandNonBrand: "Selected Brand type",
      campaign_brands: "Selected Campaign brands",
      buckets: "Selected Buckets",
      categories: "Selected Categories",
      group_value: "Selected Group value",
      targeting_type: "Selected Targeting type",
      campaign_subscription: "Selected Campaign",
      programs: "Selected Programs",
      keywords: "Selected Keyword",
      regions: "Selected Region",
      match_type: "Selected Match type",
      dma_regions: "Selected DMAs",
    }[label] || `Selected ${label}`);

  const renderFilters = filtersConfig => {
    return filtersConfig.map(item => {
      switch (item.component) {
        case "multiSelect":
          return (
            <Grid item xs={12} md={item.size} key={item.filter}>
              <FormControl key={item.filter} fullWidth>
                <InputLabel>{labelMap(item.filter)}</InputLabel>
                <Select
                  multiple
                  value={selectedFilters[item.filter].map(f => f.id)}
                  onChange={ev => {
                    handleChange(item.filter, ev);
                  }}
                  input={<Input />}
                  className={classes.dropDown}
                >
                  {selectedFilters[item.filter].length ===
                  filters[item.filter].length ? (
                    <MenuItem key="all" value="all">
                      Deselect All
                    </MenuItem>
                  ) : (
                    <MenuItem key="selectAll" value="selectAll">
                      Select All
                    </MenuItem>
                  )}
                  {item.values.map(filter => (
                    <MenuItem key={filter.id} value={filter.id}>
                      {filter.label || filter.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          );
        case "singleSelect":
          return (
            <Grid item xs={12} md={item.size} key={item.filter}>
              <FormControl key={item.filter} fullWidth>
                <InputLabel>{labelMap(item.filter)}</InputLabel>
                <Select
                  value={selectedFilters[item.filter]}
                  onChange={ev => {
                    handleChange(item.filter, ev);
                  }}
                  input={<Input />}
                  className={classes.dropDown}
                >
                  {item.values.map(filter => (
                    <MenuItem key={filter.id} value={filter.id}>
                      {filter.label || filter.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          );
        case "datePicker":
          return (
            <Grid item xs={12} md={item.size} key={item.filter}>
              <CustomDateRangePicker
                classes={classes}
                label={labelMap("dateSelect")}
                dates={selectedFilters["dates"]}
                handleDateChange={date => handleChange(item.filter, date)}
                showDatePicker={showDatePicker}
                setShowDatePicker={setShowDatePicker}
              />
            </Grid>
          );
        default:
          return null;
      }
    });
  };
  if (!filters) return <ContainerLoader message={"Initiating filters..."} />;
  return (
    <Grid container justify="flex-start" spacing={3}>
      {renderFilters(filterConfig)}
    </Grid>
  );
};

export default Filters;
