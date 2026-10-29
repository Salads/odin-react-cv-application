import { useState } from 'react';
import '../styles/ContactArea.css';

import TextElement from './TextElement';
import EmailElement from './EmailElement';
import TeleElement from './TeleElement';

function ContactArea() {
	return (
		<>
			<TextElement placeholder='Enter Name'></TextElement>
			<EmailElement></EmailElement>
			<TeleElement></TeleElement>
		</>
	);
}

export default ContactArea;