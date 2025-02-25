import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../stylesheets/Login.css";
import {ReactComponent as Email} from "../../assets/icons/emailicon.svg";
import Loader from "../../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../service/reducers/rootReducer.ts";
import PinInput from "../../components/form/InputPin";
import CustomButton from "../../components/form/customButton";
import {BsKey} from "react-icons/bs";
import {useForgotPassword} from "../../hooks/forgotPassword";
import {areAllKeysFilled} from "../../utils/formValidator";


const ForgetPassword = () => {
    const dispatch = useDispatch();
    let Navigate = useNavigate()
    const [tabs, setTabs] = useState('email')
    const [loading, setLoading] = useState({
        emailLoading: false,
        verifyLoading: false,
        updatePassword: false
    })
    const AuthState = useSelector((state: RootState) => state.auth);
    const [errors, setError] = useState({});
    const [passwordData, setPasswordData] = useState({
        newPassword: '',
        confirmPassword: '',
    })
    const {requestForgotPassword, requestPostResetPassword, requestUpdatePassword} = useForgotPassword()
    const [data, setData] = useState({
            email: '',
        }
    )

    const handleChange = (e) => {
        const {name, value} = e.target;

        setPasswordData((prevData) => {
            const updatedData = {...prevData, [name]: value};

            // Live validation when typing in confirm password
            if (name === 'confirmPassword' && updatedData.newPassword !== value) {
                // setError({);
                setError((prevData) => ({
                    ...prevData,
                    confirmPassword: 'Passwords do not match'
                }))
            } else {
                setError('');
            }

            return updatedData;
        });
    };

    const postFogotPassword = async (e) => {
    e.preventDefault()
        // setLoading(true)
        setLoading((prevData) => ({
            ...prevData,
            emailLoading: true
        }))
        const payload = {
            "email": data.email,
        }
        const res = await requestForgotPassword(payload)
        if (res) {
            setLoading((prevData) => ({
                ...prevData,
                emailLoading: false
            }))
            // setLoading(false)
            setTabs('verify')
        } else  {
            setLoading((prevData) => ({
                ...prevData,
                emailLoading: false
            }))

        }
    }

    const VerifyOtps = async (e) => {
        setLoading((prevData) => ({
            ...prevData,
            verifyLoading: true
        }))

        const payload = {
            "code": e,
            "email": data.email,
        }
        const res = await requestPostResetPassword(payload)
        if (res) {
            setLoading((prevData) => ({
                ...prevData,
                verifyLoading: false
            }))
            setTabs('update')
        } else {
            setLoading((prevData) => ({
                ...prevData,
                verifyLoading: false
            }))
        }


    }

    const updatePassword = async (e) => {
        e.preventDefault()
        setLoading((prevData) => ({
            ...prevData,
            updatePassword: true
        }))
        const payload = {
            "email": data.email,
            'password': passwordData.newPassword
        }
        const res = await requestUpdatePassword(payload)
        if (res) {
            setLoading((prevData) => ({
                ...prevData,
                updatePassword: false
            }))
            Navigate('/login')
        }
        setLoading((prevData) => ({
            ...prevData,
            updatePassword: false
        }))
    }

    return (
        <div className="onboard">
            <Navbar/>
            {
                tabs === 'email' ? (
                    <div className="sides side-edit">
                        <div className="sides1">
                            <h2 className={'font-bold'}>
                                Forget <span>Password</span>
                            </h2>
                        </div>
                        <form className="sides2 " onSubmit={postFogotPassword}>
                            <p className={'text-sm text-[#4F525D]'}>Enter the e-mail associated with your account and a
                                reset code will be sent to you</p>
                            <div className=" input-group">
                                <label className={'flex gap-2 items-center'}>
                                    <Email/>
                                    <span>Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    className=""
                                    value={data.email}
                                    onChange={(e) => {
                                        setData((prevData) => ({
                                            ...prevData,
                                            email: e.target.value
                                        }))
                                    }}
                                />
                            </div>

                            <div className="button">
                                <CustomButton isLoading={loading.emailLoading} className="form_btn" children={'Send Reset Code'}
                                              disabled={!areAllKeysFilled(data)}/>

                                <p className={'text-sm my-3 text-[#4F525D]'}>Remember your password now? Click the login
                                    button above</p>

                            </div>
                        </form>
                    </div>
                ) : tabs === 'verify' ? (
                    <div className="c_signup">
                        <h2 className="h21 text-center">
                            Verify <br/>
                            Otp
                        </h2>
                        <h2 className="h2 h21 text-center">Verify Otp</h2>

                        <div className="form-h flex-col text-start flex-start">
                            <p className={' text-sm pb-3'}>Enter the reset code sent to your email </p>
                            <form className="customer_signup">
                                <PinInput onComplete={VerifyOtps}/>
                                <CustomButton isLoading={loading.verifyLoading} className="form_btn" onClick={VerifyOtps}
                                              children={'Verify Otp'}
                                              disabled={false}/>
                                <p className={' text-sm pt-3'}>Enter the reset code sent to your email </p>

                            </form>
                        </div>
                    </div>
                ) : tabs === 'update' ? (
                    <div className="sides side-edit">
                        <div className="sides1">
                            <h2 className={'font-bold'}>
                                Update <span>Password</span>
                            </h2>
                        </div>
                        <form className="sides2 " onSubmit={updatePassword}>
                            <p className={'text-sm text-[#4F525D]'}>Enter the e-mail associated with your account and a
                                reset code will be sent to you</p>
                            <div className="input_wrap">
                                <div className="input-h">
                                    <label htmlFor="password">
                                        <BsKey className="icon"/>
                                        New Password
                                    </label>
                                    <input
                                        id="password"
                                        name="newPassword"
                                        type="password"
                                        value={passwordData.newPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.password && <p>{errors.password}</p>}
                            </div>

                            <div className="input_wrap">
                                <div className="input-h">
                                    <label htmlFor="confirmPassword">
                                        <BsKey className="icon"/>
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        value={passwordData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                            </div>

                            <div className="button">
                                <CustomButton isLoading={loading.updatePassword} className="form_btn"
                                              onClick={updatePassword}
                                              children={'Update Password'}
                                              disabled={false}/>
                                {/*<button className={'my-3'}>{loading.updatePassword ? <Loader/> : 'Send Reset Code'}</button>*/}
                                <p className={'text-sm text-[#4F525D]'}>Remember your password now? Click the login
                                    button above</p>

                            </div>
                        </form>
                    </div>
                ) : <div className="sides side-edit">
                    <div className="sides1">
                        <h2 className={'font-bold'}>
                            Forget <span>Password</span>
                        </h2>
                    </div>
                    <form className="sides2 " onSubmit={postFogotPassword}>
                        <p className={'text-sm text-[#4F525D]'}>Enter the e-mail associated with your account and a
                            reset code will be sent to you</p>
                        <div className=" input-group">
                            <label className={'flex gap-2 items-center'}>
                                <Email/>
                                <span>Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                className=""
                                value={data.email}
                                onChange={(e) => {
                                    setData((prevData) => ({
                                        ...prevData,
                                        email: e.target.value
                                    }))
                                }}
                            />
                        </div>

                        <div className="button">
                            <CustomButton isLoading={loading} className="form_btn" children={'Send Reset Code'}
                                          disabled={!areAllKeysFilled(data)}/>

                            <p className={'text-sm my-3 text-[#4F525D]'}>Remember your password now? Click the login
                                button above</p>

                        </div>
                    </form>
                </div>

            }
        </div>
    );
};

export default ForgetPassword;
