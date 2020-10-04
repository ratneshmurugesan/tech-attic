import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(_ => ({
	input: {
		padding: '0 !important',
	},
	inputRoot: {
		minHeight: '35px !important',
	},
}));

const AutoCompleteSearchComponent = ({
	options,
	onChange,
	className,
	visibleName,
	value,
	multiple,
	defaultValue,
	groupBy,
	disabled,
	id,
	fullWidth,
	disableClearable,
	error,
	renderOption,
}) => {
	const classes = useStyles();
	const optionLabel = option => option[visibleName];
	return (
		<Autocomplete
			id={id}
			key={id}
			multiple={multiple}
			classes={{
				root: className.root,
				input: classes.input,
				inputRoot: classes.inputRoot,
			}}
			disabled={disabled}
			autoHighlight
			size={'small'}
			disableClearable={disableClearable}
			options={options}
			value={value}
			groupBy={groupBy}
			getOptionLabel={optionLabel}
			filterSelectedOptions
			defaultValue={defaultValue}
			onChange={onChange}
			fullWidth={fullWidth}
			renderInput={params => (
				<TextField
					{...params}
					variant={'outlined'}
					placeholder={'Search...'}
					fullWidth
					error={error}
				/>
			)}
			renderOption={renderOption || optionLabel}
		/>
	);
};

AutoCompleteSearchComponent.propTypes = {
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	className: PropTypes.object,
	visibleName: PropTypes.string,
	multiple: PropTypes.bool,
	defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	groupBy: PropTypes.func,
	disabled: PropTypes.bool,
	id: PropTypes.string,
	fullWidth: PropTypes.bool,
	disableClearable: PropTypes.bool,
	error: PropTypes.bool,
	renderOption: PropTypes.func,
};

AutoCompleteSearchComponent.defaultProps = {
	className: {},
	visibleName: 'name',
	multiple: true,
	defaultValue: [],
	groupBy: _ => {},
	disabled: false,
	id: 'auto-complete',
	fullWidth: false,
	disableClearable: false,
	error: false,
	renderOption: undefined,
};

export default AutoCompleteSearchComponent;
