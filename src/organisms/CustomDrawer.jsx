import React from 'react';
import {
  Link,
} from 'react-router-dom';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import ListItemText from '@material-ui/core/ListItemText';
// import Chip from '@material-ui/core/Chip';
// import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import Group from 'antd/lib/input/Group';

const useStyles = makeStyles({
  list: {
    // width: 300,
    // padding: '40px',
    fontFamily: 'Rajdhani',
  },
  fullList: {
    width: 'auto',
    fontFamily: 'Rajdhani',
  },
});

const useStyles_paper = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#424242',
    marginTop: '20px',
    fontFamily: 'Rajdhani',
    width: '200px',
  },
}));


const buttonYellowTheme = {
  color: '#ffeb3b',
  fontFamily: 'Rajdhani',
  fontSize: '20px',
  letterSpacing: '7px',
  padding: '0px 30px',
}

// const useStyles_bg = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: '#000',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));
// const GroupFlex = {
//   display: 'flex',
//   justifyContent: 'center',
// }


function CustomDrawer() {
  const classes = useStyles();

  const classes_paper = useStyles_paper();
  const [state, setState] = React.useState({
    left: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ fontFamily: 'Paprika' }}
    >
      {
        anchor === 'right' ?
          <React.Fragment>
            {/* <Chip variant="outlined" label="Advanced" color="secondary" icon={<DonutSmallOutlinedIcon />} /> */}
            <List>
              {['repo-browser', 'book-store'].map((text) => (
                <div key={text}>
                  <Paper elevation={2} className={classes_paper.paper} >
                    <Link to={`/everything/${text}`}>{text}</Link>
                  </Paper>
                </div>
              ))}
            </List>
          </React.Fragment>
          :
          <React.Fragment>
            {/* <Chip variant="outlined" label="Data Structures" color="primary" icon={<DonutSmallOutlinedIcon />} /> */}
            <List>
              {['reverse-singly-linked-list', '6', '7', '8'].map((text) => (
                <div key={text}>
                <Paper elevation={2} className={classes_paper.paper} >
                  <Link to={`/everything/${text}`}>{text}</Link>
                </Paper>
              </div>
              ))}
            </List>
          </React.Fragment>
      }
    </div>
  );

  // const classes_bg = useStyles_bg();
  // orientation={`${window.innerWidth < 768 ? 'vertical' : 'horizontal'}`}
  return (
    <React.Fragment>
      <ButtonGroup variant="text" aria-label="text button group" orientation={`${window.innerWidth < 768 ? 'vertical' : 'horizontal'}`}>
        <Button style={buttonYellowTheme} onClick={toggleDrawer('left', true)}>Prototypes</Button>
        <Button style={buttonYellowTheme} onClick={() => window.location.href = '/everything/about-me'}>About-Me</Button>
        <Button style={buttonYellowTheme} onClick={toggleDrawer('right', true)}>Micro-Apps</Button>
      </ButtonGroup>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <Container maxWidth="sm" style={{ backgroundColor: '#333', height: '100%' }}>
          <Grid container spacing={3} direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              {/* <Paper elevation={4} className={classes_paper.paper}> */}
              {list('left')}
              {/* </Paper> */}
            </Grid>
          </Grid>
        </Container>
      </Drawer>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        <Container maxWidth="sm" style={{ backgroundColor: '#333', height: '100%' }}>
          <Grid container spacing={3} direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              {/* <Paper elevation={4} className={classes_paper.paper}> */}
              {list('right')}
              {/* </Paper> */}
            </Grid>
          </Grid>
        </Container>
      </Drawer>
    </React.Fragment>
  );
}

export default (CustomDrawer);
