import { dataCall } from 'utils/api';

import {
  USERS_META_DATA,
  WEEK_DATA,
  SAVE_TIMESHEET,
  DELETE_TIMESHEET,
  SUBMIT_TIMESHEET,
  REQUEST_ALLOCATION,
} from 'constants/urlConstants';

export const getTimesheetUserReqAllocationData = (body, projectId) => dataCall(REQUEST_ALLOCATION(projectId), 'POST', body);

export const getTimesheetUserSubmitData = body => dataCall(SUBMIT_TIMESHEET, 'POST', body);

export const getTimesheetUserDeleteData = body => dataCall(DELETE_TIMESHEET, 'DEL', body);

export const getTimesheetUserSaveData = body => dataCall(SAVE_TIMESHEET, 'POST', body);

export const getTimesheetUserWeekData = body => dataCall(WEEK_DATA, 'POST', body);

export const getTimesheetUserMetaData = _ => dataCall(USERS_META_DATA, 'GET');
