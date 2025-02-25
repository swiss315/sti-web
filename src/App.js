import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Onboarding/Onboarding';
import  About from './pages/Onboarding/Customer/Customer_signup';
import Dashboardlayout from './pages/DashboardLayout/Dashboardlayout';
import  Login from './pages/Onboarding/Login';
import { PrivateRoutes } from './hooks/protectedroutes';
import {Homepage} from "./pages/landingPage/Homepage";
import {ChairmanStatement} from "./pages/landingPage/chairman";
import {WhoWeAre} from "./components/aboutUs/whoweare";
import VerifyOtp from "./pages/Onboarding/VerifyOtp";
import ForgetPassword from "./pages/Onboarding/ForgetPassword";



function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route index exact element={<Homepage/>} />
            <Route path='/aboutus' exact element={<WhoWeAre/>}/>
            <Route path='/aboutus/:id' exact element={<ChairmanStatement/>}/>
            <Route path={'/onboarding'} exact element={<Home/>}/>
            <Route path='/login' exact element={<Login/>}/>
              <Route path='/forgot-password' exact element={<ForgetPassword/>}/>

              <Route path='/verify-otp' exact element={<VerifyOtp/>}/>

              {/*<Route path='/agent-signup' exact element={<Agentsignup/>} />*/}
            <Route path='/customer-signup' exact element={<About/>} />
            {/*<Route path='/login' in exact element={isAuth ? <Navigate to='/dashboard' /> : <Login/>} />*/}
            <Route  element={<PrivateRoutes />}>
              <Route path='/*' exact element={<Dashboardlayout/>} />
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
