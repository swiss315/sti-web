import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/insuranceregister.css";

import { ReactComponent as Uploadicon } from "../assets/icons/uploadicon.svg";

function Allrisk() {
  const [tab, setTab] = useState("");
  const click = useRef("");
  const [filename, setFilename] = useState();
  

  const file = () => {
    click.current.click();
  };
  return (
    <div className="report-content">
      <h5 className="report-title">All Risk Insurance</h5>
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
            Item Details
          </div>
        </div>
        <form className="insurance-form"
        >
          <div className={`insurance-card-container ${
              tab === "next" ? "d-none" : ""
            }`}>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Type</label>
              <select>
                <option selected>select</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Prefix</label>
              <select>
                <option selected>select</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
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
            <div className="report-inputgroup">
              <label>Company Name</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Phone Number</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Residential Address</label>
              <textarea rows={2} />
            </div>
            <div className="report-inputgroup insurance-selectgroup">
              <label>Gender</label>
              <select>
                <option selected>select</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="report-inputgroup">
              <label>Office Address</label>
              <textarea rows={2} />
            </div>
            <div className="report-inputgroup">
              <label>Mailing Address</label>
              <textarea rows={2} />
            </div>
            <div className="report-inputgroup">
              <label>Contact Person</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Picture Of Item</label>
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
              <Link>privacy policy</Link>
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
              <label>Item Name</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Item Value</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Policy Period</label>
              <input type="date" />
            </div>
            <div className="report-inputgroup">
              <label>Item Serial Number</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Item IMEI Number</label>
              <input type="text" />
            </div>
            <div className="report-inputgroup">
              <label>Picture Of Receipt</label>
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
              I have reviewed and agreed to the disclosure and
              <Link>privacy policy</Link>
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

export default Allrisk;
