import React from "react";

const InfoConfig = {
  //Micro-apps
  timeSheet: {
    alive: false,
    key: "timeSheet",
    details: `This App lets you customize timesheets`,
    techs: `React Hooks, Material UI`,
    steps: `# Add Row will let you add a new timesheet and so on`,
    // codeLink: 'https://github.com/ratneshmurugesan/tech-attic/tree/master/src/components/6micro-apps/user-journey'
  },
  pixelArt: {
    alive: true,
    key: "pixelArt",
    details: `A Real time app lets you draw things pixel by pixel`,
    techs: `React Hooks, GraphQL, Hasura, and Web Socket`,
    steps: `# Choose a color and utilize the boxes to fill in colors`,
    codeLink:
      "https://github.com/ratneshmurugesan/tech-attic/tree/master/src/components/6micro-apps/pixel-art",
  },
  repoBrowser: {
    alive: true,
    key: "repoBrowser",
    details: `This App lets you browse github repos`,
    techs: `React and Redux`,
    steps: `# Choose a user from dropdown.`,
    codeLink:
      "https://github.com/ratneshmurugesan/tech-attic/tree/master/src/components/6micro-apps/repo-browser",
  },
  bookStore: {
    alive: true,
    key: "bookStore",
    details: `This App lets categorize books with respect to reading status`,
    techs: `React and Redux`,
    steps: (
      <div>
        <p># Choose a book from book Shelve or search one from Search page.</p>
        <p># Add/Remove a book from/to a category </p>
      </div>
    ),
    codeLink:
      "https://github.com/ratneshmurugesan/tech-attic/tree/master/src/components/6micro-apps/book-store",
  },
  userJourney: {
    alive: true,
    key: "userJourney",
    details: `This App lets you create a clear road-map structure to show things involved in the journey`,
    techs: `HTML Drag & Drop, React-spring(transitions)`,
    steps: `# Drag and drop an icon from tray to create a journey .`,
    codeLink:
      "https://github.com/ratneshmurugesan/tech-attic/tree/master/src/components/6micro-apps/user-journey",
  },
  priorityQueue: {
    alive: true,
    key: "priorityQueue",
    details: `This App shows how to develop a simple priority-todo task list with the support of an efficient DS,
        which pushes the high-priority task to top of surface.`,
    techs: `DataStructures: Min/Max Binary Heap + Priority Queue, React-css-transition effects`,
    steps: `# Choose a todo-task and assign a value to it.`,
    codeLink:
      "https://github.com/ratneshmurugesan/tech-attic/tree/master/src/components/6micro-apps/priority-queue",
  },
  productShowcase: {
    alive: true,
    key: "productShowcase",
    details: `This App shows how to showcase the 3D objects as a client product which enhances user interaction and experience,  For instance, you can consider this ship in the bottle is a product I would like to show. A new perspective to showcase products`,
    techs: `React-hooks, Three.js, PBR Materials`,
    steps: `# Hold the 3D Object and control the rotation to view it in other angles as well`,
    codeLink:
      "https://github.com/ratneshmurugesan/tech-attic/tree/master/src/components/6micro-apps/dashboard-app",
  },
  dashboard: {
    alive: true,
    key: "dashboard",
    details: `A Data visualization app - shows different data in different components but consolidated onto a single page;
     with filters as DIMENSIONS and api result as METRICS shown on different components`,
    techs: `React-hooks, Node/Express, Date-FNS `,
    steps: `# Choose a value from the filters (select / dropdown)`,
    codeLink:
      "https://github.com/ratneshmurugesan/tech-attic/tree/master/src/components/6micro-apps/dashboard-app",
  },
  //DSA
  "Reverse a Singly Linked List": {},
  //CSS
  "Shapes in CSS": {
    alive: true,
  },
  "ClipPath in CSS": {
    alive: true,
  },
  "Transitions in CSS": {
    alive: false,
  },
};

export default InfoConfig;
