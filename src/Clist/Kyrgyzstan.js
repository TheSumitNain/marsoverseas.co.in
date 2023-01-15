import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";

import flag from "../images/list/kyrgyzstan-flag.jpg";
import city from "../images/list/kyrgyzstan-city.jpg";

const Kyrgyzstan = () => {
  return (
    <>
      <div className="kyrgyzstan">
        <div className="logo">
          <h1>Kyrgyzstan</h1>
        </div>
        <div className="table_map">
          <table>
            <tr>
              <td>Population</td>
              <td> 62 Lakh (approx.)</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>Bishkek</td>
            </tr>
            <tr>
              <td>Language</td>
              <td> Kyrgyz, Russian </td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>
                Islam, Christianity(Russian <br />
                Orthodoxy), Buddhism, Bahai, Judaism
              </td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Kyrgyzstani som </td>
            </tr>
            <tr>
              <td>Key Cities</td>
              <td>
                City of Bishkek, Batken, Chuy, Jalal-Abad, <br /> Naryn, Osh
                Talas, Issyk-Kul, City of Osh
              </td>
            </tr>
            <tr>
              <td>Exchange Rate</td>
              <td>1 Kyrgyzstani som = 1.00INR</td>
            </tr>
            <tr>
              <td>GDP per capita</td>
              <td> $1,254(2017)</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>
                Warm Dry summers & Fairly Severe <br /> Winters
              </td>
            </tr>
          </table>
          <div>
            <div className="photos">
              <img src={flag} alt="flag" />
              <img src={city} alt="city" />
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6146329.502475033!2d74.745377!3d41.218775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3897381dfce927f3%3A0x281058b74e88c433!2sKyrgyzstan!5e0!3m2!1sen!2sus!4v1670819511440!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="reason_kyrgyzstan">
        <div className="reason_kyrgyzstan_heading">
          <h2>Top reason to Study</h2>
          <h2>MBBS IN KYRGYZSTAN</h2>
        </div>
        <ul>
          <li>
            Top medical Universities in Kyrgyzstan are recognized by MCI, WHO,
            UNESCO and are enlisted with the World Directory of Medical Schools
            (WDOMS).
          </li>
          <li>MBBS in Kyrgyzstan is affordable.</li>
          <li>The medium of instruction for MBBS In Kyrgyzstan is English.</li>
          <li>
            Top Medical Universities in Kyrgyzstan provides world class
            facilities to Indian students traveling for MBBS in Kyrgyzstan
          </li>
          <li>
            The universities are well equipped with all modern amenities and
            have a good infrastructure to facilitate the students.
          </li>
          <li>
            Top Medical Universities in Kyrgyzstan offers multiple options for
            clinical practice at renowned hospitals to the students just to make
            sure they take good practical exposure before they head out to
            practice their profession..
          </li>
          <li>
            Universities for MBBS in Kyrgyzstan for Indian students provide
            hostel facilities for Indian students with world class amenities.
          </li>
          <li>
            Students traveling for MBBS in Kyrgyzstan get Degree of MD Physician
            from top medical universities of Kyrgyzstan that are recognized in
            all parts of the world.
          </li>
          <li>The universities have a large number of affiliated hospitals.</li>
          <li>Kyrgyzstan is a safe and secure country.</li>
          <li>
            The faculty and staff at the universities are also very experienced.
          </li>
        </ul>
      </div>

      <div className="md_kyrgyzstan">
        <div className="md_kyrgyzstan_heading">
          <h2>MD (MBBS) in Kyrgyzstan</h2>
        </div>

        <ul>
          <li>
            <h5>Course Duration – 5 Years</h5>
          </li>
          <li>Eligibility</li>
        </ul>
        <span> – NEET Qualified (2018 or 2019)</span>
        <span> -Aggregate of 50% Score Required in PCB and 10+2.</span>
        <ul>
          <li>
            Living Cost- Average living cost will be around 100,000-150,000/-
            .p.a. this is largely depends on the student’s lifestyle .
          </li>
          <li>Scholarship for MBBS</li>
        </ul>
        <span>
          –There are certain scholarship programs in the Country of Kyrgyzstan
          medical colleges which are open for the eligible students who can’t
          fund their entire fee.
        </span>
        <ul>
          <li>MCI Coaching</li>
        </ul>
        <span>
          -Students are trained for the MCI Screening Test so that they can
          practice in India and there is no additional cost for this training.
        </span>
        <ul>
          <li>Travel Duration – 3 to 4 Hours.</li>
          <li>Mode of Education in English.</li>
        </ul>
      </div>

      <div className="college_kyrgyzstan">
        <div className="college_kyrgyzstan_heading">
          <h2>Most Demanding Colleges In Kyrgyzstan</h2>
        </div>
        <table>
          <tr>
            <th>Collegies/Universities</th>
            <th>Total Fees</th>
          </tr>
          <tr>
            <td>Asian Medical Institute</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Osh State University</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Jalalabad State Medical University</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Kyrgyz State Medical Academy(KSMA)</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>International School of Medicine(ISM), Central Campus</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>International School of Medicine(ISM), Issykul Campus</td>
            <td>Fee: N/A</td>
          </tr>
        </table>
      </div>
      
      <Reply />
      <Address />
    </>
  );
};

export default Kyrgyzstan;
