import {
    TimesheetUserContainer,
    ReverseSinglyLLContainer,
    PriorityQueueContainer,
    BookStoreContainer,
    PixelArtContainer,
    UserJourneyContainer,
    RepoBrowserContainer,
    // ReactQueryContainer,
    CSSLayoutsContainer,
    CSSShapesContainer,
    CSSClipPathContainer,
    CSSTransitionsContainer,
} from 'containers';

import AboutMe from 'components/4pages/AboutMe';
import TeaserPage from 'components/4pages/TeaserPage';

export const routeConfigObj = {
    home: {
        path: '/',
        page: TeaserPage,
        key: 'home'
    },
    aboutMe: {
        path: '/aboutme',
        displayName: 'About ME!',
        container: AboutMe,
        key: 'aboutme'
    },
    //Micro-apps
    timeSheet: {
        path: '/timesheet',
        displayName: 'Timesheet App',
        container: TimesheetUserContainer,
        key: 'timeSheet',
        rightPanel: true,
        category: 'micro-apps',
    },
    bookStore: {
        path: '/bookstore',
        displayName: 'Book Store App',
        container: BookStoreContainer,
        key: 'bookStore',
        rightPanel: true,
        category: 'micro-apps',
    },
    pixelArt: {
        path: '/pixelart',
        displayName: 'Pixel Art App',
        container: PixelArtContainer,
        key: 'pixelArt',
        rightPanel: true,
        category: 'micro-apps',
    },
    userJourney: {
        path: '/userjourney',
        displayName: 'User Journey App',
        container: UserJourneyContainer,
        key: 'userJourney',
        rightPanel: true,
        category: 'micro-apps',
    },
    repoBrowser: {
        path: '/repobrowser',
        displayName: 'Repo Browser App',
        container: RepoBrowserContainer,
        key: 'repoBrowser',
        rightPanel: true,
        category: 'micro-apps',
    },
    priorityQueue: {
        path: '/priorityqueue',
        displayName: 'Priority Queue App',
        container: PriorityQueueContainer,
        key: 'priorityQueue',
        rightPanel: true,
        category: 'micro-apps',
    },
    // reactQuery: {
    //     path: '/reactquery',
    //     displayName: 'React-Query App',
    //     container: ReactQueryContainer,
    //     key: 'reactQuery',
    //     rightPanel: true
    // },
    //Prototypes
    reverseLinkedList: {
        path: '/reversesinglylinkedlist',
        displayName: 'Reverse a Singly Linked List',
        container: ReverseSinglyLLContainer,
        key: 'reverseLinkedList',
        leftPanel: true,
        category: 'dsa',
    },
    cssLayouts: {
        path: '/csslayouts',
        displayName: 'CSS Layouts',
        container: CSSLayoutsContainer,
        key: 'csslayouts',
        leftPanel: true,
        category: 'css',
    },
    cssShapes: {
        path: '/cssshapes',
        displayName: 'CSS Shapes',
        container: CSSShapesContainer,
        key: 'csslayouts',
        leftPanel: true,
        category: 'css',
    },
    cssClippath: {
        path: '/cssclippath',
        displayName: 'CSS Clip path',
        container: CSSClipPathContainer,
        key: 'cssclipath',
        leftPanel: true,
        category: 'css',
    },
    cssTransitions: {
        path: '/csstransitions',
        displayName: 'CSS Transitions',
        container: CSSTransitionsContainer,
        key: 'csstransitions',
        leftPanel: true,
        category: 'css',
    },
};