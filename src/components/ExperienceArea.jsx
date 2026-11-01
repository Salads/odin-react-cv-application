import "../styles/ExperienceArea.css";
import SectionHeader from "./SectionHeader.jsx";
import TextElement from "./TextElement.jsx";
import DateElement from "./DateElement.jsx";

function ExperienceArea(props) {
	/*
		company name, 
		position title, 
		main responsibilities of your jobs, 
		date from and until when you worked for that company
	*/

	return (
		<div className="education-area">
			<SectionHeader text="Experience"></SectionHeader>
			<div className="experience-container">
				<div className="experience-header">
					<TextElement placeholder="Company Name"></TextElement>
					<TextElement placeholder="Position Title"></TextElement>
					<div className="experience-timerange">
						<DateElement></DateElement> <p>to</p> <DateElement></DateElement>
					</div>
				</div>
				<TextElement className="responsibilities" placeholder="Responsibilities"></TextElement>
			</div>
		</div>
	);
}

export default ExperienceArea;