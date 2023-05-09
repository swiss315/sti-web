import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Onboarding';
import Agentsignup from './pages/Agent-signup';
import  About from './pages/Customer_signup';
import Dashboardlayout from './pages/Dashboardlayout';
import  Login from './pages/Login';
import { PrivateRoutes } from './hooks/protectedroutes';
import { useAuthContext } from './hooks/context';



function App() {
  const {isAuth } = useAuthContext()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index exact element={<Home/>} />
          <Route path='/agent-signup' exact element={<Agentsignup/>} />
          <Route path='/customer-signup' exact element={<About/>} />
          <Route path='/login' exact element={isAuth ? <Navigate to='/dashboard' /> : <Login/>} />
          <Route element={<PrivateRoutes />}>
            <Route path='/*' exact element={<Dashboardlayout/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
