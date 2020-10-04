import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  actionsButtonGroup: {
    '& button': {
      padding: theme.spacing(3),
      '& > .MuiIconButton-label': {
        pointerEvents: 'none',
      },
    },
  },
  actionIcons: {
		color: theme.palette.primary.main,
		padding: theme.spacing(0.5),
	},
}));
