const API_URL = "https://api.github.com/users";

export const apiRepos = user =>
  fetch(`${API_URL}/${user}/repos`).then(res => res.json());



// import React from 'react';
// import axios from 'axios';

// import { fetchRepos } from '../actions/actions.js';


// function Userapi(dispatch, username) { // needs to dispatch, so it is first argument
//   return fetch(`https://api.github.com/users/${username}/repos`)
//     .then(res => res.json())
//     .then(
//       data => dispatch({ type: 'LOAD_DATA_SUCCESS', data }),
//       err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
//     );
// }

// // const Userapi = (username) => {
// //   //return function (dispatch) {
// //     //axios.get(`https://api.github.com/users/${username}/repos`)
// //     //fetch(`https://api.github.com/users/${username}/repos`)
// //     let promise = new Promise((resolve, reject) => {
// //       axios.get(`https://api.github.com/users/${username}/repos`)
// //         .then((res) => {
// //           resolve(res);
// //         })
// //         .catch((error) => {
// //           reject(error);
// //         })
// //       return promise;
// //       // .then((response) => {
// //       //   //return response.data;
// //       //   //console.log(username+""+response);
// //       //   dispatch(fetchRepos(username, response.data))
// //       // })
// //     })
// //  // }
// // }

// export default Userapi;
