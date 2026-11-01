import "../styles/ExperienceItem.css";
import { useState } from "react";
import TextElement from "./TextElement.jsx";
import DateElement from "./DateElement.jsx";
import ListItemTextElement from "./ListItemTextElement.jsx";
import ListHeader from "./ListHeader.jsx";

function createItem() {
	return {
		key : crypto.randomUUID(),
		responsibility: "Responsibility"
	};
}

function generateItem(item, removeHook, props) {
	return (
		<ListItemTextElement 
			key={item.key} 
			data-key={item.key}
			onRemove={() => removeHook(item.key)}
			placeholder={item.responsibility}
			showEditUI={props.showEditUI}>
		</ListItemTextElement>
	);
}

function ExperienceItem(props) {

	const [responsibilities, setResponsibilities] = useState([]);

	function addItem() {
		setResponsibilities([...responsibilities, createItem()])
	}

	function removeItem(key) {
		let newArray = responsibilities.filter((elem) => elem.key !== key);
		setResponsibilities([...newArray]);
	}

	let headerClass = (props.showEditUI ? "experience-header-edit" : "experience-header");

	return (
		<div data-key={props.data.key} className="experience-container">
			<div className={headerClass}>
				{ props.showEditUI && 
					<button onClick={props.onRemove} className="remove-button">x</button> 
				}
				<TextElement placeholder="Company Name"></TextElement>
				<TextElement placeholder="Position Title"></TextElement>
				<div className="experience-timerange">
					<DateElement></DateElement>
					<p>-</p>
					<DateElement></DateElement>
				</div>
			</div>
			{ props.showEditUI && 
				<ListHeader 
					showEditUI={props.showEditUI}
					text="Responsibilities" 
					onAdd={addItem}>
				</ListHeader> 
			}
			<ul>
				{ responsibilities.map((item) => generateItem(item, removeItem, props)) }
			</ul>
		</div>
	);
}

export default ExperienceItem;