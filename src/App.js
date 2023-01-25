import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Agentsignup from './pages/Agent-signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index exact element={<Home/>} />
          <Route path='agent/signup' exact element={<Agentsignup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
