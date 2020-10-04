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
	reqAllocationSection: {
		borderRadius: 10,
		width: 330,
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
	reqAllocationGrid:{
		display: 'flex',
		flexDirection: 'column',
		margin: theme.spacing(1),
		marginTop: theme.spacing(3)
	},
	reqAllocationSearch :{
		marginTop: theme.spacing(4),
	},
	reqAllocationTable :{
		marginTop: theme.spacing(4),
	},
	reqAllocationLabel: {
	margin: theme.spacing(1),
	},
	reqAllocationMultiline: {
	margin: theme.spacing(1),
	},
	reqAllocationButton: {
	margin: theme.spacing(1),
	maxWidth: 230,
    alignSelf: 'center',
	},
}));
