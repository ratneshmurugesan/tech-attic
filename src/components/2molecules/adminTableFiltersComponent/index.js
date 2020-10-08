import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import useStyles from './style';

const AdminTableFilters = ({
	metaData,
	selectedFilters,
	filtersConfig,
	handleSearchChange,
	handleChangeFilters,
	searchFieldPlaceHolder,
}) => {
	const classes = useStyles();

	return (
		<div className={classes.filtersWrapper}>
			{filtersConfig.location && (
				<FormControl className={classes.filter}>
					<InputLabel>Filter by Location</InputLabel>
					<Select
						value={selectedFilters.location}
						onChange={handleChangeFilters}
						name={'location'}
					>
						<MenuItem value={'all'}>All</MenuItem>
						{metaData && metaData.locations ? metaData.locations.map(location => (
							<MenuItem key={location.id} value={location.id}>
								{location.name}
							</MenuItem>
						)): null}
					</Select>
				</FormControl>
			)}
			{filtersConfig.permission && (
				<FormControl className={classes.filter}>
					<InputLabel>Filter by Roletype</InputLabel>
					<Select
						value={selectedFilters.permission_level}
						onChange={handleChangeFilters}
						name={'permission_level'}
					>
						<MenuItem value={'all'}>All</MenuItem>
						{metaData && metaData.permissions_level ? metaData.permissions_level.map(permission => (
							<MenuItem key={permission.id} value={permission.id}>
								{permission.name}
							</MenuItem>
						)): null}
					</Select>
				</FormControl>
			)}
			<FormControl className={classes.searchBar}>
				<InputLabel htmlFor="input-with-icon-adornment">
					{searchFieldPlaceHolder}
				</InputLabel>
				<Input
					onChange={handleSearchChange}
					endAdornment={
						<InputAdornment position="end">
							<SearchIcon />
						</InputAdornment>
					}
				/>
			</FormControl>
		</div>
	);
};

AdminTableFilters.propTypes = {
	metaData: PropTypes.object,
	selectedFilters: PropTypes.object,
	filtersConfig: PropTypes.object,
	handleChangeFilters: PropTypes.func,
	handleSearchChange: PropTypes.func.isRequired,
	searchFieldPlaceHolder: PropTypes.string,
};

export default AdminTableFilters;
