import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CustomButton({
  handleButtonClick,
  buttonText,
  buttonName,
  startIcon = null,
  endIcon = null,
  isDisabled = false,
  buttonStyles = {},
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        style={{...buttonStyles}}
        variant="contained"
        name={buttonName}
        startIcon={startIcon ? startIcon : null}
        endIcon={endIcon ? endIcon : null}
        onClick={handleButtonClick}
        disabled={isDisabled}
      >
        {buttonText}
      </Button>
    </div>
  );
}
