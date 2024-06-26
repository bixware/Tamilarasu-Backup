import React, { useState} from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { TextField, Paper, MenuItem} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
];

function renderInput(inputProps) {
	const { classes, ref, ...other } = inputProps;

	return (
		<TextField
			fullWidth
			inputRef={ref}
			InputProps={{
				classes: {
					input: classes.input,
				},
				...other,
			}}
		/>
	);
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
	const matches = match(suggestion.label, query);
	const parts = parse(suggestion.label, matches);

	return (
		<MenuItem selected={isHighlighted} component="div">
			<div>
				{parts.map((part, index) => {
					return part.highlight ? (
						<span key={String(index)} style={{ fontWeight: 300 }}>
							{part.text}
						</span>
					) : (
							<strong key={String(index)} style={{ fontWeight: 500 }}>
								{part.text}
							</strong>
						);
				})}
			</div>
		</MenuItem>
	);
}

function renderSuggestionsContainer(options) {
	const { containerProps, children } = options;

	return (
		<Paper {...containerProps} square>
			{children}
		</Paper>
	);
}

function getSuggestionValue(suggestion) {
	return suggestion.label;
}

function getSuggestions(value) {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;
	let count = 0;

	return inputLength === 0
		? []
		: suggestions.filter(suggestion => {
			const keep =
				count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

			if (keep) {
				count += 1;
			}

			return keep;
		});
}

const styles = theme => ({
	suggestionsContainerOpen: {
		//  marginTop: theme.spacing.unit,
		marginTop: theme.spacing(),
	},
	suggestion: {
		display: 'block',
	},
	suggestionsList: {
		margin: 0,
		padding: 0,
		listStyleType: 'none',
	},
});

function IntegrationAutosuggest(props){
   const [value,setValue] = useState('');
   const [suggestions, setsuggestions] = useState([]);
   
	const handleSuggestionsFetchRequested = ({ value }) => {
      setsuggestions(getSuggestions(value));
	};

	const handleSuggestionsClearRequested = () => {
      setsuggestions([]);
	};

	const handleChange = (event, { newValue }) => {
      setValue(newValue);
	};
   const { classes } = props
   
   return (
      <Autosuggest
         theme={{
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
         }}
         renderInputComponent={renderInput}
         suggestions={suggestions}
         onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
         onSuggestionsClearRequested={handleSuggestionsClearRequested}
         renderSuggestionsContainer={renderSuggestionsContainer}
         getSuggestionValue={getSuggestionValue}
         renderSuggestion={renderSuggestion}
         inputProps={{
            classes,
            placeholder: 'Search a country (start with a)',
            value: value,
            onChange: handleChange,
         }}
      />
   );
}

IntegrationAutosuggest.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationAutosuggest);
