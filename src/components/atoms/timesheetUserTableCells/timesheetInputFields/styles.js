import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  timesheetTableBodyCell: {
    borderColor: theme.palette.primary.grey,
    borderWidth: 1,
    minWidth: 65,
    padding: 0,
    '& p': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  hours: {
    margin: theme.spacing(1),
  },
  hourInput:{
    minWidth: 100,
  },
  memoInput:{
    minWidth: 100,
  },
  memo: {
    margin: theme.spacing(1),
  }
}));
