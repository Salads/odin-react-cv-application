import { useState } from "react";
import '../styles/DateElement.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MIN_YEAR = 1950;
const MAX_YEAR = new Date().getFullYear() + 1;
const YEARS = Array.from(
	{ length: MAX_YEAR - MIN_YEAR + 1 },
	(_, i) => MIN_YEAR + i,
);

function dateToString(date) {
	const year = date.getFullYear();
	const month = date.getMonth();
	return `${month + 1}/${year}`;
}

function DateElement() {
	const [editing, setEditing] = useState(false);
	const [date, setDate] = useState(new Date());
	const [draftDate, setDraftDate] = useState(new Date());

	function onSubmit(e) {
		setDate(draftDate);
		setEditing(!editing);
	}

	function onCancel(e) {
		setDraftDate(date);
		setEditing(!editing);
	}

	if(editing) {
		return (
			<div className="flex-row">
				<DatePicker
					dateFormat="MM/yyyy"
					showMonthYearPicker
					showFullMonthYearPicker
					selected={draftDate}
					onChange={(date) => setDraftDate(date)}
					renderCustomHeader={({ 
						date,
						changeYear,
						decreaseYear,
						increaseYear,
						prevYearButtonDisabled,
						nextYearButtonDisabled, }) => (
						<div className="date-element__header">
							<button
								type="button"
								className="react-datepicker__navigation react-datepicker__navigation--previous"
								onClick={decreaseYear}
								disabled={prevYearButtonDisabled}
								aria-label="Previous Year"
							>
								<span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
									Previous Year
								</span>
							</button>
							<select
								className="react-datepicker__year-select"
								value={date.getFullYear()}
								onChange={(e) => changeYear(Number(e.target.value))}
								aria-label="Select year"
							>
								{YEARS.map((year) => (
									<option key={year} value={year}>{year}</option>
								))}
							</select>

							<button
								type="button"
								className="react-datepicker__navigation react-datepicker__navigation--next"
								onClick={increaseYear}
								disabled={nextYearButtonDisabled}
								aria-label="Next Year"
							>
								<span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
									Next Year
								</span>
							</button>
						</div>
					)}
				/>
				<button onClick={onSubmit} className="submit-button">Submit</button>
				<button onClick={onCancel} className="cancel-button">Cancel</button>
			</div>
		);
	}
	else {
		return <p onClick={() => setEditing(!editing)} >{dateToString(date)}</p>;
	}
}

export default DateElement;