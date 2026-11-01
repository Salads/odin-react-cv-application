import "../styles/ExperienceArea.css";
import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import ExperienceItem from "./ExperienceItem.jsx";

function createNewItem() {
	return {
		key: crypto.randomUUID(),
		name: "Company Name",
		position: "Position Title",
		dateFrom: new Date(),
		dateTo: new Date()
	};
}

function generateItem(obj, removeHook, props) {
	return (
		<ExperienceItem 
			key={obj.key}
			data={obj} 
			onRemove={() => removeHook(obj.key)}
			showEditUI={props.showEditUI}>
		</ExperienceItem>
	);
}

function ExperienceArea(props) {
	/*
		company name, 
		position title, 
		main responsibilities of your jobs, 
		date from and until when you worked for that company
	*/

	const [items, setItems] = useState([]);

	function onAddItem(e) {
		setItems([...items, createNewItem()]);
	}

	function onRemoveItem(key) {
		let newArray = items.filter((elem) => elem.key !== key);
		setItems([...newArray]);
	}

	return (
		<div className="education-area">
			<SectionHeader 
				text="Experience" 
				showEditUI={props.showEditUI}
				onAddItem={onAddItem}
			></SectionHeader>
			{items.map((elem) => generateItem(elem, onRemoveItem, props))}
		</div>
	);
}

export default ExperienceArea;