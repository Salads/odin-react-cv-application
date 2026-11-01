import "../styles/EducationItem.css";

import TextElement from './TextElement.jsx';
import DateElement from './DateElement.jsx';

function EducationItem(props) {

	let className = (props.showEditUI ? "education-content-edit" : "education-content");

	return (
		<div className={className}>
			{ props.showEditUI &&
				<button onClick={props.onRemove} className="remove-button">x</button>
			}
			<TextElement placeholder='School Name'></TextElement>
			<TextElement placeholder='Title of Study'></TextElement>
			<DateElement></DateElement>
		</div>
	);

}

export default EducationItem;