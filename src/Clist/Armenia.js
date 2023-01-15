import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";
import flag from "../images/list/armenia-flag.png";
import city from "../images/list/armenia-city.jpg";

const Armenia = () => {
  return (
    <>
      <div className="armenia">
        <div className="logo">
          <h1>ARMENIA</h1>
        </div>
        <div className="table_map">
          <table>
            <tr>
              <td>Population</td>
              <td> 3,046,100 (approx.)</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>Yerevan</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Armenian </td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>Armenian Apostolic Church</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Armenian dram </td>
            </tr>
            <tr>
              <td>Key Cities</td>
              <td>Dilijan </td>
            </tr>
            <tr>
              <td>Exchange Rate</td>
              <td> 1 Armenian = 0.15 INR</td>
            </tr>
            <tr>
              <td>GDP per capita</td>
              <td> $3,936.80</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>Annual Avg. 17.4 °C</td>
            </tr>
          </table>
          <div>
            <div className="photos">
              <img src={flag} alt="flag" />
              <img src={city} alt="city" />
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3126507.310915181!2d45.040183!3d40.070286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2sArmenia!5e0!3m2!1sen!2sus!4v1670776162557!5m2!1sen!2sus"
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

      <div className="reason_armenia">
        <div className="reason_armenia_heading">
          <h2>Top reason to Study</h2>
          <h2>MBBS IN ARMENIA</h2>
        </div>

        <ul>
          <li>Armenian medical certificates are recognized by mci, who.</li>
          <li>
            Wide range of possibilities and broad exposure to clinical practise
            due to highly equipped multi-profile hospitals
          </li>
          <li>
            Armenia is known for the lowest crime rate & safest country in
            europe for worry-free education.
          </li>
          <li>
            Most of the universities offer direct admission to armenia. No toefl
            or ielts is essential for the admission to mbbs program in armenia.
          </li>
          <li>
            Indian professors are teaching in some of the mbbs universities at
            armenia
          </li>
          <li>The education offered is of high quality</li>
          <li>
            The cost of living is economical for medical students pursuing mbbs
            from armenia
          </li>
          <li>
            Armenian medical universities offer great international exposure for
            medical students
          </li>
          <li>
            No entrance test is required for seeking mbbs admission in armenia
          </li>
          <li>
            Armenia’s mbbs courses follow the mode of the english language as it
            is one of the most spoken languages in the world
          </li>
        </ul>
      </div>

      <div className="college_armenia">
          <div className="college_armenia_heading">
            <h2>Most Demanding Colleges In Armenia</h2>
          </div>
          <table>
            <tr>
                <th>Collegies/Universities</th>
                <th>Fees</th>
            </tr>
            <tr>
                <td>St. Theresa Medical University</td>
                <td>Fee: N/A</td>
            </tr>
            <tr>
                <td>Haybusak Medical University</td>
                <td>Fee: N/A</td>
            </tr>
            <tr>
                <td>Mkhtir Gosh American Russian International University</td>
                <td>Fee: N/A</td>
            </tr>
            <tr>
                <td>University of Traditional Medicine</td>
                <td>Fee: N/A</td>
            </tr>
        </table>
      </div>

      <Reply />
      <Address />
    </>
  );
};

export default Armenia;
