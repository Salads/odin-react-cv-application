import { useState } from 'react';
import '../styles/TeleElement.css';

const placeholder = '(555)-555-5555';

function validate(str) {
	const matches = /\([0-9]{3}\)-[0-9]{3}-[0-9]{4}/.test(str);
	return (str.length === 0 || matches) ? null : `Phone number must look like ${placeholder}`;
}

function TeleElement() {

	const [editing, setEditing] = useState(false);
	const [text, setText] = useState('');
	const [draftText, setDraftText] = useState('');
	const [error, setError] = useState('');

	function onDisplayClick(e) {
		setEditing(!editing);
	}

	function onSubmit(e) {
		setText(draftText);
		setEditing(!editing);
	}

	function onCancel(e) {
		setEditing(!editing);
	}

	function onInputChange(e) {
		setDraftText(e.target.value);
		setError(validate(e.target.value));
	}

	if(editing) {
		return (
			<>
				<div className='flex-row'>
					<input 
						type="tel" 
						onChange={onInputChange} 
						value={draftText} 
						placeholder={placeholder}></input>
					<button onClick={onSubmit} className='submit-button'>Submit</button>
					<button onClick={onCancel} className='cancel-button'>Cancel</button>
				</div>
				{error && <p className='error-message' role='alert'>{error}</p>}
			</>
		);
	}
	else {
		let displayText = ( text ? text : 'Phone: ' );
		return (
			<p onClick={onDisplayClick}>{displayText}</p>
		);
	}
}

export default TeleElement;