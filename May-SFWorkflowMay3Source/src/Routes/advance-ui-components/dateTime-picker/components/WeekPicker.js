// Week Picker
import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
	dayWrapper: {
		position: 'relative',
	},
	day: {
		width: 36,
		height: 36,
		fontSize: 14,
		margin: '0 2px',
		color: theme.palette.text.primary,
	},
	customDayHighlight: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: '2px',
		right: '2px',
		border: '2px solid #6270bf',
		borderRadius: '50%',
	},
	nonCurrentMonthDay: {
		color: '#BCBCBC',
	},
	highlightNonCurrentMonthDay: {
		color: '#676767',
	},
	highlight: {
		background: '#5C6AC4',
	},
	firstHighlight: {
		extend: 'highlight',
		borderTopLeftRadius: '50%',
		borderBottomLeftRadius: '50%',
	},
	endHighlight: {
		extend: 'highlight',
		borderTopRightRadius: '50%',
		borderBottomRightRadius: '50%',
	},
}));

function WeekPicker(props) {
   const [selectedDate, setSelectedDate] = useState(new Date());
   const classes = useStyles();
   const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const formatWeekSelectLabel = (date, invalidLabel) => (date && date.isValid()
		? `Week of ${date.clone().startOf('week').format('MMM Do')}`
		: invalidLabel);

	const renderWrappedDefaultDay = (date, selectedDate, dayInCurrentMonth) => {
		const startDate = selectedDate.clone().day(0).startOf('day');
		const endDate = selectedDate.clone().day(6).endOf('day');
		const dayIsBetween = (
			date.isSame(startDate) ||
			date.isSame(endDate) ||
			(date.isAfter(startDate) && date.isBefore(endDate))
		);

		const firstDay = date.isSame(startDate, 'day');
		const lastDay = date.isSame(endDate, 'day');
		const wrapperClassName = [
			dayIsBetween ? classes.highlight : null,
			firstDay ? classes.firstHighlight : null,
			lastDay ? classes.endHighlight : null,
		].join(' ');

		const dayClassName = [
			classes.day,
			(!dayInCurrentMonth) && classes.nonCurrentMonthDay,
			(!dayInCurrentMonth && dayIsBetween) && classes.highlightNonCurrentMonthDay,
		].join(' ');

		return (
			<div className={wrapperClassName}>
				<IconButton className={dayClassName}>
					<span> {date.format('DD')} </span>
				</IconButton>
			</div>
		);
	};

   return (
      <div className="rct-picker">
         <DatePicker
            fullWidth
            value={selectedDate}
            clearable
            label="Choose a Week"
            onChange={handleDateChange}
            renderDay={renderWrappedDefaultDay}
            labelFunc={formatWeekSelectLabel}
            leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
            rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
         />
      </div>
   )
}

export default WeekPicker;
