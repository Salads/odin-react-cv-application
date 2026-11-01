import "../styles/SectionHeader.css";

function SectionHeader(props) {

	return (
		<>
			<div className="section-container">
				<h2 className="section-title">{props.text}</h2>
				{ props.showEditUI &&	
					<button 
						className="add-item-button"
						onClick={props.onAddItem}>
						+
					</button>
				}
			</div>
			<hr className="section-line"></hr>
		</>
	);
}

export default SectionHeader;