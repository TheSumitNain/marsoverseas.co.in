import React from "react";
import uk1 from "../images/dest/uk1.jpg";
import uk2 from "../images/dest/uk2.png";
import usa3 from "../images/dest/uk3.jpg";
import uk4 from "../images/dest/uk4.jpg";
import usa6 from "../images/dest/usa6.jpg";

import Reply from "../components/Reply";
import Address from "../components/Address";

const Uk = () => {
  return (
    <>
      <div className="uk_main">
        <div className="uk_main_heading">
          <h6>
            Study Destinations <span>United Kingdom</span>
          </h6>
          <h1>Study In United Kingdom</h1>
        </div>
        <div className="uk_main_img">
          <img src={uk1} alt="uk1" />
          <img src={uk2} alt="uk2" />
        </div>
      </div>

      <div className="uk_para">
        <p>
          With an academic reputation built on centuries old heritage, The UK is
          home to some of the world’s oldest universities that consistently rank
          among the highest in the world. Universities in UK have a rich legacy
          of welcoming international students for centuries and are known to
          offer an unforgettable student experience as they know the needs and
          aspirations of their students very well.
        </p>
      </div>
      <hr style={{ width: "80%", margin: " 0 10%", color: "gray" }} />

      <div className="why_uk">
        <div className="why_uk_left">
          <h4>Why Study in UK?</h4>
          <p>
            Learn from some of the world's best academics and experts in some of
            world’s most prestigious universities and benefit from their
            exceptional academic support. Study alongside some of the finest and
            brilliant minds and hone your skills using state-of-the-art
            technology. Avail placements, internships and volunteering positions
            that are your right fit through strong industry links of UK
            universities and apply your knowledge and skills in a real-world
            professional environment. Graduate with skills and expertise that
            are in high demand around the world and get hired by your dream
            employers.
          </p>
        </div>
        <div className="why_uk_right">
          <h4>Quick facts</h4>
          <ul>
            <li>
              The UK undertakes 5% of the world’s scientific research and
              produces 14% of the world’s most frequently cited papers
            </li>
            <li>UK welcomes over 400,000 students every year</li>
            <li> Post study work visa of 2 years </li>
            <li>
              12 of world’s top 100 universities are in The UK (QS World
              Rankings 2023)
            </li>
            <li>
              14 of the best student cities in the world are in The UK (QS Best
              Student Cities 2023)
            </li>
            <li>
              UK offers 131 universities of international repute to study from
            </li>
            <li> Admission without IELTS possible </li>
            <li> Masters courses with 1 year work placements are available</li>
          </ul>
        </div>
      </div>

      <div className="education_cost_uk_heading">
          <h2>Cost of Education in UK</h2>
        </div>
      <div className="education_cost_uk">
        <table>
          <tr>
            <th>Types of Expenses</th>
            <th>Annual Expenses in GBP</th>
          </tr>
          <tr>
            <td>Tuition Fees for one-year (Indicative)*</td>
            <td>14000</td>
          </tr>
          <tr>
            <td>Living and Accommodation</td>
            <td>9207</td>
          </tr>
          <tr>
            <td>Visa Fees</td>
            <td>363</td>
          </tr>
          <tr>
            <td>Immigration Health Surcharge/National Health Surcharge </td>
            <td>705</td>
          </tr>
          <tr>
            <td>Airfare from India to United Kingdom</td>
            <td>500</td>
          </tr>
          <tr>
            <th>Total Expenses</th>
            <th>24775</th>
          </tr>
        </table>
      </div>

      <div className="career_uk">
        <div className="career_uk_left">
          <div className="img1">
            <img src={usa3} alt="usa3" />
          </div>
          <div className="img2">
            <img src={uk4} alt="uk4" />
          </div>
        </div>
        <div className="career_uk_right">
          <h5>Careers & Industry Insights</h5>
          <p>
            The UK is one of the most globalised economies comprising of
            England, Scotland, Wales and Northern Ireland and is among the
            world’s biggest economies. The sectors that dominate UK’s economy
            include service sector, financial services, higher education,
            aerospace, pharmaceuticals, manufacturing and production. Best paid
            jobs in the UK include Information Technology Managers, Engineering
            Professionals, Business and Financial Management Professionals,
            Legal Professionals, Aircraft Pilots & Flight Engineers, Higher
            Education Teaching Professionals and Medical Practitioners.
          </p>
        </div>
      </div>

      <div className="college_uk">
        <div className="college_uk_heading">
          <h2>Popular Universities</h2>
        </div>
        <div className="college_list_uk">
          <div className="college">
            <p>University of Bristol, Bristol, England</p>
          </div>

          <div className="college">
            <p>
            University of Glasgow, Glasgow, Scotland
            </p>
          </div>
          <div className="college">
            <p>
            Durham University, Durham, England
            </p>
          </div>
          <div className="college">
            <p>University of Birmingham, Birmingham, England</p>
          </div>
          <div className="college">
            <p>
            University of Leeds, Leeds, England
            </p>
          </div>
          <div className="college">
            <p>The University of Sheffield, Sheffield, England</p>
          </div>
          <div className="college">
            <p>University of Nottingham, Nottingham, England</p>
          </div>
          <div className="college">
            <p>Cranfield University, Cranfield, England</p>
          </div>
          <div className="college">
            <p>Queen Mary University of London, London, England</p>
          </div>
          <div className="college">
            <p>Lancaster University, Lancaster, England</p>
          </div>
        </div>
      </div>

      <div className="course_uk">
        <div className="course_uk_left">
          <img src={usa6} alt="course" />
        </div>
        <div className="course_uk_right">
          <h4>Popular Courses</h4>
          <div className="course_box">
            <p>Art & Design</p>
          </div>
          <div className="course_box">
            <p>Business & Management</p>
          </div>
          <div className="course_box">
            <p>Engineering & Information Technology</p>
          </div>
          <div className="course_box">
            <p>Media & Communication</p>
          </div>
          <div className="course_box">
            <p>Sciences</p>
          </div>
        </div>
      </div>

      <div>
        <Reply />
      </div>

      <Address />
    </>
  );
};

export default Uk;
