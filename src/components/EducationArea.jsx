import '../styles/EducationArea.css';

import TextElement from './TextElement.jsx';
import DateElement from './DateElement.jsx';

function EducationArea() {
	return(
		<>
			<TextElement placeholder='School Name'></TextElement>
			<TextElement placeholder='Title of Study'></TextElement>
			<DateElement></DateElement>
		</>
	);
}

export default EducationArea;