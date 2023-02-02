import "../stylesheets/policies.css";
import { Link } from 'react-router-dom';
import React from "react";
// import Motor from "./Motor";
import all from '../assets/all.png'
import marine from '../assets/marine.png';
import motor from '../assets/motor.png';
import easy from '../assets/easy.png';
import swiss from '../assets/swiss.png';

// import Navbar from '../components/Navbar.js'


const policiesData = [
  
  {
    id: 1,
    path: 'marine',
    image: marine,
    text: '2 policies',
    heading: 'Marine Insurance'
  },
  {
    id: 2,
    path: 'motor',
    image: motor,
    text: '2 policies',
    heading: 'Motor Insurance'
  },
  {
    id: 3,
    path: 'easy',
    image: easy,
    text: '2 policies',
    heading: 'Easy Travel Insurance'
  },
  {
    id: 4,
    path: 'all',
    image: all,
    text: '2 policies',
    heading: 'All Risk Insurance'
  },
  {
    id: 5 ,
    path: 'swiss',    
    image: swiss,
    text: '2 policies',
    heading: 'Swiss-F Insurance'
  },
  
]




const Policies = () => {
  
  
  return (   

      <div id="policies" className="policies">
        
        <div className="policies_container">
          <h3>Active Policies</h3>
          <div className="policies_wrap">
            {policiesData.map((item)=>(
              
                <Link className="insurance_link" key={item.id} to={item.path} >
                <img className="insurance_img" src={item.image} alt="insurance_images" />
                <div className="text">
                  <p>{item.text}</p>
                  <h3>{item.heading}</h3>
                </div>
              </Link>
              
            ))}
          </div>
        </div>

      </div>
      
    
  );
};

export default Policies;
