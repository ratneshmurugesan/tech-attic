import React, { useContext } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ScreenResizerContext from "context/ScreenResizerContext";

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: "50%",
    shapeOutside: "circle(39%)",
    float: "left",
    shapeMargin: "25px",
  },
  large: {
    width: "200px",
    height: "200px",
  },
  intro: {
    display: "inline-block",
    padding: "20px",
    maxWidth: "850px",
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
  const classes = useStyles();
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
          <div className={classes.intro}>
            <ImageAvatars />
            <p style={{ fontSize: "32px" }}>Hi, I am Ratnesh Murugesan,</p>
            <p>
              <strong>
                I really want to thank you for landing on this page to know
                about me;
              </strong>
            </p>
            <p>
              I am professionally connected with the web development industry
              and information technology for more than 10 years this includes my
              academic experience as well;
            </p>
            <p>
              Since college days I got complete interest in the entire web
              spectrum and now working with ambitious projects and positive
              people :-)
            </p>
            <p>
              I am passoniate about web and game developement especially 3D
              modelling and texturing with PBR materials which has become my
              primary hobby these days;
            </p>
            <p>
              <strong>WHY ME section</strong> does highlight about the technical
              challenges I faced/facing everyday.
            </p>
            <p>
              You can explore <strong>PROTOTYPES section</strong> and{" "}
              <strong>MICRO-APPS section</strong> - to see my personal ideas and
              projects that I developed with an positive indent to improve my
              technical skills.
            </p>
            <hr />
            <p>
              If you feel that I can be a good fit for the
              opprotunity you have; please give me a ring I am waiting to pick
              up the call at the other side;
            </p>
            <p>
              Let us create a<strong> WIN WIN</strong> situation!
            </p>
            <hr />
          </div>
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
