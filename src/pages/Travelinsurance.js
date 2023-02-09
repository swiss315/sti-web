import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/insuranceregister.css";

import { ReactComponent as Uploadicon } from "../assets/icons/uploadicon.svg";

function Travelinsurance() {
  const [tab, setTab] = useState("");
  const click = useRef("");
  const [filename, setFilename] = useState();

  const file = () => {
    click.current.click();
  };
  return (
    <div className="report-content">
      <h5 className="report-title">Travel Insurance</h5>
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
            Additional Information
          </div>
        </div>
        <form className="insurance-form">
          <div
            className={`insurance-card-container ${tab === "" ? "" : "d-none"}`}
          >
            <div className="report-inputgroup insurance-selectgroup">
              <label>Type</label>
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
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Phone Number</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Residential Address</label>
              <textarea rows={2} />
            </div>
            <div className="report-inputgroup">
              <label>Employer</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Employer Address</label>
              <textarea rows={2} />
            </div>
            <div className="report-inputgroup">
              <label>Employer Email Address</label>
              <input type="email" />
            </div>
            <div className="report-inputgroup">
              <label>Date Of Commencement</label>
              <input type="date" />
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
              <input type="text" />
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Means Of Identity</label>
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
              <label>Upload Means Of Identity</label>
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
          <div className={`insurance-checkbox ${tab === 'next' ? 'd-none' : ''}`}>
            <input type="checkbox" />
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
            <div className="report-inputgroup">
              <label>Duration Of Trip (Days)</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Mode Of Travel</label>
              <select placeholder="select">
                <option selected>select</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Any Disability/Sickness</label>
              <select placeholder="select">
                <option selected>select</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>If Yes, Give Details</label>
              <textarea rows={2} />
            </div>
            <div className="report-inputgroup">
              <label>Place Of Departure</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Place Of Arrival</label>
              <input type="date" />
            </div>
            <div className="report-inputgroup">
              <label>Address at Country Of Visit</label>
              <textarea rows={2} />
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
          <div className={`insurance-checkbox ${tab === "" ? 'd-none' : ''}`}>
            <input type="checkbox" />
            <span>
              I have reviewed and agreed to the disclosure and 
              <Link to='/terms&condition'>privacy policy</Link>
            </span>
          </div>
          <div className={`insurance-button-container ${tab === "" ? 'd-none' : ''}`}>
            <div className="insurance-back">
              <Link onClick={(e) => setTab("")}>Back</Link>
            </div>
            <div className="insurance-button">
              <button>submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Travelinsurance;
