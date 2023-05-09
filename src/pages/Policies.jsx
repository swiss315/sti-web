import "../stylesheets/policies.css";
import { Link } from 'react-router-dom';
import React from "react";
// import Motor from "./Motor";
import all from '../assets/all.png'
// import marine from '../assets/marine.png';
import motor from '../assets/motor.png';
import easy from '../assets/easy.png';
import swiss from '../assets/swiss.png';
import { Cookies } from "react-cookie";

// import Navbar from '../components/Navbar.js'

// const policiesData = [
  
//   {
//     id: 1,
//     path: '/marine',
//     image: marine,
//     text: '2 policies',
//     heading: 'Marine Insurance'
//   },
//   {
//     id: 2,
//     path: '/motor',
//     image: motor,
//     text: '2 policies',
//     heading: 'Motor Insurance'
//   },
//   {
//     id: 3,
//     path: '/easy',
//     image: easy,
//     text: '2 policies',
//     heading: 'Easy Travel Insurance'
//   },
//   {
//     id: 4,
//     path: '/all',
//     image: all,
//     text: '2 policies',
//     heading: 'All Risk Insurance'
//   },
//   {
//     id: 5 ,
//     path: '/swiss',    
//     image: swiss,
//     text: '2 policies',
//     heading: 'Swiss-F Insurance'
//   },
  
// ]

const Policies = () => {
  const cookie = new Cookies();
  let userpolicy = cookie.get("policy");
  userpolicy = JSON.parse(atob(userpolicy));
console.log(userpolicy);
  
  return (   

      <div id="policies" className="policies">
        
        <div className="policies_container">
          <h3>Active Policies</h3>
          <div className="policies_wrap">
            {/* {policiesData.map((item)=>(
              
                <Link className="insurance_link" key={item.id} to={item.path} >
                <img className="insurance_img" src={item.image} alt="insurance_images" />
                <div className="text">
                  <p>{item.text}</p>
                  <h3>{item.heading}</h3>
                </div>
              </Link>
              
            ))} */}
            {/* {userpolicy.my_policies.swiss.length === 0 ? '' :
            <Link className="insurance_link" to='/marine' >
                <img className="insurance_img" src={marine} alt="insurance_images" />
                <div className="text">
                  <p>2 policies</p>
                  <h3>Marine Insurance</h3>
                </div>
              </Link> } */}
              {userpolicy.my_policies.vehicle.length === 0 ? '' :
              <Link className="insurance_link" to='/motor' >
                <img className="insurance_img" src={motor} alt="insurance_images" />
                <div className="text">
                  <p>{userpolicy.my_policies.vehicle.length} policies</p>
                  <h3>Motor Insurance</h3>
                </div>
              </Link>
              }
              {userpolicy.my_policies.travel.length === 0 ? '' :
              <Link className="insurance_link" to='/travel' >
                <img className="insurance_img" src={easy} alt="insurance_images" />
                <div className="text">
                  <p>{userpolicy.my_policies.travel.length} policies</p>
                  <h3>Easy Travel Insurance</h3>
                </div>
              </Link>
                }
                {userpolicy.my_policies.all_risk.length === 0 ? '' :
              <Link className="insurance_link" to='/risk' >
                <img className="insurance_img" src={all} alt="insurance_images" />
                <div className="text">
                  <p>{userpolicy.my_policies.all_risk.length} policies</p>
                  <h3>All Risk Insurance</h3>
                </div>
              </Link>
}
              {userpolicy.my_policies.swiss.length === 0 ? '' :
              <Link className="insurance_link" to='/swiss' >
                <img className="insurance_img" src={swiss} alt="insurance_images" />
                <div className="text">
                  <p>{userpolicy.my_policies.swiss.length} policies</p>
                  <h3>Swiss-F Insurance</h3>
                </div>
              </Link>
                }
          </div>
        </div>

      </div>
      
    
  );
};

export default Policies;
