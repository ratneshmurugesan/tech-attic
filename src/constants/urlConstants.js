// export const URLs = {
//     HOME_PAGE: ''
// };

export const HOST = process.env.REACT_APP_API_HOST || window.location.origin;
console.log('HOST', HOST);
export const BASE_URL = `${HOST}/api/mock`;

// TimesheetUser API URLs
export const USERS_META_DATA = `${BASE_URL}/timetracking/meta-data/`;
export const WEEK_DATA = `${BASE_URL}/timetracking/week-data/`;
export const SAVE_TIMESHEET = `${BASE_URL}/timetracking/save_week/`;
export const DELETE_TIMESHEET = `${BASE_URL}/timetracking/delete/`;
export const SUBMIT_TIMESHEET = `${BASE_URL}/timetracking/submit_week/`;
export const REQUEST_ALLOCATION = (id) => `${BASE_URL}/project_allocations/${id}/request_allocations/`;
