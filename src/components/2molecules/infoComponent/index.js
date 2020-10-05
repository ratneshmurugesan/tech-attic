import React from 'react';

import InfoConfig from 'config/infoConfig';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Information from 'components/2molecules/Information';

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

const InfoComponent = ({ component, displayName }) => {
    const classes = useStyles_grid();
    // console.log('InfoComponent', {paper: classes.paper});
    const { details, techs, steps, alive, codeLink } = InfoConfig[displayName] || '';
    const Component = component;
    return (
        <Container maxWidth="xl" style={{ backgroundColor: '#333' }}>
            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                <Grid item xs={10}>
                    <Paper elevation={4} className={classes.paper}>
                        <h1 className="page__title">{displayName}</h1>
                        <Information details={details} techs={techs} steps={steps} alive={alive} codeLink={codeLink} />
                        <Component />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default InfoComponent;