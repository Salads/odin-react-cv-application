import { useState } from 'react'
import './App.css'

import { createEnum } from './Enum.jsx';
import ContactArea from './components/ContactArea.jsx';
import EducationArea from './components/EducationArea.jsx';

const AppState = createEnum(
  'Fresh', 
  'EditContact', 
  'EditEducation', 
  'EditExperience'
);

function App() {
  const [appState, setAppState] = useState(AppState.Fresh);

  return (
    <div className='app-root'>
      <h1>Resume Builder</h1>
      <ContactArea></ContactArea>
      <EducationArea></EducationArea>
    </div>
  );
}

export default App
