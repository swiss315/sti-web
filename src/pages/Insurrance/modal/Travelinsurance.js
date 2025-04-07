import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../../../stylesheets/insuranceregister.css";
import { ReactComponent as Uploadicon } from "../../../assets/icons/uploadicon.svg";
import { useTravelpolicy } from "../../../hooks/buy_travelpolicy";
import Loader from "../../../components/Loader";
import {useSelector} from "react-redux";
import {RootState} from "../../../service/reducers/rootReducer.ts";
import {useResources} from "../../../hooks/resources";

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
  const AuthState = useSelector((state: RootState) => state.auth);
  const {userData: userdata} = AuthState
  console.log(userdata)
  const [tab, setTab] = useState("");
  const click = useRef("");
  const [filename, setFilename] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const {getTitles, getIdTypes, getStates, data} = useResources()
  const { isQuoteLoading, gettravelquote, buyPolicy } = useTravelpolicy()
  const [individualdata, setIndividualData] = useState({
    "title_id": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "account_number": "",
    "phone": "",
    "gender": "",
    "house_address": "",
    "employer_name": "",
    "employer_address": "",
    "employer_phone": "",
    "employer_email": "",
    "date_of_commencement": "",
    "id_type_id": "",
    "picture": "",
    "next_of_kin": "",
    "next_of_kin_address": "",
    "next_of_kin_phone": "",
    "id_image": "",
})
  const [traveldata, setTraveldata] = useState(
    {
          "trip_duration":"",
          "travel_mode":"",
          "disabled":"",
          "disability":"",
          "departure":'',
          "arrival":"",
          "address_country_of_visit":""
          }
  )

  const onchangeaction = (e) => {
  setIndividualData({...individualdata, [e.target.name]: e.target.value})
 }
  const file = () => {
    click.current.click();
  };

  const handleImageUpload = (e) => {
    const {name} = e.target;
    const file = e.target.files[0];

    if (!file) return;

    // Validate file size (max 2MB)
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes
    if (file.size > maxSize) {
      alert("File size must be less than 2MB");
      return;
    }

    // Validate file type (only PNG, JPG, JPEG)
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only PNG, JPG, and JPEG files are allowed");
      return;
    }

    // Update state with file (for FormData)
    setFilename((prev) => ({...prev, [name]: file.name}));
    setIndividualData((prev) => ({...prev, [name]: file}))

  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title_id", individualdata.title_id);

      formData.append("employer_name", individualdata.employer_name);
      formData.append("employer_email", individualdata.employer_email);
      formData.append("employer_address", individualdata.employer_address);
      formData.append("date_of_commencement", individualdata.date_of_commencement);
      formData.append("next_of_kin", individualdata.next_of_kin);
      formData.append("next_of_kin_address", individualdata.next_of_kin_address);
      formData.append("next_of_kin_phone", individualdata.next_of_kin_phone);
      formData.append("id_type_id", individualdata.id_type_id);
      formData.append("id_image", individualdata.id_image);
      formData.append("trip_duration", traveldata.trip_duration);
      formData.append("travel_mode", traveldata.travel_mode);
      formData.append("disabled", traveldata.disabled);
      formData.append("disability", traveldata.disability);
      formData.append("departure", traveldata.departure);
      formData.append("arrival", traveldata.arrival);
      formData.append("visitation_address", formData.visitation_address);
      formData.append("total", formData.total);

      const res = await buyPolicy(formData)
      if (res) {
        setModalShow(true);
      }
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    Promise.all([
      getTitles(),
      getStates(),
      getIdTypes(),
    ])

    if (userdata) {
      setIndividualData((prev) => ({
        ...prev,
        first_name: userdata.firstname,
        last_name: userdata.lastname || "",
        email: userdata.email || "",
        phone: userdata.phone || "",
        gender: userdata.gender || "",
      }));  // Default to empty if undefined
    }
  }, [])
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
              <select name="title_id" onChange={onchangeaction}>
                <option defaultValue={'select'}>select</option>
                {
                  data?.titles.map((title, index) => {
                    return <option key={index} value={title.id}>{title.name}</option>
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup">
              <label>First Name</label>
              <input type="text" name='first_name' readOnly={true} value={individualdata.first_name}/>
            </div>
            <div className="report-inputgroup">
              <label>Last Name</label>
              <input type="text" readOnly={true} value={individualdata.last_name}/>
            </div>
            <div className="report-inputgroup">
              <label>Email Address</label>
              <input type="email" readOnly={true} value={individualdata.email}/>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Gender</label>
              <select aria-readonly={true} value={individualdata.gender}>
                <option>Select</option>
                <option value="Male">male</option>
                <option value="Female">female</option>
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
              <input type="text" name="employer_name" onChange={onchangeaction}/>
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
              <input type="date" name="date_of_commencement" onChange={onchangeaction}/>
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin</label>
              <input type="text" name="next_of_kin" onChange={onchangeaction} />
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
              <label>Means of Id Type</label>
              <select name='id_type_id' onChange={onchangeaction}>
                <option>Select</option>
                {
                  data?.ID.map((title, index) => {
                    return <option key={index} value={title.id}>{title.name}</option>
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Upload Means Of Identity</label>
              <input
                type="file"
                name='id_image'
                ref={click}
                onChange={handleImageUpload}
                hidden
              />
              <div className="upload-input">
                <Uploadicon />
                <p>{filename.id_image}</p>
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
              <input type="text" name={'trip_duration'} onChange={(e) => setTraveldata({...traveldata, trip_duration: e.target.value})}/>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Mode Of Travel</label>
              <select placeholder="select" name={'travel_mode'} onChange={(e) => setTraveldata({...traveldata, travel_mode: e.target.value})}>
                <option defaultValue=''>select</option>
                <option value="Road">Road</option>
                <option value="Air">Air</option>
                <option value="Sea">Sea</option>
                <option value="Rail">Rail</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Any Disability/Sickness</label>
              <select placeholder="select" onChange={(e) => setTraveldata({...traveldata, disabled: e.target.value})}>
                <option defaultValue=''>select</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>If Yes, Give Details</label>
              <textarea rows={2} onChange={(e) => setTraveldata({...traveldata, disability: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Place Of Departure</label>
              <input type="text" onChange={(e) => setTraveldata({...traveldata, departure: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Place Of Arrival</label>
              <input type="text" onChange={(e) => setTraveldata({...traveldata, arrival: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Address at Country Of Visit</label>
              <textarea rows={2} onChange={(e) => setTraveldata({...traveldata, visitation_address: e.target.value})}/>
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
              <button onClick={async(e) => { e.preventDefault(); await handleSubmit()}}>{isQuoteLoading ? <Loader /> :'submit'}</button>
            </div>
          </div>
        </form>
      </div>
      <Summary show={modalShow} individual={individualdata} traveldata={traveldata} quote={gettravelquote} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Travelinsurance;
