import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import useStyle from "./style";
import { Grid } from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const ChartFilters = ({
  dimensions,
  metrics,
  selectedDim,
  handleChangeDim,
  selectedMetrics,
  handleChangeMetric,
  graphType,
  handleGraphTypeChange,
  dataConfig,
}) => {
  const classes = useStyle();
  const metricsConfig = metrics.map(metric => dataConfig[metric]);
  return (
    <Grid container spacing={3} justify="flex-start">
      <Grid item xs={12} md={3}>
        <FormControl className={classes.chartDropdown}>
          <InputLabel>Select Metrics</InputLabel>
          <Select
            multiple
            value={selectedMetrics}
            onChange={handleChangeMetric}
            input={<Input />}
            MenuProps={MenuProps}
          >
            {metricsConfig.map(c => (
              <MenuItem key={c.key} value={c.key || c.id}>
                {c.title || c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {/* {dimensions.map((dimension, index) => (
        <Grid item xs={12} md={4}>
          <FormControl
            className={classes.chartDropdown}
            key={`dimension-${index}`}
          >
            <InputLabel>Select Dimensions</InputLabel>
            <Select
              multiple
              value={selectedDim[index]}
              onChange={e => handleChangeDim(e, index)}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {dimension.map(c => (
                <MenuItem
                  className={classes.menuLabel}
                  key={c.id}
                  value={c.name}
                >
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))} */}
      <Grid item xs={12} md={3}>
        <FormControl component="fieldset" style={{ display: "inline" }}>
          <span className={classes.radioLabel}>{"Type"}</span>
          <RadioGroup
            aria-label="graphType"
            style={{ flexDirection: "row" }}
            name="type"
            value={graphType}
            onChange={handleGraphTypeChange}
          >
            <FormControlLabel value="line" control={<Radio />} label="Line" />
            <FormControlLabel value="bar" control={<Radio />} label="Bar" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ChartFilters;
