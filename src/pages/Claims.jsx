
import React, { useRef, useState } from 'react'

import '../stylesheets/report.css'

import {ReactComponent as Uploadicon} from "../assets/icons/uploadicon.svg";

import "../stylesheets/Claims.css";
// import { FaUserAlt } from "react-icons/fa";
// import Bell from "../assets/icons/Bell.svg";
import { Link } from "react-router-dom";

const Claims = () => {

  const click = useRef('')
  const [filename, setFilename] = useState()

  const file = () => {
      click.current.click()
    }

  return (
    <div className="general-claims">
      {/* <div className="claims-header">
       <Link to='/home'> <AiOutlineArrowLeft /> </Link>
         <div className="sign-update">
          <FaUserAlt />
          <img className="bell" src={Bell} alt="" />
        </div> 
      </div> */}
      <div className="myclaims">
        <h4>My Claims</h4>
      </div>
      <div className="claim-track">
        <div className="claim-report">
          <Link to='/claim'>
          <button className="button1">Report A Claim</button> </Link>
         <Link to='/trackclaim'> <button className="button2">Track A Claim</button> </Link>
        </div>
        <form className="claim-form">
          <div className="claim-type">
          
            <label htmlFor="">Claim Type</label>
            {/* <input type="text" placeholder="Select preferred type" /> */}
            <select class=" use_user4" name="Claim Type">
            <option value="none" selected>Select preferred type</option>
                        <option value="male">Type1</option>
                        <option value="female">Type2</option>
                        <option value="other">Type3</option>
                        </select>
          </div>
          <div className="claim-type">
            <label htmlFor="">Policy Number</label>
            <input type="number" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Description of claims</label>
            <input className="describe" type="text" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Date Of Loss</label>
            <input type="date" id="start" name="trip-start" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Estimate Claim Loss</label>
            <input type="text" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Lost Estimate</label>
            <input type="text" />
          </div>
          <div
            className="claim-type"
            placeholder="Choose File from your device here"
          >
            <label htmlFor="">Upload Estimate Of Claim Cost</label>
            <input type='file' ref={click} onChange={(e) => { setFilename(e.target.files[0].name)}} hidden />
                    <div className='upload-input'>
                        <Uploadicon />
                        <p>{filename}</p>
                        <p>Choose File from your device <span onClick={file}>here</span></p>
                    </div>
          </div>
          <div className="claim-type">
            <label htmlFor="" placeholder="Choose File from your device here">
              Upload Damage Picture
            </label>
            <input type='file' ref={click} onChange={(e) => { setFilename(e.target.files[0].name)}} hidden />
                    <div className='upload-input'>
                        <Uploadicon />
                        <p>{filename}</p>
                        <p>Choose File from your device <span onClick={file}>here</span></p>
                    </div>
          </div>
          <div className="claim-type">
            <label htmlFor="">Upload Other Documents</label>
            <input type='file' ref={click} onChange={(e) => { setFilename(e.target.files[0].name)}} hidden />
                    <div className='upload-input'>
                        <Uploadicon />
                        <p>{filename}</p>
                        <p>Choose File from your device <span onClick={file}>here</span></p>
                    </div>
          </div>
          <div className="claim-notice">
            <h5>NB:</h5>
            <p>
              Claim will be settled within 5 working days after the receipt of
              executed discharge voucher.
            </p>
          </div>
          <div className="claim-submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Claims;
