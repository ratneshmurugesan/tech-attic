import {
    TimesheetUserContainer,
    ReverseSinglyLLContainer,
    PriorityQueueContainer,
    BookStoreContainer,
    PixelArtContainer,
    UserJourneyContainer,
    RepoBrowserContainer,
    // ReactQueryContainer,
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
        rightPanel: true
    },
    bookStore: {
        path: '/bookstore',
        displayName: 'Book Store App',
        container: BookStoreContainer,
        key: 'bookStore',
        rightPanel: true
    },
    pixelArt: {
        path: '/pixelart',
        displayName: 'Pixel Art App',
        container: PixelArtContainer,
        key: 'pixelArt',
        rightPanel: true
    },
    userJourney: {
        path: '/userjourney',
        displayName: 'User Journey App',
        container: UserJourneyContainer,
        key: 'userJourney',
        rightPanel: true
    },
    repoBrowser: {
        path: '/repobrowser',
        displayName: 'Repo Browser App',
        container: RepoBrowserContainer,
        key: 'repoBrowser',
        rightPanel: true
    },
    priorityQueue: {
        path: '/priorityqueue',
        displayName: 'Priority Queue App',
        container: PriorityQueueContainer,
        key: 'priorityQueue',
        rightPanel: true
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
        key: 'reverseLinkedList'
    },
};