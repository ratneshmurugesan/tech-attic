import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Add,
} from '@material-ui/icons';

// Utils
// import {
//   verifyPermissions,
// } from 'utils/global';
import {
  getFilteredData
} from 'utils/timesheetUserUtils';

// Services
import {
  getTimesheetUserSaveData,
  getTimesheetUserDeleteData,
  getTimesheetUserWeekData,
  getTimesheetUserSubmitData,
} from 'services/timesheetUserService';

// Atoms
import ButtonComponent from 'components/1atoms/buttonComponent';
import AlertMessageComponent from 'components/1atoms/AlertMessageComponent';
import LoaderComponent from 'components/1atoms/LoaderComponent';
// import RedirectDialog from 'components/1atoms/redirectDialog';
import APIResponseComponent from 'components/1atoms/apiResponseComponent';
import { 
  TimesheetDropdowns,
  TimesheetCheckbox,
  TimesheetInputFields,
  TimesheetWeekTotal,
  TimesheetStatus,
  TimesheetActionButtons,
  TimesheetNoteSection,
} from 'components/1atoms/timesheetUserTableCells';

// Molecules
import TimesheetUserSubmitModal from 'components/2molecules/timesheetUserSubmitModal';

// Contexts
import TimesheetUserContext from 'context/timesheetUserContext';

// Constants
// import { moduleEnums } from 'constants/ModulesPermissionsEnum';
import {
  tableHeaders,
  totalRowConfig,
  timesheetTableKeys,
  inputElems,
  totalRowDefaults,
  mainButtonsDefaults,
  emptyHours,
  emptyMemos,
  alertInfoDefaults,
  responseEnums,
} from 'constants/timesheetUserConstants';

import makeStyles from './styles';

