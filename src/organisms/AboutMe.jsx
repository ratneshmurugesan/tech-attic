import React from 'react';

// import TextField from '@material-ui/core/TextField'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles_paper = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#424242'
    },
}));

function AboutMe() {
    const classes = useStyles_paper();
    return (
        <Container maxWidth="xl" style={{ backgroundColor: '#333' }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={4} className={classes.paper}>
                        <a href='https://www.linkedin.com/in/ratnesh-murugesan/' target='_blank' rel="noopener noreferrer">My Linkedin Profile</a>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={4} className={classes.paper}>
                        <a href='https://github.com/ratneshmurugesan' target='_blank' rel="noopener noreferrer">My GitHub Profile</a>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={4} className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default (AboutMe);