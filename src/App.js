import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212339';
      showAlert('Dark mode has been enabled', 'Success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'Success')
    }
  }
  return (
    <>
      <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter the text below" mode={mode} />
      </div>
    </>
  );
}
export default App;
