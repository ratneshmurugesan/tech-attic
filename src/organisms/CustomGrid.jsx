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
import Information from './Information';
import InfoConfig from './infoConfig';

import RepoBrowser from '../apps/repo-browser/src/index.jsx';
import BookStore from '../apps/book-store/src/index.jsx';
import RenderByConfig from '../apps/render-by-config';
import UserJourney from '../apps/user-journey';
import PixelArt from '../apps/pixel-art';

import ReverseLinkedList from '../prototypes/SinglyLinkedList/ReverseLinkedList';
import PriorityQueue from '../prototypes/PQ/PriorityQueue';

import CSSLayouts from '../prototypes/CSSLayouts';
import CSSShapes from '../prototypes/CSSShapes';
import CSSClipPath from '../prototypes/CSSClipPath';
import CSSTransitions from '../prototypes/CSSTransitions';

import Async from '../prototypes/Async';
import ReactCodePatterns from '../prototypes/React-code-patterns';

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

function PaperWrapper(ActualComponent, pageTitle) {
    const classes = useStyles_grid();
    const { details, techs, steps, alive, codeLink } = InfoConfig[pageTitle] || ''; // A clone of headless CMS config.
    return (
        <Container maxWidth="xl" style={{ backgroundColor: '#333' }}>
            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                <Grid item xs={10}>
                    <Paper elevation={4} className={classes.paper}>
                        <h1 className="page__title">{pageTitle}</h1>
                        <Information details={details} techs={techs} steps={steps} alive={alive} codeLink={codeLink} />
                        <ActualComponent />
                    </Paper>
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
                        <CustomDrawer />
                    </Grid>
                </Grid>
            </Container>

            <Switch>
                <Route path='/everything/repo-browser' component={() => PaperWrapper(RepoBrowser, 'Github Repo Browser')} />
                <Route path='/everything/book-store' component={() => PaperWrapper(BookStore, 'Book Store')} />
                <Route path='/everything/render-by-config' component={() => PaperWrapper(RenderByConfig, 'Render by Config App')} />
                <Route path='/everything/user-journey' component={() => PaperWrapper(UserJourney, 'User Journey App')} />
                <Route path='/everything/pixel-art' component={() => PaperWrapper(PixelArt, 'Pixel Art')} />
                
                <Route path='/everything/about-me' component={() => <AboutMe />} />

                <Route path="/everything/reverse-singly-linked-list" component={() => PaperWrapper(ReverseLinkedList, 'Reversing a Singly Linked List')} />
                <Route path="/everything/priority-queue" component={() => PaperWrapper(PriorityQueue, 'Priority Queue')} />
                
                <Route path="/everything/css-layouts" component={() => PaperWrapper(CSSLayouts, 'Layouts in CSS')} />
                <Route path="/everything/css-shapes" component={() => PaperWrapper(CSSShapes, 'Shapes in CSS')} />
                <Route path="/everything/css-clip-path" component={() => PaperWrapper(CSSClipPath, 'ClipPath in CSS')} />
                <Route path="/everything/css-transitions" component={() => PaperWrapper(CSSTransitions, 'Transitions in CSS')} />

                <Route path="/everything/async" component={() => PaperWrapper(Async, 'async')} />
                <Route path="/everthing/react-code-patterns" component={() => PaperWrapper(ReactCodePatterns, 'React Code Patterns')} />
            </Switch>
        </div>
    );
}

export default (CustomGrid);