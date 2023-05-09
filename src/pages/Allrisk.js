import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../stylesheets/insuranceregister.css";
import { ReactComponent as Uploadicon } from "../assets/icons/uploadicon.svg";
import { useRiskPolicy } from "../hooks/buy_allriskpolicy";
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
            <p>Insurance Type</p>
            <p>{props.type}</p>
          </div>
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

function Allrisk() {
  const [tab, setTab] = useState("");
  const [type, setType] = useState('');
  const click = useRef("");
  const [modalShow, setModalShow] = useState(false);
  const { riskquote, getriskquote, isquoteLoading } = useRiskPolicy();
  const [filename, setFilename] = useState();
  const [insurancetype, setInsuranceType] = useState('')
  const [individualdata, setIndividualData] = useState({
    "customer_type": "",
    "title": "",
    "first_name": "",
    "last_name": "",
    "company_name": "",
    "email": "",
    "phone": "",
    "gender": "",
    "house_address": "",
    "office_address": "",
    "mailing_address": "",
    "next_of_kin": "",
    "contact_person": "",
    "picture": ""
})
const [allriskdata, setAllRiskData] = useState(
  {
        "item":"",
        "value":"",
        "period":"",
        "receipt":"", 
        "serial":'',
        "imei":""
        }
)
const [quote, setQuote] = useState({
  'sum_insured': ''
})
console.log(individualdata, allriskdata);
const onchangeaction = (e) => {
 setIndividualData({...individualdata, [e.target.name]: e.target.value})
}

const numberdays = (date) => {
  let date1 = new Date(); 
  let date2 = new Date(date);
  let  Difference_In_Time  = date2.getTime() - date1.getTime();
  let days_difference = Difference_In_Time / (1000 * 3600 * 24);
  return days_difference 
}

  const file = () => {
    click.current.click();
  };
  return (
    <div className="report-content">
      <h5 className="report-title">All Risk Insurance</h5>
      <div className="">
        <div className="insurance-tab">
          <div
            className={tab === "" ? "active" : ""}
            
          >
            Personal Information
          </div>
          <div
            className={tab === "next" ? "active" : ""}
          >
            Item Details
          </div>
        </div>
        <form className="insurance-form"
        >
          <div className={`insurance-card-container ${
              tab === "next" ? "d-none" : ""
            }`}>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Insurance Type </label>
              <select defaultValue={'Select'}  onChange={(e) => {setInsuranceType(e.target.value); setAllRiskData({...allriskdata, item: e.target.value})}}>
                <option >Select</option>
                <option value="Laptop">Laptop</option>
                <option value="Mobile Phone">Mobile Phone</option>
                <option value="Jewellery">Jewellery</option>
                <option value="Wrist_Watch">Wrist Watch</option>
                <option value="Camera">Camera</option>
                <option value="Paintings">Paintings</option>
                <option value="art">Works of Art</option>
              </select>
            </div>
            <div className={`report-inputgroup ${insurancetype === 'Mobile Phone' || insurancetype === 'Laptop' ? '' : 'd-none'}`} onChange={(e) => setAllRiskData({...allriskdata, serial: e.target.value})}>
              <label>Serial Number</label>
              <input type="text" onChange={(e) => setAllRiskData({...allriskdata, serial: e.target.value})}/>
            </div>
            <div className={`report-inputgroup ${insurancetype === 'Mobile Phone' ? '' : 'd-none'}`} onChange={(e) => setAllRiskData({...allriskdata, imei: e.target.value})}>
              <label>IMEI</label>
              <input type="text" onChange={(e) => setAllRiskData({...allriskdata, imei: e.target.value})}/>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Type</label>
              <select name="customer_type" onChange={onchangeaction}>
              <option defaultValue='Select'>Select</option>
                <option value="1">Individual</option>
                <option value="2">Coperate</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Prefix</label>
              <select name="title" onChange={onchangeaction}>
                <option defaultValue={'select'} >select</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Prof.">Prof.</option>
                <option value="Chief.">Chief.</option>
                <option value="Dr.">Dr.</option>
                <option value="Hrm.">Hrm.</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>First Name</label>
              <input type="text" name="first_name" onChange={onchangeaction} />
            </div>
            <div className="report-inputgroup">
              <label>Last Name</label>
              <input type="text" name="last_name" onChange={onchangeaction} />
            </div>
            <div className="report-inputgroup">
              <label>Email Address</label>
              <input type="email" name="email" onChange={onchangeaction} />
            </div>
            <div className="report-inputgroup">
              <label>Company Name</label>
              <input type="text" name="company_name" onChange={onchangeaction} />
            </div>
            <div className="report-inputgroup">
              <label>Phone Number</label>
              <input type="number"  name="phone" onChange={onchangeaction} />
            </div>
            <div className="report-inputgroup">
              <label>Residential Address</label>
              <textarea rows={2} name="house_address" onChange={onchangeaction} />
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Gender</label>
              <select defaultValue={'select'} name="gender" onChange={onchangeaction} >
                <option >Select</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Office Address</label>
              <textarea rows={2} name="office_address" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Mailing Address</label>
              <textarea rows={2} name="mailing_address" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Contact Person</label>
              <input type="text" name="contact_person" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Picture Of Item</label>
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
          <div className={`insurance-checkbox ${tab === 'next' ? 'd-none' : ''}`}>
            <input type="checkbox" />
            <span>
              I have reviewed and agreed to the disclosure and{" "}
              <Link to='/terms&condition'>privacy policy</Link>
            </span>
          </div>
          <div className={`insurance-next ${tab === 'next' ? 'd-none' : ''}`}>
            <div onClick={(e) => setTab("next")}>Next</div>
          </div>
          <div
            className={`insurance-card-container ${
              tab === "next" ? "" : "d-none"
            }`}
          >
            <div className="report-inputgroup">
              <label>Item Name</label>
              <input type="text" onChange={(e) => setAllRiskData({...allriskdata, item: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Item Value</label>
              <input type="text" onChange={(e) => {setAllRiskData({...allriskdata, value: e.target.value}); setQuote({...quote, sum_insured: e.target.value})}}/>
            </div>
            <div className="report-inputgroup">
              <label>Policy Period</label>
              <input type="date" onChange={(e) => setAllRiskData({...allriskdata, period: `${Math.ceil(numberdays(e.target.value))} days`})}/>
            </div>
            <div className="report-inputgroup">
              <label>Item Serial Number</label>
              <input type="text"  onChange={(e) => setAllRiskData({...allriskdata, serial: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Item IMEI Number</label>
              <input type="text" onChange={(e) => setAllRiskData({...allriskdata, imei: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Picture Of Receipt</label>
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
          <div className={`insurance-checkbox ${tab === "" ? "d-none" : ""}`}>
            <input type="checkbox" />
            <span>
              I have reviewed and agreed to the disclosure and{' '}
              <Link to='/terms&condition'>privacy policy</Link>
            </span>
          </div>
          <div
            className={`insurance-button-container ${
              tab === "" ? "d-none" : ""
            }`}
          >
            <div className="insurance-back">
              <Link onClick={(e) => setTab("")}>Back</Link>
            </div>
            <div className="insurance-button">
              <button onClick={async(e) => { e.preventDefault(); await riskquote(quote, setModalShow)}}>{isquoteLoading ? <Loader /> :'submit'}</button>
            </div>
          </div>
        </form>
      </div>
      <Summary show={modalShow} type={insurancetype} individual={individualdata} allrisk={allriskdata} quote={getriskquote} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Allrisk;
