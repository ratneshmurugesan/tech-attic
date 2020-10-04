import React, {
  useContext
} from 'react';

import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {
  Save,
  Close,
  Edit,
  DeleteOutline,
} from '@material-ui/icons';

import TimesheetUserContext from 'context/timesheetUserContext';

import { timesheetTableKeys } from 'constants/timesheetUserConstants';

import makeStyles from './styles';

const TimesheetActionButtons = ({
  projObj,
  buttons,
  validRows,
  handleSaveClick,
  handleCloseClick,
  handleEditClick,
  handleDeleteClick,
}) => {

  const { initialReadOnlyList: readOnlyList } = useContext(TimesheetUserContext);

  const classes = makeStyles();

  const { save_button, edit_button, close_button, delete_button } = timesheetTableKeys;

  if (buttons &&
    buttons.hiddenButtons &&
    buttons.activeButtons &&
    buttons.hiddenButtons[projObj.id] &&
    buttons.activeButtons[projObj.id]) {

    const { isSaveHidden, isEditHidden, isCloseHidden, isDeleteHidden } = buttons.hiddenButtons[projObj.id];

    const { isSaveActive, isCloseActive, isEditActive, isDeleteActive } = buttons.activeButtons[projObj.id];

    const isReadOnly = readOnlyList[projObj.id];

    const validRowsKeys = Object.keys(validRows);
    const validRowsLength = validRowsKeys.length;
    const areAllRowsSaved = validRowsLength ? validRowsKeys.every(obj => validRows[obj]) : true;

    return (
      <TableCell
        className={classes.actionsButtonGroup}
        align={'center'}
        key={`actionsButtonGroup${projObj.id}`}
        id={`actionsButtonGroup${projObj.id}`}
      >
        {
          !isSaveHidden &&
          <IconButton
            ele-id={projObj.id}
            id={`${save_button.key}-${projObj.id}`}
            key={`${save_button.key}-${projObj.id}`}
            className={classes.actionIcons}
            onClick={handleSaveClick}
            disabled={!isSaveActive}
          >
            <Tooltip title={'Save'}>
              <Save />
            </Tooltip>
          </IconButton>
        }
        {
          !isCloseHidden &&
          <IconButton
            ele-id={projObj.id}
            id={`${close_button.key}-${projObj.id}`}
            key={`${close_button.key}-${projObj.id}`}
            className={classes.actionIcons}
            onClick={handleCloseClick}
            disabled={!isCloseActive}
          >
            <Tooltip title={'Close'}>
              <Close />
            </Tooltip>
          </IconButton>
        }
        {
          !isEditHidden &&
          <IconButton
            ele-id={projObj.id}
            id={`${edit_button.key}-${projObj.id}`}
            key={`${edit_button.key}-${projObj.id}`}
            className={classes.actionIcons}
            onClick={handleEditClick}
            disabled={!isEditActive || !areAllRowsSaved || !isReadOnly}
          >
            <Tooltip title={'Edit'}>
              <Edit />
            </Tooltip>
          </IconButton>
        }
        {
          !isDeleteHidden &&
          <IconButton
            ele-id={projObj.id}
            id={`${delete_button.key}-${projObj.id}`}
            key={`${delete_button.key}-${projObj.id}`}
            className={classes.actionIcons}
            onClick={handleDeleteClick}
            disabled={!isDeleteActive || !areAllRowsSaved || !isReadOnly}
          >
            <Tooltip title={'Delete'}>
              <DeleteOutline />
            </Tooltip>
          </IconButton>
        }
      </TableCell>
    );
  }
};

TimesheetActionButtons.propTypes = {
  projObj: PropTypes.object,
  buttons: PropTypes.object,
  validRows: PropTypes.object,
  handleSaveClick: PropTypes.func,
  handleCloseClick: PropTypes.func,
  handleEditClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
}

TimesheetActionButtons.defaultProps = {
  projObj: {},
  buttons: {},
  validRows: {},
  handleSaveClick: () => null,
  handleCloseClick: () => null,
  handleEditClick: () => null,
  handleDeleteClick: () => null,
}

export default TimesheetActionButtons;
