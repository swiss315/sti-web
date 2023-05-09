import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../stylesheets/insuranceregister.css";
import { ReactComponent as Uploadicon } from "../assets/icons/uploadicon.svg";
import { useMarinepolicy } from "../hooks/buy_marinepolicy";
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
            <p>Phone No</p>
            <p>{props.individual.phone}</p>
          </div>
          <div className="summary-list">
            <p>Mailing Address</p>
            <p>{props.individual.mailing_address}</p>
          </div>
          <div className="summary-list">
            <p>Residential Address</p>
            <p>{props.individual.house_address}</p>
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


function Marineinsurance() {
  const [type, setType] = useState("1");
  const [tab, setTab] = useState("");
  const click = useRef("");
  const [modalShow, setModalShow] = useState(false);
  const { marinequote, isquoteLoading, getmarinequote } = useMarinepolicy()
  const [filename, setFilename] = useState();
  const [individualdata, setIndividualData] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": "",
    "phone": "",
    "house_address": "",
    "account_number": "",
    "marital_status": "",
    "picture": "",
    "identification_means": "",
    "next_of_kin": "",
    "next_of_kin_phone": "",
    "next_of_kin_address": "",
    "employer": "",
    "employer_address": "",
    "customer_type": "",
    "company_name": "",
    "mailing_address": "",
    "tin_number": "",
    "office_address": "",
    "contact_person": ""
})
const [marinedata, setMarinedata] = useState(
  {
        "period":"",
        "policy_type":"",
        "description":"",
        "pfi_number":"", 
        "pfi_date":'',
        "quantity":"",
        "value":"",
        "conversion_rate":"",
        "loading_port":"",
        "discharge_port":"", 
        "conveyance_mode":'',
        "price":"",
        "pictures": []
        }
)
const [quote, setQuote] = useState({
  'value': '',
  'conversion_rate': '',
})

