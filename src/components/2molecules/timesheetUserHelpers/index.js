import React, { useState } from 'react';

import {
  HelpOutline,
} from '@material-ui/icons';

import ButtonComponent from 'components/1atoms/buttonComponent';
import TimesheetUserHelpModal from 'components/2molecules/timesheetUserHelpModal';
import TimesheetUserReqAllocationModal from 'components/2molecules/timesheetUserReqAllocationModal';

import makeStyles from './styles';

const TimesheetUserHelpers = _ => {
  const classes = makeStyles();
  const [isHelpModalOpen, setHelpModal] = useState(false);
  const [isReqAllocationModalOpen, setReqAllocationModal] = useState(false);

  const handleHelpModal = _ => setHelpModal(!isHelpModalOpen);
  const handleReqAllocationModal = _ => setReqAllocationModal(!isReqAllocationModalOpen);

  return (
    <div className={classes.buttonGroup}>
      <ButtonComponent
        classObject={{ default: classes.helpButton }}
        name={<><HelpOutline /> Help</>}
        onClick={handleHelpModal} />
      <ButtonComponent
        type={'secondary'}
        name={'Request Allocation'}
        onClick={handleReqAllocationModal}
      />
      <TimesheetUserHelpModal
        open={isHelpModalOpen}
        handleClose={handleHelpModal}
      />
      <TimesheetUserReqAllocationModal 
        open={isReqAllocationModalOpen}
        handleClose={handleReqAllocationModal}
      />
    </div>
  );
}

export default TimesheetUserHelpers;
