import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../stylesheets/Login.css";
import { ReactComponent as Email } from "../../assets/icons/emailicon.svg";
import { ReactComponent as Password } from "../../assets/icons/passwordicon.svg";
import Loader from "../../components/Loader";
import {handleLoginRequest} from "../../service/Constant/action.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../service/reducers/rootReducer.ts";


const Login = () => {
  const dispatch = useDispatch();
  let Navigate = useNavigate()
  const AuthState = useSelector((state: RootState) => state.auth);
  const {loading, error} = AuthState;
  const [data, setData] = useState( {
        'email': 'pyjof@mailinator.com',
        'password': 'password'
      }
  )

  const Login = async(e) => {
    e.preventDefault()
    // dispatch({type: 'LOGIN', token: 'verified'})
    // showToast('Success', 'response.data.message', 'success');

    dispatch(handleLoginRequest({
      payload: data,
      navigate: Navigate
    }))

    // Navigate('/dashboard')
    // await login(data)
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
        <form className="sides2 " onSubmit={Login} >
          <div className=" input-group">
            <label className={'flex gap-2 items-center'}>
              <Email />
              <span>Email</span>
            </label>
            <input
              name="email"
              type="email"
              className=""
              value={data.email}
              onChange={(e) => {setData((prevData) => ({
                ...prevData,
                email: e.target.value
              }))}}
            />
          </div>
          <div className="input-group">
            <label className={'flex gap-2 items-center'}>
              <Password />
              <span>Password</span>
            </label>
            <input
              name="password"
              type="password"
              className=""
              value={data.password}
              onChange={(e) => {setData((prevData) => ({
                ...prevData,
                password: e.target.value
              }))}}
            />
          </div>
          <div className="forgot-password">
            <Link className="forgot" to={'/forgot-password'}>Forgot Password?</Link>
          </div>
          {/*<p className="login_error">{error}</p>*/}
          <div className="button">

              <button>{loading ? <Loader /> : 'Login'}</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
