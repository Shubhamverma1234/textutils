import React, { useState } from 'react'
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
  //Link
//} from "react-router-dom";

 function App() {

  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);
  const [button1, setButton1]= useState('secondary');

  const showAlert = (message,type) =>
  {
      setAlert({
        msg: message,
        type: type
      }) 
  
    setTimeout(() => {
         setAlert(null);
    }, 3000);
    }

  

  const toggleMode =()=>{
    if(mode === 'light')
    {
      setButton1('dark');
      setMode('dark');
      document.body.style.backgroundColor = '#0e1146';
      showAlert("Dark mode has been enabled","success");
      document.title="Textutils-Darkmode";
      setInterval(() => {
        document.title="Textutils is amazing";
      }, 2000);
      setInterval(() => {
        document.title="install textutils now";
      }, 1500);
    }
    else{
      setButton1('secondary');
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      document.title="Textutils-Lightmode";
    }
  }
  const toggleMode1 =()=>{
    if(mode === 'light')
    {
      setButton1('success');
      setMode('dark');
      document.body.style.backgroundColor = 'green';
      showAlert("Green mode has been enabled","success");
    }
    else{
      setButton1('secondary');
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
    }
  }
  const toggleMode2 =()=>{
    if(mode === 'light')
    {
      setButton1('warning');
      setMode('dark');
      document.body.style.backgroundColor = 'yellow';
      showAlert("Yellow mode has been enabled","success");
    }
    else{
      setButton1('secondary');
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
    }
  }
    
  return (
    
<>
{/*<Router>*/}
    {/*<Navbar title="Textutils2"  aboutText="about textutils"/>*/}
    <Navbar title="Textutils2" mode={mode} toggleMode={toggleMode}  toggleMode1={toggleMode1} toggleMode2={toggleMode2} aboutText="About"/>
    <Alert alert={alert}/>
 <div className="container" >
   { /* /users --> componenet 1
     /users/home -->component 2 */}

{/*} <Switch>
          <Route exact path="/about">
            <About />
          </Route>
           
    <Route exact path="/">*/}
          <TextForm heading="enter the text to analysis below" showAlert={showAlert} button1={button1} mode={mode} />
          {/*</Route>
</Switch>
    */}
 {/*<About/>*/}
{/*<About/>*/}
 </div>
 {/*</Router>*/}
 </>
  );
}

export default App;
