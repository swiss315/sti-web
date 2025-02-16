import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../../stylesheets/profile.css";

import { ReactComponent as Editicon } from "../../assets/icons/Edit.svg";
import { ReactComponent as Termsicon } from "../../assets/icons/termsicon.svg";
import { ReactComponent as Privacyicon } from "../../assets/icons/privacyicon.svg";
import { ReactComponent as Redlogouticon } from "../../assets/icons/redlogout.svg";
import { useProfile } from "../../hooks/profile";
import { Cookies } from "react-cookie";
import Loader from "../../components/Loader";

function Profile() {
    const [show, setShow] = useState(false);
    const click = useRef("");
    const [filename, setFilename] = useState();
    const { profile, updateprofile, isLoading } = useProfile();
    const cookie = new Cookies();
    let userdata = cookie.get("user");
    userdata = userdata ? JSON.parse(atob(userdata)) : {};
    const [profiledata, setData] = useState({
        first_name: userdata.first_name || "",
        last_name: userdata.last_name || "",
        phone_no: userdata.phone || "",
        address: userdata.address || "",
        email: userdata.email || "",
    });

    const file = () => {
        click.current.click();
    };

    const updateProfile = async (e) => {
        e.preventDefault();
        await updateprofile(profiledata, setShow);
    };

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
                                { userdata.first_name + " " + userdata.last_name}
                        </span>
                        <span
                            className="profile-edit-button"
                            onClick={() => setShow(!show)}
                        >
                            <Editicon /> Edit Profile
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
                                    name="first_name"
                                    type="text"
                                    onChange={(e) => {
                                        setData({ ...profiledata, first_name: e.target.value });
                                    }}
                                    value={profiledata.first_name}
                                />
                            </div>
                            <div className="profile-input">
                                <label>Last Name</label>
                                <input
                                    name="last_name"
                                    type="text"
                                    onChange={(e) => {
                                        setData({ ...profiledata, last_name: e.target.value });
                                    }}
                                    value={profiledata.last_name}
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
                                value={profiledata.phone_no}
                                onChange={(e) => {
                                    setData({ ...profiledata, phone_no: e.target.value });
                                }}
                            />
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
                        <div className="edit-profile-button">
                            <button onClick={updateProfile}>
                                {isLoading ? <Loader /> : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
