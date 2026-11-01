import '../styles/EducationArea.css';

import { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import EducationItem from './EducationItem.jsx';

function createItem() {
	return {
		key: crypto.randomUUID(),
		name: "School Name",
		titleStudy: "Title of Study",
		date: new Date()
	};
}

function generateItem(obj, removeHook, props) {
	return (
		<EducationItem
			key={obj.key}
			data={obj}
			showEditUI={props.showEditUI}
			onRemove={() => removeHook(obj.key)}>
		</EducationItem>
	);
}

function EducationArea(props) {

	const [items, setItems] = useState([]);

	function onAddItem() {
		setItems([...items, createItem()]);
	}

	function onRemoveItem(key) {
		let newArray = items.filter((elem) => elem.key !== key);
		setItems([...newArray]);
	}

	return(
		<div className='education-area'>
			<SectionHeader 
				text="Education" 
				showEditUI={props.showEditUI}
				onAddItem={onAddItem}>
			</SectionHeader>
			<div className='education-item-container'>
				{items.map((elem) => generateItem(elem, onRemoveItem, props))}
			</div>
		</div>
	);
}

export default EducationArea;