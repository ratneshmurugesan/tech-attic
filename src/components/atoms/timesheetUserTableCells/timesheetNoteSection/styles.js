import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  noteSection: {
    margin: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
  noteHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    '& span:first-child':{
      minWidth: 300,
    },
    '& span': {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      minWidth: 200,
    }
  },
  noteBody: {
    display: 'flex',
    justifyContent: 'flex-start',
    '& span:first-child': {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      minWidth: 300,
    },
    '& span': {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      minWidth: 200,
    }
  },
}));
