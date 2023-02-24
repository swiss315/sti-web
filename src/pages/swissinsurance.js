import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/insuranceregister.css";

import { ReactComponent as Uploadicon } from "../assets/icons/uploadicon.svg";

function Swissinsurance() {
  const click = useRef("");
  const [filename, setFilename] = useState();

  const file = () => {
    click.current.click();
  };
  return (
    <div className="report-content">
      <h5 className="report-title">Swiss-F Insurance</h5>
      <div className="">
        <form className="insurance-form">
          <div
            className={`insurance-card-container `}
          >
            <div className="report-inputgroup">
              <label>Period</label>
              <input type="date" />
            </div>
            <div className="report-inputgroup">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Last Name</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Email Address</label>
              <input type="email" />
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Gender</label>
              <select>
                <option defaultValue="">select</option>
                <option value="lime">Lime</option>
                <option  value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Date Of Birth</label>
              <input type="date" />
            </div>
            <div className="report-inputgroup">
              <label>Phone Number</label>
              <input type="number" />
            </div>
            <div className="report-inputgroup">
              <label>Residential Address</label>
              <textarea rows={2} />
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin Address</label>
              <textarea rows={2} />
            </div>
            <div className="report-inputgroup">
              <label>Next Of Kin Phone Number</label>
              <input type="number" />
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Disability</label>
              <select>
                <option selected>select</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Describe Disability</label>
              <textarea rows={2} />
            </div>
            <div className="report-inputgroup">
              <label>Upload Passport</label>
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
          <div className={`insurance-checkbox `}>
            <input type="checkbox" />
            <span>
              I have reviewed and agreed to the disclosure and <Link to='/terms&condition'>privacy policy</Link>
            </span>
          </div>
          <div className={`insurance-button`}>
            <button >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Swissinsurance;
