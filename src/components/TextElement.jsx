import { useState } from 'react';
import '../styles/TextElement.css';

function TextElement(props) {

	const [editing, setEditing] = useState(false);
	const [text, setText] = useState("");
	const [draftText, setDraftText] = useState("");

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
	}

	if(editing) {
		return (
			<div className='flex-row'>
				<input onChange={onInputChange} value={draftText} placeholder={props.placeholder}></input>
				<button onClick={onSubmit} className='submit-button'>Submit</button>
				<button onClick={onCancel} className='cancel-button'>Cancel</button>
			</div>
		);
	}
	else {
		const displayText = (text ? text : props.placeholder);
		return (
			<p onClick={onDisplayClick}>{displayText}</p>
		);
	}
}

export default TextElement