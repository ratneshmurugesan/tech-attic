import React from 'react';
// import {
//   Redirect
// } from 'react-router-dom';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const useStyles_bg = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const useStyles_paper = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#424242'
  },
}));

const buttonYellowTheme = {
  border: '1px solid rgba(203, 245, 0, 0.5)',
  color: '#ffeb3b'
}
export default function CustomDrawer() {
  const classes = useStyles();
  const classes_bg = useStyles_bg();
  const classes_paper = useStyles_paper();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Paper elevation={4} className={classes_paper.paper}>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Chip variant="outlined" label="Advanced" color="secondary" icon={<DonutSmallOutlinedIcon />} />
        <List>
          {['1', '2', '3', '4'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>{<DonutSmallOutlinedIcon />}</ListItemIcon>
              <ListItemText onClick={() => window.location.href = '/everything/1'} primary={text} />
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        <Chip variant="outlined" label="Data Structures" color="primary" icon={<DonutSmallOutlinedIcon />} />
        <List>
          {['5', '6', '7', '8'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>{<DonutSmallOutlinedIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={classes_bg.root}>
            <ButtonGroup size="medium" color="secondary" aria-label="large outlined primary button group">
              <Button style={buttonYellowTheme}
                onClick={() => window.location.href = '/'}>Home</Button>
              <Button style={buttonYellowTheme}>About Me</Button>
              <Button style={buttonYellowTheme} onClick={toggleDrawer(anchor, true)}>Concepts</Button>
            </ButtonGroup>
          </div>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}