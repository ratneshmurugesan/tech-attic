import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CustomDropdown({ handleChange, leaveType }) {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={leaveType}
        displayEmpty
        name="leaveType"
        onChange={handleChange}
      >
        <MenuItem value="">Choose</MenuItem>
        <MenuItem value={"casual"}>Casual</MenuItem>
        <MenuItem value={"maternity"}>Maternity</MenuItem>
        <MenuItem value={"compensatory"}>Compensatory</MenuItem>
        <MenuItem value={"sick"}>Sick</MenuItem>
        <MenuItem value={"publicHoliday"}>Public Holiday</MenuItem>
        <MenuItem value={"paternity"}>Paternity</MenuItem>
      </Select>
    </FormControl>
  );
}
