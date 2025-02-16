import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../../../stylesheets/insuranceregister.css";
import { ReactComponent as Uploadicon } from "../../../assets/icons/uploadicon.svg";
import { useTravelpolicy } from "../../../hooks/buy_travelpolicy";
import Loader from "../../../components/Loader";

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
            <p>Intended Commencement date of cover</p>
            <p>{props.individual.cover_commencement_date}</p>
          </div>
          <div className="summary-list">
            <p>Duration of Trip</p>
            <p>{props.traveldata.trip_duration}</p>
          </div>
          <div className="summary-list">
            <p>Mode of Travel</p>
            <p>{props.traveldata.travel_mode}</p>
          </div>
          <div className="summary-list">
            <p>Place of Departure</p>
            <p>{props.traveldata.place_departure}</p>
          </div>
          <div className="summary-list">
            <p>Place of Arrival</p>
            <p>{props.traveldata.place_arrival}</p>
          </div>
          <div className="summary-list">
            <p>Address at Country of Visit</p>
            <p>{props.traveldata.address_country_of_visit}</p>
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

function Travelinsurance() {
  const [tab, setTab] = useState("");
  const click = useRef("");
  const [filename, setFilename] = useState();
  const [modalShow, setModalShow] = useState(false);
  const { travelquote, isquoteLoading, gettravelquote } = useTravelpolicy()
  const [individualdata, setIndividualData] = useState({
    "title": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "account_number": "",
    "phone": "",
    "gender": "",
    "house_address": "",
    "employer": "",
    "employer_address": "",
    "employer_phone": "",
    "employer_email": "",
    "cover_commencement_date": "",
    "picture": "",
    "next_of_kin": "",
    "next_of_kin_address": "",
    "next_of_kin_phone": "",
    "identification_means": "",
})
const [traveldata, setTraveldata] = useState(
  {
        "trip_duration":"",
        "travel_mode":"",
        "disability":"",
        "disability_details":"",
        "place_departure":'',
        "place_arrival":"",
        "address_country_of_visit":""
        }
)

const onchangeaction = (e) => {
  setIndividualData({...individualdata, [e.target.name]: e.target.value})
 }
  const file = () => {
    click.current.click();
  };
  return (
    <div className="report-content">
      <h5 className="report-title">Travel Insurance</h5>
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
            Additional Information
          </div>
        </div>
        <form className="insurance-form">
          <div
            className={`insurance-card-container ${tab === "" ? "" : "d-none"}`}
          >
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
              <label>Phone Number</label>
              <input type="number" name="phone" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Residential Address</label>
              <textarea rows={2} name="house_address" onChange={onchangeaction}/>
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
              <label>Employer Email Address</label>
              <input type="email" name="employer_email" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Date Of Commencement</label>
              <input type="date" name="cover_commencement_date" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin</label>
              <input type="text"name="next_of_kin" onChange={onchangeaction} />
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin Address</label>
              <textarea rows={2} name="next_of_kin_address" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin Phone Number</label>
              <input type="number" name="next_of_kin_phone" onChange={onchangeaction}/>
            </div>
            {/* <div className="report-inputgroup insurance-selectgroup">
              <label>Means Of Identity</label>
              <select>
                <option selected>select</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </div> */}
            <div className="report-inputgroup">
              <label>Upload Means Of Identity</label>
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
              <label>Duration Of Trip (Days)</label>
              <input type="text" onChange={(e) => setTraveldata({...traveldata, trip_duration: e.target.value})}/>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Mode Of Travel</label>
              <select placeholder="select" onChange={(e) => setTraveldata({...traveldata, travel_mode: e.target.value})}>
                <option defaultValue=''>select</option>
                <option value="Road">Road</option>
                <option value="Air">Air</option>
                <option value="Sea">Sea</option>
                <option value="Rail">Rail</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Any Disability/Sickness</label>
              <select placeholder="select" onChange={(e) => setTraveldata({...traveldata, disability: e.target.value})}>
                <option defaultValue=''>select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>If Yes, Give Details</label>
              <textarea rows={2} onChange={(e) => setTraveldata({...traveldata, disability_details: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Place Of Departure</label>
              <input type="text" onChange={(e) => setTraveldata({...traveldata, place_departure: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Place Of Arrival</label>
              <input type="text" onChange={(e) => setTraveldata({...traveldata, place_arrival: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Address at Country Of Visit</label>
              <textarea rows={2} onChange={(e) => setTraveldata({...traveldata, address_country_of_visit: e.target.value})}/>
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
          <div className={`insurance-checkbox ${tab === "" ? 'd-none' : ''}`}>
            <input type="checkbox" />
            <span>
              I have reviewed and agreed to the disclosure and{" "}
              <Link to='/terms&condition'>privacy policy</Link>
            </span>
          </div>
          <div className={`insurance-button-container ${tab === "" ? 'd-none' : ''}`}>
            <div className="insurance-back">
              <Link onClick={(e) => setTab("")}>Back</Link>
            </div>
            <div className="insurance-button">
              <button onClick={async(e) => { e.preventDefault(); await travelquote(setModalShow)}}>{isquoteLoading ? <Loader /> :'submit'}</button>
            </div>
          </div>
        </form>
      </div>
      <Summary show={modalShow} individual={individualdata} traveldata={traveldata} quote={gettravelquote} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Travelinsurance;
