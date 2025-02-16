import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../stylesheets/Login.css";
import { ReactComponent as Email } from "../../assets/icons/emailicon.svg";
import { ReactComponent as Password } from "../../assets/icons/passwordicon.svg";
import { useAgent_Login } from "../../hooks/login";
import Loader from "../../components/Loader";
import {useAuthContext} from "../../hooks/context";


const Login = () => {
  const {dispatch} = useAuthContext()
  let Navigate = useNavigate()

  const [data, setData] = useState( {
        'email': '',
        'password': ''
      }
  )


  const { login, error, isLoading } = useAgent_Login()

  const Login = async(e) => {
    e.preventDefault()
    dispatch({type: 'LOGIN', token: 'verified'})

    Navigate('/dashboard')
    await login(data)
  }

  return (
    <div className="onboard">
      <Navbar />
      <div className="sides side-edit">
        <div className="sides1">
          <h2>
            Welcome Back <span>Customer!</span>
          </h2>
        </div>
        <form className="sides2" onSubmit={Login}>
          <div className="input-group">
            <label>
              <Email />
              <span>Email</span>
            </label>
            <input
              name="email"
              type="email"
              className=""
              onChange={(e) => {setData({ ...data, email : e.target.value})}}
            />
          </div>
          <div className="input-group">
            <label>
              <Password />
              <span>Password</span>
            </label>
            <input
              name="password"
              type="password"
              className=""
              onChange={(e) => {setData({...data, 'password': e.target.value})}}
            />
          </div>
          <div className="forgot-password">
            <Link className="forgot">Forgot Password?</Link>
          </div>
          <p className="login_error">{error}</p>
          <div className="button">

              <button>{isLoading ? <Loader /> : 'Login'}</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
