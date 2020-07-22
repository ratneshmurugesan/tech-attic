import React from 'react';

// import TextField from '@material-ui/core/TextField'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ScreenResizer } from '../prototypes/ScreenResizer/index.jsx';

import './index.scss';

function AboutMe() {
  const { width } = ScreenResizer();
  const gridDirection = `${width < 1024 ? 'column' : 'row'}`;
  const gridSize = width < 620 ? 12 : 4;

    return (
        <Container maxWidth="xl" style={{ backgroundColor: '#333' }}>
            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                <Grid item xs={11}>
                    <Paper elevation={4} className="paper">
                        <h1>Ratnesh Murugesan</h1>
                        <h2>Web Application Developer</h2>
                        <p>+(91) 96777 29198 | <a href="mailto:ratnesh.one@gmail.com">ratnesh.one@gmail.com</a></p>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper elevation={4} className="paper">
                        Interests
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={4} className="paper">
                        <p>Video games (especially games with stealth mode)</p>
                        <p>Cooking (to survive I can cook few instant recipes)</p>
                        <p>Fitness (I do try to be fit intaking all three macronutrients everyday)</p>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={4} className="paper">
                        <a href='https://www.linkedin.com/in/ratnesh-murugesan/' target='_blank' rel="noopener noreferrer">My Linkedin Profile</a>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={4} className="paper">
                        <a href='https://github.com/ratneshmurugesan' target='_blank' rel="noopener noreferrer">My GitHub Profile</a>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction={gridDirection} justify="center" alignItems="center">
                <Grid item xs={gridSize}>
                    {/* <Paper elevation={4} className="paper"> */}
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Future Sci-Fi Pistol with Scope!<a href="https://twitter.com/hashtag/maya?src=hash&amp;ref_src=twsrc%5Etfw">#maya</a> <a href="https://twitter.com/hashtag/GameDev?src=hash&amp;ref_src=twsrc%5Etfw">#GameDev</a> <a href="https://twitter.com/hashtag/IndieDev?src=hash&amp;ref_src=twsrc%5Etfw">#IndieDev</a> <a href="https://twitter.com/hashtag/gameart?src=hash&amp;ref_src=twsrc%5Etfw">#gameart</a> <a href="https://twitter.com/hashtag/polycount?src=hash&amp;ref_src=twsrc%5Etfw">#polycount</a> <a href="https://twitter.com/hashtag/3dart?src=hash&amp;ref_src=twsrc%5Etfw">#3dart</a> <a href="https://twitter.com/hashtag/indieartist?src=hash&amp;ref_src=twsrc%5Etfw">#indieartist</a> <a href="https://twitter.com/hashtag/3D?src=hash&amp;ref_src=twsrc%5Etfw">#3D</a> <a href="https://t.co/dskxH898hA">pic.twitter.com/dskxH898hA</a></p>&mdash; Ray (@RatneshRay10) <a href="https://twitter.com/RatneshRay10/status/724893679027163138?ref_src=twsrc%5Etfw">April 26, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={gridSize}>
                    {/* <Paper elevation={4} className="paper"> */}
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">BACK TO 1948! <a href="https://twitter.com/hashtag/maya?src=hash&amp;ref_src=twsrc%5Etfw">#maya</a> <a href="https://twitter.com/hashtag/GameDev?src=hash&amp;ref_src=twsrc%5Etfw">#GameDev</a> <a href="https://twitter.com/hashtag/IndieDev?src=hash&amp;ref_src=twsrc%5Etfw">#IndieDev</a> <a href="https://twitter.com/hashtag/gameart?src=hash&amp;ref_src=twsrc%5Etfw">#gameart</a> <a href="https://twitter.com/hashtag/polycount?src=hash&amp;ref_src=twsrc%5Etfw">#polycount</a> <a href="https://twitter.com/hashtag/3dart?src=hash&amp;ref_src=twsrc%5Etfw">#3dart</a> <a href="https://t.co/TlXlL7EQkf">pic.twitter.com/TlXlL7EQkf</a></p>&mdash; Ray (@RatneshRay10) <a href="https://twitter.com/RatneshRay10/status/722748389377581056?ref_src=twsrc%5Etfw">April 20, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={gridSize}>
                    {/* <Paper elevation={4} className="paper"> */}
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Harley Davidson.... on the way! <a href="https://twitter.com/hashtag/maya?src=hash&amp;ref_src=twsrc%5Etfw">#maya</a> <a href="https://twitter.com/hashtag/GameDev?src=hash&amp;ref_src=twsrc%5Etfw">#GameDev</a> <a href="https://twitter.com/hashtag/IndieDev?src=hash&amp;ref_src=twsrc%5Etfw">#IndieDev</a> <a href="https://twitter.com/hashtag/gameart?src=hash&amp;ref_src=twsrc%5Etfw">#gameart</a> <a href="https://twitter.com/hashtag/polycount?src=hash&amp;ref_src=twsrc%5Etfw">#polycount</a> <a href="https://twitter.com/hashtag/3dart?src=hash&amp;ref_src=twsrc%5Etfw">#3dart</a> <a href="https://t.co/lXOHF4AA4v">pic.twitter.com/lXOHF4AA4v</a></p>&mdash; Ray (@RatneshRay10) <a href="https://twitter.com/RatneshRay10/status/716929016482017280?ref_src=twsrc%5Etfw">April 4, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    {/* </Paper> */}
                </Grid>
            </Grid>
        </Container>
    );
}

export default (AboutMe);