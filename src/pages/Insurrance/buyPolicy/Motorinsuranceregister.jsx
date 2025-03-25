import React, { useEffect, useRef, useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../../../stylesheets/insuranceregister.css";
import { ReactComponent as Uploadicon } from "../../../assets/icons/uploadicon.svg";
import { useVechicleBrand } from "../../../hooks/vehiclebrand";
import { useBuyvehiclepolicy } from "../../../hooks/buy_vehiclepolicy";
import Loader from "../../../components/Loader";
import {useResources} from "../../../hooks/resources";
import {useSelector} from "react-redux";
import {RootState} from "../../../service/reducers/rootReducer.ts";
import PlateNumberDetails from "../modal/plateNumberDetails";

function Summary(props) {
  const navigate = useNavigate();
  console.log(props, 'prpos')
  const { isLoading: isBuyLoading, confirmPayment } = useBuyvehiclepolicy()

  const handleConfirmPayment = async () => {
    try {
      const formData = new FormData();
      formData.append("quote_id", props.quote.id);
      formData.append("plate_number", props.vehicle.plate_number);
      formData.append("drivers_license", props.vehicle.drivers_license);
      formData.append("vehicle_color", props.vehicle.vehicle_color);
      formData.append("chasis_number", props.vehicle.chasis_number);
      formData.append("engine_number", props.vehicle.engine_number);
      formData.append("year_of_registration", props.vehicle.year_of_registration);
      formData.append("vehicle_state", props.vehicle.vehicle_state);
      formData.append("id_type", props.vehicle.id_type);
      formData.append("id_number", props.vehicle.id_number);
      formData.append("id_file", props.vehicle.id_file);
      formData.append("back_view", props.vehicle.back_view);
      formData.append("front_view", props.vehicle.front_view);
      formData.append("left_view", props.vehicle.left_view);
      formData.append("right_view", props.vehicle.right_view);

      const res = await confirmPayment(formData)
      if (res) {
        navigate('/motor')
      }
    } catch (e) {
      console.log(e)
    }
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
            <p>Premium Payable</p>
            <p>{props.quote.total}</p>
          </div>
            <button className="summary-button"  onClick={handleConfirmPayment}>
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
  const {getTitles, getIdTypes, getStates, getInsurancePolicyType, data, getVehicleClass,
    getVehicleMakes,
    getVehicleModel,
    getVehicleUsages} = useResources()
  const AuthState = useSelector((state: RootState) => state.auth);
  const {userData: userdata} = AuthState
  console.log(userdata)
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
  const [showPlateNumber, setPlateNumber] = useState(true);
  const {vehicleQuote, isquoteLoading, isLoading, buyPolicy, getVehicleDetails } = useBuyvehiclepolicy()

  const file = () => {
    click.current.click();
  };
  const checkField = (individualdata) => {
    const {
      first_name,
      last_name,
      email,
      gender,
      phone,
    } = individualdata;

    return (
        first_name.trim() !== "" &&
        last_name.trim() !== "" &&
        email.trim() !== "" &&
        gender.trim() !== "" &&
        phone.trim() !== ""
    );
  }

  const verifyField = checkField(individualdata);

  if (verifyField) {
    // All fields are filled
    VerifyData.current = true
    console.log("All fields are filled.", VerifyData.current);
  } else {
    console.log("Some fields are empty.");
  }

  const handlePlateNumber = async (payload) => {
    try {

      const {success, data} = await getVehicleDetails(payload)
      if (success) {
        console.log(data, 'ghfbruusng')
        setVechicleData((prev) => ({...prev,
          plate_number: payload.plate_number,
          vehicle_color: data.vehicleColor || '',
          chasis_number: data.vehicleChasisNo || '',
          engine_number: data.vehicleEngineNo || '',
          year_of_registration: data.yearOfManufacture || '',
        }))
        setPlateNumber(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleTabChange = () => {
    // if (VerifyData.current) {
    //   setTab("next");
    // }
    setTab("next");

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
    setVechicleData((prev) => ({...prev, [name]: file}))
  };

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


     const res = await buyPolicy(formData)
      if (res) {
        setModalShow(true);
      }
    } catch (e) {
      console.log(e)
    }
  }

  if (policyId === null) {
    navigate('/dashboard');
  }
  const year = function yearlist(startYear = 1989) {
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
    if (userdata) {
      setIndividualData((prev) => ({...prev,
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
              <select name='account_type' value={vechicleData.account_type} onChange={handleOnChange}>
                <option value="" disabled>Select</option>
                <option value="Individual">Individual</option>
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
                <input type="text" name='first_name' readOnly={true} value={individualdata.first_name} />
              </div>
              <div className="report-inputgroup">
                <label>Last Name</label>
                <input type="text" readOnly={true} value={individualdata.last_name} />
              </div>
              <div className="report-inputgroup">
                <label>Email Address</label>
                <input type="email" readOnly={true} value={individualdata.email} />
              </div>
              <div className="report-inputgroup insurance-selectgroup">
                <label>Gender</label>
                <select aria-readonly={true} value={individualdata.gender}>
                  <option >Select</option>
                  <option value="Male">male</option>
                  <option value="Female">female</option>
                </select>
              </div>
              <div className="report-inputgroup">
                <label>Phone Number</label>
                <input type="number" readOnly={true} value={individualdata.phone}/>
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
                      return <option key={index} value={title.name}>{title.name}</option>
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
              <select name='year_of_registration' readOnly={true} value={vechicleData.year_of_registration} onChange={handleOnChange}>
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
              <input type="text" name='plate_number' readOnly={true} value={vechicleData.plate_number} onChange={handleOnChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Vehicle Color</label>
              <input type="text" name='vehicle_color' readOnly={true} value={vechicleData.vehicle_color} onChange={handleOnChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Chasis Number</label>
              <input type="text" name='chasis_number' readOnly={true} value={vechicleData.chasis_number} onChange={handleOnChange}/>
            </div>
            <div className="report-inputgroup">
              <label>Engine Number</label>
              <input type="text" name='engine_number' readOnly={true} value={vechicleData.engine_number} onChange={handleOnChange}/>
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
              <div onClick={(e) => setTab("")}>Back</div>
            </div>
            <div className="insurance-button">
              <button onClick={(e) => {e.preventDefault();
                handleSubmit()}}>{isquoteLoading ? <Loader/> : 'Submit'}</button>
            </div>
          </div>
        </form>
      </div>
      <Summary show={modalShow} individual={individualdata} vehicle={vechicleData} quote={vehicleQuote} onHide={() => setModalShow(false)}/>
      <PlateNumberDetails loading={isLoading} show={showPlateNumber} getDetails={handlePlateNumber} onHide={() => setPlateNumber(false)} />
    </div>
  );
}

export default Motorinsuranceregister;
