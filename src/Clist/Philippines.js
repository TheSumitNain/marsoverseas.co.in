import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";

import flag from "../images/list/philippines-flag.jpg";
import city from "../images/list/philippines-city.jpeg";
import doctor from "../images/list/philippines-doctor.jpg";

const Philippines = () => {
  return (
    <>
      <div className="philip">
        <div className="logo">
          <h1>Philippines</h1>
        </div>
        <div className="table_map">
          <table>
            <tr>
              <td>Population</td>
              <td>11 crore (approx.)</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>Manila</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Filipino, English</td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>Christianity (90%), Islam (6%)</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Peso</td>
            </tr>
            <tr>
              <td>Key Cities</td>
              <td>Manila, Davao, Quezon</td>
            </tr>
            <tr>
              <td>Exchange Rate</td>
              <td>1 Philippino Peso = 1.50 INR</td>
            </tr>
            <tr>
              <td>GDP per capita</td>
              <td>9538.82 USD (2019)</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>Tropical, Hot, Humid</td>
            </tr>
          </table>
          <div>
            <div className="photos">
              <img src={flag} alt="flag" />
              <img src={city} alt="city" />
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249049.7551059262!2d121.6066929443864!3d12.75235757919046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a4cc2169b81943%3A0x833878867b7241f3!2sTablas%20Strait!5e0!3m2!1sen!2sin!4v1670686355274!5m2!1sen!2sin"
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

      <div className="reason">
        <div className="reason_heading">
          <h3>Top reason to Study</h3>
          <h2>MBBS IN PHLIPPINES</h2>
        </div>
        <div className="reason_list">
          <div className="reason_left">
            <ul>
              <li>A former colony of USA follows US pattern of Education</li>
              <li>
                Philippines is the highest provider of nurses & Doctors to the
                USA
              </li>
              <li>Indian food & mess.</li>
              <li>94% of the population speaks English.</li>
              <li>Entire education in English Medium</li>
              <li>Best results in MCI Screening Test.</li>
              <li>BEST Success rate in USMLE for the last 5 years</li>
              <li>Great Clinical Experience for students.</li>
              <li>Degree Offered: MD (Equivalent to MBBS in India)</li>
              <li>Affordable education, accommodation & living cost.</li>
              <li>Duration of course after B. Sc is 4 years</li>
              <li>Duration of course after 10+2 is 6 years</li>
            </ul>
          </div>
          <div className="reason_right">
            <ul>
              <li>Philippines attract students from more than 65 countries</li>
              <li>
                Best opportunities for clinical exposure at university run
                hospitals
              </li>
              <li>
                Proven high quality of education and excellent academic
                standards
              </li>
              <li>
                Philippines is the fourth Largest English speaking country in
                the world.
              </li>
              <li>
                Graduates can apply for license with Medical Councils of more
                than 180 countries.
              </li>
              <li>
                Philippines is considered one’s entry path to Canada, U.S.A. and
                the U.K.
              </li>
              <li>
                Get Admission in Top Medical Universities of Philippines at
                affordable tuition fees now!!!
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="study_philippines">
        <div className="study_philippines_left">
          <h2>Study MBBS in Philippines</h2>
          <p>
            Pursuing <span>MBBS in Philippines</span> is a preferred
            destinations from Indian students. Medical Colleges/Universities of
            Philippines provides the absolute blend of theoretical and practical
            education, which empower the students to become a successful Doctor.
          </p>
        </div>
        <div className="study_philippines_right">
          <img src={doctor} alt="" />
        </div>
      </div>

      <div className="philippines_advantge">
        <h2>Advantages of Studying Medical in Philippines</h2>
        <ul>
          <li>
            Philippines is the 3rd largest English speaking nation in the world.
            Majority of Filipinos can speak fluent English. There is no need to
            learn a local language.
          </li>
          <li>Philippines has Asia’s highest literacy rate of over 94%.</li>
          <li>
            Philippines is a democratic, peaceful, politically stable country in
            Asia, and easily accessible from India.
          </li>
          <li>
            Medical Education offered by Colleges in Philippines is recognized
            by WHO, MCI, USMLE, PLAB.
          </li>
          <li>
            1 out of every 10 doctors practicing in America is Medical Graduates
            from Philippines.
          </li>
          <li>
            Medical Education in Philippines follows the American Educational
            System thus students will have the option of transferring their
            credit to an American institution to continue their Post-Graduation
            Studies in USA.
          </li>
          <li>Philippines’ are the largest Asian immigrants in USA.</li>
          <li>
            Thousands of Indian students are already pursuing Medical Education
            in Philippines.
          </li>
          <li>
            Living and Accommodation expenses are very much comparable to that
            of India.
          </li>
        </ul>
      </div>

      <div className="college_philippines">
        <div className="college_philippines_heading">
          <h2>Most Demanding Colleges In Philippines</h2>
        </div>
        
        <div className="philip_table"> 
        <table>
          <tr>
            <th>Colleges/Universities</th>
            <th>Total Tuition Fee</th>
          </tr>
          <tr>
            <td>University of Perpetual Help System Dalta</td>
            <td>Fees: Rs. 23,25,000/-</td>
          </tr>
          <tr>
            <td>Ama Medical College of Medicine</td>
            <td>Fee: Rs. 18,75,000/-</td>
          </tr>
          <tr>
            <td>Our Lady of Fathima University</td>
            <td>Fee: Rs. 29,70,000/-</td>
          </tr>
          <tr>
            <td>Davao Medical School Foundation</td>
            <td>Fee: Rs. 23,80,000/-</td>
          </tr>
          <tr>
            <td>UV Gullas College Of Medicine</td>
            <td>Fee: Rs. 19,35,000/-</td>
          </tr>
        </table>
        </div>

      </div>
      
      <Reply />
      <Address />
    </>
  );
};

export default Philippines;
