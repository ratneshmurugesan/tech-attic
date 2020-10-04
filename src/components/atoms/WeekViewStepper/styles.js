import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      // padding: theme.spacing(2),
      margin: theme.spacing(2),
    },
    date: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    monthYear: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
    weekType: {
      display: 'grid',
      placeItems: 'center',
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    },
    weekViewStatus: {
      display: 'grid',
      placeItems: 'center',
      marginBottom: theme.spacing(4),
    }
  }
});

export default useStyles;