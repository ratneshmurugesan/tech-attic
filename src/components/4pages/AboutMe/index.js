import React, { useContext } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ScreenResizerContext from "context/ScreenResizerContext";

const useStyles = makeStyles((theme) => ({
  image: {
    // background-color: "green",
    display: "grid",
    placeItems: "center",
  },
  large: {
    width: "200px",
    height: "200px",
  },
}));

function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      <Avatar
        alt="Ratnesh Murugesan"
        src="/assets/rm.jpg"
        className={classes.large}
      />
    </div>
  );
}

const AboutMe = () => {
  const { width } = useContext(ScreenResizerContext);
  const gridSize = width < 620 ? 12 : 3;

  return (
    // <Container maxWidth="xl" style={{ backgroundColor: "#333" }}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11}>
          <Paper elevation={4} className="paper">
            <p className="greeting">Hi, I am Ratnesh Murugesan</p>
            <ImageAvatars />
            <p>I really thank you for spending your time to know about me;</p>
            <p>
              I guarantee that the stuffs you see here will not be the same from
              my resume; and saves you a lot of time.
            </p>
            <p>Please go ahead!</p>
            <p>Enjoy Exploring!!</p>
          </Paper>
        </Grid>
        <Grid item xs={gridSize}>
          <Paper elevation={4} className="paper">
            <a
              href="https://www.linkedin.com/in/ratnesh-murugesan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Linkedin Profile
            </a>
          </Paper>
        </Grid>
        <Grid item xs={gridSize}>
          <Paper elevation={4} className="paper">
            <a href="mailto:ratnesh.one@gmail.com">ratnesh.one@gmail.com</a>
          </Paper>
        </Grid>
        <Grid item xs={gridSize}>
          <Paper elevation={4} className="paper">
            <a href="tel:+91-967-772-9198">+91 96777 29198</a>
          </Paper>
        </Grid>
        <Grid item xs={gridSize}>
          <Paper elevation={4} className="paper">
            <a
              href="https://github.com/ratneshmurugesan"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub Profile
            </a>
          </Paper>
        </Grid>
      </Grid>
    // </Container>
  );
};

export default AboutMe;
