import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../../../stylesheets/insuranceregister.css";
import {ReactComponent as Uploadicon} from "../../../assets/icons/uploadicon.svg";
import {useRiskPolicy} from "../../../hooks/buy_allriskpolicy";
import Loader from "../../../components/Loader";
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
                    <button className="summary-button">
                        Submit
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

function BuyHealth() {
    const [tab, setTab] = useState("");
    const click = useRef("");
    const [modalShow, setModalShow] = useState(false);
    const {riskquote, getriskquote, isquoteLoading} = useRiskPolicy();

    const {getTitles, getStates, getAllPolicy, getInsurancePolicyType, getStateLgas, data, getHospital} = useResources()

    console.log('data', data)


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
            "item": "",
            "value": "",
            "period": "",
            "receipt": "",
            "serial": '',
            "imei": ""
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
        let Difference_In_Time = date2.getTime() - date1.getTime();
        let days_difference = Difference_In_Time / (1000 * 3600 * 24);
        return days_difference
    }

    const file = () => {
        click.current.click();
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setFilename(e.target.files[0].name);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const base64String = e.target.result;
                setIndividualData({...individualdata, picture: base64String});
                // console.log(base64String)
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
       Promise.all([
              getTitles(),
              getStates(),
              getStateLgas('Adamawa'),
              getAllPolicy(),
              getInsurancePolicyType(3),
           getHospital()
       ])
    }, [])
    return (
        <div className="report-content">
            <h5 className="report-title">Health Insurance</h5>

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
                        Medical Information
                    </div>
                </div>
                <form className="insurance-form"
                >
                    <div className={`insurance-card-container ${
                        tab === "next" ? "d-none" : ""
                    }`}>
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
                            <label>Nationality</label>
                            <input type="text" name="nationality" onChange={onchangeaction}/>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Marital Status</label>
                            <select name="gender" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="male">married</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="report-inputgroup">
                            <label>Occupation</label>
                            <input type="text" name="occupation" onChange={onchangeaction}/>
                        </div>
                        <div className="report-inputgroup">
                            <label>Company Name</label>
                            <input type="text" name="company_name" onChange={onchangeaction}/>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>State Of Origin</label>
                            <select name="state_id" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Lga Of Orgin</label>
                            <select name="lga" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>State Of Residence</label>
                            <select name="state_of_residence_id" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Lga Of Residence</label>
                            <select name="lga_of_residence" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>

                        <div className="report-inputgroup">
                            <label>Upload Passport</label>
                            <input
                                name={'passport'}
                                type="file"
                                ref={click}
                                onChange={handleImageUpload}
                                hidden
                            />
                            <div className="upload-input">
                                <Uploadicon/>
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
                        <input type="checkbox"/>
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
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Policy Type</label>
                            <select name="gender" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Blood group</label>
                            <select name="gender" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Genotype</label>
                            <select name="gender" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Hospital</label>
                            <select name="gender" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="report-inputgroup">
                            <label>Medical History</label>
                            <textarea rows={2} name="house_address" onChange={onchangeaction}/>
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
                        <input type="checkbox"/>
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
                        <div className="insurance-back cursor-pointer">
                            <Link onClick={(e) => setTab("")}>Back</Link>
                        </div>
                        <div className="insurance-button">
                            <button onClick={async (e) => {
                                e.preventDefault();
                                await riskquote(quote, setModalShow)
                            }}>{isquoteLoading ? <Loader/> : 'submit'}</button>
                        </div>
                    </div>
                </form>
            </div>

            <Summary show={modalShow} type={insurancetype} individual={individualdata} allrisk={allriskdata}
                     quote={getriskquote} onHide={() => setModalShow(false)}/>
        </div>
    );
}

export default BuyHealth;
