import {
  TimesheetUserContainer,
  ReverseSinglyLLContainer,
  PriorityQueueContainer,
  BookStoreContainer,
  PixelArtContainer,
  UserJourneyContainer,
  RepoBrowserContainer,
  ProductShowcaseContainer,
  DashboardContainer,
  // ReactQueryContainer,
  CSSLayoutsContainer,
  CSSShapesContainer,
  CSSClipPathContainer,
  CSSTransitionsContainer,
} from "containers";

import AboutMe from "components/4pages/AboutMe";
import TeaserPage from "components/4pages/TeaserPage";

export const routeConfigObj = {
  home: {
    path: "/",
    page: TeaserPage,
    key: "home",
    isEnabled: true,
  },
  aboutMe: {
    path: "/aboutme",
    displayName: "About ME!",
    container: AboutMe,
    key: "aboutme",
    isEnabled: true,
  },
  //Micro-apps
  productShowcase: {
    path: "/product-showcase",
    displayName: "Product Showcase App",
    container: ProductShowcaseContainer,
    key: "productShowcase",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: true,
  },
  dashboard: {
    path: "/dashboard",
    displayName: "Dashboard App",
    container: DashboardContainer,
    key: "dashboard",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: true,
  },
  bookStore: {
    path: "/bookstore",
    displayName: "Book Store App",
    container: BookStoreContainer,
    key: "bookStore",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: true,
  },
  pixelArt: {
    path: "/pixelart",
    displayName: "Pixel Art App",
    container: PixelArtContainer,
    key: "pixelArt",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: true,
  },
  userJourney: {
    path: "/userjourney",
    displayName: "User Journey App",
    container: UserJourneyContainer,
    key: "userJourney",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: true,
  },
  repoBrowser: {
    path: "/repobrowser",
    displayName: "Repo Browser App",
    container: RepoBrowserContainer,
    key: "repoBrowser",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: true,
  },
  timeSheet: {
    path: "/timesheet",
    displayName: "Timesheet App",
    container: TimesheetUserContainer,
    key: "timeSheet",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: false,
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
    path: "/reversesinglylinkedlist",
    displayName: "Reverse a Singly Linked List",
    container: ReverseSinglyLLContainer,
    key: "reverseLinkedList",
    leftPanel: true,
    category: "dsa",
    isEnabled: true,
  },
  priorityQueue: {
    path: "/priorityqueue",
    displayName: "Priority Queue App",
    container: PriorityQueueContainer,
    key: "priorityQueue",
    leftPanel: true,
    category: "dsa",
    isEnabled: true,
  },
  cssLayouts: {
    path: "/csslayouts",
    displayName: "CSS Layouts",
    container: CSSLayoutsContainer,
    key: "cssLayouts",
    leftPanel: true,
    category: "css",
    isEnabled: true,
  },
  cssShapes: {
    path: "/cssshapes",
    displayName: "CSS Shapes",
    container: CSSShapesContainer,
    key: "cssShapes",
    leftPanel: true,
    category: "css",
    isEnabled: true,
  },
  cssClippath: {
    path: "/cssclippath",
    displayName: "CSS Clip path",
    container: CSSClipPathContainer,
    key: "cssClipath",
    leftPanel: true,
    category: "css",
    isEnabled: false,
  },
  cssTransitions: {
    path: "/csstransitions",
    displayName: "CSS Transitions",
    container: CSSTransitionsContainer,
    key: "cssTransitions",
    leftPanel: true,
    category: "css",
    isEnabled: false,
  },
};
