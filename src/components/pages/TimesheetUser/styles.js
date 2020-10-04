import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      height: '100%',
      width: '90%',
      maxWidth: theme.spacing(180),
    },
    pageTitle: {
      margin: theme.spacing(2),
      textAlign: 'center'
    }
  }
});