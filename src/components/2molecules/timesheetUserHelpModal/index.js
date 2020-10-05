import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import makeStyles from './styles';


const TimesheetUserHelpModal = ({
  open,
	handleClose,
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
				<Paper className={classes.searchSection}>
							<Typography variant={'h5'} align={'center'}>
									TimesheetUser Help Modal
							</Typography>
				</Paper>
			</Modal>
		</div>
	);
}

TimesheetUserHelpModal.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
};

TimesheetUserHelpModal.defaultProps = {
  open: false,
  handleClose: () => null,
}

export default TimesheetUserHelpModal;
