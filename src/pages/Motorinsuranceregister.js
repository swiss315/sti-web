import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/insuranceregister.css";

import { ReactComponent as Uploadicon } from "../assets/icons/uploadicon.svg";

function Motorinsuranceregister() {
  const [type, setType] = useState('Individual');
  const [tab, setTab] = useState("");
  const click = useRef("");
  const [filename, setFilename] = useState();

  const file = () => {
    click.current.click();
  };

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
                <input type="number" />
              </div>
              <div className="report-inputgroup">
                <label>Residential Address</label>
                <textarea rows={2} />
              </div>
              <div className="report-inputgroup insurance-selectgroup">
                <label>Marital Status</label>
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
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Policy Type</label>
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Vehicle Make</label>
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Body Type</label>
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Year</label>
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
              <label>Registration Number</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Chasis Number</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Chasis Number</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Engine Number</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Vehicle Value</label>
              <input type="text" />
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
              <button>submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Motorinsuranceregister;
