import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => {
  return {
    buttonGroup: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      margin: theme.spacing(2),
    },
    help: {
      margin: theme.spacing(1),
    },
    helpButton: {
      margin: theme.spacing(1),
      '& .MuiSvgIcon-root': {
        pointerEvents: 'none',
      }
    }
  }
});