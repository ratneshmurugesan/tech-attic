import React from 'react';

import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';

import {
  Typography,
  Container,
  Grid,
} from '@material-ui/core';

import ButtonComponent from 'components/atoms/buttonComponent';

import makeStyles from './styles';

const TimesheetUserSubmitModal = ({
  open,
  handleClose,
  submitTimesheets
}) => {

  const classes = makeStyles();

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
        <Paper className={classes.submitSection}>
          <Container maxWidth={'xl'}>
            <Grid container spacing={1}>
              <Grid item lg xs>
                <Typography variant={'body1'} align={'center'}>
                  {`Your timesheet(s) are incomplete.
            Are you sure you want to go ahead and submit anyway?`}
                </Typography>

              <FormControl className={classes.submitButtonGroup}>
                  <ButtonComponent
                    type={'primary'}
                    name={'Submit'}
                    onClick={submitTimesheets}
                  />
                  <ButtonComponent
                    type={'primary'}
                    name={'Cancel'}
                    onClick={handleClose}
                  />
                </FormControl>

              </ Grid>
            </ Grid>
          </ Container>
        </Paper>
      </Modal>
    </div>

  );
}

TimesheetUserSubmitModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  submitTimesheets: PropTypes.func
};

TimesheetUserSubmitModal.defaultProps = {
  open: false,
  handleClose: () => null,
  submitTimesheets: () => null,
};

export default TimesheetUserSubmitModal;
