import '../styles/EducationArea.css';

import SectionHeader from './SectionHeader.jsx';
import TextElement from './TextElement.jsx';
import DateElement from './DateElement.jsx';

function EducationArea() {
	return(
		<div className='education-area'>
			<SectionHeader text="Education"></SectionHeader>
			<div className='education-content'>
				<TextElement placeholder='School Name'></TextElement>
				<TextElement placeholder='Title of Study'></TextElement>
				<DateElement></DateElement>
			</div>
		</div>
	);
}

export default EducationArea;