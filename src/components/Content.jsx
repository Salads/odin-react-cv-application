import "../styles/Content.css";
import Resume from "./Resume.jsx";


function Content(props) {

	return (
		<div className="content">
			<Resume 
				showControls={props.showControls}
				showEditUI={props.showEditUI}>
			</Resume>
		</div>
	);
}

export default Content;