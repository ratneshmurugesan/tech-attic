import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  card: {
    width: 260,
    height: 220,
    overflow: "hidden",
    margin: "0 auto",
  },
  media: {
    height: 120,
    backgroundPosition: "left -12px top 0",
    backgroundSize: "contain",
    display: "flex",
    width: "100%",
  },
  root: {
    margin: "50px auto",
    justifyContent: "center",
  },
  cardAction: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "normal",
    display: "flex",
    alignItems: "flex-start",
  },
  cards: {
    "&.Offer": {
      display: "none",
      justifyContent: "center",
    },
  },
  hideAor: {
    display: "none",
  },
  cardContent: {
    padding: "0 16px",
  },
  title: {
    fontWeight: "bold",
  },
}));

/**
 * Shows the grid menu as show in the current dashboard.
 */
function GridMenu({ items = [], history }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3} alignContent="center">
      {items.map((link, i) =>
        link.isEnabled ? (
          <Fade in key={link.url}>
            <Grid item className={`${classes.cards} ${link.title}`}>
              <Card
                className={classes.card}
                onClick={() => {
                  history.push(link.url);
                }}
              >
                <CardActionArea className={classes.cardAction}>
                  <CardMedia
                    className={classes.media}
                    image={link.image}
                    title={link.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      component="h2"
                      variant="body1"
                      className={classes.title}
                    >
                      {link.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {link.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Fade>
        ) : null
      )}
    </Grid>
  );
}

export default GridMenu;
