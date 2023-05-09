import React, { useRef, useState } from "react";
import "../stylesheets/report.css";
import Loader from "../components/Loader";
import { ReactComponent as Uploadicon } from "../assets/icons/uploadicon.svg";
import "../stylesheets/Claims.css";
import { useClaim } from "../hooks/claim";

const Claims = () => {
  const [tab, setTab] = useState("Report");
  const click = useRef("");
  const [filename, setFilename] = useState();
  const { claim, trackclaim, isquoteLoading, error } = useClaim()
  const [individualdata, setIndividualData] = useState({
    "description": "",
    "claim_type": "",
    "policy_number": "",
    "loss_estimate": "", 
    "cost_estimate": "",
    "pictures": [],
})
const [trackdata, setTrackdata] = useState({
  claim_number: ''
})

const onchangeaction = (e) => {
  setIndividualData({...individualdata, [e.target.name]: e.target.value})
 }
  const file = () => {
    click.current.click();
  };

  return (
    <div className="general-claims">
      <div className="myclaims">
        <h4>My Claims</h4>
      </div>
      <div className="claim-track">
      <div className="insurance-tab">
          <div
            className={tab === "Report" ? "active" : ""}
            onClick={(e) => setTab("Report")}
          >
            Report a claim
          </div>
          <div
            className={tab === "Track" ? "active" : ""}
            onClick={(e) => setTab("Track")}
          >
            Track a claim
          </div>
        </div>
        <form className={`claim-form `}>
          <div className={` ${tab === "Report" ? '' : 'd-none'}`}>
          <div className="claim-type">
            <label htmlFor="">Claim Type</label>
            <select className=" use_user4" name="claim_type" onChange={onchangeaction}>
              <option defaultValue="" >
                Select preferred type
              </option>
              <option value="marine">Marine Insurance</option>
              <option value="travel">Easy Travel Insurance</option>
              <option value="all_risk">All Risk</option>
            </select>
          </div>
          <div className="claim-type">
            <label htmlFor="">Policy Number</label>
            <input type="number" name="policy_number" onChange={onchangeaction}/>
          </div>
          <div className="claim-type">
            <label htmlFor="">Description of claims</label>
            <textarea rows={2} className="describe" type="text" name="description" onChange={onchangeaction}/>
          </div>
          <div className="claim-type">
            <label htmlFor="">Date Of Loss</label>
            <input type="date" id="start" name="trip-start" />
          </div>
          <div className="claim-type">
            <label htmlFor="">Estimate Claim Loss</label>
            <input type="text" name="cost_estimate" onChange={onchangeaction}/>
          </div>
          <div className="claim-type">
            <label htmlFor="">Lost Estimate</label>
            <input type="text" name="loss_estimate" onChange={onchangeaction}/>
          </div>
          <div
            className="claim-type"
            placeholder="Choose File from your device here"
          >
            <label htmlFor="">Upload Estimate Of Claim Cost</label>
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
          <div className="claim-type">
            <label htmlFor="" placeholder="Choose File from your device here">
              Upload Damage Picture
            </label>
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
          <div className="claim-type">
            <label htmlFor="">Upload Other Documents</label>
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
          <div className="claim-notice">
            <h5>NB:</h5>
            <p>
              Claim will be settled within 5 working days after the receipt of
              executed discharge voucher.
            </p>
          </div>
          <div className="claim-submit">
            <button onClick={async(e) => {e.preventDefault(); await claim(individualdata)}}>{isquoteLoading ? <Loader /> : 'Submit'}</button>
          </div>
          {error === null ? '' : error.map((err) => {
            return (
              <p className="claim-error">{err}</p>
            )
          })}
          </div>
          <div className={`${tab === "Track" ? '' : 'd-none'}`} >
          <div className="claim-type">
          <label htmlFor="">Claim Type</label>
          <input type="text" placeholder="Select preferred type" onChange={(e) => setTrackdata({...trackdata, claim_number:  e.target.value})}/>
        </div>
        <div className="claim-submit">
          <button onClick={(e) => {e.preventDefault(); trackclaim(trackdata)}}>{isquoteLoading ? <Loader /> : 'Track Your Claim'}</button>
        </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Claims;
