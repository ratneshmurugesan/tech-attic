import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import AdminTableFilters from 'components/2molecules/adminTableFiltersComponent';

import { getTableCellValues } from 'utils/global';

import useStyles from './style';

const AdminTableComponent = ({
	tableHeaders,
	tableBody,
	handleEditRole,
	// handleDeleteRoleDialog,
	metaData,
	filtersConfig,
	handleAssignRoleModal,
	searchFieldPlaceHolder,
}) => {
	const classes = useStyles();

	// States to handle Table pagination and row count
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(25);
	// State to store search string
	const [searchString, setSearchString] = useState('');
	// state to store the filters
	const [selectedFilters, setFilters] = useState({
		location: 'all',
		permission_level: 'all',
	});

	const [searchTable, setSearchTable] = useState(false);
	// function to handle page change for pagination
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	// function to handle rows per page
	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	// function to handle search string
	const handleSearchChange = event => {
		if (event.target.value === '') {
			setSearchTable(false);
		} else {
			setSearchTable(true);
		}
		setSearchString(event.target.value.trim().toLowerCase());
	};

	// function to handle filters
	const handleChangeFilters = event => {
		setFilters({
			...selectedFilters,
			...{ [event.target.name]: event.target.value },
		});
	};

	// Copying the tableBody to local variable
	let tableBodyFiltered = tableBody;

	// Filtering the table body data using search keyword
	tableBodyFiltered = tableBodyFiltered
		.filter(list =>
			list.role_name
				? list.role_name
						.toLowerCase()
						.match(searchString.replace(/([()[{*+.$^\\|?])/g, '\\$1'))
				: list.name
						.toLowerCase()
						.match(searchString.replace(/([()[{*+.$^\\|?])/g, '\\$1'))
		)
		.filter(
			list =>
				(list.location &&
					selectedFilters.location &&
					list.location === selectedFilters.location) ||
				selectedFilters.location === 'all'
		)
		.filter(
			list =>
				(list.permission_level &&
					selectedFilters.permission_level &&
					list.permission_level === selectedFilters.permission_level) ||
				selectedFilters.permission_level === 'all'
		);

	return (
		<>
			<div className={classes.tableFilters}>
				<AdminTableFilters
					selectedFilters={selectedFilters}
					metaData={metaData}
					handleSearchChange={handleSearchChange}
					handleChangeFilters={handleChangeFilters}
					filtersConfig={filtersConfig}
					searchFieldPlaceHolder={searchFieldPlaceHolder}
				/>
			</div>
			<TableContainer component={Paper} className={classes.roleTable}>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							{tableHeaders.map(header => (
								<TableCell
									className={classes.roleTableCell}
									align={header.align}
									style={{ width: header.minWidth }}
									key={header.key}
								>
									{header.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					{searchTable ? (
						<TableBody>
							{tableBodyFiltered.length > 0 ? (
								tableBodyFiltered.map((role, i) => (
									<TableRow key={`row-${i}`}>
										{tableHeaders.map((cell, i) => (
											<TableCell
												className={classes.roleTableBodyCell}
												key={`${role[cell.key]}-${i}`}
												align={cell.align}
											>
												{cell.key !== 'actions' ? (
													getTableCellValues(cell.key, metaData, role) || '-'
												) : cell.label === 'Actions' ? (
													<span>
														<Button onClick={_ => handleEditRole(role.id)}>
															<EditIcon className={classes.editIcon} />
														</Button>
														{/* <Button onClick={_ => handleDeleteRoleDialog(role.id)}>
                              <DeleteForeverIcon className={classes.deleteIcon} />
                            </Button> */}
													</span>
												) : (
													<span>
														<Button>
															<EditIcon
																className={classes.editIcon}
																onClick={_ => handleAssignRoleModal(role.id)}
															/>
														</Button>
													</span>
												)}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell colSpan={tableHeaders.length} align="center">
										<Typography variant="h6" gutterBottom>
											No Roles Found
										</Typography>
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					) : (
						<TableBody>
							{tableBodyFiltered.length > 0 ? (
								tableBodyFiltered
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((role, i) => (
										<TableRow key={`row-${i}`}>
											{tableHeaders.map((cell, i) => (
												<TableCell
													className={classes.roleTableBodyCell}
													key={`${role[cell.key]}-${i}`}
													align={cell.align}
												>
													{cell.key !== 'actions' ? (
														getTableCellValues(cell.key, metaData, role) || '-'
													) : cell.label === 'Actions' ? (
														<span>
															<Button onClick={_ => handleEditRole(role.id)}>
																<EditIcon className={classes.editIcon} />
															</Button>
															{/* <Button onClick={_ => handleDeleteRoleDialog(role.id)}>
														<DeleteForeverIcon className={classes.deleteIcon} />
													</Button> */}
														</span>
													) : (
														<span>
															<Button>
																<EditIcon
																	className={classes.editIcon}
																	onClick={_ => handleAssignRoleModal(role.id)}
																/>
															</Button>
														</span>
													)}
												</TableCell>
											))}
										</TableRow>
									))
							) : (
								<TableRow>
									<TableCell colSpan={tableHeaders.length} align="center">
										<Typography variant="h6" gutterBottom>
											No Roles Found
										</Typography>
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					)}
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[25, 50, 75, 100]}
				component="div"
				count={tableBodyFiltered.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</>
	);
};

AdminTableComponent.propTypes = {
	tableHeaders: PropTypes.array,
	tableBody: PropTypes.array,
	handleEditRole: PropTypes.func,
	handleDeleteRoleDialog: PropTypes.func,
	handleAssignRoleModal: PropTypes.func,
	metaData: PropTypes.object,
	filtersConfig: PropTypes.object,
	searchFieldPlaceHolder: PropTypes.string,
};

export default AdminTableComponent;