console.log(quote);
const onchangeaction = (e) => {
  setIndividualData({...individualdata, [e.target.name]: e.target.value})
 }

  const file = () => {
    click.current.click();
  };
  return (
    <div className="report-content">
      <h5 className="report-title">Marine Insurance</h5>
      <div className="">
        <div className="insurance-tab">
          <div className={tab === "" ? "active" : ""}>Personal Information</div>
          <div className={tab === "next" ? "active" : ""}>
            Cargo Information
          </div>
        </div>
        <form className={`insurance-form `}>
          <div
            className={`insurance-card-container ${tab === "" ? "" : "d-none"}`}
          >
            <div className="report-inputgroup insurance-selectgroup">
              <label>Type</label>
              <select onChange={(e) => {setType(e.currentTarget.value); setIndividualData({...individualdata, customer_type: e.target.value})} }>
                <option value="1">Individual</option>
                <option value="2">Coperate</option>
              </select>
            </div>
            <div className={`individual ${type === '1' ? 'd-block' : 'd-none'}`}>
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
                <input type="email" name="email" onChange={onchangeaction} />
              </div>
              <div className="report-inputgroup insurance-selectgroup">
                <label>Gender</label>
                <select name="gender" onChange={onchangeaction}>
                <option >Select</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <div className="report-inputgroup">
                <label>Phone Number</label>
                <input type="number" name="phone" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Residential Address</label>
                <textarea rows={2} name="house_address" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup insurance-selectgroup">
                <label>Marital Status</label>
                <select name="marital_status" onChange={onchangeaction}>
                <option >Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widow">Widow</option>
                </select>
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
                <label>Employer</label>
                <input type="text" name="employer" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Employer Address</label>
                <textarea rows={2} name="employer_address" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Tin Number</label>
                <input type="text" name="tin_number" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Contact Person</label>
                <input type="text" name="contact_person" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Mailing Address</label>
                <textarea rows={2} name="mailing_address" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Upload Your CAC</label>
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
                    Choose File from your device{" "}
                    <span onClick={file}>here</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`coperate ${type === '2' ? 'd-block' : 'd-none'}`}>
              <div className="report-inputgroup">
                <label>Company Name</label>
                <input type="text" name="company_name" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Email Address</label>
                <input type="email" name="email" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Office Address</label>
                <textarea rows={2} name="office_address" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Phone Number</label>
                <input type="number" name="phone" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Tin Number</label>
                <input type="text" name="tin_number" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Contact Person</label>
                <input type="text" name="contact_person" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Mailing Address</label>
                <textarea rows={2} name="mailing_address" onChange={onchangeaction}/>
              </div>
              <div className="report-inputgroup">
                <label>Upload Means Of Identification</label>
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
                    Choose File from your device{" "}
                    <span onClick={file}>here</span>
                  </p>
                </div>
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
          <div
            className={`insurance-checkbox ${tab === "next" ? "d-none" : ""}`}
          >
            <input type="checkbox" />
            <span>
              I have reviewed and agreed to the disclosure and{" "}
              <Link to='/terms&condition'>privacy policy</Link>
            </span>
          </div>
          <div className={`insurance-next ${tab === "next" ? "d-none" : ""}`}>
            <div onClick={(e) => setTab("next")}>Next</div>
          </div>
          <div
            className={`insurance-card-container ${
              tab === "next" ? "" : "d-none"
            }`}
          >
            <div className="report-inputgroup">
              <label>Period</label>
              <input type="date" onClick={(e) => setMarinedata({...marinedata, period: e.target.value})}/>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Marine Policy Type</label>
              <select placeholder="select" onChange={(e) => setMarinedata({...marinedata, policy_type: e.target.value})}>
                <option defaultValue=''>select</option>
                <option value="Single Transit Policy">Single Transit Policy</option>
                <option value="Open Cover Policy'">Open Cover Policy'</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Description</label>
              <textarea rows={2} onChange={(e) => setMarinedata({...marinedata, description: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Proforma Invoice Number</label>
              <input type="text" onChange={(e) => setMarinedata({...marinedata, pfi_number: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Date Of Proforma Invoice</label>
              <input type="date" onChange={(e) => setMarinedata({...marinedata, pfi_date: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Quantity</label>
              <input type="text" onChange={(e) => setMarinedata({...marinedata, quantity: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Value</label>
              <input type="text" onChange={(e) => {setMarinedata({...marinedata, value: e.target.value}); setQuote({...quote, value: e.target.value})}}/>
            </div>
            <div className="report-inputgroup">
              <label>Conversion Rate</label>
              <input type="text" onChange={(e) => {setMarinedata({...marinedata, conversion_rate: e.target.value}); setQuote({...quote, conversion_rate: e.target.value})}}/>
            </div>
            <div className="report-inputgroup">
              <label>Loading Port</label>
              <input type="text" onChange={(e) => setMarinedata({...marinedata, loading_port: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Discharge Port</label>
              <input type="text" onChange={(e) => setMarinedata({...marinedata, discharge_port: e.target.value})}/>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Mode Of Conveyance</label>
              <select placeholder="select" onChange={(e) => setMarinedata({...marinedata, conveyance_mode: e.target.value})}>
                <option defaultValue=''>
                  select
                </option>
                <option value="Air">Air</option>
                <option value="Sea">Sea</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Front View Of Vehicle</label>
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
            <div className="report-inputgroup">
              <label></label>
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
            <div className="report-inputgroup">
              <label></label>
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
            <div className="report-inputgroup">
              <label></label>
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
              I have reviewed and agreed to the disclosure and{" "}
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
              <button onClick={(e) => {e.preventDefault(); marinequote(quote, setModalShow)}}>{isquoteLoading ? <Loader/> : 'Submit'}</button>
            </div>
          </div>
        </form>
      </div>
      <Summary show={modalShow} individual={individualdata} marine={marinedata} quote={getmarinequote} onHide={() => setModalShow(false)}/>
    </div>
  );
}

export default Marineinsurance;
