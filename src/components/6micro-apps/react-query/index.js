import React, { 
	useState, 
	useEffect,
	// useContext 
} from 'react';
// import PubSub from 'pubsub-js';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import ButtonComponent from 'components/1atoms/buttonComponent';
// import BreadCrumbs from 'components/1atoms/breadCrumbs';
import AdminTableComponent from 'components/2molecules/adminTableComponent';
import LoaderComponent from 'components/1atoms/LoaderComponent';
// import ErrorComponent from 'components/1atoms/ErrorComponent';

// import AdminContext from 'context/adminContext';
import meta_data from 'mock/data/roles-meta-data';

import { dataCall } from 'utils/api';
import { tableHeaders } from 'config/mapRoleToAgencyPageConfig';
// import { routeEnums } from 'constants/routeConstants';
// import { ADMIN_PERMISSIONS } from 'constants/adminPermissions';
// import { GET_MAPPED_ROLES, ROLES } from 'constants/urlConstants';

import connection from './Connection';
import { ApolloProvider, useSubscription } from '@apollo/react-hooks';
import { GET_MAPPED_ROLES, ROLES } from './gqlqueries';

import useStyles from './style';

// const BREAD_CRUMB_LINKS = [
// 	{
// 		name: 'Admin',
// 		link: routeEnums.admin,
// 	},
// 	{
// 		name: 'Map Role',
// 		link: routeEnums.mapRole,
// 	},
// ];

const FILTERS_CONFIG = {
	location: true,
	permission: true,
};

