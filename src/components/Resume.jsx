import "../styles/Resume.css";
import TextElement from "./TextElement.jsx";
import EmailElement from "./EmailElement.jsx";
import TeleElement from "./TeleElement.jsx";
import LargeTextElement from "./LargeTextElement.jsx";
import EducationArea from "./EducationArea.jsx";
import ExperienceArea from "./ExperienceArea.jsx";

function Resume(props) {
	
	return (
		<div className="resume-container">
			<div className="contact-container">
				<LargeTextElement placeholder="Your Name Here"></LargeTextElement>
				<div className="contact-info-container">
					<EmailElement></EmailElement>
					<TeleElement></TeleElement>
				</div>
			</div>
			<div className="resume-details-container">
				<EducationArea showEditUI={props.showEditUI}></EducationArea>
				<ExperienceArea showEditUI={props.showEditUI}></ExperienceArea>
			</div>
		</div>
	);
}

export default Resume;