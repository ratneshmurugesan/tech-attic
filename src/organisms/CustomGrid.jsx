import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import CustomDrawer from './CustomDrawer';
import AboutMe from './AboutMe';
import RepoBrowser from '../apps/repo-browser/src/index.jsx'

const useStyles_grid = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        top: '10px', 
        position: 'relative'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#424242'
    },
}));

function OneComponent() {
    const classes = useStyles_grid();
    return (
        <Container maxWidth="xl" style={{ backgroundColor: '#333' }}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper elevation={4} className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={4} className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={4} className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

function CustomGrid() {
    const classes = useStyles_grid();
    return (
        <div className={classes.root}>
            <Container maxWidth="xl" style={{ backgroundColor: '#333' }}>

                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper elevation={4} className={classes.paper}>
                            <CustomDrawer />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Switch>
                <Route path='/everything/1' component={() => <OneComponent />} />
                <Route path='/everything/repo-browser' component={() => <RepoBrowser />} />
                <Route path='/everything/about-me' component={() => <AboutMe />} />
            </Switch>
        </div>
    );
}

export default (CustomGrid);