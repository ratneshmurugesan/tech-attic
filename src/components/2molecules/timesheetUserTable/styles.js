import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  timesheetContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    '& th:first-child': {
      minWidth: 240,
    }
  },
  timesheetTable: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxHeight: 1000,
  },
  timesheetTableHeaderCell: {
    borderColor: theme.palette.primary.grey,
    borderWidth: 1,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.tertiary.tableHeaderTextColor,
    minWidth: 70,
  },
  editableTableRow: {
    height: 220,
  },
  rowContainer: {
    width: 400,
  },
  searchBar: {
    float: 'right',
    marginBottom: theme.spacing(3),
    width: '250px'
  },
  alertSection: {
    display: 'block',
    padding: theme.spacing(2),
  },
  copyButton: {
    float: 'right',
    margin: theme.spacing(2),
  },
  submitButton: {
    float: 'right',
    margin: theme.spacing(2),
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  totalRowCell: {
    minWidth: 65,
  },
}));
