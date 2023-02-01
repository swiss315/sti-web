import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Onboarding';
import Agentsignup from './pages/Agent-signup';
import  About from './pages/Customer_signup';
import Dashboardlayout from './pages/Dashboardlayout';
import  Login from './pages/Login';
import PinTransaction from './pages/PinTransaction';
import PinPassword from './pages/PinPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index exact element={<Home/>} />
          <Route path='/agent-signup' exact element={<Agentsignup/>} />
          <Route path='/customer-signup' exact element={<About/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/*' exact element={<Dashboardlayout/>} />
        </Routes>
      </Router>
     <PinPassword />
    </div>
  );
}

export default App;
