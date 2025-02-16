import React, { useState } from "react";
import "../../stylesheets/Claims.css";
import { useChangepassword } from "../../hooks/changepassword";
import Loader from "../../components/Loader";

const PinPassword = () => {
  const [data, setData] = useState({
    'old_password': '',
    'new_password': ''
  })
  const [confirmpassword, setConfirmpassword] = useState('')
  const [passworderror, setPassworderror] = useState('')
  const { changepassword, isLoading } = useChangepassword()
  const checkpassword = (e) => {
    if(data.new_password !== e.target.value){
      setPassworderror('Password does not match')
    }else {
      setConfirmpassword(e.target.value)
      setPassworderror('')
    }
  }

  const updatepassword = (e) => {
    e.preventDefault()
    if(data.new_password !== confirmpassword) {
      setPassworderror('Password does not match')
    }else{
      changepassword(data)
    }
  }

  return (
    <div className="general-claims">
      <div className="myclaims">
        <h4>Change Password</h4>
      </div>
      <div className="password-form">
        <form action="">
          <div className="form-group">
            <label>Old Password</label>
            <input type="password" placeholder="Old password" onChange={(e) => setData({...data, old_password: e.target.value})} />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password"  placeholder="New password" onChange={(e) => setData({...data, new_password: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input type="password"  placeholder="Confirm password" onChange={checkpassword} />
          </div>
          <span className='passworderror'>{passworderror}</span>
          <button className="password-button" onClick={updatepassword}>{isLoading ? <Loader /> : 'Change Password'}</button>
        </form>
      </div>
    </div>
  );
};

export default PinPassword;
