import React, {
  // useState,
  // useEffect,
  useContext
} from 'react';

import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

import TimesheetUserContext from 'context/timesheetUserContext';

import AutoCompleteSearchComponent from 'components/1atoms/autoCompleteSearchComponent';

import { timesheetTableKeys } from 'constants/timesheetUserConstants';
import PropTypes from 'prop-types';

import makeStyles from './styles';

const TimesheetDropdowns = ({  
  projObj,
  inputs,
  buttons,
  handleDropDownChange
}) => {

  const {
    initialDropDownProjects: dropDownProjects,
    initialDropDownClients: dropDownClients,
    initialDropDownTracks: dropDownTracks,
  } = useContext(TimesheetUserContext);

  const classes = makeStyles();
  
  const {
    autocomplete_client,
    autocomplete_project,
    autocomplete_track
  } = timesheetTableKeys;

  if (buttons &&
    buttons.hiddenButtons &&
    buttons.hiddenButtons[projObj.id] &&
    inputs &&
    inputs.projectDropdownValues &&
    inputs.projectDropdownValues[projObj.id]) {

    const projClientObj = inputs && inputs.projectDropdownValues && 
    inputs.projectDropdownValues[projObj.id] &&
      inputs.projectDropdownValues[projObj.id].clientObj ? 
      inputs.projectDropdownValues[projObj.id].clientObj : null;

    const projDropdownObj = inputs && inputs.projectDropdownValues && 
    inputs.projectDropdownValues[projObj.id] &&
      inputs.projectDropdownValues[projObj.id].projectObj ? 
      inputs.projectDropdownValues[projObj.id].projectObj : null;

    const projTrackObj = inputs && inputs.projectDropdownValues && 
    inputs.projectDropdownValues[projObj.id] &&
      inputs.projectDropdownValues[projObj.id].trackObj ? 
      inputs.projectDropdownValues[projObj.id].trackObj : null;

    const currentActions = buttons.hiddenButtons[projObj.id];

    const {
      isSaveHidden,
      isEditHidden,
    } = currentActions;

    return (
      <TableCell
        id={`dropDownContainer${projObj.id}`}
        key={`dropDownContainer${projObj.id}`}
        className={classes.dropDownContainer}>
        {isSaveHidden && (
          <>
            {projClientObj && <Typography
              variant='body2'
              display='block'
              id={`${autocomplete_client.key}-${projObj.id}`}
              key={`${autocomplete_client.key}-${projObj.id}`}>
              {projClientObj.clientName}
            </Typography>}
            {projDropdownObj && <Typography
              variant='body2'
              display='block'
              id={`${autocomplete_project.key}-${projObj.id}`}
              key={`${autocomplete_project.key}-${projObj.id}`}>
              {projDropdownObj.projectName}
            </Typography>}
            {projTrackObj && <Typography
              variant='body2'
              display='block'
              id={`${autocomplete_track.key}-${projObj.id}`}
              key={`${autocomplete_track.key}-${projObj.id}`}>
              {projTrackObj.trackName}
            </Typography>}
          </>
        )}
        {isEditHidden && (
          <>
            {projClientObj ?
              <FormControl className={classes.dropDownWrap}>
                <AutoCompleteSearchComponent
                  visibleName={'name'}
                  defaultValue={{ name: projClientObj.clientName }}
                  id={`${autocomplete_client.key}-${projObj.id}`}
                  key={`${autocomplete_client.key}-${projObj.id}`}
                  options={dropDownClients}
                  onChange={(event, value) => {
                    handleDropDownChange({ event, type: 'client', value })
                  }}
                  multiple={false}
                  fullWidth
                  disableClearable={true}
                />
              </FormControl>
              : null
            }
            {projDropdownObj ?
              <FormControl className={classes.dropDownWrap}>
                <AutoCompleteSearchComponent
                  visibleName={'name'}
                  defaultValue={{ name: projDropdownObj.projectName }}
                  id={`${autocomplete_project.key}-${projObj.id}`}
                  key={`${autocomplete_project.key}-${projObj.id}`}
                  options={projClientObj.clientName !== '' ? dropDownProjects : []}
                  onChange={(event, value) => {
                    handleDropDownChange({ event, type: 'project', value })
                  }}
                  multiple={false}
                  fullWidth
                  disableClearable={true}
                />
              </FormControl>
              : null
            }
            {
              projDropdownObj &&
                projDropdownObj.projectName !== '' &&
                projTrackObj &&
                projTrackObj.trackName ?
                <FormControl className={classes.dropDownWrap}>
                  <AutoCompleteSearchComponent
                    visibleName={'name'}
                    defaultValue={{ name: projTrackObj.trackName }}
                    id={`${autocomplete_track.key}-${projObj.id}`}
                    key={`${autocomplete_track.key}-${projObj.id}`}
                    options={dropDownTracks}
                    onChange={(event, value) => {
                      handleDropDownChange({ event, type: 'track', value })
                    }}
                    multiple={false}
                    fullWidth
                    disableClearable={true}
                  />
                </FormControl>
                : null
            }
          </>
        )}
      </TableCell>
    )
  }
};

TimesheetDropdowns.propTypes = {
  projObj: PropTypes.object,
  inputs: PropTypes.object,
  buttons: PropTypes.object,
  handleDropDownChange: PropTypes.func,
}

TimesheetDropdowns.defaultProps = {
  projObj: {},
  inputs: {},
  buttons: {},
  handleDropDownChange: () => null,
}

export default TimesheetDropdowns;
