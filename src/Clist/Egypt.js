import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";

import flag from "../images/list/egypt-flag.jpg";
import city from "../images/list/egypt-city.jpg";


const Egypt = () => {
  return (
    <>
      <div className="egypt">
        <div className="logo">
          <h1>Egypt</h1>
        </div>
        <div className="table_map">
          <table>
            <tr>
              <td>Population</td>
              <td> 9.84 crore (approx.)</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>Cairo</td>
            </tr>
            <tr>
              <td>Language</td>
              <td> Modern Standard Arabic </td>
            </tr>
            <tr>
              <td>Religion</td>
              <td> Christianity , Islam</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Egyptian pound</td>
            </tr>
            <tr>
              <td>Exchange Rate</td>
              <td>1 Egyptian pound = 4.65 INR</td>
            </tr>
            <tr>
              <td>GDP per capita </td>
              <td>2,549.13 USD (2018)</td>
            </tr>
          </table>
          <div>
            <div className="photos">
              <img src={flag} alt="flag" />
              <img src={city} alt="city" />
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7291205.232928881!2d26.380662321509334!3d26.834900876077395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2sus!4v1670831538258!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="reason_egypt">
        <div className="reason_egypt_heading">
          <h2>Top reasons to study MBBS in Egypt</h2>
        </div>

        <ul>
          <li>
            The prime merit of studying MBBS in Egypt as per the new amendment
            in their law is practical case study experience and patient meeting
            from the very beginning of the course
          </li>
          <li>
            The degree awarded after MBBS in Egypt is recognized by medical
            councils of various countries permitting the students to write
            licensing exams of those countries. Egypt also has MCI listed
            universities and accepts international students
          </li>
          <li>
            The country provides good infrastructure and a friendly environment
            for study
          </li>
          <li>
            It is an ancient country and has a deep-rooted history. There is a
            lot to explore in the country
          </li>
          <li>
            Safe and secure study environment for both male and female students.
          </li>
          <li>State of art best infrastructure</li>
          <li>
            After completing MBBS from Egypt, students get direct admission to
            PG studies in Germany.
          </li>
          <li>
            He faculties are excellent and highly qualified and also have
            practical knowledge so that they can guide their students well.
          </li>
          <li>
            As the country is densely populated, hospitals have high walk-in
            giving an opportunity to learn
          </li>
          <li>
            The climate, academic condition and cost of living is about like
            India
          </li>
        </ul>
      </div>

      <div className="college_egypt">
        <div className="college_egypt_heading">
          <h2>Most Demanding Colleges in Egypt</h2>
        </div>
        <table>
          <tr>
            <th>Collegies/Universities</th>
            <th>Total Fees</th>
          </tr>
          <tr>
            <td>Cairo University</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Alexandria University</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Ain Shams University</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Mansoura University</td>
            <td>Fee: N/A</td>
          </tr>
        </table>
      </div>

      <Reply />
      <Address />
    </>
  );
};

export default Egypt;
