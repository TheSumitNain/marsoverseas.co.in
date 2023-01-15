import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";

import flag from "../images/list/russia-flag.png";
import city from "../images/list/russia-city.jpg";

const Russia = () => {
  return (
    <>
      <div className="russia">
        <div className="logo">
          <h1>Russia</h1>
        </div>
        <div className="table_map">
          <table>
            <tr>
              <td>Population</td>
              <td> 14.45 Crore (approx.)</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>Moscow</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Russian </td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>
                Christianity(Russian <br /> Orthodoxy), Buddhism, Bahai, Judaism
              </td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Russian ruble </td>
            </tr>

            <tr>
              <td>Exchange Rate</td>
              <td>1 Russian ruble = 1.08 INR</td>
            </tr>
            <tr>
              <td>GDP per capita</td>
              <td> $1.58 lakh crores</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>Fairly Severe Winters</td>
            </tr>
          </table>
          <div>
            <div className="photos">
              <img src={flag} alt="flag" />
              <img src={city} alt="city" />
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33551752.545332927!2d104.412992!3d59.118405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sus!4v1670841592900!5m2!1sen!2sus"
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

      <div className="reason_russia">
        <h2>Top reason to Study MBBS in Russia</h2>
        <ul>
          <li>
            Education in Russia has always been one of the best in the whole of
            Europe. Russia has always been ahead in the field of education and
            more specifically medicine.
          </li>
          <li>
            Russian scientists were the first one, to make the Covid – 19
            vaccination.
          </li>
          <li>
            Russian universities are truly international and recognized by NMC &
            WHO.
          </li>
          <li>
            Worldwide Recognition of the Degrees provides by Medical
            Universities of Russia.
          </li>
          <li>Global recognition and respect of Russian degree programs.</li>
          <li>The campus are more than 60 Yrs. old.</li>
          <li>
            There is a strong and mutual bond in Indi-Russian social, economic,
            political and cultural lifes.
          </li>
          <li>European standard of living. Low & Subsidized course fees.</li>
          <li>Comfortable and well-Equipped campuses and Dormitories.</li>
          <li>
            Accommodation in Russia is very comfortable and most of them are on
            campus.
          </li>
          <li>Great social life of international students in Russia.</li>
          <li>Russian world renowned research facilities.</li>
        </ul>
      </div>

      <div className="md_russia">
        <div className="md_russia_heading">
          <h2>MD (MBBS) IN RUSSIA</h2>
        </div>
        <h6>
          <span>Course Duration – 6 Years.</span>
        </h6>
        <ul>
          <li>Eligibility</li>
        </ul>
        <span> – NEET Qualified (2018 or 2019)</span>
        <span> -Aggregate of 50% Score Required in PCB and 10+2.</span>
        <ul>
          <li>
            Living Cost- Average living cost will be around 150,000-200,000/-
            .p.a. this is largely depends on the student’s lifestyle .
          </li>
          <li>Hostel Facility</li>
        </ul>
        <span>
          – Hostels are centrally heated, there will be no problem for the
          students during the winter season. Hot water will be available to the
          students.
        </span>
        <ul>
          <li>MCI Coaching</li>
        </ul>
        <span>
          -Students are trained for the MCI Screening Test so that they can
          practice in India and there is no additional cost for this training.
        </span>
        <ul>
          <li>Travel Duration – 10 to 12 Hours.</li>
          <li>Mode of Education in English.</li>
        </ul>
      </div>

      <div className="college_russia">
        <div className="college_russia_heading">
          <h2>Most Demanding Colleges In Russia</h2>
        </div>
        <table>
          <tr>
            <th>Collegies/Universities</th>
            <th>Total Tuition Fee</th>
          </tr>
          <tr>
            <td>Crimea Federal University</td>
            <td>Fee: Rs. 18,00,000/-</td>
          </tr>
          <tr>
            <td>Bashkir State Medical University</td>
            <td>Fee: Rs. 17,55,000/-</td>
          </tr>
          <tr>
            <td>Kazan Federal University</td>
            <td>Fee: Rs. 27,72,000/-</td>
          </tr>
          <tr>
            <td>Kazan State Medical University</td>
            <td>Fee: Rs. 24,75,000/-</td>
          </tr>
          <tr>
            <td>Far Eastern Federal University</td>
            <td>Fee: Rs. 18,00,000/-</td>
          </tr>
          <tr>
            <td>Belgorod National Research Medical University</td>
            <td>Fee: Rs. 22,05,000/-</td>
          </tr>
          <tr>
            <td>Volgograd Medical University</td>
            <td>Fee: Rs. 26,55,000/-</td>
          </tr>
          <tr>
            <td>Ulyanovsk State University</td>
            <td>Fee: Rs. 18,90,000/-</td>
          </tr>
          <tr>
            <td>Petrozavodsk State University</td>
            <td>Fee: Rs. 13,50,000/-</td>
          </tr>
          <tr>
            <td>Ural State Med. University</td>
            <td>Fee: Rs. 15,75,000/-</td>
          </tr>
          <tr>
            <td>Altai state medical University</td>
            <td>Fee: Rs. 18,90,000/-</td>
          </tr>
          <tr>
            <td>Kuban State University</td>
            <td>Fee: Rs. 13,95,000/-</td>
          </tr>
          <tr>
            <td>St. Petrsburg State Pediatric Med. University</td>
            <td>Fee: Rs. 22,05,000/-</td>
          </tr>
          <tr>
            <td>Stavropol State Medical University</td>
            <td>Fee: Rs. 18,00,000/-</td>
          </tr>
          <tr>
            <td>Kabardino Balkarian State Medical University</td>
            <td>Fee: Rs. 13,50,000/-</td>
          </tr>
          <tr>
            <td>Saratov State University</td>
            <td>Fee: Rs. 13,08,000/-</td>
          </tr>
          <tr>
            <td>Chuvash State University</td>
            <td>Fee: Rs. 11,88,000/-</td>
          </tr>
          <tr>
            <td>People’s Friendship University</td>
            <td>Fee: Rs. 42,90,000/-</td>
          </tr>
          <tr>
            <td>1st Moscow State Medical University</td>
            <td>Fee: Rs. 41,40,000/-</td>
          </tr>
        </table>
      </div>

      <Reply />
      <Address />
    </>
  );
};

export default Russia;
