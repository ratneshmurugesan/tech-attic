import React, {
  useContext
} from 'react';

import Typography from '@material-ui/core/Typography';

import TimesheetUserContext from 'context/timesheetUserContext';

import {
  noteSectionHeaders,
} from 'constants/timesheetUserConstants';

import makeStyles from './styles';

const TimesheetNoteSection = () => {

  const {
    initialNoteSectionList: noteSectionList
  } = useContext(TimesheetUserContext);

  const classes = makeStyles();

    return (
      <div className={classes.noteSection}>
      {noteSectionList && noteSectionList.length ? (
        <>
          <Typography className={classes.noteTitle} variant={'overline'}>Note: </Typography>
          <div className={classes.noteHeader}>
            {noteSectionHeaders.map(header => (
              <span
                className={classes.noteHeaderCell}
                align={'left'}
                key={header.key}
                colSpan={3}
              >
                <Typography className={classes.headerValue} variant={'body1'}>{header.label}</Typography>
              </span>
            ))}
          </div>
          <div>
            {noteSectionList.map((row, index) => (
              <div key={index} className={classes.noteBody}>
                <span
                  align={'left'}
                  className={classes.noteBodyCell}
                  colSpan={3}
                  key={`${row.name}${index}`}
                >
                  <Typography className={classes.noteValue} variant={'body2'}>{row.name}</Typography>
                </span>
                <span
                  align={'left'}
                  className={classes.noteBodyCell}
                  colSpan={3}
                  key={`${row.timesheetApproverName}${index}`}
                >
                  <Typography className={classes.noteValue} variant={'body2'}>{row.timesheetApproverName}</Typography>
                </span>
                <span
                  align={'left'}
                  className={classes.noteBodyCell}
                  colSpan={3}
                  key={`${row.staffingManagerName}${index}`}
                >
                  <Typography className={classes.noteValue} variant={'body2'}>{row.staffingManagerName}</Typography>
                </span>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
    );
};

export default TimesheetNoteSection;
