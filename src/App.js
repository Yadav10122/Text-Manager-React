import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {

   //for setting themes
  const [mode, setMode] = useState('light');

   //for setting Alert type
  const [alert, setAlert] = useState(null);

  //function for showing Alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


   //To hide selected theme in Navbar chosen
  const removeClasses = () => {
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
  }
  
  //to select different themes
  const toggleMode = (cls) => {
    removeClasses();
    if (cls === 'light') {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
    else if (cls === 'dark') {
      setMode(cls);
      document.body.style.backgroundColor = "#24171a";
    }
    else if (cls === 'danger') {
      setMode(cls);
      document.body.style.backgroundColor = "#9e130e";
    }
    else if (cls === 'warning') {
      setMode(cls);
      document.body.style.backgroundColor = "#c9c90c";
    }
    else if (cls === 'info') {
      setMode(cls);
      document.body.style.backgroundColor = "#146c80";
    }
    else if (cls === 'primary') {
      setMode(cls);
      document.body.style.backgroundColor = "#042743";
    }

  }
  return (


    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} title="Text Manager" key={new Date()} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/about' element={<About mode={mode} />} />
        <Route path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
      </Routes>
    </BrowserRouter>


    


  )
};

export default App;
