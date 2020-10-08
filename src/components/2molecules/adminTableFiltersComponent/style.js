import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	searchBar: {
		float: 'right',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		width: '250px',
		[theme.breakpoints.up(769)]: {
			marginBottom: theme.spacing(3),
		},
	},
	filter: {
		width: 200,
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		marginRight: theme.spacing(2),
		[theme.breakpoints.down(426)]: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
	},
	filtersWrapper: {
		[theme.breakpoints.down(426)]: {
			display: 'flex',
			alignItems: 'flex-start',
			flexDirection: 'column',
		},
		[theme.breakpoints.down(769)]: {
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'flex-end',
		},
	},
}));

export default useStyles;
