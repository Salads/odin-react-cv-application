import "../styles/Header.css";

function Header(props) {

	return (
		<div className="header">
			<h1>Resume Builder</h1>
			<div className="toolbar-flex">
				<label className="checkbox-label">
					Edit Mode
					<input 
						className="checkbox" 
						type="checkbox"
						defaultValue={false} 
						onChange={props.onShowControlsChanged}
					></input>
				</label>
				
			</div>
		</div>
	);
};

export default Header;