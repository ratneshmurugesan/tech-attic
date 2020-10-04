import React, { useContext, useEffect, useState } from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import {
  getTimesheetUserReqAllocationData,
} from 'services/timesheetUserService';

import {
  Typography,
  Container,
  Grid,
} from '@material-ui/core';

import AutoCompleteSearchComponent from 'components/atoms/autoCompleteSearchComponent';
import ButtonComponent from 'components/atoms/buttonComponent';


import TimesheetUserContext from 'context/timesheetUserContext';

import makeStyles from './styles';

const TimesheetUserReqAllocationModal = ({
  open,
  handleClose,
}) => {

  const {
    timesheetMetaData,
    timesheetWeekData,
  } = useContext(TimesheetUserContext);

  const classes = makeStyles();

  const weekString = (timesheetWeekData &&
    timesheetWeekData.data &&
    timesheetWeekData.data.weekString) ?
    timesheetWeekData.data.weekString : null;

  const [selectedOption, setSelectedOption] = useState(null);
  const [projectsList, setProjectsList] = useState([]);
  const comment = `Hi, I need to request for allocation on this project from ${weekString}. Allocation % = `;
  const [editedComment, setEditedComment] = useState(comment);
  const [response, setResponse] = useState('');

  useEffect(
    _ => {
      if (timesheetMetaData &&
        timesheetMetaData.projectsForSearchBar &&
        Object.keys(timesheetMetaData.projectsForSearchBar).length) {

        const formattedList = timesheetMetaData.projectsForSearchBar.map(listObj => {
          return {
            project_id: listObj.project_id,
            staff_manager_name: `${listObj.staff_manager.first_name} ${listObj.staff_manager.last_name}`,
            name: `${listObj.project_id} | ${listObj.client} | ${listObj.name}`,
          }
        });

        setProjectsList(formattedList);
      }
    }, [setProjectsList, timesheetMetaData]
  );

  const handleOptionsChange = (_, value) => {
    setSelectedOption(value);
  }

  const handleReqAllocationClick = async () => {
    try {
      if (selectedOption && selectedOption.project_id && editedComment) {
        const body = {
          track_id: selectedOption.project_id,
          comments: editedComment,
        };
        const reqAllocationAPIResponse = await getTimesheetUserReqAllocationData(body, selectedOption.project_id);
        if (reqAllocationAPIResponse && reqAllocationAPIResponse.failure) {
          setResponse('Request failed');
        } else {
          setResponse('Request raised successfully');
        }
      }
    } catch (err) {
      throw err;
    }
  }

  const handleMultilineChange = event => {
    const editedComment = event.target.value;
    setEditedComment(editedComment);
    console.log('handleMultilineChange', editedComment);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Paper className={classes.reqAllocationSection}>
          <Container maxWidth={'xl'}>
            <Grid container spacing={1}>
              <Grid item lg xs className={classes.reqAllocationGrid}>
                <Typography variant={'h5'} align={'center'}>
                  Find Staffing Manager and Timesheet Approvers
					      </Typography>

                <FormControl className={classes.reqAllocationSearch}>
                <AutoCompleteSearchComponent
                  onChange={handleOptionsChange}
                  visibleName={'name'}
                  id={'reqAllocationSearchField'}
                  options={projectsList}
                  multiple={false}
                  fullWidth
                  disableClearable={true}
                />
                </FormControl>

                {
                <TableContainer className={classes.reqAllocationTable}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Comments</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="left">{(selectedOption && selectedOption.staff_manager_name)}</TableCell>
                        <TableCell align="left">{(selectedOption && selectedOption.staff_manager_name) ? 'Staffing Manager' : ''}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                }

                <FormControl className={classes.reqAllocationLabel}>
                <Typography variant={'body1'} align={'left'}>
                  {`Request for allocation on this project. Enter details below:`}
                </Typography>
                </FormControl>

                <FormControl className={classes.reqAllocationMultiline}>
                <TextField
                  id="outlined-multiline-static"
                  key="outlined-multiline-static"
                  fullWidth
                  multiline
                  rows={4}
                  value={editedComment}
                  variant="outlined"
                  onChange={handleMultilineChange}
                />
                </FormControl>

                <FormControl className={classes.reqAllocationButton}>
                <ButtonComponent
                  type={'ternary'}
                  name={'Request Allocation'}
                  onClick={handleReqAllocationClick}
                />
                </FormControl>
                <Typography variant={'body1'} align={'left'}>
                    { response }
                </Typography>
              </ Grid>
            </ Grid>
          </ Container>
        </Paper>
      </Modal>
    </div>

  );
}

export default TimesheetUserReqAllocationModal;
