export const alertInfoDefaults = {
  isNotSubmitted: false,
  isValueZero: false,
  isMemoRequired: false,
};

export const emptyHours = {
  MonT: '',
  TueT: '',
  WedT: '',
  ThuT: '',
  FriT: '',
  SatT: '',
  SunT: '',
};

export const emptyMemos = {
  MonM: '',
  TueM: '',
  WedM: '',
  ThuM: '',
  FriM: '',
  SatM: '',
  SunM: '',
};

export const totalRowDefaults = {
  MonTotal: 0, 
  TueTotal: 0,
  WedTotal: 0,
  ThuTotal: 0,
  FriTotal: 0,
  SatTotal: 0,
  SunTotal: 0,
  WeekTotal: 0,
};

export const activeButtonsDefaults = {
  isSaveActive: false,
  isCloseActive: true,
  isEditActive: false,
  isDeleteActive: false,
};

export const mainButtonsDefaults = {
  isAddRowActive: true,
  isCopyActive: true,
  isSubmitActive: false,
};

export const tableHeaders = [
  { key: 'Client/Project', align: 'center', label: 'Client/Project' },
  { key: 'Billable', align: 'center', label: 'Billable' },
  { key: 'MonH', align: 'center' },
  { key: 'TueH', align: 'center' },
  { key: 'WedH', align: 'center' },
  { key: 'ThuH', align: 'center' },
  { key: 'FriH', align: 'center' },
  { key: 'SatH', align: 'center' },
  { key: 'SunH', align: 'center' },
  { key: 'Total', align: 'center', label: 'Total' },
  { key: 'Status', align: 'center', label: 'Status' },
  { key: 'Actions', align: 'center', label: 'Actions' },
];

export const totalRowConfig = [
  // { key: 'Total', align: 'left', label: 'Total' },
  // { key: 'Billable', align: 'center', label: '' },
  { key: 'MonTotal', align: 'center' },
  { key: 'TueTotal', align: 'center' },
  { key: 'WedTotal', align: 'center' },
  { key: 'ThuTotal', align: 'center' },
  { key: 'FriTotal', align: 'center' },
  { key: 'SatTotal', align: 'center' },
  { key: 'SunTotal', align: 'center' },
  { key: 'WeekTotal', align: 'center' },
  // { key: 'WeekTotal', align: 'center' },
  // { key: 'Status', align: 'center', label: '' },
  // { key: 'Actions', align: 'center', label: '' },
];

export const inputElems = [
  { key: 'Mon', keyT: 'MonT', keyM: 'MonM' },
  { key: 'Tue', keyT: 'TueT', keyM: 'TueM' },
  { key: 'Wed', keyT: 'WedT', keyM: 'WedM' },
  { key: 'Thu', keyT: 'ThuT', keyM: 'ThuM' },
  { key: 'Fri', keyT: 'FriT', keyM: 'FriM' },
  { key: 'Sat', keyT: 'SatT', keyM: 'SatM' },
  { key: 'Sun', keyT: 'SunT', keyM: 'SunM' },
];

export const timesheetTableKeys = {
  editable_table_row: { name: 'editable_table_row', key: 'editable_table_row', align: 'center', isDisabled: true },

  autocomplete_client: { name: 'autocomplete_client', key: 'autocomplete_client', align: 'center', },
  autocomplete_project: { name: 'autocomplete_project', key: 'autocomplete_project', align: 'center', },
  autocomplete_track: { name:'autocomplete_track', key: 'autocomplete_track', align: 'center', },

  checkbox_billable: { key: 'checkbox_billable', name: 'checkbox_billable', align: 'center', value: false },

  MonT: { name: 'MonT', align: 'center' },
  MonM: { name: 'MonM', align: 'center' },

  TueT: { name: 'TueT', align: 'center' },
  TueM: { name: 'TueM', align: 'center' },

  WedT: { name: 'WedT', align: 'center' },
  WedM: { name: 'WedM', align: 'center' },

  ThuT: { name: 'ThuT', align: 'center' },
  ThuM: { name: 'ThuM', align: 'center' },

  FriT: { name: 'FriT', align: 'center' },
  FriM: { name: 'FriM', align: 'center' },

  SatT: { name: 'SatT', align: 'center' },
  SatM: { name: 'SatM', align: 'center' },

  SunT: { name: 'SunT', align: 'center' },
  SunM: { name: 'SunM', align: 'center' },

  status: { key: 'status', align: 'center', },

  save_button: { name: 'save_button', key: 'save_button', align: 'center', isDisabled: true },
  edit_button: { name: 'edit_button', key: 'edit_button', align: 'center', isDisabled: true },
  close_button: { name: 'close_button', key: 'close_button', align: 'center', isDisabled: false },
  delete_button: { name: 'delete_button', key: 'delete_button', align: 'center', isDisabled: true },

  alert_memo: { key: 'alert_memo', align: 'center', isDisabled: true },
  alert_hours: { key: 'alert_hours', align: 'center', isDisabled: true },

  button_add_row: { key: 'button_add_row', align: 'center', isDisabled: false },
  button_copy_prev_week: { key: 'button_copy_prev_week', align: 'center', isDisabled: false },
  button_submit: { key: 'button_submit', align: 'center', isDisabled: true },
};

export const noteSectionHeaders = [
  { key: 'PID/Track', label: 'PID/Track' },
  { key: 'TA', label: 'Timesheet Approver' },
  { key: 'SM', label: 'Staffing Manager' }
];

export const noteSectionBody = [
  { key: 'note1' },
  { key: 'note2' },
  { key: 'note3' }
];

export const timesheetStatus = {
  Approved: { text: 'APPROVED' },
  Negotiate: { text: 'NEGOTIATE' },
  Submitted: { text: 'SUBMITTED' },
  Rejected: { text: 'REJECTED' },
  Draft: { text: 'DRAFT' },
  Deleted: { text: 'DELETED' },
  Active: { text: 'ACTIVE' },
  Pending: { text: 'PENDING' }
};

export const responseEnums = {
	SAVE: {
		success: 'Timesheet(s) created successfully',
		failure: 'Save was successful',
  },
  COPY: {
		success: 'Timesheet(s) Copied Successfully',
		failure: 'Copy was unsuccessful',
	},
  DELETE: {
		success: 'Timesheet(s) Deleted Successfully',
		failure: 'Delete was unsuccessful',
	},
	SUBMIT: {
		success: 'Timesheet(s) Submitted Successfully',
		failure: 'Submit was unsuccessful',
	},
};