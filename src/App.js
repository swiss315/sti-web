import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Onboarding/Onboarding';
import Agentsignup from './pages/Onboarding/Agent/Agent-signup';
import  About from './pages/Onboarding/Customer/Customer_signup';
import Dashboardlayout from './pages/DashboardLayout/Dashboardlayout';
import  Login from './pages/Onboarding/Login';
import { PrivateRoutes } from './hooks/protectedroutes';
import { useAuthContext } from './hooks/context';
import {Homepage} from "./pages/landingPage/Homepage";
// import {AboutUs} from "./components/aboutUs/whoweare";
import {ChairmanStatement} from "./pages/landingPage/chairman";
import {WhoWeAre} from "./components/aboutUs/whoweare";



function App() {
  const {isAuth } = useAuthContext()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index exact element={<Homepage/>} />
          <Route path='/aboutus' exact element={<WhoWeAre/>}/>
          <Route path='/aboutus/:id' exact element={<ChairmanStatement/>}/>
          <Route path={'/onboarding'} exact element={<Home/>}/>
          <Route path='/login' exact element={<Login/>}/>

          <Route path='/agent-signup' exact element={<Agentsignup/>} />
          <Route path='/customer-signup' exact element={<About/>} />
          <Route path='/login' in exact element={isAuth ? <Navigate to='/dashboard' /> : <Login/>} />
          <Route  element={<PrivateRoutes />}>
            <Route path='/*' exact element={<Dashboardlayout/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
