import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../../../stylesheets/insuranceregister.css";
import { ReactComponent as Uploadicon } from "../../../assets/icons/uploadicon.svg";
import { useRiskPolicy } from "../../../hooks/buy_allriskpolicy";
import Loader from "../../../components/Loader";
import {useResources} from "../../../hooks/resources";
import {useSelector} from "react-redux";
import {RootState} from "../../../service/reducers/rootReducer.ts";

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
            <p>{props.type?.name}</p>
          </div>
          <div className="summary-list">
            <p>First Name</p>
            <p>{props.individual.first_name}</p>
          </div>
          <div className="summary-list">
            <p>Last Name</p>
            <p>{props.individual.last_name}</p>
          </div>
          {/*<div className="summary-list">*/}
          {/*  <p>Email</p>*/}
          {/*  <p>{props.individual.email}</p>*/}
          {/*</div>*/}
          <div className="summary-list">
            <p>Phone No</p>
            <p>{props.individual.phone}</p>
          </div>
          <div className="summary-list">
            <p>Premium Payable</p>
            <p>{props.quote.total}</p>
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
  const [modalShow, setModalShow] = useState(false);
  const AuthState = useSelector((state: RootState) => state.auth);
  const {userData: userdata} = AuthState
  const click = useRef("");
  const receiptClick = useRef("");
  const {getAllRiskItems, getTitles, getStates, data, loading} = useResources()
  const [filename, setFilename] = useState({});
  const [formData, setFormData] = useState({
    account_type: "Individual",
    contact_person: "",
    company_name: "",
    company_address: "",
    title_id: "",
    customer_id: "",
    all_risk_item_id: "",
    next_of_kin: "",
    mailing_address: "",
    state: "",
    start_date: "",
    item_name: "",
    item_value: "",
    total: "0",
    receipt: "",
    item_picture: "",
    serial_number: "",
    imei: "",
  });
  const {getAllRiskQuote, isQuoteLoading, riskQuote} = useRiskPolicy()
  const [insuranceType, setInsuranceType] = useState(null)

  const selectInsuranceType = (e) => {
    const {name, value} = e.target;
    const selectedItem = JSON.parse(value);
    setInsuranceType(selectedItem);
    setFormData((prev) => ({...prev, [name]: selectedItem.id}))

    console.log(selectedItem, name);
  }

  const onChange = (e) => {
    const {name, value} = e.target;

    // if (name === 'start_date'){
    //   setFormData((prev) => ({...prev, [name]: `${Math.ceil(numberdays(value))} days`}))
    //   return
    // }
    setFormData((prev) => ({...prev, [name]: value}))
  }

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
    setFormData((prev) => ({...prev, [name]: file}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("account_type", formData.account_type);
      formDataToSend.append("contact_person", formData.contact_person);
      formDataToSend.append("company_name", formData.company_name);
      formDataToSend.append("company_address", formData.company_address);
      formDataToSend.append("title_id", formData.title_id);
      formDataToSend.append("customer_id", formData.customer_id);
      formDataToSend.append("all_risk_item_id", formData.all_risk_item_id);
      formDataToSend.append("next_of_kin", formData.next_of_kin);
      formDataToSend.append("mailing_address", formData.mailing_address);
      formDataToSend.append("state", formData.state);
      formDataToSend.append("start_date", formData.start_date);
      formDataToSend.append("item_name", formData.item_name);
      formDataToSend.append("item_value", formData.item_value);
      formDataToSend.append("total", formData.total);
      formDataToSend.append("receipt", formData.receipt);
      formDataToSend.append("item_picture", formData.item_picture);
      formDataToSend.append("serial_number", formData.serial_number);
      formDataToSend.append("imei", formData.imei);

      const res = await getAllRiskQuote(formDataToSend);
      if (res) {
        setModalShow(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

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


  const file = () => {
    click.current.click();
  };

  const receiptFile = () => {
    receiptClick.current.click();
  };

useEffect(() => {
  Promise.all([
    getTitles(),
    getAllRiskItems(),
    getStates(),

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
              <select defaultValue={'Select'} name={'all_risk_item_id'}  onChange={selectInsuranceType}>
                <option >{loading ? "Loading" : "Select"}</option>
                {
                  data.allRiskItems.map((item, index) => (
                      <option key={index} value={JSON.stringify(item)}>{item.name}</option>
                  ))
                }
              </select>
            </div>
            <div className={`report-inputgroup ${insuranceType?.has_serial_number === 1 ? '' : 'd-none'}`} >
              <label>Serial Number</label>
              <input type="text" name={'serial_number'} onChange={onChange}/>
            </div>
            <div className={`report-inputgroup ${insuranceType?.has_imei === 1 ? '' : 'd-none'}`}>
              <label>IMEI</label>
              <input type="text" name={'imei'} onChange={onChange}/>
            </div>
            {/*<div className="report-inputgroup insurance-selectgroup">*/}
            {/*  <label>Type</label>*/}
            {/*  <select name="customer_type" onChange={onchangeaction}>*/}
            {/*  <option defaultValue='Select'>Select</option>*/}
            {/*    <option value="1">Individual</option>*/}
            {/*    <option value="2">Coperate</option>*/}
            {/*  </select>*/}
            {/*</div>*/}
            <div className="report-inputgroup insurance-selectgroup">
              <label>Prefix</label>
              <select name="title_id" onChange={onChange}>
                <option defaultValue={'select'} >{loading ? "Loading" : "Select"}</option>
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
            <div className="report-inputgroup">
              <label>Company Name</label>
              <input type="text" name="company_name" onChange={onChange} />
            </div>
            <div className="report-inputgroup">
              <label>Phone Number</label>
              <input type="number"  name="phone" value={individualdata.phone} readOnly={true} />
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Gender</label>
              <select defaultValue={'select'} name="gender" value={individualdata.gender} readOnly={true} >
                <option >Select</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>State</label>
              <select name="state" onChange={onChange}>
                <option defaultValue=''>Select</option>
                {
                  data?.states.map((title, index) => {
                    return <option key={index} value={title.name}>{title.name}</option>
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Office Address</label>
              <textarea rows={2} name="company_address" onChange={onChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Mailing Address</label>
              <textarea rows={2} name="mailing_address" onChange={onChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Contact Person</label>
              <input type="text" name="contact_person" onChange={onChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin</label>
              <input type="text" name="next_of_kin" onChange={onChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Picture Of Item</label>
              <input
                type="file"
                ref={click}
                name={'item_picture'}
                onChange={handleImageUpload}
                hidden
              />
              <div className="upload-input">
                <Uploadicon />
                <p>{filename.item_picture}</p>
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
              <input type="text" name={'item_name'} onChange={onChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Item Value</label>
              <input type="text" name={'item_value'} onChange={onChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Policy Period</label>
              <input type="date" name={'start_date'} onChange={onChange}/>
            </div>
            <div className={`report-inputgroup ${insuranceType?.has_serial_number === 1 ? '' : 'd-none'}`}>
              <label>Item Serial Number</label>
              <input type="text" name={'serial_number'} onChange={onChange}/>
            </div>
            <div className={`report-inputgroup ${insuranceType?.has_imei === 1 ? '' : 'd-none'}`}>
              <label>Item IMEI Number</label>
              <input type="text" name={'imei'} onChange={onChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Picture Of Receipt</label>
              <input
                type="file"
                ref={receiptClick}
                name={'receipt'}
                onChange={handleImageUpload}
                hidden
              />
              <div className="upload-input">
                <Uploadicon />
                <p>{filename.receipt}</p>
                <p>
                  Choose File from your device <span onClick={receiptFile}>here</span>
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
            <div className="insurance-button" onClick={handleSubmit}>
              <button>{isQuoteLoading ? <Loader /> :'submit'}</button>
            </div>
          </div>
        </form>
      </div>
      <Summary show={modalShow} type={insuranceType} individual={individualdata} quote={riskQuote} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Allrisk;
