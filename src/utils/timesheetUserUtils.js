import {
  inputElems,
} from 'constants/timesheetUserConstants';

export const getFilteredData = timesheetContextData => {
  let sheetStatusList = {};
  let billedProjectList = {};
  let initialHiddenButtons = {};
  let initialActiveButtons = {};
  let initialProjectHours = {};
  let initialProjectMemos = {};
  let initialProjectDropdownValues = {};
  let initialValidRows = {};
  let initialRequiredMemoList = {};
  let initialReadOnlyList = {};
  let initialMainButtons = {};
  let initialSubmittedTimesheets = {};

  const dropDownProjectData = (timesheetContextData && timesheetContextData.projectData) ? timesheetContextData.projectData : [];

  const tableHeadersData = timesheetContextData && timesheetContextData.data ? timesheetContextData.data : null;

  const inputProjectData = (timesheetContextData && timesheetContextData.data && timesheetContextData.data.projects) ?
    timesheetContextData.data.projects.map(projObj => ({ ...projObj, ...projObj.days })) : [];

  const dropDownClients = dropDownProjectData ? dropDownProjectData.map(projObj => ({ name: projObj.client })) : [];

  let dropDownProjects = [];
  dropDownProjectData && dropDownProjectData.forEach(projObj => dropDownProjects = [...dropDownProjects, ...projObj.projects]);

  const tracksList = dropDownProjects.length ? dropDownProjects.filter(projObj => (projObj && projObj.tracks)) : [];

  const dropDownTracks = tracksList.length ? tracksList.map(trackObj => ({ ...trackObj.tracks[0] })) : [];

  const dataDayStart = (timesheetContextData && timesheetContextData.data && timesheetContextData.data.dataViewDate &&
    timesheetContextData.data.dataViewDate.dataDayStart) || null;

  const dataDayEnd = (timesheetContextData && timesheetContextData.data && timesheetContextData.data.dataViewDate &&
    timesheetContextData.data.dataViewDate.dataDayEnd) || null;

  const weekType = (timesheetContextData && timesheetContextData.week) || null;

  const ontime_submission = timesheetContextData && timesheetContextData.ontime_submission ? timesheetContextData.ontime_submission : false;

  const notAllocatedMessage = timesheetContextData && timesheetContextData.notAllocatedMessage ? timesheetContextData.notAllocatedMessage : '';

  const missingTimesheetMessage = (timesheetContextData && timesheetContextData.missingTimesheetMessage) ? timesheetContextData.missingTimesheetMessage : '';

  const timesheetTotalObj = (timesheetContextData && timesheetContextData.data && timesheetContextData.data.timesheetTotal) ?
    timesheetContextData.data.timesheetTotal : null;

  const weekString = (timesheetContextData && timesheetContextData.data && timesheetContextData.data.weekString) ?
    timesheetContextData.data.weekString : null;

  const noteSectionList = inputProjectData.length ? inputProjectData.map(projObj => {
    return {
      name: projObj.name,
      timesheetApproverName: projObj.approverName || '-',
      staffingManagerName: projObj.staffingManagerName,
    }
  }) : [];

  inputProjectData.length && inputProjectData.forEach(projObj => {
    if (projObj && projObj.id) {
      inputElems.forEach(configObj => {
        let key = configObj.keyT;
        let value = projObj[configObj.keyT] || '';
        initialProjectHours = {
          ...initialProjectHours,
          ...{ [projObj.id]: { ...initialProjectHours[projObj.id], ...{ [key]: value } } }
        }
      });

      inputElems.forEach(configObj => {
        const key = configObj.keyM;
        const value = projObj[configObj.keyM] || '';
        initialProjectMemos = {
          ...initialProjectMemos,
          ...{ [projObj.id]: { ...initialProjectMemos[projObj.id], ...{ [key]: value } } }
        }
      });

      let clientDropdownObj = {};
      let projectDropdownObj = {};
      let trackDropdownObj = {};

      if (dropDownClients.length) {
        clientDropdownObj = { clientName: dropDownClients.filter(obj => obj.name === projObj.client)[0].name };
      }
      if (dropDownProjects.length) {
        const properties = { ...dropDownProjects.filter(obj => obj.id === projObj.project_id)[0] }
        projectDropdownObj = {
          ...projectDropdownObj,
          ...{ projectName: `${properties.projectId} | ${properties.name}` },
          ...properties,
        }
      }
      // Condition to Enable/Disable track dropdown.
      if (dropDownTracks.length) {
        const properties = { ...dropDownTracks.filter(obj => obj.id === projObj.track_id)[0] }
        if (properties.project_id && properties.name) {
          trackDropdownObj = {
            ...trackDropdownObj,
            ...{ trackName: `${properties.project_id} | ${properties.name}` },
            ...properties,
          }
        }
      }

      initialProjectDropdownValues = {
        ...initialProjectDropdownValues,
        ...{
          [projObj.id]: {
            ...initialProjectDropdownValues[projObj.id],
            ...{
              clientObj: { ...clientDropdownObj },
              projectObj: { ...projectDropdownObj },
              trackObj: { ...trackDropdownObj }
            }
          }
        }
      }

      initialValidRows = { ...initialValidRows, ...{ [projObj.id]: true } }

      initialRequiredMemoList = { ...initialRequiredMemoList, ...{ [projObj.id]: projObj.has_mandatory_memo } }

      initialHiddenButtons = {
        ...initialHiddenButtons,
        ...{ [projObj.id]: { isSaveHidden: true, isCloseHidden: true, isEditHidden: false, isDeleteHidden: false } }
      }

      initialActiveButtons = {
        ...initialActiveButtons,
        ...{ [projObj.id]: { isSaveActive: false, isCloseActive: true, isEditActive: true, isDeleteActive: true } }
      }

      sheetStatusList = { ...sheetStatusList, ...{ [projObj.id]: { status: projObj.status } } }

      billedProjectList = { ...billedProjectList, ...{ [projObj.id]: { isBilled: projObj.isBilled } } }

      initialReadOnlyList = { ...initialReadOnlyList, ...{ [projObj.id]: { isReadOnly: projObj.read_only } } }

      initialSubmittedTimesheets = {
        ...initialSubmittedTimesheets,
        ...{
          [projObj.id]: projObj.status === 'Submitted' ? true : false,
        }
      }

    }

  });
  initialMainButtons = { isAddRowActive: true, isCopyActive: true, isSubmitActive: false }

  const result = {
    initialTableHeadersData: tableHeadersData,
    initialInputProjectData: inputProjectData,
    initialDropDownProjectData: dropDownProjectData,
    initialRequiredMemoList,
    initialProjectHours,
    initialProjectMemos,
    initialProjectDropdownValues,
    initialTotalWeekHours: timesheetTotalObj,
    initialValidRows,
    initialBilledProjectList: billedProjectList,
    intialTsStatusList: sheetStatusList,
    initialNoteSectionList: noteSectionList,
    initialDropDownProjects: dropDownProjects,
    initialDropDownClients: dropDownClients,
    initialDropDownTracks: dropDownTracks,
    initialActiveButtons,
    initialHiddenButtons,
    initialMainButtons,
    initialReadOnlyList,
    initialDataDayStart: dataDayStart,
    initialDataDayEnd: dataDayEnd,
    initialWeekString: weekString,
    initialWeekType: weekType,
    initialOntimeSubmission: ontime_submission,
    initialNotAllocatedMessage: notAllocatedMessage,
    initialMissingTimesheetMessage: missingTimesheetMessage,
    initialSubmittedTimesheets,
  }

  return result;
};
