import {useState} from 'react';
import Country from './components/Country';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CountryList from './components/CountryList';

function App() {

  let [mode, setMode] = useState('light');
  let [h1Style, setH1Style] = useState({color: 'black', fontSize: '1.5rem', textDecoration: 'underline'});
  let [cardStyle, setCardStyle] = useState({backgroundColor: 'white', color: 'black', border: '1px solid black'});
  

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setH1Style({color: 'white', fontSize: '1.5rem', textDecoration: 'underline'});
      setCardStyle({backgroundColor: 'black', color: 'white' , border: '1px solid white'});
      document.body.style.backgroundColor = 'black';
      
    } else {
      setMode('light');
      setH1Style({color: 'black', fontSize: '1.5rem', textDecoration: 'underline'});
      setCardStyle({backgroundColor: 'white', color: 'black', border: '1px solid black'});
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div >

        <Router>
          <Navbar mode = {mode} changeMode = {changeMode} />
            <Routes>
                <Route path="/countries" element={<CountryList mode = {mode} cardStyle = {cardStyle} />} />
                <Route path="/" element={<Home h1Style = {h1Style}/>} />

            </Routes>
        </Router>
    </div>
  );
}

export default App;
