import "../styles/EducationItem.css";

import TextElement from './TextElement.jsx';
import DateElement from './DateElement.jsx';

function EducationItem(props) {

	return (
		<div className='education-content'>
			<button onClick={props.onRemove} className="remove-button">x</button>
			<TextElement placeholder='School Name'></TextElement>
			<TextElement placeholder='Title of Study'></TextElement>
			<DateElement></DateElement>
		</div>
	);

}

export default EducationItem;