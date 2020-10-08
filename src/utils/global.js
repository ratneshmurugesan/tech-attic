import React from 'react';
// import moment from 'moment';

export const getTableCellValues = (cellType, metaData, cellData) => {
	switch (cellType) {
		case 'agency_id':
			return metaData && metaData.agencies ? metaData.agencies.find(agency => agency.id === cellData[cellType])[
				'name'
			] : null;

		case 'location':
			if (!cellData[cellType]) return '-';
			return metaData && metaData.locations ? metaData.locations.find(
				location => location.id === cellData[cellType]
			)['name'] : null;

		case 'permission_level':
			return metaData && metaData.permissions_level ? metaData.permissions_level.find(
				permission => permission.id === cellData[cellType]
			)['name'] : null;

		case 'domain_role':
			return cellData[cellType] === true ? 'Yes' : 'No';

		case 'is_active':
			return cellData[cellType] === true ? 'Yes' : 'No';

		case 'roles':
			return cellData[cellType].length > 0
				? cellData[cellType].map((cell, i) => (
						<li style={{ whiteSpace: 'nowrap' }} key={`${cell.name}-${i}`}>
							{cell.name}
						</li>
				  ))
				: '-';

		default:
			return cellData[cellType];
	}
};