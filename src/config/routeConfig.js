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
  CricketTeamIndiaContainer,
  MockStackOverflowContainer,
  ApplyLeaveContainer,
  // ReactQueryContainer,
  CSSLayoutsContainer,
  CSSShapesContainer,
  CSSClipPathContainer,
  CSSTransitionsContainer,
} from "containers";

import AboutMe from "components/4pages/AboutMe";
import WhyMe from "components/4pages/WhyMe";

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
  whyMe: {
    path: "/whyme",
    displayName: "Why ME!",
    container: WhyMe,
    key: "whyme",
    isEnabled: true,
  },
  //Micro-apps
  "applyLeave":{
    path: "/apply-leave",
    displayName: "Apply Leave",
    container: ApplyLeaveContainer,
    key: "applyLeave",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: true,
  },
  "mock-stackoverflow": {
    path: "/mock-stackoverflow",
    displayName: "Mock StackOverflow",
    container: MockStackOverflowContainer,
    key: "mock-stackoverflow",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: true,
  },
  productShowcase: {
    path: "/product-showcase",
    displayName: "Product Showcase App",
    container: ProductShowcaseContainer,
    key: "productShowcase",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: window.innerWidth > 768 ? true : false,
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
    isEnabled: window.innerWidth > 768 ? true : false,
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
    isEnabled: window.innerWidth > 768 ? true : false,
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
  cricketTeamIndia: {
    path: "/cricketteamindia",
    displayName: "CricketTeamIndia App",
    container: CricketTeamIndiaContainer,
    key: "cricketTeamIndia",
    rightPanel: true,
    category: "micro-apps",
    isEnabled: true,
  },
  //Prototypes
  reverseLinkedList: {
    path: "/reversesinglylinkedlist",
    displayName: "Reverse a Singly Linked List",
    container: ReverseSinglyLLContainer,
    key: "reverseLinkedList",
    leftPanel: true,
    category: "dsa",
    isEnabled: window.innerWidth > 768 ? true : false,
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
