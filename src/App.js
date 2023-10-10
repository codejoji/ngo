import logo from './logo.svg';
import './App.css';
import bg from './assets/images/bg.jpeg'
import LandingPage from './Components/LandingPage'
import Login from './Components/Login'
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import PlantDetailsJhar from './Components/PlantDetailsJhar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantNow from './Components/PlantNow';
import PlantDetailsLadakh from './Components/PlantDetailsLadakh';
import PlantDetailsChattisgarh from './Components/PlantDetailsChattisgarh';
import PlantDetailsUp from './Components/PlantDetailsUp';
import PlantDetailsOdisha from './Components/PlantDetailsOdisha';
import Menu from './Components/Menu'
import { HashLink as Link } from 'react-router-hash-link';
import Career from './Components/Career';
import Team from './Components/Team'
import Volunteer from './Components/Volunteer';
import Terms from './Components/Terms'
import Cart from './Components/Cart';
import Account from './Components/Account';
import DLantern from './Components/DLantern';
import PoshionKit from './Components/PoshionKit';
import MyOrders from './Components/MyOrders';


function App() {
  return (
    <div style={{backgroundColor:"#edede9"}}>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage /> }/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
        <Route path="/PlantNow" element={<PlantNow />}/>
        <Route path="/PlantNow/PlantDetails1" element={<PlantDetailsJhar />}/>
        <Route path="/PlantNow/PlantDetails2" element={<PlantDetailsChattisgarh />}/>
        <Route path="/PlantNow/PlantDetails3" element={<PlantDetailsLadakh />}/>
        <Route path="/PlantNow/PlantDetails4" element={<PlantDetailsUp />}/>
        <Route path="/PlantNow/PlantDetails5" element={<PlantDetailsOdisha />}/>
        <Route path="/PlantNow/Dlantern" element={<DLantern />}/>
        <Route path="/PlantNow/Poshionkit" element={<PoshionKit />}/>
        <Route path="/Menu" element={<Menu />}/>
        <Route path="/Career" element={<Career />}/>
        <Route path="/OurTeam" element={<Team />}/>
        <Route path="/Volunteer" element={<Volunteer />}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Account" element={<Account/>}/>
        <Route path="/MyOrders" element={<MyOrders/>}/>
        <Route path="/MyOrders" element={<MyOrders/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}