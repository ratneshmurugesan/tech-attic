import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  rootBg: {
    backgroundColor: "red",
    // color: "#ffeb3b",
  },
  heading: {
    fontWeight: "bold",
  },
  secondaryHeading: {
    fontWeight: "bold",
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    padding: "5px",
    flexBasis: "50%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  viewCodeLink: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.yellow,
  },
  wrapper: {
    display: "flex",
  },
  infoButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function Information({
  details,
  techs,
  steps,
  alive,
  codeLink,
}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {alive ? (
        <div className={classes.infoButton}>
          <Button variant="contained" onClick={handleClickOpen}>
            {" "}
            INFO{" "}
          </Button>
        </div>
      ) : null}
      <div className={classes.rootBg}>
        <Dialog
          fullWidth={true}
          maxWidth={"md"}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            <div className={classes.column}>
              <Typography className={classes.heading}>
                Implementation Details
              </Typography>
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div className={classes.wrapper}>
                <div className={classes.column}>
                  <p>{details}</p>
                </div>
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography>
                    <strong>Powered by</strong>
                  </Typography>
                  <Typography>{techs}</Typography>
                </div>
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography>
                    <strong>Steps</strong>
                  </Typography>
                  <Typography>{steps}</Typography>
                </div>
              </div>
              <a href={codeLink} rel="noopener noreferrer" target="_blank">
                <Typography variant="overline" className={classes.viewCodeLink}>
                  view code in github
                </Typography>
              </a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
