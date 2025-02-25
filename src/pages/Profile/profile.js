import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../../stylesheets/profile.css";

import { ReactComponent as Editicon } from "../../assets/icons/Edit.svg";
import { ReactComponent as Termsicon } from "../../assets/icons/termsicon.svg";
import { ReactComponent as Privacyicon } from "../../assets/icons/privacyicon.svg";
import { ReactComponent as Redlogouticon } from "../../assets/icons/redlogout.svg";
import { useProfile } from "../../hooks/profile";
import Loader from "../../components/Loader";
import {useSelector} from "react-redux";
import {RootState} from "../../service/reducers/rootReducer.ts";
import {areAllKeysFilled} from "../../utils/formValidator";
import CustomButton from "../../components/form/customButton";

function Profile() {
    const [show, setShow] = useState(false);
    const click = useRef("");
    const [filename, setFilename] = useState();
    const { profile, updateProfile, isLoading } = useProfile();
    const AuthState = useSelector((state: RootState) => state.auth);
    const {userData: userdata} = AuthState
    console.log(userdata)
    const [profiledata, setData] = useState({
        firstname: userdata.firstname || "",
        lastname: userdata.lastname || "",
        phone: userdata.phone || "",
        address: userdata.address || "",
        email: userdata.email || "",
        gender: userdata.gender || "",
        state: userdata.state || "",
        city: userdata.city || "",
        dob: userdata?.dob?.includes("T") ? userdata.dob.split("T")[0] : "",
    });

    const file = () => {
        click.current.click();
    };

    const updateUserProfile = async (e) => {
        e.preventDefault();
        const response = await updateProfile(profiledata, setShow);
        if(response) {
            setShow(!show)
        }
    };
    const isValid = areAllKeysFilled(profiledata)

    useEffect(() => {
        profile();
    }, [profile]);

    return (
        <div>
            <h5 className="report-title">
                {show ? "Profile Settings" : "My profile"}
            </h5>
            <div className="">
                <div className={`profile-container ${show ? "d-none" : ""}`}>
                    <div className="profile-box">
                        <div></div>
                        <span>
                                { userdata.firstname + " " + userdata.lastname}
                        </span>
                        <span
                            className="profile-edit-button !flex gap-2 items-center"
                            onClick={() => setShow(!show)}
                        >
                            <Editicon /> <span>Edit Profile</span>
                        </span>
                    </div>
                    <div className="profile-menu">
                        <Link to="/terms&condition">
                            <Termsicon />
                            <span>Terms & Conditions</span>
                        </Link>
                        <Link to="/privacy" className="second">
                            <Privacyicon />
                            <span>Privacy Policy</span>
                        </Link>
                        <Link>
                            <Redlogouticon /> <span className="redlogout">Logout</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className={`edit-profile-box ${show ? "" : "d-none"}`}>
                    <div>
                        <img src={filename} alt="profilepicture" />
                    </div>
                    <span className="uploadimage" onClick={file}>
                        upload
                    </span>
                    <input
                        type="file"
                        ref={click}
                        onChange={(e) => {
                            setFilename(URL.createObjectURL(e.target.files[0].name));
                        }}
                        hidden
                    />
                    <p className="edit-profile-text">
                        Update your profile picture and personal details
                    </p>
                    <form className="profile-form-group">
                        <div className="profile-input-group">
                            <div className="profile-input">
                                <label>First Name</label>
                                <input
                                    name="firstname"
                                    type="text"
                                    onChange={(e) => {
                                        setData({ ...profiledata, firstname: e.target.value });
                                    }}
                                    value={profiledata.firstname}
                                />
                            </div>
                            <div className="profile-input">
                                <label>Last Name</label>
                                <input
                                    name="lastname"
                                    type="text"
                                    onChange={(e) => {
                                        setData({ ...profiledata, lastname: e.target.value });
                                    }}
                                    value={profiledata.lastname}
                                />
                            </div>
                        </div>
                        <div className="profile-input-group">
                            <div className="profile-input">
                                <label>Gender</label>

                                <select className={''} id={'gender'} name={'gender'}
                                        value={profiledata.gender} onChange={(e) => {
                                    setData({...profiledata, gender: e.target.value});
                                }}>
                                    <option>Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="profile-input">
                                <label>DOB</label>
                                <input
                                    name="dob"
                                    type="date"
                                    onChange={(e) => {
                                        setData({...profiledata, dob: e.target.value});
                                    }}
                                    value={profiledata.dob}
                                />
                            </div>
                        </div>
                        <div className="profile-input">
                            <label>Email Address</label>
                            <input
                                name="email"
                                type="email"
                                value={profiledata.email}
                                onChange={(e) => {
                                    setData({ ...profiledata, email: e.target.value });
                                }}
                            />
                        </div>
                        <div className="profile-input">
                            <label>Phone Number</label>
                            <input
                                name="number"
                                type="number"
                                value={profiledata.phone}
                                onChange={(e) => {
                                    setData({ ...profiledata, phone: e.target.value });
                                }}
                            />
                        </div>
                        <div className="profile-input-group">
                            <div className="profile-input">
                                <label>State</label>
                                <input
                                    name="firstname"
                                    type="text"
                                    onChange={(e) => {
                                        setData({...profiledata, state: e.target.value});
                                    }}
                                    value={profiledata.state}
                                />
                            </div>
                            <div className="profile-input">
                                <label>City</label>
                                <input
                                    name="lastname"
                                    type="text"
                                    onChange={(e) => {
                                        setData({...profiledata, city: e.target.value});
                                    }}
                                    value={profiledata.city}
                                />
                            </div>
                        </div>

                        <div className="profile-input">
                            <label>Address</label>
                            <textarea
                                name="address"
                                row={2}
                                type="text"
                                value={profiledata.address}
                                onChange={(e) => {
                                    setData({ ...profiledata, address: e.target.value });
                                }}
                            />
                        </div>
                        <CustomButton isLoading={isLoading} className="form_btn" children={'Save Changes'}
                                      disabled={!isValid} onClick={updateUserProfile}/>
                        <div className="edit-profile-button">


                            {/*<button onClick={updateProfile}>*/}
                            {/*    {isLoading ? <Loader /> : "Save Changes"}*/}
                            {/*</button>*/}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
