import "../styles/ExperienceItem.css";
import TextElement from "./TextElement.jsx";
import DateElement from "./DateElement.jsx";

function ExperienceItem(props) {

	return (
		<div data-key={props.data.key} className="experience-container">
			<div className="experience-header">
				<button onClick={props.onRemove} className="remove-button">x</button>
				<TextElement placeholder="Company Name"></TextElement>
				<TextElement placeholder="Position Title"></TextElement>
				<div className="experience-timerange">
					<DateElement></DateElement>
					<p>to</p>
					<DateElement></DateElement>
				</div>
			</div>
			<TextElement className="responsibilities" placeholder="Responsibilities"></TextElement>
		</div>
	);
}

export default ExperienceItem;