import React, { useRef, useState } from 'react'

import '../../stylesheets/report.css'

import {ReactComponent as Uploadicon} from "../../assets/icons/uploadicon.svg";

function Reportandincident() {
    const click = useRef('')
    const [filename, setFilename] = useState()

    const file = () => {
        click.current.click()
      }

  return (
    <div className='report-content'>
        <h5 className='report-title'>
            Report and Incident
        </h5>
        <div className=''>
            <form className='report-card-container'>
                <div className='report-inputgroup'>
                    <label>
                        Title
                    </label>
                    <input type='text' />
                </div>
                <div className='report-inputgroup'>
                    <label>
                        Description of incident
                    </label>
                    <textarea rows={6} />
                </div>
                <div className='report-inputgroup'>
                    <label>
                        Upload Picture
                    </label>
                    <input type='file' ref={click} onChange={(e) => { setFilename(e.target.files[0].name)}} hidden />
                    <div className='upload-input'>
                        <Uploadicon />
                        <p>{filename}</p>
                        <p>Choose File from your device <span onClick={file}>here</span></p>
                    </div>
                </div>
                <div className='report-inputgroup'>
                    <label>
                        Location
                    </label>
                    <input type='text' placeholder='Get my location' />
                </div>
                <div className='report-button'>
                    <button>
                        submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Reportandincident
