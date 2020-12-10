import React, { useContext } from "react";

// import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ScreenResizerContext from "context/ScreenResizerContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Ratnesh Murugesan"
        src="public/assets/ratnesh-murugesan.jpg"
        className={classes.large}
      />
    </div>
  );
}

const AboutMe = () => {
  const { width } = useContext(ScreenResizerContext);
  // const gridDirection = `${width < 1024 ? 'column' : 'row'}`;
  // console.log({width});
  const gridSize = width < 620 ? 12 : 4;

  // const [areTwitterCardsReady, setTwitterCard] = useState(false);

  // useEffect(() => {
  // if (window && window.twttr) {
  // window.twttr.ready().then((data) => {
  // window.twttr.widgets.load();
  // setTimeout(() => {
  //     setTwitterCard(data.init);
  // }, 3000);
  // });
  // }
  // }, [areTwitterCardsReady]);

  return (
    <Container maxWidth="xl" style={{ backgroundColor: "#333" }}>
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
            <p>
              I hope you are landing on this site and started exploring about
              me.
            </p>
            <p>I really thank you for spending your time to know about me;</p>
            <p>
              I guarantee that the stuffs you see here will be different that
              you seen in my resume.
            </p>
            <p>Please go ahead!</p>
            <p>Enjoy Exploring!!</p>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper elevation={4} className="paper">
            <p>Things I adhere while coding</p>
            <p>
              - I Avoid, nested loops or nested iterators(ForEach, Map, Filter,
              etc..) which costs performance as the runtime of that block code
              will take O(n2) to complete, instead I chain/curry one by one
              which will take O(n)
            </p>
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
      {/* <Grid container spacing={3} direction={gridDirection} justify="center" alignItems="center">
                <Grid item xs={gridSize} style={{ opacity: `${areTwitterCardsReady ? 1 : 0}` }}>
                    <blockquote className="twitter-tweet">
                        <p lang="en" dir="ltr">
                            Future Sci-Fi Pistol with Scope!
                            <a href="https://twitter.com/hashtag/maya?src=hash&amp;ref_src=twsrc%5Etfw">#maya</a>
                            <a href="https://twitter.com/hashtag/GameDev?src=hash&amp;ref_src=twsrc%5Etfw">#GameDev</a>
                            <a href="https://twitter.com/hashtag/IndieDev?src=hash&amp;ref_src=twsrc%5Etfw">#IndieDev</a>
                            <a href="https://twitter.com/hashtag/gameart?src=hash&amp;ref_src=twsrc%5Etfw">#gameart</a>
                            <a href="https://twitter.com/hashtag/polycount?src=hash&amp;ref_src=twsrc%5Etfw">#polycount</a>
                            <a href="https://twitter.com/hashtag/3dart?src=hash&amp;ref_src=twsrc%5Etfw">#3dart</a>
                            <a href="https://twitter.com/hashtag/indieartist?src=hash&amp;ref_src=twsrc%5Etfw">#indieartist</a>
                            <a href="https://twitter.com/hashtag/3D?src=hash&amp;ref_src=twsrc%5Etfw">#3D</a>
                            <a href="https://t.co/dskxH898hA">pic.twitter.com/dskxH898hA</a>
                        </p>
                            &mdash; Ray (@RatneshRay10)
                            <a href="https://twitter.com/RatneshRay10/status/724893679027163138?ref_src=twsrc%5Etfw">April 26, 2016</a>
                    </blockquote>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </Grid>
                <Grid item xs={gridSize} style={{ opacity: `${areTwitterCardsReady ? 1 : 0}` }}>
                    <blockquote className="twitter-tweet">
                        <p lang="en" dir="ltr">
                            BACK TO 1948!
                            <a href="https://twitter.com/hashtag/maya?src=hash&amp;ref_src=twsrc%5Etfw">#maya</a>
                            <a href="https://twitter.com/hashtag/GameDev?src=hash&amp;ref_src=twsrc%5Etfw">#GameDev</a>
                            <a href="https://twitter.com/hashtag/IndieDev?src=hash&amp;ref_src=twsrc%5Etfw">#IndieDev</a>
                            <a href="https://twitter.com/hashtag/gameart?src=hash&amp;ref_src=twsrc%5Etfw">#gameart</a>
                            <a href="https://twitter.com/hashtag/polycount?src=hash&amp;ref_src=twsrc%5Etfw">#polycount</a>
                            <a href="https://twitter.com/hashtag/3dart?src=hash&amp;ref_src=twsrc%5Etfw">#3dart</a>
                            <a href="https://t.co/TlXlL7EQkf">pic.twitter.com/TlXlL7EQkf</a>
                        </p>
                            &mdash; Ray (@RatneshRay10)
                        <a href="https://twitter.com/RatneshRay10/status/722748389377581056?ref_src=twsrc%5Etfw">April 20, 2016</a></blockquote>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </Grid>
                <Grid item xs={gridSize} style={{ opacity: `${areTwitterCardsReady ? 1 : 0}` }}>
                    <blockquote className="twitter-tweet">
                        <p lang="en" dir="ltr">Harley Davidson.... on the way!
                        <a href="https://twitter.com/hashtag/maya?src=hash&amp;ref_src=twsrc%5Etfw">#maya</a>
                            <a href="https://twitter.com/hashtag/GameDev?src=hash&amp;ref_src=twsrc%5Etfw">#GameDev</a>
                            <a href="https://twitter.com/hashtag/IndieDev?src=hash&amp;ref_src=twsrc%5Etfw">#IndieDev</a>
                            <a href="https://twitter.com/hashtag/gameart?src=hash&amp;ref_src=twsrc%5Etfw">#gameart</a>
                            <a href="https://twitter.com/hashtag/polycount?src=hash&amp;ref_src=twsrc%5Etfw">#polycount</a>
                            <a href="https://twitter.com/hashtag/3dart?src=hash&amp;ref_src=twsrc%5Etfw">#3dart</a>
                            <a href="https://t.co/lXOHF4AA4v">pic.twitter.com/lXOHF4AA4v</a></p>&mdash; Ray (@RatneshRay10)
                        <a href="https://twitter.com/RatneshRay10/status/716929016482017280?ref_src=twsrc%5Etfw">April 4, 2016</a>
                    </blockquote>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </Grid>
            </Grid> */}
    </Container>
  );
};

export default AboutMe;
