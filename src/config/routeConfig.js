import {
    TimesheetUserContainer,
    ReverseSinglyLLContainer,
    PriorityQueueContainer,
    BookStoreContainer,
    PixelArtContainer,
    UserJourneyContainer,
    RepoBrowserContainer,
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
        key: 'timeSheet'
    },
    bookStore: {
        path: '/bookstore',
        displayName: 'Book Store App',
        container: BookStoreContainer,
        key: 'bookStore'
    },
    pixelArt: {
        path: '/pixelart',
        displayName: 'Pixel Art App',
        container: PixelArtContainer,
        key: 'pixelArt'
    },
    userJourney: {
        path: '/userjourney',
        displayName: 'User Journey App',
        container: UserJourneyContainer,
        key: 'userJourney'
    },
    repoBrowser: {
        path: '/repobrowser',
        displayName: 'Repo Browser App',
        container: RepoBrowserContainer,
        key: 'repoBrowser'
    },
    priorityQueue: {
        path: '/priorityqueue',
        displayName: 'Priority Queue App',
        container: PriorityQueueContainer,
        key: 'priorityQueue'
    },
    //Prototypes
    reverseLinkedList: {
        path: '/reversesinglylinkedlist',
        displayName: 'Reverse a Singly Linked List',
        container: ReverseSinglyLLContainer,
        key: 'reverseLinkedList'
    },
};