import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	headingAction: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		alignItems: 'center',
		[theme.breakpoints.down(426)]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	},
	agencyOptions: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down(426)]: {
			marginTop: theme.spacing(3),
		},
	},
	agencyDropDown: {
		width: 100,
		marginRight: 20,
	},
	mapRoleBtn: {
		padding: 10,
		height: '35px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapRoles: {
		borderRadius: 10,
		width: 320,
		maxHeight: 400,
		overflow: 'auto',
		padding: theme.spacing(5),
		position: 'relative',
		margin: theme.spacing(2),
		'@media (min-width: 760px)': {
			width: 400,
		},
		'&:focus': {
			outline: 0,
			border: 0,
		},
	},
	roleCheckBox: {
		width: '100%',
		marginTop: 5,
	},
	roleDescription: {
		fontSize: 12,
		opacity: 0.8,
		paddingBottom: 5,
		borderBottom: '1px solid #ccc',
		marginBottom: 10,
	},
	modalActions: {
		display: 'flex',
		marginTop: theme.spacing(2),
		justifyContent: 'flex-end',
	},
	cancel: {
		marginRight: theme.spacing(1),
	},
	loaderBox: {
		width: '100%',
		position: 'relative',
		height: '80vh',
	},
	successBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	successIcon: {
		fontSize: 50,
		background: theme.palette.primary.green,
		color: theme.palette.primary.contrastText,
		padding: 30,
		borderRadius: '100%',
		marginBottom: 30,
	},
	errorMsg: {
		color: theme.palette.primary.error,
	},
	searchRoles: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginBottom: '20px',
	},
}));

export default useStyles;
