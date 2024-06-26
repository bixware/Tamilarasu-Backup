import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Input, MenuItem} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';

import Chip from '@material-ui/core/Chip';
import Select from 'react-select';

const suggestions = [
	{ label: 'Afghanistan' },
	{ label: 'Aland Islands' },
	{ label: 'Albania' },
	{ label: 'Algeria' },
	{ label: 'American Samoa' },
	{ label: 'Andorra' },
	{ label: 'Angola' },
	{ label: 'Anguilla' },
	{ label: 'Antarctica' },
	{ label: 'Antigua and Barbuda' },
	{ label: 'Argentina' },
	{ label: 'Armenia' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
	{ label: 'Bangladesh' },
	{ label: 'Barbados' },
	{ label: 'Belarus' },
	{ label: 'Belgium' },
	{ label: 'Belize' },
	{ label: 'Benin' },
	{ label: 'Bermuda' },
	{ label: 'Bhutan' },
	{ label: 'Bolivia, Plurinational State of' },
	{ label: 'Bonaire, Sint Eustatius and Saba' },
	{ label: 'Bosnia and Herzegovina' },
	{ label: 'Botswana' },
	{ label: 'Bouvet Island' },
	{ label: 'Brazil' },
	{ label: 'British Indian Ocean Territory' },
	{ label: 'Brunei Darussalam' },
].map(suggestion => ({
	value: suggestion.label,
	label: suggestion.label,
}));

function Option(props) {

	const handleClick = event => {
		props.onSelect(props.option, event);
	};

   const { children, isFocused, isSelected, onFocus } = props;
   return (
      <MenuItem
         onFocus={onFocus}
         selected={isFocused}
         onClick={handleClick}
         component="div"
         style={{
            fontWeight: isSelected ? 500 : 400,
         }}
      >
         {children}
      </MenuItem>
   );
}

function SelectWrapped(props) {
	const { classes, ...other } = props;
	return (
		<Select
			optionComponent={Option}
			noResultsText={<Typography>{'No results found'}</Typography>}
			arrowRenderer={arrowProps => {
				return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
			}}
			clearRenderer={() => <ClearIcon />}
			valueComponent={valueProps => {
				const { value, children, onRemove } = valueProps;
				const onDelete = event => {
					event.preventDefault();
					event.stopPropagation();
					onRemove(value);
				};
				if (onRemove) {
					return (
						<Chip
							tabIndex={-1}
							label={children}
							className={classes.chip}
							deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
							onDelete={onDelete}
						/>
					);
				}
				return <div className="Select-value">{children}</div>;
			}}
			{...other}
		/>
	);
}

const ITEM_HEIGHT = 48;

const styles = theme => ({
	chip: {
		// margin: theme.spacing.unit / 4,
		margin: theme.spacing(1) / 4,
	},
	// We had to use a lot of global selectors in order to style react-select.
	// We are waiting on https://github.com/JedWatson/react-select/issues/1679
	// to provide a better implementation.
	// Also, we had to reset the default style injected by the library.
	'@global': {
		'.Select-control': {
			display: 'flex',
			alignItems: 'center',
			border: 0,
			height: 'auto',
			background: 'transparent',
			'&:hover': {
				boxShadow: 'none',
			},
		},
		'.Select-multi-value-wrapper': {
			flexGrow: 1,
			display: 'flex',
			flexWrap: 'wrap',
		},
		'.Select--multi .Select-input': {
			margin: 0,
		},
		'.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
			padding: 0,
		},
		'.Select-noresults': {
			padding: theme.spacing(2),
		},
		'.Select-input': {
			display: 'inline-flex !important',
			padding: 0,
			height: 'auto',
		},
		'.Select-input input': {
			background: 'transparent',
			border: 0,
			padding: 0,
			cursor: 'default',
			display: 'inline-block',
			fontFamily: 'inherit',
			fontSize: 'inherit',
			margin: 0,
			outline: 0,
		},
		'.Select-placeholder, .Select--single .Select-value': {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			display: 'flex',
			alignItems: 'center',
			fontFamily: theme.typography.fontFamily,
			fontSize: theme.typography.pxToRem(16),
			padding: 0,
		},
		'.Select-placeholder': {
			opacity: 0.42,
			color: theme.palette.common.black,
		},
		'.Select-menu-outer': {
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[2],
			position: 'absolute',
			left: 0,
			// top: `calc(100% + ${theme.spacing.unit}px)`,
			top: `calc(100% + ${theme.spacing(1)}px)`,
			width: '100%',
			zIndex: 2,
			maxHeight: ITEM_HEIGHT * 4.5,
		},
		'.Select.is-focused:not(.is-open) > .Select-control': {
			boxShadow: 'none',
		},
		'.Select-menu': {
			maxHeight: ITEM_HEIGHT * 4.5,
			overflowY: 'auto',
		},
		'.Select-menu div': {
			boxSizing: 'content-box',
		},
		'.Select-arrow-zone, .Select-clear-zone': {
			color: theme.palette.action.active,
			cursor: 'pointer',
			height: 21,
			width: 21,
			zIndex: 1,
		},
		// Only for screen readers. We can't use display none.
		'.Select-aria-only': {
			position: 'absolute',
			overflow: 'hidden',
			clip: 'rect(0 0 0 0)',
			height: 1,
			width: 1,
			margin: -1,
		},
	},
});

function IntegrationReactSelect(props) {
   const [single,setSingle] = useState(null);
   const [multi, setMulti] = useState(null);

	const handleChangeSingle = single => {
      setSingle(single);
	};

	const handleChangeMulti = multi => {
      setMulti(multi);
	};

   const { classes } = props;

   return (
      <div className="row">
         <div className="col-md-6">
            <div className="select-dropdown">
               <Input
                  fullWidth
                  className="auto-select-wrap"
                  inputComponent={SelectWrapped}
                  value=""
                  inputProps={{
                     classes,
                     value: single,
                     onChange: handleChangeSingle,
                     placeholder: 'Select single-value…',
                     instanceId: 'react-select-single',
                     id: 'react-select-single',
                     name: 'react-select-single',
                     className: 'react-single-wrap',
                     simpleValue: true,
                     options: suggestions,
                  }}
               />
            </div>
         </div>
         <div className="col-md-6">
            <div className="select-dropdown">
               <Input
                  value=""
                  fullWidth
                  className="auto-select-wrap"
                  inputComponent={SelectWrapped}
                  inputProps={{
                     classes,
                     value: multi,
                     multi: true,
                     onChange: handleChangeMulti,
                     placeholder: 'Select multi-value…',
                     instanceId: 'react-select-chip',
                     id: 'react-select-chip',
                     name: 'react-select-chip',
                     className: 'react-single-wrap',
                     simpleValue: true,
                     options: suggestions,
                  }}
               />
            </div>
         </div>
      </div>
   )
}

IntegrationReactSelect.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationReactSelect);
