import {useState} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  let [mode, setMode] = useState('light');
  let [h1Style, setH1Style] = useState({color: 'black', fontSize: '1.5rem', textDecoration: 'underline'});
  

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setH1Style({color: 'white', fontSize: '1.5rem', textDecoration: 'underline'});
      document.body.style.backgroundColor = 'black';
      
    } else {
      setMode('light');
      setH1Style({color: 'black', fontSize: '1.5rem', textDecoration: 'underline'});
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div >

        <Navbar mode = {mode} changeMode = {changeMode} />
        <Home h1Style = {h1Style}/>
    </div>
  );
}

export default App;
