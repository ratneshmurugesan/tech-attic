import React from 'react';

// import Switch from '@material-ui/core/Switch';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
// import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fade from '@material-ui/core/Fade';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const LinearBufferuseStyles = makeStyles({
  root: {
    width: '100%',
  },
});

// const buttonYellowTheme = {
//   border: '1px solid rgba(203, 245, 0, 0.5)',
//   color: '$yellowText',
//   fontFamily: 'Rajdhani',
//   backgroundColor: 'unset'
// }

const TeaserPage = () => {

  const classes = LinearBufferuseStyles();
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => { });
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => {
    setLoading((prevLoading) => !prevLoading);
    setTimeout(() => window.location.href = '/aboutme', 5000);
  };

  return (
    <header className="App-header">
      <Card style={{ minWidth: 290, minHeight: 200, backgroundColor: '#424242' }}>
        <CardContent>
          <h2 className='title'>RATNESH-MURUGESAN</h2>
          <p className='title' style={{ color: '#fff' }}>Tech Attic</p>
          <div className={classes.root}>
            <Fade in={loading}
              style={{ transitionDelay: loading ? '1ms' : '0ms' }}
              unmountOnExit>
              <div className={classes.root} style={{ margin: '30px 0px' }}>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
              </div>
            </Fade>

            <Grow in={true} style={{ marginTop: '20px 0px' }}>
              <Button variant="contained" onClick={handleClick}>
                Explore
              </Button>
            </Grow>
          </div>
        </CardContent>
      </Card>
    </header>

  );
}

export default (TeaserPage);