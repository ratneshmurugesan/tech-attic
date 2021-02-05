import React from "react";
import FormControl from "@material-ui/core/FormControl";

import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 360,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CustomTextarea({ handleChange, leaveDescription }) {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
        id="outlined-multiline-static"
        name="description"
        multiline
        rows={4}
        placeholder="Type..."
        value={leaveDescription}
        onChange={handleChange}
        variant="outlined"
      />
    </FormControl>
  );
}
