import React from 'react'

function Editprofile() {
    const click = useRef('')
    const [filename, setFilename] = useState()

    const file = () => {
        click.current.click()
      }
  return (
    <div>
        <h5 className='report-title'>
            Profile Settings
        </h5>
        <div className=''>
            <div className='profile-container'>
                <div className='profile-box'>
                    <div>
                        
                    </div>
                    <span onClick={file}>
                        upload
                    </span>
                    <input type='file' ref={click} onChange={(e) => { setFilename(e.target.files[0].name)}} hidden />
                    <span className='profile-edit-button'>
                        
                    </span>
                </div>
                <div className='profile-menu'>
                    <Link>
                        <Termsicon /> 
                        <span>
                            Terms & Conditions
                        </span>
                    </Link>
                    <Link className='second'>
                        <Privacyicon /> 
                        <span>
                            Privacy Policy
                        </span>
                    </Link>
                    <Link>
                        <Redlogouticon /> <span className='redlogout'>Logout</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Editprofile