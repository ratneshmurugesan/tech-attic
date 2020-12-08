import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { dataConfig } from "config/pgChartConfig";

const MetricSelector = ({ metrics, selectedMetric, setSelectedMetric }) => {
  const handleChange = event => {
    setSelectedMetric(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Selected Metric</FormLabel>
      <RadioGroup
        aria-label="metric"
        name="metric"
        value={selectedMetric}
        onChange={handleChange}
      >
        {metrics.map(metric => (
          <FormControlLabel
            key={metric.id}
            value={dataConfig[metric.value].value}
            control={<Radio />}
            label={dataConfig[metric.value].title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default MetricSelector;
