import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";

import flag from "../images/list/china-flag.png";
import city from "../images/list/china-city.jpg";

const China = () => {
  return (
    <>
      <div className="china">
        <div className="logo">
          <h1>China</h1>
        </div>
        <div className="table_map">
          <table>
            <tr>
              <td>Population</td>
              <td>141.24 crore (2021)</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>Beijing</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Chinese</td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>Taoism & Buddhism </td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Renminbi</td>
            </tr>
            <tr>
              <td>Key Cities</td>
              <td>Beijing, Shanghai, Chengdu & Hangzhou</td>
            </tr>
            <tr>
              <td>Exchange Rate</td>
              <td>1 RMB= 10 INR</td>
            </tr>
            <tr>
              <td>GDP per capita</td>
              <td>12.24 lakh crores USD (2017)</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>Average Temperature 19.8 °C</td>
            </tr>
          </table>
          <div>
            <div className="photos">
              <img src={flag} alt="flag" />
              <img src={city} alt="city" />
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26499314.114350416!2d104.172756!3d35.829884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChina!5e0!3m2!1sen!2sus!4v1670737871381!5m2!1sen!2sus"
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

      <div className="reason_china">
        <div className="reason_china_left">
          <div class="reason_china_heading">
            <h3>Top reason to Study</h3>
            <h2>MBBS IN CHINA</h2>
          </div>
          <ul>
            <li>English Medium Programs</li>
            <li>The Govt. owns most of the medical universities in china</li>
            <li>Affordable tuition fees & cost of living</li>
            <li>MCI & WHO recognized</li>
            <li>Would Class Infrastructure</li>
            <li>Indian Food affordable</li>
            <li>Globally recognized degree</li>
            <li>Similar Climatic Condition & Diseases</li>
            <li>Study in a society with excellent public security.</li>
            <li>Study and explore the long-standing history and culture.</li>
            <li>Strong economy and stable society.</li>
          </ul>
        </div>
        <div className="reason_china_right">
          <div class="reason_china_heading">
            <h2>MD(MBBS)</h2>
            <h2>IN CHINA</h2>
          </div>
          <ul>
            <li>Total No. International Seats in China – 3370</li>
            <li>Eligibility</li>
            <li> – NEET Qualified (2018 or 2019)</li>
            <li> – Aggregate of 60% score required in PCB and 10+2</li>
            <li>Course Duration – 6 Years</li>
            <li>
              Living Cost- Average living cost will be around 150,000 –
              200,000/- .p.a. this is largely depends on the student’s lifestyle
              .
            </li>
            <li>Travel Duration will be around 3 – 4 Hours.</li>
            <li>Mode of Education in English.</li>
          </ul>
        </div>
      </div>

      <div class="college_china">
        <div className="college_china_heading">
        <h2>Most Demanding Colleges in China</h2>
        </div>
       <div className="china_table">
       <table>
          <tr>
            <th>UNIVERSITY NAME </th>
            <th>EST. YEAR</th>
            <th>TOTAL EXPENSES (RMB) </th>
            <th>JW 202 CHARGES</th>
          </tr>
          <tr>
            <td>Beihua Medical university,Jilin City</td>
            <td>1906</td>
            <td>139150</td>
            <td>19000</td>
          </tr>
          <tr>
            <td>Guangxi Medical University,Nanning</td>
            <td>1934 </td>
            <td>236115 </td>
            <td>236115 </td>
          </tr>
          <tr>
            <td> Guangzhou Medical University,Guangzhou</td>
            <td>1958 </td>
            <td>190000</td>
            <td>15000</td>
          </tr>
          <tr>
            <td>Harbin Medical University,Harbin</td>
            <td>1926</td>
            <td>203500</td>
            <td>12500</td>
          </tr>
          <tr>
            <td>Jilin Medical university,Jilin city </td>
            <td>1946</td>
            <td>210450</td>
            <td>11000</td>
          </tr>
          <tr>
            <td>Jinzhou Medical University,Jinzhou</td>
            <td>1946</td>
            <td>234500 </td>
            <td>13500</td>
          </tr>
          <tr>
            <td>Kumming Medical University,Kumming</td>
            <td>1933</td>
            <td>203800</td>
            <td>12000</td>
          </tr>
          <tr>
            <td>North sichuan Medical Universty,Nanchong</td>
            <td>1951</td>
            <td>186870</td>
            <td>12000</td>
          </tr>
          <tr>
            <td>Shandong Medical University,Shandong</td>
            <td>1901</td>
            <td>291900 </td>
            <td>11500</td>
          </tr>
          <tr>
            <td>Shihezi Medical Universty,Shihezi</td>
            <td>1996</td>
            <td>184680</td>
            <td>15000</td>
          </tr>
          <tr>
            <td>Sichuan University,Chengdu</td>
            <td>1896</td>
            <td>223600</td>
            <td>14000</td>
          </tr>
          <tr>
            <td>Xuzhou Medical University,Xuzhou</td>
            <td>1958</td>
            <td>213400 </td>
            <td>11000</td>
          </tr>
        </table>
       </div>
      </div>
      
      <Reply />
      <Address />
    </>
  );
};

export default China;
