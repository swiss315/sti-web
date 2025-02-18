import React from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../stylesheets/Login.css";
import {handleVerifyOtpRequest} from "../../service/Constant/action.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../service/reducers/rootReducer.ts";
import PinInput from "../../components/form/InputPin";
import CustomButton from "../../components/form/customButton";


const VerifyOtp = () => {
    const dispatch = useDispatch();
    let Navigate = useNavigate()
    const AuthState = useSelector((state: RootState) => state.auth);
    const {userData} = AuthState
    console.log(userData)
    const VerifyOtps = async (e) => {
        const payload = {
            "code": e,
            "email": userData.email
        }
        dispatch(handleVerifyOtpRequest({
            payload: payload,
            navigate: Navigate
        }))
    }

    return (
        <div className="customer_signup">
            <Navbar/>
            <div className="c_signup">
                <h2 className="h21 text-center">
                    Verify <br/>
                    Otp
                </h2>
                <h2 className="h2 h21 text-center">Verify Otp</h2>

                <div className="form-h flex-col text-start flex-start">
                    <p className={' text-sm pb-3'}>Enter the reset code sent to your email </p>
                    <form className="customer_signup" >
                        <PinInput onComplete={VerifyOtps}/>
                        <CustomButton isLoading={false} className="form_btn" children={'Verify Otp'}
                                      disabled={false}/>
                        <p className={' text-sm pt-3'}>Enter the reset code sent to your email </p>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default VerifyOtp;
