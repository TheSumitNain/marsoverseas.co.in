import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";

import flag from "../images/list/uzbekistan-flag.png";
import city from "../images/list/uzbekistan-city.jpg";

const Uzbekistan = () => {
  return (
    <>
      <div className="uzbekistan">
        <div className="logo">
          <h1>Uzbekistan</h1>
        </div>
        <div className="table_map">
          <table>
            <tr>
              <td>Population</td>
              <td>3.49 crores (2021)</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>Tashkent</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Uzbek </td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>Islam(88-90%), Christians(9%) </td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Uzbekistani Som </td>
            </tr>

            <tr>
              <td>Exchange Rate</td>
              <td>1 Uzbekistani Som = 0.0073 INR</td>
            </tr>
            <tr>
              <td>GDP per capita</td>
              <td> 1,983.06 USD (2021)</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>hot and dry</td>
            </tr>
          </table>
          <div>
            <div className="photos">
              <img src={flag} alt="flag" />
              <img src={city} alt="city" />
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6131044.441927201!2d64.57358194999999!3d41.38116605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sUzbekistan!5e0!3m2!1sen!2sin!4v1670854513038!5m2!1sen!2sin"
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

      <div className="reason_uzbekistan">
        <div className="reason_uzbekistan_heading">
          <h2>Reason to MBBS in Uzbekistan</h2>
        </div>
        <ul>
          <li>
            One of the real benefits of considering MBBS in Uzbekistan 2022-23
            is the expense factor. You will track down that education expense is
            less when contrasted with a portion of India's private medical
            schools.
          </li>
          <li>
            You will find numerous Uzbekistan medical college perceived by MCI
            and worldwide bodies like WHO.
          </li>
          <li>
            The Medium of teaching in medical colleges in Uzbekistan is English.
            So Indian students won't have an issue in studying in the medical
            colleges of Uzbekistan.
          </li>
          <li>
            The nature of Uzbekistan medical university schooling is excellent,
            and the Universities in this nation have a fantastic foundation.
          </li>
        </ul>
      </div>

      <div className="advantage_uzbekistan">
        <h2>Advantages of MBBS in Uzbekistan</h2>
        <ul>
          <li>
            Uzbekistan has the most reliable quality education, and the expense
            of medical training in Uzbekistan is low.
          </li>
          <li>
            Uzbekistan has numerous government-funded medical colleges, and
            bodies like MCI and WHO perceive many medical colleges.
          </li>
          <li>
            The language of guidance in the medical colleges in Uzbekistan is
            English, making it simple for Indian students to study in
            Uzbekistan's medical colleges.
          </li>
          <li>
            Uzbekistan has an excellent framework, and the general climate in
            Uzbekistan is delightful.
          </li>
          <li>
            Uzbekistan MBBS course has more accentuation on the logical parts of
            training.
          </li>
          <li>
            The typical general cost for essential items in Uzbekistan is
            additionally low.
          </li>
          <li>
            Traveling to Uzbekistan isn't troublesome as there are many non-stop
            flights from India to Uzbekistan.
          </li>
          <li>
            Students have an alternative to pick hostels or any apartments to
            live in with high-class faculty and safe living.
          </li>
          <li>
            Numerous colleges, pretty much every college and school has an
            Indian mess, and in this way, there is no issue for any Indian
            student about their life of tongue.
          </li>
          <li>
            Numerous students search for part-time jobs for their expenses or
            some different reasons. So there is no compelling reason to go house
            to house for internships since college gives low maintenance
            occupations. You need to apply for that.
          </li>
        </ul>
      </div>

      <div className="eligilibity_uzbekistan">
        <h2>Eligibility Criteria for MBBS in Uzbekistan</h2>
        <ul>
          <li>Students should pass out 10 + 2 with a regular board.</li>
          <li>60% marks in physics, chemistry, biology.</li>
          <li>Cleared NEET.</li>
          <li>Students should know English (IELTS not required).</li>
        </ul>
      </div>

      <div className="college_uzbekistan">
        <div className="college_uzbekistan_heading">
          <h2>Most Demanding Colleges In Uzbekistan</h2>
        </div>
        <table>
          <tr>
            <th>Collegies/Universities</th>
            <th>Total Tuition Fee</th>
          </tr>
          <tr>
            <td>Andijan State Medical Institute </td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Bukhara State Medical Institute </td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Tashkent State Dental Institute </td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Samarkand State Medical Institute</td>
            <td>Fee: N/A</td>
          </tr>
        </table>
      </div>

      <Reply />
      <Address />
    </>
  );
};

export default Uzbekistan;
