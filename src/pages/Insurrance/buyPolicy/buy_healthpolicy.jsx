import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import "../../../stylesheets/insuranceregister.css";
import {ReactComponent as Uploadicon} from "../../../assets/icons/uploadicon.svg";
import Loader from "../../../components/Loader";
import {useResources} from "../../../hooks/resources";
import {useSelector} from "react-redux";
import {RootState} from "../../../service/reducers/rootReducer.ts";
import {useBuyHealthPolicy} from "../../../hooks/buyHealthPolicy";

function Summary(props) {
    const navigate = useNavigate();
    const {isLoading, confirmPayment} = useBuyHealthPolicy();

    const getHospital = (data) => {
        return props.data.hospital.find(policy => policy.id.toString() === data)?.name || "";
    }

    const getPolicyName = (data) => {
        return props.data.policyType.find(policy => policy.id.toString() === data)?.name || "";
    }

    const submitConfirmPayment = async () => {

        const payload = {
            id: props.quote?.id
        }
        const res = await confirmPayment(payload);
        if (res) {
            navigate('/health')
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
                        <p>Insurance Type</p>
                        <p>{getPolicyName(props.individual.policy_type_id)}</p>
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
                        <p>Hospital</p>
                        <p>{getHospital(props.individual.hospital_id)}</p>
                    </div>
                    <div className="summary-list">
                        <p>Premium Payable</p>
                        <p>{props.individual.total}</p>
                    </div>
                    <button onClick={submitConfirmPayment} className="summary-button">
                        {isLoading ? <Loader/> : 'submit'}
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

function BuyHealth() {
    const AuthState = useSelector((state: RootState) => state.auth);
    const {userData: userdata} = AuthState
    console.log(userdata)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const policyId = queryParams.get("id");
    const navigate = useNavigate();
    const [tab, setTab] = useState("");
    const click = useRef("");
    const [modalShow, setModalShow] = useState(false);
    const {isLoading, buyPolicy, healthPolicy} = useBuyHealthPolicy();
    const {getTitles, getStates, getAllPolicy, getInsurancePolicyType, getStateLgas, data, getHospital} = useResources()
    const [originLga, setOriginLga] = useState([]);
    const [residenceLga, setResidenceLga] = useState([]);
    const [filename, setFilename] = useState();
    const [individualdata, setIndividualData] = useState({
        title_id: "",
        state_id: "",
        state_of_residence_id: "",
        policy_type_id: "",
        hospital_id: "",
        company_name: "",
        nationality: "",
        occupation: "",
        blood_group: "",
        marital_status: "",
        medical_history: "",
        payment_history: "",
        passport: '',
        total: "",
        genotype: "",
        lga: "",
        lga_of_residence: ""
    });

    console.log(individualdata, 'individualdata')
    const onchangeaction = async (e) => {
        const {name, value} = e.target;
        setIndividualData({...individualdata, [e.target.name]: e.target.value})
        if (name === 'state_id') {
            const selectedName = data.states.find(state => state.id.toString() === value)?.name || "";
            const response = await getStateLgas(selectedName)
            console.log(response, 'hdh')
            setOriginLga(response.lgas)
        }

        if (name === 'state_of_residence_id') {
            const selectedName = data.states.find(state => state.id.toString() === value)?.name || "";
            const response = await getStateLgas(selectedName)
            setResidenceLga(response.lgas)
        }

        if (name === 'policy_type_id') {
            const policyTotal = data.policyType.find(policy => policy.id.toString() === value)?.rate || "";
            console.log(policyTotal, 'policyTotal')
            setIndividualData(prevState => ({...prevState, total: policyTotal}));

        }

        if (name === 'lga_of_residence') {
            const stateName = data.states.find(state => state.id.toString() === individualdata.state_of_residence_id)?.name || "";
            const params = {
                stateName: stateName,
                lgaName: value
            }
          await getHospital(params)
        }

    }

    // const numberdays = (date) => {
    //     let date1 = new Date();
    //     let date2 = new Date(date);
    //     let Difference_In_Time = date2.getTime() - date1.getTime();
    //     let days_difference = Difference_In_Time / (1000 * 3600 * 24);
    //     return days_difference
    // }

    const file = () => {
        click.current.click();
    };

    const handleImageUpload = (e) => {
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
        setFilename(file.name);
        setIndividualData({...individualdata, passport: file});
    };

    const handleSubmit = async (e) => {
        try {
            const formData = new FormData();
            formData.append("passport", individualdata.passport);

            formData.append("title_id", individualdata.title_id);
            formData.append("state_id", individualdata.state_id);
            formData.append("state_of_residence_id", individualdata.state_of_residence_id);
            formData.append("policy_type_id", individualdata.policy_type_id);
            formData.append("hospital_id", individualdata.hospital_id);
            formData.append("company_name", individualdata.company_name);
            formData.append("nationality", individualdata.nationality);
            formData.append("occupation", individualdata.occupation);
            formData.append("blood_group", individualdata.blood_group);
            formData.append("marital_status", individualdata.marital_status);
            formData.append("medical_history", individualdata.medical_history);
            formData.append("payment_history", 12);
            formData.append("total", individualdata.total);
            formData.append("genotype", individualdata.genotype);
            formData.append("lga", individualdata.lga);
            formData.append("lga_of_residence", individualdata.lga_of_residence);
            const res = await buyPolicy(formData)
            if (res) {
                setModalShow(true)
            }
        } catch (e) {
            console.error("Error appending data to FormData:", e);
        }

    }


    if (policyId === null) {
        navigate('/dashboard');
    }

    useEffect(() => {
       Promise.all([
              getTitles(),
              getStates(),
              getAllPolicy(),
              getInsurancePolicyType(policyId),
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
                            <select name="marital_status" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="Married">Married</option>
                                <option value="Single">Single</option>
                                <option value="Divorced">Divorced</option>
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
                                {
                                    data?.states.map((title, index) => {
                                        return <option key={index} value={title.id}>{title.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Lga Of Orgin</label>
                            <select name="lga" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                {
                                    originLga.map((title, index) => {
                                        return <option key={index} value={title}>{title}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>State Of Residence</label>
                            <select name="state_of_residence_id" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                {
                                    data?.states.map((title, index) => {
                                        return <option key={index} value={title.id}>{title.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Lga Of Residence</label>
                            <select name="lga_of_residence" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                {
                                    residenceLga.map((title, index) => {
                                        return <option key={index} value={title}>{title}</option>
                                    })
                                }
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
                            <select name="policy_type_id" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                {
                                    data?.policyType.map((title, index) => {
                                        return <option key={index} value={title.id}>{title.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Blood group</label>
                            <select name="blood_group" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>

                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Genotype</label>
                            <select name="genotype" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                <option value="AA">AA</option>
                                <option value="AS">AS</option>
                                <option value="SS">SS</option>
                                <option value="AC">AC</option>
                                <option value="SC">SC</option>

                            </select>
                        </div>
                        <div className="report-inputgroup insurance-selectgroup">
                            <label>Hospital</label>
                            <select name="hospital_id" onChange={onchangeaction}>
                                <option defaultValue=''>Select</option>
                                {
                                    data?.hospital.map((title, index) => {
                                        return <option key={index} value={title.id}>{title.name}</option>
                                    })
                                }
                            </select>
                            <span>{data.hospital.length === 0 ? 'No hospitals available at your residence lga' : ''}</span>
                        </div>
                        <div className="report-inputgroup">
                            <label>Medical History</label>
                            <textarea rows={2} name="medical_history" onChange={onchangeaction}/>
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
                            <div onClick={(e) => setTab("")}>Back</div>
                        </div>
                        <div className="insurance-button">
                            <button onClick={async (e) => {
                                e.preventDefault();
                                await handleSubmit()
                            }}>{isLoading ? <Loader/> : 'submit'}</button>
                        </div>
                    </div>
                </form>
            </div>

            <Summary show={modalShow} individual={individualdata} data={data}
                     quote={healthPolicy} onHide={() => setModalShow(false)}/>
        </div>
    );
}

export default BuyHealth;
