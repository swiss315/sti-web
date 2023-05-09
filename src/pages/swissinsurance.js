import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/insuranceregister.css";
import Modal from 'react-bootstrap/Modal';
import { ReactComponent as Uploadicon } from "../assets/icons/uploadicon.svg";
import { useSwisspolicy } from "../hooks/buy_swisspolicy";
import Loader from "../components/Loader";

function Summary(props) {
  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Summary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="summary-list">
            <p>First Name</p>
            <p>{props.individual.first_name}</p>
          </div>
          <div className="summary-list">
            <p>Last Name</p>
            <p>{props.individual.last_name}</p>
          </div>
          <div className="summary-list">
            <p>Email</p>
            <p>{props.individual.email}</p>
          </div>
          <div className="summary-list">
            <p>Phone No</p>
            <p>{props.individual.phone}</p>
          </div>
          <div className="summary-list">
            <p>Premium Payable</p>
            <p>{props.quote.price}</p>
          </div>
            <button className="summary-button" >
              Submit
            </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Swissinsurance() {
  const click = useRef("");
  const [filename, setFilename] = useState();
  const [modalShow, setModalShow] = useState(false);
  const { swissquote, isquoteLoading, getswissquote } = useSwisspolicy()
  const [individualdata, setIndividualData] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": "", 
    "date_of_birth": "",
    "phone": "",
    "house_address": "",
    "account_number": "",
    "marital_status": "",
    "picture": "",
    "next_of_kin": "",
    "next_of_kin_phone": "",
    "next_of_kin_address": "",
    "disability": ""
})
const [swissdata, setSwissData] = useState(
  {
        "period":""
        }
)
const [quote, setQuote] = useState({
  'date_of_birth': ''
})

const onchangeaction = (e) => {
  setIndividualData({...individualdata, [e.target.name]: e.target.value})
 }

  const file = () => {
    click.current.click();
  };
  return (
    <div className="report-content">
      <h5 className="report-title">Swiss-F Insurance</h5>
      <div className="">
        <form className="insurance-form">
          <div
            className={`insurance-card-container `}
          >
            <div className="report-inputgroup">
              <label>Period</label>
              <input type="date" />
            </div>
            <div className="report-inputgroup">
              <label>First Name</label>
              <input type="text" name="first_name" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Last Name</label>
              <input type="text" name="last_name" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Email Address</label>
              <input type="email" name="email" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Gender</label>
              <select name="gender" onChange={onchangeaction}>
                <option defaultValue=''>Select</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Date Of Birth</label>
              <input type="date" name="date_of_birth" onChange={(e) => {setQuote({...quote, [e.target.name]: e.target.value}); setIndividualData({...individualdata, [e.target.name]: e.target.value})}}/>
            </div>
            <div className="report-inputgroup">
              <label>Phone Number</label>
              <input type="number" name="phone" onChange={onchangeaction} />
            </div>
            <div className="report-inputgroup">
              <label>Residential Address</label>
              <textarea rows={2} name="house_address" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin</label>
              <input type="text" name="next_of_kin" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin Address</label>
              <textarea rows={2} name="next_of_kin_address" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin Phone Number</label>
              <input type="number" name="next_of_kin_phone" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Disability</label>
              <input type="text" name="disability" onChange={onchangeaction}/>
            </div>
            {/* <div className="report-inputgroup">
              <label>Describe Disability</label>
              <textarea rows={2} />
            </div> */}
            <div className="report-inputgroup">
              <label>Upload Passport</label>
              <input
                type="file"
                ref={click}
                onChange={(e) => {
                  setFilename(e.target.files[0].name);
                }}
                hidden
              />
              <div className="upload-input">
                <Uploadicon />
                <p>{filename}</p>
                <p>
                  Choose File from your device <span onClick={file}>here</span>
                </p>
              </div>
            </div>
            <div className="insurance-disclosure">
              <h6>Information Disclosure:</h6>
              <p>
                I declare to the best of my knowledge and belief that the above
                information are true and all necessary particulars affecting the
                assessment of the risk have been disclosed.
              </p>
            </div>
          </div>
          <div className={`insurance-checkbox `}>
            <input type="checkbox" />
            <span>
              I have reviewed and agreed to the disclosure and <Link to='/terms&condition'>privacy policy</Link>
            </span>
          </div>
          <div className={`insurance-button`}>
            <button onClick={(e) => {e.preventDefault(); swissquote(quote, setModalShow)}}>{isquoteLoading ? <Loader /> :'submit'}</button>
          </div>
        </form>
      </div>
      <Summary show={modalShow} individual={individualdata} swiss={swissdata} quote={getswissquote} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Swissinsurance;