const TimesheetUserTable = _ => {

  // Initial api response data from context.
  const {
    // permissions,
    // errorMessagePopup,
    initialTableHeadersData,
    initialInputProjectData,
    initialDropDownProjectData,
    initialRequiredMemoList,
    initialProjectHours,
    initialProjectMemos,
    initialProjectDropdownValues,
    initialTotalWeekHours,
    initialValidRows,
    initialWeekString,
    initialActiveButtons,
    initialHiddenButtons,
    initialMainButtons,
    isContextLoading, // Context isContextLoading reference
    setTimesheetContextData,
    initialSubmittedTimesheets,
  } = useContext(TimesheetUserContext);
  // State to store timesheet with projects shown as rows.
  const [inputProjectData, setInputProjectData] = useState([]);
  // State to store dropdown in each timesheets.
  const [dropDownProjectData, setDropDownProjectData] = useState([]);
  // State to store week range when changed.
  const [weekString, setWeekString] = useState('');
  // State to store total week hours and shown on timesheet.
  const [totalWeekHours, setTotalWeekHours] = useState();
  // Below three states to store inputs, buttons and caches 
  // of inputs when events are triggered.
  const [inputs, updateInputs] = useState({});
  const [buttons, updateButtons] = useState({});
  const [caches, setCaches] = useState({});
  // State to store loader state.
  const [isAPILoading, setAPILoading] = useState(false);
  // State to store id of new timesheets.
  const [id, incrementRowId] = useState(1);
  // State to store mandatory memos aganist each timesheet.
  const [requiredMemoList, setRequiredMemoList] = useState({});
  // State to store boolean value to check whether it is in edit mode or 
  // invalid inputs entered aganist each timesheets.
  const [validRows, setValidRows] = useState({});
  // State to indicate newly added timesheet row.
  const [newEmptyTimesheets, setNewEmptyTimesheets] = useState({});
  // State to open/close submit modal.
  const [isSubmitModalOpen, setSubmitModal] = useState(false);
  // State to show/hode alerts.
  const [alertInfo, setAlertInfo] = useState({ ...alertInfoDefaults });
  // State to show errors on memo fields when mandatory and left empty.
  const [errorInputs, setErrorInputs] = useState({});
  // Stte to store submitted timesheets
  const [submittedTimesheets, setSubmittedTimesheets] = useState({});
  // State to show snakbar on top of the page on api response.
  const [response, setResponse] = useState({
    open: false,
    message: '',
    counter: 1,
  });

  const classes = makeStyles();

  const handleSubmitModal = _ => setSubmitModal(!isSubmitModalOpen);

  const calculateTotalHours = inputHours => Object
    .values(inputHours)
    .reduce((a, b) => Number(a) + Number(b), 0);

  useEffect(
    _ => {
      setInputProjectData(initialInputProjectData);
      setDropDownProjectData(initialDropDownProjectData);
      setWeekString(initialWeekString);
      updateInputs(inputs => ({
        ...inputs,
        ...{ projectInputHours: initialProjectHours },
        ...{ projectInputMemos: initialProjectMemos },
        ...{ projectDropdownValues: initialProjectDropdownValues },
      }));
      updateButtons(buttons => ({
        ...buttons,
        ...{ hiddenButtons: initialHiddenButtons },
        ...{ mainButtons: initialMainButtons },
        ...{ activeButtons: initialActiveButtons }
      }));
      setTotalWeekHours(initialTotalWeekHours);
      setValidRows(initialValidRows);
      setRequiredMemoList(initialRequiredMemoList);
      setSubmittedTimesheets(initialSubmittedTimesheets);
    },
    [
      initialInputProjectData,
      initialDropDownProjectData,
      initialWeekString,
      initialProjectHours,
      initialProjectMemos,
      initialProjectDropdownValues,
      initialHiddenButtons,
      initialMainButtons,
      initialActiveButtons,
      initialTotalWeekHours,
      initialValidRows,
      initialRequiredMemoList,
      initialSubmittedTimesheets,
    ]
  );

  useEffect(
    _ => {

      let totalWeekHoursClone = { ...totalRowDefaults };
      let activeButtonsListClone = {};
      let mainButtonsClone = {};
      let validRowsClone = {};
      let alertInfoClone = {};

      inputs && inputs.projectInputHours && Object.keys(inputs.projectInputHours).forEach(id => {
        const hoursRowId = inputs.projectInputHours[id];

        totalWeekHoursClone['MonTotal'] += Number(hoursRowId['MonT']);
        totalWeekHoursClone['TueTotal'] += Number(hoursRowId['TueT']);
        totalWeekHoursClone['WedTotal'] += Number(hoursRowId['WedT']);
        totalWeekHoursClone['ThuTotal'] += Number(hoursRowId['ThuT']);
        totalWeekHoursClone['FriTotal'] += Number(hoursRowId['FriT']);
        totalWeekHoursClone['SatTotal'] += Number(hoursRowId['SatT']);
        totalWeekHoursClone['SunTotal'] += Number(hoursRowId['SunT']);

        if (hoursRowId['MonT'] !== '' || hoursRowId['TueT'] !== '' || hoursRowId['WedT'] !== '' || hoursRowId['ThuT'] !== '' || 
          hoursRowId['FriT'] !== '' || hoursRowId['SatT'] !== '' || hoursRowId['SunT'] !== '') {
          activeButtonsListClone = {
            ...activeButtonsListClone,
            ...{ [id]: { ...activeButtonsListClone[id], isSaveActive: true, isCloseActive: true, isEditActive: true, isDeleteActive: true, } }
          };
          mainButtonsClone = { ...mainButtonsClone, ...{ isAddRowActive: true, isCopyActive: false, isSubmitActive: true } }
        }
        if (hoursRowId['MonT'] === '' && hoursRowId['TueT'] === '' && hoursRowId['WedT'] === '' && hoursRowId['ThuT'] === '' &&
          hoursRowId['FriT'] === '' && hoursRowId['SatT'] === '' && hoursRowId['SunT'] === '') {
          activeButtonsListClone = {
            ...activeButtonsListClone,
            ...{ [id]: { ...activeButtonsListClone[id], isSaveActive: false, isCloseActive: true, isEditActive: false, isDeleteActive: false, } }
          };
          mainButtonsClone = { ...mainButtonsClone, ...{ isAddRowActive: false, isCopyActive: true, isSubmitActive: false, } }
        }

      });
      inputs && inputs.projectInputMemos && Object.keys(inputs.projectInputMemos).forEach(id => {
        const memosRowId = inputs.projectInputMemos[id];

        if (memosRowId) {
          if ((memosRowId['MonM'] === '' && memosRowId['TueM'] === '' && memosRowId['WedM'] === '' &&
            memosRowId['ThuM'] === '' && memosRowId['FriM'] === '' && memosRowId['SatM'] === '' &&
            memosRowId['SunM'] === '') && requiredMemoList[id]) {

            activeButtonsListClone = {
              ...activeButtonsListClone,
              ...{ [id]: { ...activeButtonsListClone[id], isSaveActive: false, isCloseActive: true, isEditActive: false, isDeleteActive: false, } }
            };
            alertInfoClone = {
              ...alertInfoClone,
              ...{
                [id]: {
                  isMemoRequired: true
                }
              }
            }
          } else {
            alertInfoClone = {
              ...alertInfoClone,
              ...{
                [id]: {
                  isMemoRequired: false
                }
              }
            }
          }
        }
      });
      const sumWeekHours = calculateTotalHours(totalWeekHoursClone);
      let isMemoAlertShown = false;

      Object.keys(alertInfoClone).forEach(id => {
        if(alertInfoClone[id].isMemoRequired){ isMemoAlertShown = true;
        }
      });
      if(isMemoAlertShown){
        setAlertInfo(alertInfo => ({ ...alertInfo, ...{ isMemoRequired: true } }));
      } else {
        setAlertInfo(alertInfo => ({ ...alertInfo, ...{ isMemoRequired: false } }));
      }
      

      setValidRows(validRows => ({ ...validRows, ...validRowsClone }));
      updateButtons(buttons => ({
        ...buttons,
        ...{ activeButtons: { ...activeButtonsListClone } },
        ...{ mainButtons: { ...buttons.mainButtons, ...mainButtonsClone } }
      }));
      setTotalWeekHours(({ ...totalWeekHoursClone, ...{ WeekTotal: sumWeekHours } }));
    }, [
      inputs,
      requiredMemoList,
    ]
  )

  if (isAPILoading || isContextLoading) { return <LoaderComponent /> }

  // if (!verifyPermissions(permissions, moduleEnums.TIMESHEETS)) {
  //   return (
  //     <RedirectDialog
  //       dialogMessage={{
  //         message: 'You are not Authorized to view this page!',
  //         action: 'home',
  //       }}
  //     />
  //   );
  // }

  // if (errorMessagePopup && (errorMessagePopup.failure || errorMessagePopup.error)) {
  //   return <RedirectDialog dialogMessage={errorMessagePopup} />;
  // }

  tableHeaders.forEach(colObj => {
    let mappedLabel;
    if (initialTableHeadersData && initialTableHeadersData[colObj.key]) {
      mappedLabel = initialTableHeadersData[colObj.key]
      colObj.label = mappedLabel;
    }
  });

  const updateAPIResponse = (apiResponse, type) => {
    if (apiResponse && apiResponse.failure) {
      setResponse({
        open: true,
        message: apiResponse.message || apiResponse.error || type.failure,
        type: 'error',
        counter: response.counter + 1,
      });
    } else {
      setResponse({
        open: true,
        message: type.success,
        counter: response.counter + 1,
      });
    }
  };

  const composeBody = rowId => {

    const selectedProject = inputProjectData.length ? inputProjectData.filter((projObj => projObj.id === rowId))[0] : null;

    if (inputs && inputs.projectInputHours &&
      inputs.projectInputMemos &&
      inputs.projectDropdownValues) {
      const projectDetails = {
        name: inputs.projectDropdownValues[rowId].projectObj.projectName,
        id: rowId,
        project_id: inputs.projectDropdownValues[rowId].projectObj.id,
        isBilled: selectedProject.isBilled,
        client: inputs.projectDropdownValues[rowId].projectObj.client,
        days: { ...inputs.projectInputHours[rowId], ...inputs.projectInputMemos[rowId] },
        totT: calculateTotalHours(inputs.projectInputHours[rowId]),
        track_id: inputs.projectDropdownValues[rowId].trackObj.id,
        track_name: inputs.projectDropdownValues[rowId].trackObj.trackName,
      };

      const body = { data: [{ projects: [projectDetails], weekString }] }
      return body;
    }
    return null;
  }

  const submitTimesheets = async _ => {
    const toBeSubmittedProjects = inputProjectData.length ? inputProjectData.map(projObj => {
      if (projObj.track_id) {
        return { id: projObj.id, project_id: projObj.track_id }
      }
      return { id: projObj.id, project_id: projObj.project_id }
    }) : [];

    const submitDataApiBody = {
      data: toBeSubmittedProjects,
      week: weekString,
    }
    console.log('submitTimesheets', submitDataApiBody);
    try {
      setAPILoading(true);
      const submitAPIResponse = await getTimesheetUserSubmitData(submitDataApiBody);
      console.log('submitTimesheets', submitAPIResponse);

      if (submitAPIResponse && submitAPIResponse.failure) {
        console.log('submitAPIResponse FAIL', submitAPIResponse);
      } else {
        console.log('submitAPIResponse', submitAPIResponse);
      }
      setAPILoading(false);
    } catch (err) {
      throw err;
    }
  }

  // Below are Event handlers.
  const handleHoursChange = event => {
    const eventTarget = event.target;
    const eleId = eventTarget.id.split('-')[1];
    const parsedValue = eventTarget.value !== '' ? parseInt(eventTarget.value, 10) : eventTarget.value;
    const floatTwoDecimals = /^\s*-?\d+(\.\d{1,2})?\s*$/;

    if ((floatTwoDecimals.test(eventTarget.value) &&
      eventTarget.value <= 24 &&
      eventTarget.value >= 0 &&
      eventTarget.value !== 'e')  ||
      eventTarget.value === '') {
      setAlertInfo({ ...alertInfo, ...{ isValueZero: false } });
      updateInputs({
        ...inputs, ...{
          projectInputHours: {
            ...inputs.projectInputHours,
            ...{ [eleId]: { ...inputs.projectInputHours[eleId], ...{ [eventTarget.name]: parsedValue }, } }
          }
        }
      });
    }
  }

  const handleMemoChange = event => {
    const eventTarget = event.target;
    const eleId = eventTarget.id.split('-')[1];

    if (eventTarget.value === '') {
      if (requiredMemoList[eleId]) {
        setAlertInfo({ ...alertInfo, ...{ isMemoRequired: true } });
        setErrorInputs({
          ...errorInputs,
          ...{ [eleId]: { ...errorInputs[eleId], ...{ [eventTarget.name]: eventTarget.value } } }
        });
      }
    } else {
      setAlertInfo({ ...alertInfo, ...{ isMemoRequired: false } });
      const errorInputsClone = { ...errorInputs };
      delete errorInputsClone[eleId];
      setErrorInputs({ ...errorInputsClone });
    }
    updateInputs({
      ...inputs, ...{
        projectInputMemos: {
          ...inputs.projectInputMemos,
          ...{ [eleId]: { ...inputs.projectInputMemos[eleId], ...{ [eventTarget.name]: eventTarget.value } } }
        }
      }
    });
  }

  const handleDropDownChange = ({ event, type, value }) => {
    const eventTarget = event.target;
    const eleId = eventTarget.id.split('-')[1];
    if (value && value.hasMandatoryMemo) {
      setRequiredMemoList({ ...requiredMemoList, ...{ [eleId]: true, } });
    } else {
      setRequiredMemoList({ ...requiredMemoList, ...{ [eleId]: false, } });
    }
    let clientDropdownObj = {};
    let projectDropdownObj = {};
    let trackDropdownObj = {};

    if (type === 'client') {
      clientDropdownObj = { ...{ clientName: value.name } };
    }
    if (type === 'project') {
      projectDropdownObj = { ...{ projectName: `${value.projectId} | ${value.name}` }, ...value };
      if (value && value.tracks && value.tracks.length) {
        const selectedTrack = value.tracks[0];
        trackDropdownObj = { ...{ trackName: `${selectedTrack.project_id} | ${selectedTrack.name}` }, };
      }
    }
    if (type === 'track') {
      trackDropdownObj = { ...{ trackName: `${value.project_id} | ${value.name}` }, ...value };
    }

    updateInputs({
      ...inputs,
      ...{
        projectDropdownValues: {
          ...inputs.projectDropdownValues,
          ...{
            [eleId]: {
              ...inputs.projectDropdownValues[eleId],
              ...{
                clientObj: { ...inputs.projectDropdownValues[eleId].clientObj, ...clientDropdownObj, },
                projectObj: { ...inputs.projectDropdownValues[eleId].projectObj, ...projectDropdownObj, },
                trackObj: { ...trackDropdownObj }
              }
            }
          }
        }
      }
    });
  }

  const handleSaveClick = async (event) => {
    const eventTarget = event.target;
    const eleId = eventTarget.getAttribute('ele-id');
    const rowId = parseInt(eleId, 10);

    const body = composeBody(rowId);

    try {
      setAPILoading(true);
      const saveAPIResponse = await getTimesheetUserSaveData(body);

      if (saveAPIResponse && saveAPIResponse.failure) {
        updateAPIResponse({ ...saveAPIResponse, failure: true }, responseEnums.SAVE);
      } else {
        if (Object.keys(saveAPIResponse).length) {
          updateAPIResponse({ ...saveAPIResponse, failure: false }, responseEnums.SAVE);
          updateButtons({
            ...buttons, ...{
              hiddenButtons: {
                ...buttons.hiddenButtons,
                ...{
                  [rowId]: {
                    ...buttons.hiddenButtons[rowId], isSaveHidden: true, isCloseHidden: true, isEditHidden: false, isDeleteHidden: false
                  }
                }
              },
              ...{
                activeButtons: {
                  ...buttons.activeButtons,
                  ...{
                    [rowId]: {
                      ...buttons.activeButtons[rowId], isSaveActive: false, isCloseActive: false, isEditActive: true, isDeleteActive: true,
                    }
                  }
                }
              },
              ...{
                mainButtons: {
                  ...buttons.mainButtons,
                  ...{ isAddRowActive: true, isCopyActive: false, isSubmitActive: true, }
                }
              }
            }
          });
          setValidRows({ ...validRows, ...{ [rowId]: true } });
        }
      }
      setAPILoading(false);
    } catch (err) {
      throw err;
    }
  }

  const handleCloseClick = event => {
    const eventTarget = event.target;
    const eleId = eventTarget.getAttribute('ele-id');
    const rowId = parseInt(eleId, 10);

    if (newEmptyTimesheets[rowId]) {
      const updatedProjectData = inputProjectData.length ? inputProjectData.filter(projObj => projObj.id !== rowId) : [];

      const newEmptyTimesheetsClone = { ...newEmptyTimesheets };
      delete newEmptyTimesheetsClone[rowId];

      const projectInputHoursClone = { ...inputs.projectInputHours };
      delete projectInputHoursClone[rowId];

      const projectInputMemosClone = { ...inputs.projectInputMemos };
      delete projectInputMemosClone[rowId];

      const projectDropdownValuesClone = { ...inputs.projectDropdownValues };
      delete projectDropdownValuesClone[rowId];

      const validRowsClone = { ...validRows };
      delete validRowsClone[rowId];

      updateInputs({
        ...inputs,
        ...{ projectInputHours: projectInputHoursClone },
        ...{ projectInputMemos: projectInputMemosClone },
        ...{ projectDropdownValues: projectDropdownValuesClone }
      });
      setValidRows(validRowsClone);
      setInputProjectData(updatedProjectData);
      setNewEmptyTimesheets(newEmptyTimesheetsClone);
      updateButtons({
        ...buttons,
        ...{
          mainButtons: {
            ...buttons.mainButtons,
            ...{ isAddRowActive: true, isCopyActive: true, isSubmitActive: false }
          }
        }
      });
    } else {
      let validRowsClone = { ...validRows };
      validRowsClone = { ...validRowsClone, ...{ [rowId]: true } }
      setValidRows({ ...validRowsClone });
      updateInputs({
        ...inputs, ...{
          projectInputHours: {
            ...inputs.projectInputHours,
            ...{ [rowId]: { ...caches.cachedInputHours[rowId], } }
          },
        },
        ...{
          projectInputMemos: {
            ...inputs.projectInputMemos,
            ...{ [rowId]: { ...caches.cachedInputMemos[rowId] } }
          },
        },
        ...{
          projectDropdownValues: {
            ...inputs.projectDropdownValues,
            ...{ [rowId]: { ...caches.cachedDropdownValues[rowId] } }
          }
        }
      });
      updateButtons({
        ...buttons, ...{
          hiddenButtons: {
            ...buttons.hiddenButtons,
            ...{ [rowId]: { ...buttons.hiddenButtons[rowId], isSaveHidden: true, isCloseHidden: true, isEditHidden: false, isDeleteHidden: false } }
          }
        },
        ...{
          activeButtons: {
            ...buttons.activeButtons,
            ...{ [rowId]: { ...buttons.activeButtons[rowId], isSaveActive: false, isCloseActive: false, isEditActive: true, isDeleteActive: true } }
          }
        },
        ...{
          mainButtons: {
            ...buttons.mainButtons,
            ...{ isAddRowActive: true, isCopyActive: false, isSubmitActive: true }
          }
        },
      });
      const cachedInputHoursClone = { ...caches.cachedInputHours };
      const cachedInputMemosClone = { ...caches.cachedInputMemos };
      const cachedDropdownValuesClone = { ...caches.cachedDropdownValues };
      if (cachedInputHoursClone[rowId]) {
        delete cachedInputHoursClone[rowId];
        setCaches({ ...caches, cachedInputHours: cachedInputHoursClone });
      }
      if (cachedInputMemosClone[rowId]) {
        delete cachedInputMemosClone[rowId];
        setCaches({ ...caches, cachedInputMemos: cachedInputMemosClone });
      }
      if (cachedDropdownValuesClone[rowId]) {
        delete cachedDropdownValuesClone[rowId];
        setCaches({ ...caches, cachedDropdownValues: cachedDropdownValuesClone });
      }
    }
    const requiredMemoListClone = { ...requiredMemoList };
    delete requiredMemoListClone[rowId];
    setRequiredMemoList(requiredMemoListClone);
    setAlertInfo({ ...alertInfo, ...{ isMemoRequired: false } });
  }

  const handleEditClick = event => {
    const eventTarget = event.target;
    const eleId = eventTarget.getAttribute('ele-id');
    const rowId = parseInt(eleId, 10);

    let validRowsClone = { ...validRows };
    validRowsClone = { ...validRowsClone, ...{ [rowId]: false } }
    setValidRows({ ...validRowsClone, });

    // Storing in cache to retrieve when closed w/o save, avoiding api call.
    setCaches({
      ...caches,
      ...{ cachedInputHours: { ...caches.projectInputHours, [rowId]: { ...inputs.projectInputHours[rowId] } } },
      ...{ cachedInputMemos: { ...caches.projectInputMemos, [rowId]: { ...inputs.projectInputMemos[rowId] } } },
      ...{ cachedDropdownValues: { ...caches.projectDropdownValues, [rowId]: { ...inputs.projectDropdownValues[rowId], } } }
    });
    updateButtons({
      ...buttons,
      ...{
        hiddenButtons: {
          ...buttons.hiddenButtons,
          ...{ [rowId]: { ...buttons.hiddenButtons[rowId], isSaveHidden: false, isCloseHidden: false, isEditHidden: true, isDeleteHidden: true } }
        }
      },
      ...{
        activeButtons: {
          ...buttons.activeButtons,
          ...{ [rowId]: { ...buttons.activeButtons[rowId], isSaveActive: true, isCloseActive: true, isEditActive: false, isDeleteActive: false, } }
        }
      },
      ...{ mainButtons: { ...buttons.mainButtons, ...{ isAddRowActive: false, isCopyActive: false, isSubmitActive: false, } } }
    });
  }

  const handleDeleteClick = async (event) => {
    const eventTarget = event.target;
    const rowId = eventTarget.getAttribute('ele-id');

    const body = {
      id: rowId,
      weekString,
    };

    try {
      setAPILoading(true);
      const deleteAPIResponse = await getTimesheetUserDeleteData(body);
      if (deleteAPIResponse && deleteAPIResponse.failure) {
        updateAPIResponse(deleteAPIResponse, responseEnums.DELETE);
      } else {
        updateAPIResponse(deleteAPIResponse, responseEnums.DELETE);
        if (dropDownProjectData) {
          const mergedData = { data: { ...deleteAPIResponse }, projectData: dropDownProjectData };
          const filteredData = getFilteredData(mergedData);
          setTimesheetContextData(timesheetContextData => ({
            ...timesheetContextData,
            ...filteredData
          }));
        }
      }
      setAPILoading(false);
    } catch (err) {
      throw err;
    }
  }

  const handleCopyClick = async _ => {
    const weekDataApiBody = {
      action: 'Copy',
      weekString,
    }
    try {
      setAPILoading(true);
      const copyAPIResponse = await getTimesheetUserWeekData(weekDataApiBody);
      const filteredData = getFilteredData(copyAPIResponse);
      setTimesheetContextData(timesheetContextData => ({ ...timesheetContextData, ...filteredData }));
      setAPILoading(false);
    } catch (err) {
      throw err;
    }
  }

  const handleSubmitClick = _ => {
    handleSubmitModal(true);
  }

  const handleAddRowClick = _ => {
    const newRow = { id, isBilled: false, status: '', ...emptyHours, ...emptyMemos };

    let newProjectHours = {};
    let newProjectMemos = {};
    let newProjectDropdownValues = {};

    inputElems.forEach(configObj => {
      let key = configObj.keyT;
      let value = '';
      newProjectHours = { ...newProjectHours, ...{ [id]: { ...newProjectHours[id], ...{ [key]: value } } } }
    });

    inputElems.forEach(configObj => {
      const key = configObj.keyM;
      const value = '';
      newProjectMemos = { ...newProjectMemos, ...{ [id]: { ...newProjectMemos[id], ...{ [key]: value } } } }
    });

    newProjectDropdownValues = {
      ...newProjectDropdownValues, ...{ [id]: { clientObj: { clientName: '' }, projectObj: { projectName: '', }, trackObj: { trackName: '', } } }
    }

    setInputProjectData([...inputProjectData, newRow]);
    updateInputs({
      ...inputs, ...{ projectInputHours: { ...inputs.projectInputHours, ...newProjectHours }, },
      ...{ projectInputMemos: { ...inputs.projectInputMemos, ...newProjectMemos }, },
      ...{ projectDropdownValues: { ...inputs.projectDropdownValues, ...newProjectDropdownValues, } }
    });
    setNewEmptyTimesheets(newEmptyTimesheets => ({ ...newEmptyTimesheets, ...{ ...newEmptyTimesheets[id], [id]: true, } }));
    updateButtons({
      ...buttons, ...{
        hiddenButtons: {
          ...buttons.hiddenButtons,
          ...{ [id]: { ...buttons.hiddenButtons[id], isEditHidden: true, isSaveHidden: false, isCloseHidden: false, isDeleteHidden: true, } }
        }
      },
      ...{ mainButtons: { ...mainButtonsDefaults, ...{ isAddRowActive: false, isCopyActive: true, isSubmitActive: false, } } },
      ...{
        activeButtons: {
          ...buttons.activeButtons,
          ...{ [id]: { isSaveActive: false, isCloseActive: true, isEditActive: false, isDeleteActive: false, } }
        }
      }
    });
    setValidRows({ ...validRows, ...{ [id]: false } });
    setRequiredMemoList({ ...requiredMemoList, ...{ [id]: false } });
    incrementRowId(id + 1);
  }

  const getTableBody = projObj => {
    const {
      editable_table_row,
    } = timesheetTableKeys;

    return (
      <TableRow
        key={`${editable_table_row.key}${projObj.id}`}
        id={`${editable_table_row.key}${projObj.id}`}
        className={classes.editableTableRow}
      >
        <TimesheetDropdowns
          projObj={projObj}
          inputs={inputs}
          buttons={buttons}
          handleDropDownChange={handleDropDownChange}
        />
        <TimesheetCheckbox 
          projObj={projObj}
          />
        {inputElems.map(configObj => (
          <TimesheetInputFields
            key={`${configObj.key}${projObj.id}`}
            projObj={{ ...configObj, ...projObj }}
            inputs={inputs}
            buttons={buttons}
            errorInputs={errorInputs}
            handleHoursChange={handleHoursChange}
            handleMemoChange={handleMemoChange}
          />
        ))}
        <TimesheetWeekTotal
          projObj={projObj}
          inputs={inputs}
          calculateTotalHours={calculateTotalHours}
        />
        <TimesheetStatus 
          projObj={projObj}
        />
        <TimesheetActionButtons
          projObj={projObj}
          buttons={buttons}
          validRows={validRows}
          handleSaveClick={handleSaveClick}
          handleCloseClick={handleCloseClick}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          />
      </TableRow>
    );
  };

  const validRowsKeys = validRows ? Object.keys(validRows): [];
  const validRowsLength = validRowsKeys.length;
  const areAllRowsSaved = validRowsLength ? validRowsKeys.every(key => validRows[key]) : true;

  const submittedTsKeys = submittedTimesheets ? Object.keys(submittedTimesheets) : [];
  const submittedTslength = submittedTsKeys.length;
  const areAllTimesheetsSubmitted = submittedTslength ? submittedTsKeys.every(key => submittedTimesheets[key]) : false;

  return isAPILoading ? <LoaderComponent /> : (
    <>
      <Paper className={classes.timesheetContainer}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeaders.map(header => (
                  <TableCell
                    className={classes.timesheetTableHeaderCell}
                    align={header.align}
                    key={header.key}
                  >
                    {header.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                (inputProjectData && inputProjectData.length) ? inputProjectData.map(projObj => getTableBody(projObj)) : null
              }
              <TableRow key='add-button-row'>
                <TableCell rowSpan={1} colSpan={9} />
                <TableCell align="right" colSpan={3}>
                  <div className={classes.addRowSection}>
                    <ButtonComponent
                      type={'primary'}
                      id={'add-row-button'}
                      classObject={{ primary: classes.addRowButton }}
                      name={<><Add /> Add Row</>}
                      onClick={handleAddRowClick}
                      disabled={(buttons && 
                        buttons.mainButtons && 
                        buttons.mainButtons.isAddRowActive) ? (!buttons.mainButtons.isAddRowActive || !areAllRowsSaved) : false}
                    />
                  </div>
                </TableCell>
              </TableRow>

              <TableRow key='total-row'>
                <TableCell
                  className={classes.totalRowCell}
                  align={'left'}
                  key={'total-cell-text'}
                >
                  {'Total'}
                </TableCell>
                <TableCell
                  className={classes.totalRowCell}
                  align={'center'}
                  key={'billable-cell-text'}
                >
                  {''}
                </TableCell>
                {totalRowConfig.map(totalRowCell => {
                  const daysTotal = totalWeekHours ? (totalWeekHours[totalRowCell.key]).toFixed(2) : 0;
                  return (
                    <TableCell
                      className={classes.totalRowCell}
                      align={totalRowCell.align}
                      key={totalRowCell.key}
                    >
                      {daysTotal}
                    </TableCell>
                  )
                })}
                <TableCell
                  className={classes.totalRowCell}
                  align={'center'}
                  key={'status-cell-text'}
                >
                  {''}
                </TableCell>
                <TableCell
                  className={classes.totalRowCell}
                  align={'center'}
                  key={'actions-cell-text'}
                >
                  {''}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {alertInfo.isMemoRequired && <AlertMessageComponent alertInfo={'*Memo is Mandatory for this project'} />}
        {alertInfo.isValueZero && <AlertMessageComponent alertInfo={'Hours should be greater than zero'} />}

        <Paper className={classes.buttonGroup} elevation={0}>
          <ButtonComponent
            id={'copy-button'}
            type={'secondary'}
            name={'Copy Previous Week'}
            onClick={handleCopyClick}
            classObject={{ secondary: classes.copyButton }}
            disabled={(buttons && 
              buttons.mainButtons && 
              buttons.mainButtons.isCopyActive) ? (!buttons.mainButtons.isCopyActive) : false}
          />
          <ButtonComponent
            id={'submit-button'}
            type={'primary'}
            name={'Submit'}
            onClick={handleSubmitClick}
            classObject={{ primary: classes.submitButton }}
            disabled={(buttons && 
              buttons.mainButtons && 
              buttons.mainButtons.isSubmitActive) ? (!buttons.mainButtons.isSubmitActive || !areAllRowsSaved || areAllTimesheetsSubmitted) : false}
          />
        </Paper>

        <TimesheetNoteSection />

      </Paper>
      <TimesheetUserSubmitModal
        open={isSubmitModalOpen}
        handleClose={handleSubmitModal}
        submitTimesheets={submitTimesheets}
      />
      {response && response.open ? <APIResponseComponent {...response} /> : null}
    </>
  )
}

export default TimesheetUserTable;
