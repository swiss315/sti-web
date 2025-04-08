import "../../stylesheets/policies.css";
import { Link } from 'react-router-dom';
import React, {useEffect} from "react";
// import Motor from "./Motor";
import all from '../../assets/all.png'
import health from '../../assets/health1.jpg';
import motor from '../../assets/motor.png';
import easy from '../../assets/easy.png';
import swiss from '../../assets/swiss.png';
import {usePolicy} from "../../hooks/Policy";

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
  let userpolicy = {}
console.log(userpolicy);
const { getPolicies } = usePolicy()

    useEffect(() => {
            getPolicies()
        },
        [getPolicies]);

  return (

      <div id="policies" className="policies">

        <div className="policies_container">
          <h3>Active Policies</h3>
          <div className="policies_wrap">
              <Link className="insurance_link" to='/motor' >
                <img className="insurance_img" src={motor} alt="insurance_images" />
                <div className="text">
                  <p>{userpolicy?.my_policies?.vehicle?.length} policies</p>
                  <h3>Motor Insurance</h3>
                </div>
              </Link>
              <Link className="insurance_link" to='/health'>
                  <img className="insurance_img" src={health} alt="insurance_images"/>
                  <div className="text">
                      <p>{userpolicy?.my_policies?.vehicle?.length} policies</p>
                      <h3>Health Insurance</h3>
                  </div>
              </Link>
              <Link className="insurance_link" to='/travel' >
                <img className="insurance_img" src={easy} alt="insurance_images" />
                <div className="text">
                  <p>{userpolicy?.my_policies?.travel?.length} policies</p>
                  <h3>Easy Travel Insurance</h3>
                </div>
              </Link>
              <Link className="insurance_link" to='/risk' >
                <img className="insurance_img" src={all} alt="insurance_images" />
                <div className="text">
                  <p>{userpolicy?.my_policies?.all_risk?.length} policies</p>
                  <h3>All Risk Insurance</h3>
                </div>
              </Link>
              <Link className="insurance_link" to='/swiss' >
                <img className="insurance_img" src={swiss} alt="insurance_images" />
                <div className="text">
                  <p>{userpolicy?.my_policies?.swiss?.length} policies</p>
                  <h3>Swiss-F Insurance</h3>
                </div>
              </Link>
          </div>
        </div>

      </div>


  );
};

export default Policies;
