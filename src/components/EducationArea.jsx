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

function generateItem(obj, removeHook) {
	return (
		<EducationItem
			key={obj.key}
			data={obj}
			onRemove={() => removeHook(obj.key)}>
		</EducationItem>
	);
}

function EducationArea() {

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
			<SectionHeader text="Education" onAddItem={onAddItem} ></SectionHeader>
			{items.map((elem) => generateItem(elem, onRemoveItem))}
		</div>
	);
}

export default EducationArea;