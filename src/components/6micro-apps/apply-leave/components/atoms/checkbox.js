import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    // width: 360,
  },
}));

export default function CustomCheckbox({
  handleHalfDayCheckboxChange,
  halfDay,
  text,
}) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={halfDay}
              onChange={handleHalfDayCheckboxChange}
              size={"small"}
              name="halfDay"
              style={{ color: "#56C271" }}
            />
          }
          label={text}
        />
      </FormGroup>
    </FormControl>
  );
}
