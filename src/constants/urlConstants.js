// export const URLs = {
//     HOME_PAGE: ''
// };

export const HOST = process.env.REACT_APP_API_HOST || window.location.origin;
console.log('HOST', HOST);
export const BASE_URL = `${HOST}/api/mock`;

export const BASE_DASHBOARD = "/dashboard";

export const BASE_DASHBOARD_API_URL =
  "https://tech-attic-node.herokuapp.com/api";

export const DASHBOARD_DATA_MOCK = `${BASE_DASHBOARD_API_URL}/v1/data`;
export const DASHBOARD_DATA = `${BASE_DASHBOARD_API_URL}/v2/data`;

export const FILTERS_METADATA_MOCK = `${BASE_DASHBOARD_API_URL}/v1/filters`;
export const FILTERS_METADATA = `${BASE_DASHBOARD_API_URL}/v2/filters`;

/**
 * Dashboard Page. Mounted under Base URL
 */
export const EXECUTIVE_DASHBOARD = `${BASE_DASHBOARD}/executive-summary`;
export const SOCIAL_DASHBOARD = `${BASE_DASHBOARD}/social-summary`;
export const SEARCH_DASHBOARD = `${BASE_DASHBOARD}/search-summary`;
export const DMA_DASHBOARD = `${BASE_DASHBOARD}/dma-report`;


// TimesheetUser API URLs
export const USERS_META_DATA = `${BASE_URL}/timetracking/meta-data/`;
export const WEEK_DATA = `${BASE_URL}/timetracking/week-data/`;
export const SAVE_TIMESHEET = `${BASE_URL}/timetracking/save_week/`;
export const DELETE_TIMESHEET = `${BASE_URL}/timetracking/delete/`;
export const SUBMIT_TIMESHEET = `${BASE_URL}/timetracking/submit_week/`;
export const REQUEST_ALLOCATION = (id) => `${BASE_URL}/project_allocations/${id}/request_allocations/`;

/* Permission Admin API URLS */
export const ADMIN_META_DATA = `${BASE_URL}/everest-authorisation/meta/`;
export const ROLES = `${BASE_URL}/everest-authorisation/roles/`;
export const GET_MAPPED_ROLES = `${BASE_URL}/everest-authorisation/role-to-agency/`;
export const PERMISSIONS = `${BASE_URL}/everest-authorisation/permissions/`;
export const EMPLOYEES = `${BASE_URL}/everest-authorisation/employee-roles/`;
