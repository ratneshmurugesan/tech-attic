import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	searchSection: {
		borderRadius: 10,
		width: 420,
		margin: theme.spacing(2),
		'@media (min-width: 760px)': {
			width: 600,
		},
		padding: theme.spacing(3, 5),
		'&:focus': {
			outline: 0,
			border: 0,
		},
	},
}));
