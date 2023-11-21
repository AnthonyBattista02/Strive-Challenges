import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'
import { FeedbackProvider } from './components/FeedbackContext';


function App() {

  return (
    <FeedbackProvider>
      <Main />
      <Navbar />
    </FeedbackProvider>
  );
}

export default App
