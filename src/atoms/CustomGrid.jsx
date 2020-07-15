import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    // Link 
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


import CustomDrawer from './CustomDrawer';

const useStyles_grid = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#424242'
    },
}));

export default function CustomGrid() {
    const classes = useStyles_grid();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    {/* <Paper elevation={4} className={classes.paper}> */}
                    <CustomDrawer />
                    {/* </Paper> */}
                </Grid>
            </Grid>
            <Router>
                <div>
                    <Switch>
                        <Route path='/everything/1'>
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
                        </Route>
                    </Switch>
                </div>
            </Router>
            {/* <Grid container spacing={3}>
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
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper elevation={4} className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={4} className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={4} className={classes.paper}>xs</Paper>
                </Grid>
            </Grid> */}
        </div>
    );
}