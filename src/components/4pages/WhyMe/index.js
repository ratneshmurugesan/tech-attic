import React, { useContext } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ScreenResizerContext from "context/ScreenResizerContext";

const WhyMe = () => {
  const { width } = useContext(ScreenResizerContext);
  const gridSize = width < 620 ? 12 : 3;

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper elevation={4} className="paper">
            <div>
              <p>
                <strong>
                  Things I follow while coding and technical challenges
                  faced/facing these days; and how I overcome.
                </strong>
              </p>
              <p>
                - I avoid nested loops or nested iterators(ForEach, Map,
                Filter, etc..) where these functions have an impact on performance 
                and runtime takes <strong>O(n2)</strong>, instead I chain/curry
                functions one below other improving runtime to <strong>O(n)</strong>
              </p>
              <p>
                - I try to avoid assigning style objects with styles directly to
                a UI element or component, which consumes more{" "}
                <strong>memory</strong> in creating objects if component
                re-renders. (except the apps I created 6 months back and before)
              </p>
              <p>
                - I avoid descendant selector which is expensive as the browser
                reads selectors from the right to left if there are n number of elements, and keeps searching until it
                finds the element, a performance hit; instead I
                specify exact class-name of an element.
              </p>
              <p>
                - I avoid properties like width, height, top, left <strong>(“geometric
                properties”)</strong>, require the layout to be calculated and the render
                tree to be updated.
              </p>
              <p>
                - I had to redeploy tech-attic three times in different
                environments, first on Github-Pages where I had routing issues,
                second on Heroku where the initial load was slow, third Netlify; now
                I am quite satisfied.
              </p>
              <p>
                - I do not prefer prop-drilling or render-props; instead I
                prefer CONTEXT API + useMemo as a design pattern for components 
                <strong> communication(bi-directional)</strong> to avoid unnecessary re-rendering
                of children/siblings.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={11}>
        <Paper elevation={4} className="paper">
          <p> <strong>Node+Express App for all the APIs used for this Frontend App (tech-attic)</strong></p>
          <a
            href="https://github.com/ratneshmurugesan/tech-attic-node"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node+Express Backend App (tech-attic-node)
          </a>
        </Paper>
      </Grid>
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
    </>
  );
};

export default WhyMe;
