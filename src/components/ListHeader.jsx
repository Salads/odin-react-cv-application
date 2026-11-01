import "../styles/ListHeader.css";

function ListHeader(props) {

	return (
		<div className="list-header-container">
			<h3 className="list-header">Responsibilities</h3>
			<button className="list-header-add-button" onClick={props.onAdd}>+</button>
		</div>
	);
}

export default ListHeader;