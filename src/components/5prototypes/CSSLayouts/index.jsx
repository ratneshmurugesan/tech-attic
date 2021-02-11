import React from "react";

// import Button from '@material-ui/core/Button';

import "./index.scss";

// const CSSLayouts = () => {
//     return (
//         // <React.Fragment>
//         //     <div>UserJourney</div>
//         //     <div>UserJourney1<Button>click</Button></div>
//         //     <div>UserJourney2</div>
//         // {/* </React.Fragment> */}
//         <React.Fragment>
//             <div className="parent1">
//                 <div className="input_text" contentEditable>Centering a DIV..Type somthing here</div>
//             </div>
//             <div className="pancakes">
//                 <p>Flexbox pancakes</p>
//                 <div className="parent2">
//                     <div className="box--stretch">1</div>
//                     <div className="box--stretch">2</div>
//                     <div className="box--stretch">3</div>
//                 </div>
//                 <div className="parent2">
//                     <div className="box">A</div>
//                     <div className="box">B</div>
//                     <div className="box">C</div>
//                 </div>
//             </div>
//             <div className="parent3">
//                 <div className="card">
//                     <div className="title"><p>Clamped Card</p></div>
//                     <div className="image"><img alt="sample" width="100" height="100" /></div>
//                     <div className="desc">
//                         Description Description Description Description Description Description Description Description
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// };

const level1 = (
  <div className="wrapper-level-1">
    <div>Nisi excepteur reprehenderit non nulla consequat.</div>
    <div>Nisi excepteur reprehenderit non nulla consequat.</div>
    <div>
      Excepteur elit aliqua cupidatat proident ea aliqua duis. In ipsum
      excepteur ea non velit velit. Amet amet esse fugiat elit deserunt enim.
      Commodo irure culpa duis nostrud irure elit. Lorem in voluptate fugiat
      culpa aute aute dolor proident eiusmod ea. Id sit nisi nulla nulla nulla
      sint culpa. Minim sit eiusmod sunt exercitation elit sit velit id ex eu id
      Lorem ut culpa. Ea mollit et reprehenderit sit sunt officia consequat
      cupidatat amet labore deserunt. Amet mollit amet eiusmod voluptate
      consequat excepteur ipsum aute in eiusmod est. Elit anim esse quis tempor
      sunt non. Commodo exercitation esse officia laboris sunt magna dolore
      magna ipsum. Adipisicing adipisicing adipisicing voluptate excepteur. Aute
      id consectetur eu voluptate non irure sunt. Amet id ea sunt anim.
    </div>
    <div>Nisi excepteur reprehenderit non nulla consequat.</div>
    <div>Nisi excepteur reprehenderit non nulla consequat.</div>
  </div>
);

const level2 = (
  <div className="wrapper-level-2">
    <div>Nisi excepteur reprehenderit non nulla consequat.</div>
    <div>Nisi excepteur reprehenderit non nulla consequat.</div>
    <div className="nested">
      <div>Lorem</div>
      <div>Lorem</div>
      <div>Lorem</div>
      <div>Lorem</div>
      <div>Lorem</div>
      <div>Lorem</div>
    </div>
    <div>Nisi excepteur reprehenderit non nulla consequat.</div>
    <div>
      Excepteur elit aliqua cupidatat proident ea aliqua duis. In ipsum
      excepteur ea non velit velit. Amet amet esse fugiat elit deserunt enim.
      Commodo irure culpa duis nostrud irure elit. Lorem in voluptate fugiat
      culpa aute aute dolor proident eiusmod ea. Id sit nisi nulla nulla nulla
      sint culpa. Minim sit eiusmod sunt exercitation elit sit velit id ex eu id
      Lorem ut culpa. Ea mollit et reprehenderit sit sunt officia consequat
      cupidatat amet labore deserunt. Amet mollit amet eiusmod voluptate
      consequat excepteur ipsum aute in eiusmod est. Elit anim esse quis tempor
      sunt non. Commodo exercitation esse officia laboris sunt magna dolore
      magna ipsum. Adipisicing adipisicing adipisicing voluptate excepteur. Aute
      id consectetur eu voluptate non irure sunt. Amet id ea sunt anim.
    </div>
    <div>Nisi excepteur reprehenderit non nulla consequat.</div>
    <div>Nisi excepteur reprehenderit non nulla consequat.</div>
  </div>
);

const level3 = (
  <div className="wrapper-level-3">
    <div className="box box1">BOX 1</div>
    <div className="box box2">BOX 2</div>
    <div className="box box3">BOX 3</div>
    <div className="box box4">BOX 4</div>
  </div>
);

const level4 = (
    <div className="wrapper-level-4">
      <div className="box box1">BOX 1</div>
      <div className="box box2">BOX 2</div>
      <div className="box box3">BOX 3</div>
      <div className="box box4">BOX 4</div>
    </div>
  );
const CSSLayouts = () => {
  return level4;
};

export default CSSLayouts;
