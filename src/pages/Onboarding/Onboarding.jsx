import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import {ReactComponent as Customericon} from "../../assets/icons/user.svg";
// import {ReactComponent as Agenticon} from "../../assets/icons/agenticon.svg";
import {ReactComponent as Arrowicon} from "../../assets/icons/arrowicon.svg";
import {ReactComponent as Group} from "../../assets/icons/Group.svg"
import "../../stylesheets/Onboarding.css";

const Onboarding = () => {

  return (
    <div className="onboard">
      <Navbar />
      <div className="sides">
        <div className="side1">
          <div>
            <Group />
            <div className="simple-insurance">
              <h2>Insurance Made Simple</h2>
              <p>
                Offers a range of life plans and policies to help you protect what
                is important to you
              </p>
            </div>
            <div className="next-button">
              <div className="next1"></div>
              <div className="next2"></div>
            </div>
          </div>
        </div>
        <div className="side2">
          <h2 className="account-type-title">Choose your Account Type</h2>
          <p className="account-type-text">
            Hi there! Select your preferred account type to create your account
            or log in
          </p>
          <Link to='/customer-signup' className="column1 column2">
            <div className="img-customer">
              <Customericon />
            </div>
            <div className="unknown">
              <div className="column-container">
                <h6 className="column-container-title">Customer</h6>
                <p className="cust">
                  Enjoy all features available for customers
                </p>
              </div>
              <div className="arrow">
                <Arrowicon />
              </div>
            </div>
          </Link>
          {/*<Link to='/agent-signup' className="column1 column3">*/}
          {/*  <div className="img-customer">*/}
          {/*    <Agenticon />*/}
          {/*  </div>*/}
          {/*  <div className="unknown">*/}
          {/*    <div className="column-container">*/}
          {/*      <h6 className="column-container-title">Agent</h6>*/}
          {/*      <p className="cust">Utilise and maximise all tools for agents</p>*/}
          {/*    </div>*/}
          {/*    <div className="arrow">*/}
          {/*      <Arrowicon />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