const MapRoleComponent = ({ history }) => {
	const {loading: mapLoading, error: mapError, data: getMappedRoles} = useSubscription(GET_MAPPED_ROLES);
	const {loading, error, data: getRoles} = useSubscription(ROLES);
	const classes = useStyles();
	// context state variable
	// const { metaData } = useContext(AdminContext);
	// const [metaData] = useState(meta_data);
	// State to handle loading
	const [isLoading, setLoading] = useState(true);
	// State to handle errors
	const [errObj, setErr] = useState({ err: false, errMsg: '' });
	// State to store agency
	const [agency, setAgency] = useState(1);
	// State to store filtered roles based on agency
	const [mapRolesObject, setMapRoleObj] = useState({
		filteredRoles: [],
		roles: [],
		mappedRoles: [],
	});
	// State to handle modal
	const [roleModal, setRoleModal] = useState(false);
	// State to handle to selected roles
	const [selectedRoles, setRoles] = useState([]);
	// State to handle API status
	const [apiStatus, setApiStatus] = useState({
		error: false,
		success: false,
		errorMsg: '',
	});
	// State for Search Roels
	const [rolesSearchString, setRoleSearchString] = useState('');
	console.log({mapError, error, rolesSearchString, errObj});


	useEffect(_ => {
		// PubSub.subscribe('API_ERROR_RESULT', errorSubscriber);
		(async _ => {
			if(mapLoading  === true && loading === true) setLoading(true);
			try {
				const {
					roletable,
				} = getMappedRoles;
				// } = await dataCall(GET_MAPPED_ROLES, 'GET');
				const {
					roles,
				} = getRoles;
				// } = await dataCall(ROLES, 'GET');
				const filterRoles = roletable.filter(
					role => role.agency_id === agency
				);
				setMapRoleObj({
					mappedRoles: roletable,
					roles,
					filteredRoles: filterRoles,
				});
				console.log('useEffect', {roles,roletable});
				setErr({ err: false, errMsg: '' });
			} catch (err) {
				setErr({ err: true, errMsg: 'Error Occurred while loading...' });
			}
			if(mapLoading  === false && loading === false) setLoading(false);
		})();
		return function cleanup() {
			// PubSub.unsubscribe('API_ERROR_RESULT', errorSubscriber);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getMappedRoles, getRoles]);

	console.log('meta', meta_data);

	// Function to change the agency from dropdown
	const handleAgencyChange = event => {
		setAgency(event.target.value);
		const {
		 roletable,
		} = getMappedRoles;
		// } = await dataCall(GET_MAPPED_ROLES, 'GET');
		const filterRoles = roletable.filter(
			role => role.agency_id === event.target.value
		);
		setMapRoleObj({ ...mapRolesObject, ...{ filteredRoles: filterRoles } });
	};

	// function to open the Map to role Modal
	const handleRoleModalOpen = _ => {
		setRoleSearchString('');
		setApiStatus({ error: false, success: false, errorMsg: '' });
		setRoles(mapRolesObject.filteredRoles.map(fr => fr.id));
		setRoleModal(true);
	};

	// function to close the Map to role Modal
	const handleRoleModalClose = _ => {
		setRoleModal(false);
		setTimeout(
			() => setApiStatus({ error: false, success: false, errorMsg: '' }),
			1000
		);
		setRoles([]);
	};

	// function to select the roles from the list using checkbox
	const handleRoleToMap = event => {
		console.log('handleRoleToMap', {n:event.target.name, v: event.target.value,checked:event.target.checked});
		event.target.checked
			? setRoles([...selectedRoles, parseInt(event.target.value)])
			: setRoles(selectedRoles.filter(f => (event.target.value && f !== parseInt(event.target.value))));
	};

	// const errorSubscriber = (_, data) => {
	// 	if (data.status === 'Failed')
	// 		setApiStatus({ error: true, success: false, errorMsg: data.result });
	// };

	// function to handle save map roles
	const handleSave = async _ => {
		try {
			const {
				result: { role_to_agency },
				status,
			} = await dataCall(GET_MAPPED_ROLES, 'POST', {
				agency_id: agency,
				role_id_list: selectedRoles,
			});
			if (status === 'Success') {
				setMapRoleObj({
					...mapRolesObject,
					...{ filteredRoles: role_to_agency },
				});
				setApiStatus({ error: false, success: true, errorMsg: '' });
				setTimeout(_ => {
					handleRoleModalClose();
				}, 3000);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleRolesSearchChange = event => {
		setRoleSearchString(event.target.value.trim().toLowerCase());
	};

	// if (!metaData.permissions.includes(ADMIN_PERMISSIONS.mapRole))
	// 	history.push('/permission-admin/403');

	// if (errObj.err) return <ErrorComponent message={errObj.errMsg} />;
	
	let { filteredRoles, roles } = mapRolesObject;
	
	const excludeGlobalRoles = roles
	.filter(r => r.permission_level !== 1)
	// .filter(rf => rf.is_active);
	
	let searchRoles = excludeGlobalRoles;
	
	console.log('@', {searchRoles,selectedRoles,filteredRoles});
	// Filtering the table body data using search keyword
	// searchRoles = searchRoles.filter(list =>
	// 	list.role_name
	// 		? list.role_name
	// 				.toLowerCase()
	// 				.match(rolesSearchString.replace(/([()[{*+.$^\\|?])/g, '\\$1'))
	// 		: list.name
	// 				.toLowerCase()
	// 				.match(rolesSearchString.replace(/([()[{*+.$^\\|?])/g, '\\$1'))
	// );

	return (
		<Container fixed>
			{/* <BreadCrumbs links={BREAD_CRUMB_LINKS} /> */}
			<Typography variant="h5" gutterBottom className={classes.headingAction}>
				<span>Map Roles to Agency</span>
				<div className={classes.agencyOptions}>
					<FormControl className={classes.agencyDropDown}>
						<InputLabel>Agency</InputLabel>
						<Select value={agency} onChange={handleAgencyChange}>
							{meta_data && meta_data.agencies ? meta_data.agencies.map(agency => (
								<MenuItem key={agency.id} value={agency.id}>
									{agency.name}
								</MenuItem>
							)) : null}
						</Select>
					</FormControl>
					<ButtonComponent
						name={'Map Role'}
						type={'primary'}
						classObject={{ primary: classes.mapRoleBtn }}
						onClick={handleRoleModalOpen}
						disabled={isLoading}
					/>
				</div>
			</Typography>
			{isLoading ? (
				<div className={classes.loaderBox}>
					<LoaderComponent />
				</div>
			) : (
				<>
					<AdminTableComponent
						tableHeaders={tableHeaders}
						tableBody={filteredRoles}
						metaData={meta_data}
						// metaData={[]}
						filtersConfig={FILTERS_CONFIG}
						searchFieldPlaceHolder={'Search Role'}
					/>
					<Modal
						className={classes.modal}
						open={roleModal}
						onClose={handleRoleModalClose}
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={roleModal}>
							<Paper className={classes.mapRoles}>
								{!apiStatus.success ? (
									<>
										<div className={classes.searchRoles}>
											<FormControl className={classes.searchBar}>
												<InputLabel htmlFor="input-with-icon-adornment">
													{'Search Roles'}
												</InputLabel>
												<Input
													onChange={handleRolesSearchChange}
													endAdornment={
														<InputAdornment position="end">
															<SearchIcon />
														</InputAdornment>
													}
												/>
											</FormControl>
										</div>
										<Typography
											component={'h5'}
											variant={'h6'}
											style={{ borderBottom: '1px solid #ccc' }}
										>
											{'List of Roles'}
										</Typography>
										{searchRoles.length > 0 ? (
											searchRoles
												.filter(rf => !rf.is_derived_role)
												.map(role => (
													<div key={role.id}>
														<FormControlLabel
															control={
																<Checkbox
																	defaultChecked={filteredRoles
																		.map(fr => fr.role_id)
																		.includes(role.id)}
																	onChange={handleRoleToMap}
																	name={role.role_name}
																	color="primary"
																	value={role.id}
																/>
															}
															label={role.role_name}
															className={classes.roleCheckBox}
														/>
														<Typography
															component={'p'}
															className={classes.roleDescription}
														>
															{role.role_description}
														</Typography>
													</div>
												))
										) : (
											<Typography
												component={'h5'}
												variant={'h6'}
												align={'center'}
												style={{ padding: 15 }}
											>
												{'No role found'}
											</Typography>
										)}
										{apiStatus.error && (
											<Typography className={classes.errorMsg}>
												{apiStatus.errorMsg}
											</Typography>
										)}
										<div className={classes.modalActions}>
											<ButtonComponent
												name={'Cancel'}
												type={'secondary'}
												classObject={{
													secondary: classes.cancel,
												}}
												onClick={handleRoleModalClose}
											/>
											<ButtonComponent
												name={'Save'}
												type={'primary'}
												onClick={handleSave}
												disabled={excludeGlobalRoles.length > 0 ? false : true}
											/>
										</div>
									</>
								) : (
									<div className={classes.successBox}>
										<PersonAddIcon className={classes.successIcon} />
										<Typography variant={'h5'} align={'center'}>
											{'Role is mapped to the selected agency successfully'}
										</Typography>
									</div>
								)}
							</Paper>
						</Fade>
					</Modal>
				</>
			)}
		</Container>
	);
	// return null
};

const App = () => {
	return (
		<ApolloProvider client={connection}>
			<MapRoleComponent />
		</ApolloProvider>
	)
}

export default App;
