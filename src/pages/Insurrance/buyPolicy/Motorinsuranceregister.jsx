import React, { useEffect, useRef, useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../../../stylesheets/insuranceregister.css";
import { ReactComponent as Uploadicon } from "../../../assets/icons/uploadicon.svg";
import { useVechicleBrand } from "../../../hooks/vehiclebrand";
import { useBuyvehiclepolicy } from "../../../hooks/buy_vehiclepolicy";
import Loader from "../../../components/Loader";
import {useResources} from "../../../hooks/resources";

function Summary(props) {
  const {buyVehicle, isLoading: isBuyLoading } = useBuyvehiclepolicy()

  const buyVehicleInsurance = async () => {
     await buyVehicle(props.individual, props.vehicle)
  }

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
            <p>Gender</p>
            <p>{props.individual.gender}</p>
          </div>
          <div className="summary-list">
            <p>Residential Address</p>
            <p>{props.individual.house_address}</p>
          </div>
          <div className="summary-list">
            <p>Mailing Address</p>
            <p>{props.individual.mailing_address}</p>
          </div>
          <div className="summary-list">
            <p>Next of Kin</p>
            <p>{props.individual.next_of_kin}</p>
          </div>
          <div className="summary-list">
            <p>Premium Payable</p>
            <p>{props.quote.price}</p>
          </div>
            <button className="summary-button"  onClick={buyVehicleInsurance}>
               {isBuyLoading ? <Loader /> : 'Submit'}
            </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Motorinsuranceregister() {
  const [type, setType] = useState('Individual');
  const [tab, setTab] = useState("");
  const {getTitles, getIdTypes, getStates, getInsurancePolicyType, data, isLoading, getVehicleClass,
    getVehicleMakes,
    getVehicleModel,
    getVehicleUsages} = useResources()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const policyId = queryParams.get("id");
  const navigate = useNavigate();
  const click = useRef("");
  const frontClick = useRef("");
  const backClick = useRef("");
  const leftClick = useRef("");
  const rightClick = useRef("");
  const clickId = useRef("");
  const [filename, setFilename] = useState({});
  const VerifyData = useRef(false)
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
  const [vechicleData, setVechicleData] = useState({
    title_id: "",
    make_id: "",
    model_id: "",
    vehicle_value: "",
    usage_id: "",
    class_id: "",
    policy_type_id: "",
    total: "",
    account_type: "", // "Individual" or "Corporate"
    company_name: "",
    company_address: "",
    quote_id: "",
    plate_number: "",
    drivers_license: "",
    vehicle_color: "",
    chasis_number: "",
    engine_number: "",
    year_of_registration: "",
    vehicle_state: "",
    id_type: "",
    id_number: "",
    id_file: null, // Assuming file upload
    back_view: null, // Image files
    front_view: null,
    left_view: null,
    right_view: null
  });
  const [years, setYears] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const { vehiclequote, getvehiclequote, isquoteLoading, buyPolicy } = useBuyvehiclepolicy()

  const file = () => {
    click.current.click();
  };
  console.log(filename, individualdata)
  const checkField = (individualdata) => {
    const {
      first_name,
      last_name,
      email,
      gender,
      phone,
      house_address,
      marital_status,
      next_of_kin,
      next_of_kin_address,
      next_of_kin_phone,
      mailing_address,
      identification_means,
    } = individualdata;

    return (
        first_name.trim() !== "" &&
        last_name.trim() !== "" &&
        email.trim() !== "" &&
        gender.trim() !== "" &&
        phone.trim() !== "" &&
        house_address.trim() !== "" &&
        marital_status.trim() !== "" &&
        next_of_kin.trim() !== "" &&
        next_of_kin_address.trim() !== "" &&
        next_of_kin_phone.trim() !== "" &&
        mailing_address.trim() !== "" &&
        identification_means
    );
  }

  const verifyField = checkField(individualdata);

  if (verifyField) {
    // All fields are filled
    VerifyData.current = true
    console.log("All fields are filled.", VerifyData.current);
  } else {
    // Some fields are empty
    console.log("Some fields are empty.");
  }

  const handleTabChange = () => {
    // if (VerifyData.current) {
    //   setTab("next");
    // }
    setTab("next");

  };
  const handleImageUpload = (e) => {
    const {name, value} = e.target;
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
    setVechicleData((prev) => ({...prev, [name]: value}))
  };


  // const handleVehicleImage = (e) => {
  //   const file = e.target.files[0];
  //   setFilename({...filename, [e.target.name] : e.target.files[0].name});
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const base64String = e.target.result;
  //       const currentState = vechicleData;
  //
  //       // Create a copy of the object and update the array
  //       const updatedState = {
  //         ...currentState,
  //         myArray: [...currentState.pictures, base64String],
  //       };
  //       setVechicleData(updatedState);
  //       // console.log(base64String)
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleOnChange = async (e) => {
    const {name, value} = e.target;
    setVechicleData((prev) => ({...prev, [name]: value}))
    if (name === 'make_id') {
      console.log(value, 'value')
      await getVehicleModel(value)
    }

    if (name === 'policy_type_id') {
      const policyTotal = data.policyType.find(policy => policy.id.toString() === value)?.rate || "";
      console.log(policyTotal, 'policyTotal')
      setVechicleData(prevState => ({...prevState, total: policyTotal}));

    }
  }

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title_id", vechicleData.title_id);
      formData.append("make_id", vechicleData.make_id);
      formData.append("model_id", vechicleData.model_id);
      formData.append("vehicle_value", vechicleData.vehicle_value);
      formData.append("usage_id", vechicleData.usage_id);
      formData.append("class_id", vechicleData.class_id);
      formData.append("policy_type_id", vechicleData.policy_type_id);
      formData.append("total", vechicleData.total);
      formData.append("account_type", vechicleData.account_type);
      formData.append("company_name", vechicleData.company_name);
      formData.append("company_address", vechicleData.company_address);


      await buyPolicy(formData)
    } catch (e) {
      console.log(e)
    }
  }


  if (policyId === null) {
    navigate('/dashboard');
  }
  const year = function yearlist(startYear = 2008) {
    const endDate = new Date().getFullYear();
    let years = [];

    while (startYear <= endDate) {
      years.push(startYear);
      startYear++;
    }
    setYears(years)
}
  useEffect(() => {
    Promise.all([
    getInsurancePolicyType(policyId),
    getTitles(),
      getIdTypes(),
      getStates(),
      getVehicleClass(),
    getVehicleUsages(),
    getVehicleMakes(),
    year(),
    ])
  }, [])

  return (
    <div className="report-content">
      <h5 className="report-title">Motor Insurance</h5>
      <div className="">
        <div className="insurance-tab">
          <div className={tab === "" ? "active" : ""}>Personal Information</div>
          <div className={tab === "next" ? "active" : ""}>
            Vehicle Information
          </div>
        </div>
        <form className={`insurance-form`}>
          <div
            className={`insurance-card-container ${tab === "" ? "" : "d-none"}`}
          >
            <div className="report-inputgroup insurance-selectgroup">
              <label>Type</label>
              <select name='account_type' onChange={handleOnChange}>
                <option defaultValue="Individual">Individual</option>
                <option value="Coperate">Corporate</option>
              </select>
            </div>
            <div className={`individual ${type === 'Individual' ? 'd-block' : 'd-none'}`}>
              <div className="report-inputgroup insurance-selectgroup">
                <label>Prefix</label>
                <select name="title_id" onChange={handleOnChange} >
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
                <input type="text" name='first_name' onChange={(e) => setIndividualData({...individualdata, first_name : e.target.value})}/>
              </div>
              <div className="report-inputgroup">
                <label>Last Name</label>
                <input type="text" onChange={(e) => setIndividualData({...individualdata, last_name : e.target.value})}/>
              </div>
              <div className="report-inputgroup">
                <label>Email Address</label>
                <input type="email" onChange={(e) => setIndividualData({...individualdata, email : e.target.value})}/>
              </div>
              <div className="report-inputgroup insurance-selectgroup">
                <label>Gender</label>
                <select onChange={(e) => setIndividualData({...individualdata, gender : e.currentTarget.value})}>
                  <option >Select</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <div className="report-inputgroup">
                <label>Phone Number</label>
                <input type="number" onChange={(e) => setIndividualData({...individualdata, phone : e.target.value})}/>
              </div>
              <div className="report-inputgroup">
                <label>Residential Address</label>
                <textarea rows={2} onChange={(e) => setIndividualData({...individualdata, house_address : e.target.value})} />
              </div>
              <div className="report-inputgroup insurance-selectgroup">
                <label>State Of Residence</label>
                <select name="vehicle_state" onChange={handleOnChange}>
                  <option defaultValue=''>Select</option>
                  {
                    data?.states.map((title, index) => {
                      return <option key={index} value={title.id}>{title.name}</option>
                    })
                  }
                </select>
              </div>
              <div className="report-inputgroup">
                <label>Company Name</label>
                <input type="text" name='company_name' onChange={handleOnChange} />
              </div>
              <div className="report-inputgroup">
                <label>Company Address</label>
                <textarea rows={2} name='company_address'  onChange={handleOnChange}/>
              </div>
              <div className="report-inputgroup">
                <label>Driver License Number</label>
                <input type="text" name='drivers_license' onChange={handleOnChange}/>
              </div>
              <div className="report-inputgroup insurance-selectgroup">
                <label>Means of Id Type</label>
                <select name='id_type' onChange={handleOnChange}>
                  <option>Select</option>
                  {
                    data?.ID.map((title, index) => {
                      return <option key={index} value={title.id}>{title.name}</option>
                    })
                  }
                </select>
              </div>
              <div className="report-inputgroup">
                <label>Id Number</label>
                <input type="text" name='id_number' onChange={handleOnChange}/>
              </div>
              <div className="report-inputgroup">
                <label>Upload Means Of Identifications</label>
                <input
                  type="file"
                  name='id_file'
                  ref={clickId}
                  onChange={handleImageUpload}
                  hidden
                />
                <div className="upload-input">
                  <Uploadicon />
                  <p>{filename.id_file}</p>
                  <p>
                    Choose File from your device{" "}
                    <span onClick={() => clickId.current.click() }>here</span>
                  </p>
                </div>
              </div>
              <div className="insurance-disclosure">
                <h6>Information Disclosure:</h6>
                <p>
                  I declare to the best of my knowledge and belief that the
                  above information are true and all necessary particulars
                  affecting the assessment of the risk have been disclosed.
                </p>
              </div>
            </div>
            <div className={`coperate ${type === 'Coperate' ? 'd-block' : 'd-none'}`}>
              <div className="report-inputgroup">
                <label>Company Name</label>
                <input type="text" />
              </div>
              <div className="report-inputgroup">
                <label>Email Address</label>
                <input type="email" />
              </div>
              <div className="report-inputgroup">
                <label>Office Address</label>
                <textarea rows={2} />
              </div>
              <div className="report-inputgroup">
                <label>Phone Number</label>
                <input type="number" />
              </div>
              <div className="report-inputgroup">
                <label>Mailing Address</label>
                <textarea rows={2} />
              </div>
              <div className="report-inputgroup">
                <label>Upload Means Of Identification</label>
                <input
                  type="file"
                  ref={click}
                  name='identification_means'
                  onChange={handleImageUpload}
                  hidden
                />
                <div className="upload-input">
                  <Uploadicon />
                  <p>{filename.identification_means}</p>
                  <p>
                    Choose File from your device{" "}
                    <span onClick={file}>here</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`insurance-checkbox ${tab === "next" ? "d-none" : ""}`}
          >
            <input type="checkbox" />
            <span>
              I have reviewed and agreed to the disclosure and <Link to='/terms&condition'>privacy policy</Link>
            </span>
          </div>
          <div className={`insurance-next ${tab === "next" ? "d-none" : ""}`}>
            <div onClick={handleTabChange}>Next</div>
          </div>
          <div
            className={`insurance-card-container ${
              tab === "next" ? "" : "d-none"
            }`}
          >
            <div className="report-inputgroup insurance-selectgroup">
              <label>Private/Commercial</label>
              <select name='usage_id' onChange={handleOnChange} >
                <option >Select</option>
                {
                  data?.vehicleUsage.map((title, index) => {
                    return <option key={index} value={title.id}>{title.name}</option>
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Policy Type</label>
              <select name='policy_type_id' onChange={handleOnChange}>
                <option >Select</option>
                {
                  data?.policyType.map((title, index) => {
                    return <option key={index} value={title.id}>{title.name}</option>
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Vehicle Make</label>
              <select name='make_id' onChange={handleOnChange} >
                <option >Select</option>
                {
                  data?.vehicleMake.map((title, index) => {
                    return <option key={index} value={title.id}>{title.name}</option>
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Vehicle Model</label>
              <select name='model_id' onChange={handleOnChange}>
                <option>Select</option>
                {
                  data?.vehicleModel.map((title, index) => {
                    return <option key={index} value={title.id}>{title.name}</option>
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Body Type</label>
              <select name='class_id' onChange={handleOnChange}>
                <option>{isLoading ? 'loading...' : 'Select'}</option>
                {
                  data?.vehicleClass.map((title, index) => {
                    return <option key={index} value={title.id}>{title.name}</option>
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Year</label>
              <select name='year_of_registration' onChange={handleOnChange}>
                <option>Select year</option>
                {
                  years.map((year, index) => {
                    return (
                      <option key={index} value={year}>{year}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Plate Number</label>
              <input type="text" name='plate_number' onChange={handleOnChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Vehicle Color</label>
              <input type="text" name='vehicle_color' onChange={handleOnChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Chasis Number</label>
              <input type="text" name='chasis_number' onChange={handleOnChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Engine Number</label>
              <input type="text" name='engine_number' onChange={handleOnChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Vehicle Value</label>
              <input type="number" name='vehicle_value' onChange={handleOnChange} />
            </div>
            <div className="report-inputgroup">
              <label>Front View Of Vehicle</label>
              <input
                type="file"
                ref={frontClick}
                name='front_view'
                onChange={handleImageUpload}
                hidden
              />
              <div className="upload-input">
                <Uploadicon />
                <p>{filename.front_view}</p>
                <p>
                  Choose File from your device <span onClick={() => frontClick.current.click()}>here</span>
                </p>
              </div>
            </div>
            <div className="report-inputgroup">
              <label>Back View Of Vehicle</label>
              <input
                type="file"
                ref={backClick}
                name='back_view'
                onChange={handleImageUpload}
                hidden
              />
              <div className="upload-input">
                <Uploadicon />
                <p>{filename.back_view}</p>
                <p>
                  Choose File from your device <span onClick={() => backClick.current.click()}>here</span>
                </p>
              </div>
            </div>
            <div className="report-inputgroup">
              <label>Left View Of Vehicle</label>
              <input
                type="file"
                ref={leftClick}
                name='left_view'
                onChange={handleImageUpload}
                hidden
              />
              <div className="upload-input">
                <Uploadicon />
                <p>{filename.left_view}</p>
                <p>
                  Choose File from your device <span onClick={() => leftClick.current.click()}>here</span>
                </p>
              </div>
            </div>
            <div className="report-inputgroup">
              <label>Right View Of Vehicle</label>
              <input
                type="file"
                ref={rightClick}
                name='right_view'
                onChange={handleImageUpload}
                hidden
              />
              <div className="upload-input">
                <Uploadicon />
                <p>{filename.right_view}</p>
                <p>
                  Choose File from your device <span onClick={() => rightClick.current.click()}>here</span>
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
              I have reviewed and agreed to the disclosure and <Link to='/terms&condition'>privacy policy</Link>
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
              <button onClick={(e) => {e.preventDefault();
                handleSubmit()}}>{isquoteLoading ? <Loader/> : 'Submit'}</button>
            </div>
          </div>
        </form>
      </div>
      <Summary show={modalShow} individual={individualdata} vehicle={vechicleData} quote={getvehiclequote} onHide={() => setModalShow(false)}/>
    </div>
  );
}

export default Motorinsuranceregister;
