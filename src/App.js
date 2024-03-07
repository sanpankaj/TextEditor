import React from 'react';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');//weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    });
    setTimeout(()=>{
      setAlert(null)
    },1500)
      
    
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
      document.title = 'Textutils-Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'Textutils-Light Mode'
    }
  }
  return (
    <>
           {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} about="about" />
      <Alert alert={alert} />
      <div className="container my-3">
{/*  
      <Routes>
          <Route exact path="/about" element ={<About/>}/>
      </Routes> */}
            
          {/* </Route> */}
          {/* <Routes> */}

          {/* <Route  exact path="/" element = {<Textform showAlert={showAlert} heading="Enter your text below to analyze" mode={mode} />}/> */}
          <Textform showAlert={showAlert} heading="Enter your text below to analyze" mode={mode} />

          {/* </Routes> */}
          {/* <Textform showAlert={showAlert} heading="Enter your text below to analyze" mode={mode} /> */}
            
          {/* </Route> */}
  
    </div>
    {/* </Router> */}
        


    </>
  );
}

export default App;
