import React from "react";
import { Link } from "react-router-dom";
import doctor from "../../images/dockor.jpeg";
import one from "../../images/img/1.png";
import two from "../../images/img/2.png";
import three from "../../images/img/3.png";
import four from "../../images/img/4.png";
import five from "../../images/img/5.png";
import six from "../../images/img/6.png";
import seven from "../../images/img/7.png";
import eight from "../../images/img/8.png";
import nine from "../../images/img/9.png";

import Reply from "../Reply";
import Address from "../Address";
import Countrylist from "./Countrylist";

const Mbbs = () => {
  const Data = [
    {
      id: "0",
      img: one,
      heading: "INTRODUCTION",
      para: "We introduce you to all the universities in the world which provide the course you desire",
    },
    {
      id: "1",
      img: two,
      heading: "DETAILED COUNSELLING",
      para: "We advice you the best university according to your profile",
    },
    {
      id: "2",
      img: three,
      heading: "PROCESSING APPLICATION FORM",
      para: "Once you decide we apply to the university which you have selected",
    },
    {
      id: "3",
      img: four,
      heading: "DOCUMENTATION & OTHER PROCESS",
      para: "Ensuring proper documentation to secure you seat",
    },
    {
      id: "4",
      img: five,
      heading: "VISA ASSISTANCE",
      para: "Adhering to embassy guidelines for successful visa stamping",
    },
    {
      id: "5",
      img: six,
      heading: "FLY/AIRPORT PICK UP",
      para: "Adhering to embassy guidelines for successful visa stamping.We arrange someone to welcome you at airport",
    },
    {
      id: "6",
      img: seven,
      heading: "ACCOMMODATION",
      para: "Booking your stay in govt/private hostel",
    },
    {
      id: "7",
      img: eight,
      heading: "REGISTRATION",
      para: "Our representative will help you in college and other registration process",
    },
    {
      id: "8",
      img: nine,
      heading: "STUDY",
      para: "We wish you best for your future.",
    },
  ];

  return (
    <>
      <div className="mbbslogo"></div>

      <Countrylist />

      <div className="mbbs">
        <h2>MBBS ABORAD</h2>
        <p>
          Medicine is one of the most popular careers paths across the world
          including India. The journey to becoming a doctor typically starts
          with gaining an MBBS degree. But, getting a medical seat in India is
          not fiercely competitive. Studying abroad is one of the best options
          for the students who didn’t score a good rank in the NEET examination.
          Studying medicine abroad is comparatively less expensive and has a
          high ROI. There are many universities abroad that prefer taking the
          students from various countries to establish a positive co-culture
          environment. Foreign universities maintain high standards in terms of
          quality of education at cheaper / lesser fees when compared to India.
        </p>
      </div>
      <div className="doctor">
        <img src={doctor} alt="doctor" />
      </div>
      <div className="comparission">
        <div className="com_heading">
          <h3>COMPARISSION BETWEEN INDIA & ABROAD</h3>
        </div>
        <div className="com">
          <div className="com_left">
            <div className="com_heading">
              <h2>India</h2>
            </div>
            <ul>
              <li>
                High cut Off for GOVERNMENT Colleges , NEET Score should be more
                than 600
              </li>
              <li>
                If NOT through GOVT COLLEGES , should have a budget around 60 L
                Min for Private Colleges
              </li>
              <li>Bank Guarantee</li>
              <li>Management Seats / NRI Seats</li>
              <li>Colleges Charge DONATION & MISCILINIOUS FEES</li>
              <li>COLLEGE SECURITY AMOUNT</li>
              <li>HOSTEL SECURITY AMOUNT</li>
              <li>NO EXPOSURE</li>
            </ul>
          </div>
          <div className="com_right">
            <div className="com_heading">
              <h2>Abroad</h2>
            </div>
            <ul>
              <li>
                Can Easily into TOP GOVERNMENT , WORLD RANKING Colleges at
                affordable FEES.
              </li>
              <li>
                MBBS can be done from TOP PRIVATE Colleges at an average package
                of 20L—30L, depending upon the university.
              </li>
              <li>Good INFRASTRUCTURE</li>
              <li>Teaching Language will be English</li>
              <li>Teaching through MODERN TECHNOLOGIES & AMINITIES</li>
              <li>GLOBAL EXPOSURE</li>
              <li>PERSONALITY Grooming</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="eligibility">
        <h3>Eligibility For MBBS In Abroad</h3>
        <ul>
          <li>
            Each and every country (and university) has got their own criteria.
            Below are the general ones for Indian students looking to study MBBS
            abroad.
            <ul>
              <li>
                The student must be 17 years plus as on 31st December of the
                year in which the admission is being taken.
              </li>
              <li>The student must have completed the class 12th.</li>
              <li>
                The student must have an aggregate of at least 50% in Physics,
                Chemistry, and Biology and must have English as a compulsory
                subject if the student is from the General category.
              </li>
              <li>
                The student must have an aggregate of at least 40% in Physics,
                Chemistry, and Biology and must have English as a compulsory
                subject if the student is from SC/ST/OBC.
              </li>
              <li>
                You need to clear NEET from 2019 onwards for admission in any
                country abroad.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="category_main">
        <div className="category_heading">
          <h1>Admission Process for MBBS Abroad</h1>
        </div>
        <div className="category_card">
          <ul>
            {Data.map((elem, ind) => {
              return (
                <li key={ind}>
                  <img src={elem.img} alt="img" />
                  <div>
                    <h5> {elem.heading} </h5>
                    <p> {elem.para} </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mbbs_contact">
        <div>
          <h1> Contact now for MBBS In Abroad </h1>
          <a href="#mbbs_reply">
            <button> Contact Us </button>
          </a>
        </div>
      </div>

      <div className="mbbs_table">
        <table>
          <tr>
            <th>COUNTRY</th>
            <th>CAPITAL CITY</th>
            <th>             
              DURATION OF THE COURSE <br /> (YEARS)
            </th>
            <th>
              MINIMUM PACKAGE (TUTION FEE + <br /> HOSTEL + FOOD + INSURANCE)
            </th>
          </tr>
          <tr>
            <td>UKRAINE</td>
            <td>KIEV</td>
            <td>5.8</td>
            <td>₹25 Lakh</td>
          </tr>
          <tr>
            <td>RUSSIA</td>
            <td>MOSCOW</td>
            <td>5.8</td>
            <td>₹20 Lakh</td>
          </tr>
          <tr>
            <td>PHILIPPINES</td>
            <td>MANILA</td>
            <td>6</td>
            <td>₹25 Lakh</td>
          </tr>
          <tr>
            <td>BANGLADESH</td>
            <td>DHAKA</td>
            <td>5</td>
            <td>₹19 Lakh</td>
          </tr>
          <tr>
            <td>CHINA</td>
            <td>BEIJING</td>
            <td>5</td>
            <td>₹19 Lakh</td>
          </tr>
          <tr>
            <td>KYRGYZSTAN</td>
            <td>BISHKEK</td>
            <td>5</td>
            <td>₹25 Lakh</td>
          </tr>
          <tr>
            <td>KAZAKHSTAN</td>
            <td>ASTANA</td>
            <td>5</td>
            <td></td>
          </tr>
          <tr>
            <td>GEORGIA</td>
            <td>TBIILISI</td>
            <td>6</td>
            <td>₹19 Lakh</td>
          </tr>
          <tr>
            <td>MAURITIUS</td>
            <td>PORT LOUIS</td>
            <td>5</td>
            <td>₹43 Lakh</td>
          </tr>
          <tr>
            <td>NEPAL</td>
            <td>KATHMANDU</td>
            <td>5</td>
            <td>₹45 Lakh</td>
          </tr>
        </table>
      </div>

     <div id="mbbs_reply">
     <Reply />
      <Address />
       </div>
    </>
  );
};

export default Mbbs;
