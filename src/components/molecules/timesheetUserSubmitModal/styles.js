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
	submitSection: {
		borderRadius: 10,
		width: 270,
		margin: theme.spacing(2),
		'@media (min-width: 760px)': {
			width: 600,
		},
		padding: theme.spacing(2),
		'&:focus': {
			outline: 0,
			border: 0,
		},
	},
	submitButtonGroup: {
		display: 'flex',
		justifyContent: 'space-evenly',
		marginTop: theme.spacing(3),
		flexDirection: 'row',
		'& button': {
			margin: theme.spacing(1),
		}
	},
}));
