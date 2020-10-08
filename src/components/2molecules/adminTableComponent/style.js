import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  roleTable: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxHeight: 1000,
  },
  roleTableCell: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: theme.palette.primary.contrastText
  },
  searchBar: {
    float: 'right',
    marginBottom: theme.spacing(3),
    width: '250px'
  },
  editIcon: {
    color: theme.palette.primary.main
  },
  deleteIcon: {
    color: theme.palette.primary.error
  },
  roleTableBodyCell: {
    '&:first-child': {
      minWidth: 100
    }
  },
}));

export default useStyles;
