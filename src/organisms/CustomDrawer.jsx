import React from 'react';
import {
  Link,
} from 'react-router-dom';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ListItemText from '@material-ui/core/ListItemText';
// import Chip from '@material-ui/core/Chip';
import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import Group from 'antd/lib/input/Group';

const useStyles = makeStyles({
  list: {
    width: 300,
    padding: '40px'
  },
  fullList: {
    width: 'auto',
  },
});

// const useStyles_paper = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     backgroundColor: '#e2e2e2',
//   },
// }));


const buttonYellowTheme = {
  border: '1px solid rgba(203, 245, 0, 0.5)',
  color: '#ffeb3b',
  backgroundColor: '#424242'
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

  // const classes_paper = useStyles_paper();
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
    >
      {
        anchor === 'right' ?

          <React.Fragment>
            {/* <Chip variant="outlined" label="Advanced" color="secondary" icon={<DonutSmallOutlinedIcon />} /> */}
            <List>
              {['repo-browser'].map((text) => (
                <div className="drawer__list__item" key={text}>
                  <ListItemIcon>{<DonutSmallOutlinedIcon />}</ListItemIcon>
                  <Link to={`/everything/${text}`}>{text}</Link>
                </div>
              ))}
            </List>
          </React.Fragment>
          :
          <React.Fragment>
            {/* <Chip variant="outlined" label="Data Structures" color="primary" icon={<DonutSmallOutlinedIcon />} /> */}
            <List>
              {['5', '6', '7', '8'].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon>{<DonutSmallOutlinedIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </React.Fragment>
      }
    </div>
  );

  // const classes_bg = useStyles_bg();
  return (
    <React.Fragment>
      <ButtonGroup size="small" color="secondary" orientation={`${window.innerWidth < 768 ? 'vertical' : 'horizontal'}`} aria-label="large outlined primary button group">
        <Button style={buttonYellowTheme} onClick={() => window.location.href = '/everything/about-me'}>About Me</Button>
        <Button style={buttonYellowTheme} onClick={toggleDrawer('left', true)}>Prototypes</Button>
        <Button style={buttonYellowTheme} onClick={toggleDrawer('right', true)}>Micro-Apps</Button>
      </ButtonGroup>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </React.Fragment>
  );
}

export default (CustomDrawer);
