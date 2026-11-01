import "../styles/SectionHeader.css";

function SectionHeader(props) {

	return (
		<>
			<h2 className="section-title">{props.text}</h2>
			<hr className="section-line"></hr>
		</>
	);
}

export default SectionHeader;