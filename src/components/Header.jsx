import "../styles/Header.css";

function Header(props) {

	return (
		<div className="header">
			<h1>Resume Builder</h1>
			<div className="toolbar-flex">
				<label className="checkbox-label">
					Show Edit UI
					<input 
						className="checkbox" 
						type="checkbox"
						defaultChecked={true}
						onChange={props.onShowControlsChanged}
					></input>
				</label>
				
			</div>
		</div>
	);
};

export default Header;