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
    [theme.breakpoints.down("sm")]: {
      float: "unset",
      borderRadius: "unset",
      shapeOutside: "unset",
      shapeMargin: "unset",
    },
  },
  large: {
    width: "200px",
    height: "200px",
  },
  intro: {
    display: "inline-block",
    padding: "20px",
    maxWidth: "850px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
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
I want to thank you for landing on this page to know about me.
              </strong>
            </p>
            <p>
             I am professionally connected with the web development industry and information technology for more than 10 years this includes my academic experience as well.
            </p>
            <p>
              Since college days I got complete interest in the entire web
              spectrum and now working with ambitious projects and positive
              people :-)
            </p>
            <p>
              I am passionate about web and game development especially 3D modelling and texturing with PBR materials which have become my primary hobby these days.
            </p>
            <p>
              <strong>WHY ME section</strong> does highlight the technical
              challenges I faced/facing everyday.
            </p>
            <p>
              You can explore <strong>PROTOTYPES section</strong> and{" "}
              <strong>MICRO-APPS section</strong> - to see my personal ideas and
              projects that I developed with a positive indent to improve my
              technical skills.
            </p>
            <hr />
            <p>
              If you feel that I can be a good fit for the opportunity you have;
              please give me a ring I am waiting to pick up the call on the
              other side;
            </p>
            <p>
              Let us create a<strong> WIN-WIN</strong> situation!
            </p>
            <hr />
          </div>
        </Paper>
      </Grid>
      {/* <Grid item xs={11}>
        <Paper elevation={4} className="paper">
          <div>
            <p>
              <strong><h1 className="page__title">SKILLS</h1></strong>
            </p>
            <p><strong>Languages</strong> JavaScript (ES6+), HTML5, CSS3 (SASS/LESS).</p>
            <p><strong>Environment</strong> NodeJs.</p>
            <p>
            <strong>Frameworks and Libraries</strong> ReactJs (Hooks), ExpressJs, React-query, Apache
              superset, ECharts, ThreeJs, and Material UI.
            </p>
            <p><strong>Testing tools</strong> Jest, Enzyme and React-Testing-Library.</p>
            <p><strong>Web APIs</strong> Storage, DOM, Drag and Drop.</p>
            <p><strong>Design Patterns</strong> Microservices, DRY, and KISS.</p>
            <p>
            <strong>Performance monitors(DevTools)</strong> Debugging, Networking, and
              Animation(style, layout, paint and composite).
            </p>
            <p><strong>Miscellaneous</strong> BEM, JWT, Nginx, REST APIs, and JSON.</p>
            <p>
            <strong>Tool chains</strong> Git, Yarn/Webpack, Npm scripts, VS Code, JIRA,
              Postman, Zeplin, OhMyZsh, and Docker.
            </p>
            <p>Familiar with Data Structures and Algorithms.</p>
            <p>
              Good exposure to Agile-Scrum processes, concepts and workflows.
            </p>
          </div>
        </Paper>
      </Grid> */}
      <Grid item xs={gridSize}>
        <Paper elevation={4} className="paper">
          <a
            href="https://www.linkedin.com/in/ratnesh-murugesan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn Profile
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
