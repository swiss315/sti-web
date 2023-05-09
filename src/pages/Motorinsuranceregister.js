import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../stylesheets/insuranceregister.css";
import { ReactComponent as Uploadicon } from "../assets/icons/uploadicon.svg";
import { useVechicleBrand } from "../hooks/vehiclebrand";
import { useBuyvehiclepolicy } from "../hooks/buy_vehiclepolicy";
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
            <button className="summary-button" >
              Submit
            </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Motorinsuranceregister() {
  const [type, setType] = useState('Individual');
  const [tab, setTab] = useState("");
  const click = useRef("");
  const [filename, setFilename] = useState();
  const {vehiclebrand, brandtypes, vehicles, brandtype, isLoading } = useVechicleBrand()
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
      "company_name": null,
      "mailing_address": "",
      "tin_number": "",
      "office_address": "",
      "contact_person": "" 
  })
  const [vechicledata, setVechicleData] = useState(
    {
					"period":"",
					"policy_type":"",
					"enhanced_third_party":"",
					"private_commercial":"", 
					"motor_cycle_policy":null,
					"make":"",
					"body_type":"",
					"year":"",
					"home_address":"",
					"registration_number":"",
					"chasis_number":"",
					"engine_number":"",
					"vehicle_value":"",
					"pictures":[]
					}
  )
  const [years, setYears] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [quote, setQuote] = useState({
    'vehicle_value': '',
    'private_commercial': '',
    'third_party_type': '',
    'policy_type': '',
    'vehicle_type': ''
  })

  const { vehiclequote, getvehiclequote, isquoteLoading } = useBuyvehiclepolicy()

  const file = () => {
    click.current.click();
  };

  const vehicleid = async(e) => {
    setVechicleData({...vechicledata, make : e.target.value}); 
    const id = e.currentTarget.options[e.currentTarget.options.selectedIndex].getAttribute('data-key'); 
    await brandtypes(id)
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
    vehiclebrand();
    year()
  }, [vehiclebrand])

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
              <select onChange={(e) => setType(e.currentTarget.value)}>
                <option defaultValue="Individual">Individual</option>
                <option value="Coperate">Coperate</option>
              </select>
            </div>
            <div className={`individual ${type === 'Individual' ? 'd-block' : 'd-none'}`}>
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
                <select onChange={(e) => setIndividualData({...individualdata, gender : e.target.value})}>
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
                <label>Marital Status</label>
                <select onChange={(e) => setIndividualData({...individualdata, marital_status : e.target.value})}>
                  <option >Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widow">Widow</option>
                </select>
              </div>
              <div className="report-inputgroup">
                <label>Next Of Kin</label>
                <input type="text" onChange={(e) => setIndividualData({...individualdata, next_of_kin : e.target.value})} />
              </div>
              <div className="report-inputgroup">
                <label>Next Of Kin Address</label>
                <textarea rows={2}  onChange={(e) => setIndividualData({...individualdata, next_of_kin_address : e.target.value})}/>
              </div>
              <div className="report-inputgroup">
                <label>Next Of Kin Phone Number</label>
                <input type="number" onChange={(e) => setIndividualData({...individualdata, next_of_kin_phone : e.target.value})}/>
              </div>
              <div className="report-inputgroup">
                <label>Mailing Address</label>
                <textarea rows={2} onChange={(e) => setIndividualData({...individualdata, mailing_address : e.target.value})}/>
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
            <div onClick={(e) => setTab("next")}>Next</div>
          </div>
          <div
            className={`insurance-card-container ${
              tab === "next" ? "" : "d-none"
            }`}
          >
            <div className="report-inputgroup">
              <label>Period</label>
              <input type="date" />
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Private/Commercial</label>
              <select onChange={(e) => {setVechicleData({...vechicledata, private_commercial : e.target.value}); setQuote({...quote, private_commercial: e.target.value})}}>
                <option >Select</option>
                <option value="private">Private</option>
                <option value="commercial">Commercial</option>
                <option value="motor_cycle">Motor Cycle</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Policy Type</label>
              <select onChange={(e) => {setVechicleData({...vechicledata, policy_type : e.target.value}); setQuote({...quote, policy_type : e.target.value}); setQuote({...quote, third_party_type : e.target.value})}}>
                <option >Select</option>
                <option value="third_party_only">3rd Party Only</option>
                <option value="comprehensive">Comprehensive</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Vehicle Make</label>
              <select onChange={vehicleid}>
                <option >Select</option>
                {vehicles.map((vehicle, index) => {
                  return (
                    <option key={index} data-key={vehicle.id} value={vehicle.name}>{vehicle.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Body Type</label>
              <select onChange={(e) => {setVechicleData({...vechicledata, body_type: e.target.value}); setQuote({...quote, vehicle_type : e.target.value})}}>
                <option>{isLoading ? 'loading...' : 'Select'}</option>
                {
                  brandtype.map((brand, index) => {
                    return (
                      <option key={index} value={brand.name}>{brand.name}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Year</label>
              <select onChange={(e) => setVechicleData({...vechicledata, year: e.target.value})}>
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
              <label>Registration Number</label>
              <input type="text" onChange={(e) => setVechicleData({...vechicledata, registration_number: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Chasis Number</label>
              <input type="text" onChange={(e) => setVechicleData({...vechicledata, chasis_number: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Engine Number</label>
              <input type="text" onChange={(e) => setVechicleData({...vechicledata, engine_number: e.target.value})}/>
            </div>
            <div className="report-inputgroup">
              <label>Vehicle Value</label>
              <input type="number" onChange={(e) => {setVechicleData({...vechicledata, vehicle_value: e.target.value}); setQuote({...quote, vehicle_value: e.target.value})}} />
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
              <label>Back View Of Vehicle</label>
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
              <label>Left View Of Vehicle</label>
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
              <label>Right View Of Vehicle</label>
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
              <button onClick={(e) => {e.preventDefault(); vehiclequote(quote, setModalShow)}}>{isquoteLoading ? <Loader/> : 'Submit'}</button>
            </div>
          </div>
        </form>
      </div>
      <Summary show={modalShow} individual={individualdata} vehicle={vechicledata} quote={getvehiclequote} onHide={() => setModalShow(false)}/>
    </div>
  );
}

export default Motorinsuranceregister;
