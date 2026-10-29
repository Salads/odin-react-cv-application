import { useState } from 'react';
import '../styles/EmailElement.css';

const placeholder = 'email@address.com';

function validate(str) {
	const matches = /.+@.+\..+/.test(str);
	if(matches || str.length === 0) return null;

	const hasAtSymbol = /.*@.*/.test(str);
	if(!hasAtSymbol) return 'Email Address must have "@"';

	const hasLocal = /.+@.*/.test(str);
	if(!hasLocal) return 'Email must have a "local" part';

	const hasDomain = /.*@.+/.test(str);
	if(!hasDomain) return 'Email must have a "domain" part';

	return 'Email must look like "email@address.com"';
}

function EmailElement() {

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
					<input type="email" onChange={onInputChange} value={draftText} placeholder={placeholder}></input>
					<button onClick={onSubmit} className='submit-button'>Submit</button>
					<button onClick={onCancel} className='cancel-button'>Cancel</button>
				</div>
				{error && <p className='error-message' role='alert'>{error}</p>}
			</>
		);
	}
	else {
		const displayText = (text ? text : placeholder);
		return (
			<p onClick={onDisplayClick}>{displayText}</p>
		);
	}
}

export default EmailElement;