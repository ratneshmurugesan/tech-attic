import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  dropDownWrap: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      margin: theme.spacing(1),
    },
  },
  dropDownContainer: {
    minWidth: 220,
    '& p': {
      padding: theme.spacing(2),
    },
  },
}));
