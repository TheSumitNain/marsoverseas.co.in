import React from "react";
import australia1 from "../images/dest/australia.jpg";
import australia2 from "../images/dest/australia2.jpg";
import australia3 from "../images/dest/australia3.jpg";
import australia4 from "../images/dest/australia4.jpg";
import usa6 from "../images/dest/usa6.jpg";
import Reply from "../components/Reply";
import Address from "../components/Address";

const Australia = () => {
  return (
    <>
      <div className="australia_main">
        <div className="australia_main_heading">
          <h6>
            Study Destinations <span>Australia</span>
          </h6>
          <h1>Study In Australia</h1>
        </div>
        <div className="australia_main_img">
          <img src={australia1} alt="australia1" />
          <img src={australia2} alt="australia2" />
        </div>
      </div>

      <div className="australia_para">
        <p>
          A network of world leading universities, outstanding learning &
          research facilities, inspiring lectures from brilliant instructors &
          unparalleled academic excellence, Australian education system offers
          them all with an exceptional student experience & qualifications that
          are valued world over.
        </p>
      </div>
      <hr style={{ width: "80%", margin: " 0 10%", color: "gray" }} />

      <div className="why_australia">
        <div className="why_australia_left">
          <h4>Why Study in Australia?</h4>
          <p>
            A network of world leading universities, outstanding learning &
            research facilities, inspiring lectures from brilliant instructors &
            unparalleled academic excellence, Australian education system offers
            them all with an exceptional student experience & qualifications
            that are valued world over.
          </p>
        </div>
        <div className="why_australia_right">
          <h4>Quick facts</h4>
          <ul>
            <li>7 of World’s Top 100 Universities</li>
            <li>Choose from over 22,000 Courses across 1,100 Institutions</li>
            <li>
              7 of the Best Student Cities in the World (QS Best Student Cities
              2023)
            </li>
            <li>
              More than A$300 Million Invested in Scholarships for International
              Students
            </li>
            <li>Australian Universities have Produced 15 Nobel Laureates</li>
            <li>
              More than Half a Million International Students from 192 Countries
            </li>
            <li>Post-Graduation Work Permit up to 4 years</li>
            <li>Good Permanent Residency Prospects</li>
          </ul>
        </div>
      </div>

      <div className="education_cost_australia_heading">
          <h2>Cost of Education in Australia</h2>
        </div>
      <div className="education_cost_australia">
        <table>
          <tr>
            <th>Types of Expenses</th>
            <th>Annual Expenses in AUD</th>
          </tr>
          <tr>
            <td>Tuition Fees for one-year (Indicative)*</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>Living and Accommodation</td>
            <td>21041</td>
          </tr>
          <tr>
            <td>Airfare to Australia (Indicative) </td>
            <td>2000</td>
          </tr>
          <tr>
            <td>Visa Fees</td>
            <td>630</td>
          </tr>
          <tr>
            <th>Total Expenses</th>
            <th>53761</th>
          </tr>
        </table>
      </div>

      <div className="career_australia">
        <div className="career_australia_left">
          <div className="img1">
            <img src={australia3} alt="australia3" />
          </div>
          <div className="img2">
            <img src={australia4} alt="australia4" />
          </div>
        </div>
        <div className="career_australia_right">
          <h5>Careers & Industry Insights</h5>
          <p>
            Australia, the 12th-largest economy, is one of the wealthiest
            Asia–Pacific nations. After having enjoyed over two decades of
            economic expansion, Australia has become internationally competitive
            in financial and insurance services, technologies, and
            high-value-added manufactured goods. International students can look
            forward to high remuneration career prospects such as Medicine &
            Healthcare, Finance, IT, Mining & other Engineering Trades, Teaching
            & Social Work. Australian enjoy one of the highest standards of
            living in the world owing to a robust economy and a high employment
            rate with good quality of jobs.
          </p>
        </div>
      </div>

      <div className="college_australia">
        <div className="college_australia_heading">
          <h2>Popular Universities</h2>
        </div>
        <div className="college_list_australia">
          <div className="college">
            <p>The University of New South Wales, Sydney (CRICOS Code 00098G)</p>
          </div>
          <div className="college">
            <p>
            The University of Queensland, Brisbane (CRICOS Code 00025B)
            </p>
          </div>
          <div className="college">
            <p>
            Monash University, Melbourne (CRICOS Code 00008C)
            </p>
          </div>
          <div className="college">
            <p>The University of Adelaide, Adelaide (CRICOS Code 00123M)</p>
          </div>
          <div className="college">
            <p>
            The University of Newcastle, Newcastle (CRICOS Code 00109J) Curtin
            </p>
          </div>
          <div className="college">
            <p>Macquarie University, Sydney (CRICOS Code 00002J)</p>
          </div>
          <div className="college">
            <p>Curtin University, Perth (CRICOS Code 00301J)</p>
          </div>
          <div className="college">
            <p>Queensland University of Technology, Brisbane (CRICOS Code 00213J)</p>
          </div>
          <div className="college">
            <p>RMIT University, Melbourne (CRICOS Code 00122A)</p>
          </div>
          <div className="college">
            <p>Queensland University of Technology, Brisbane (CRICOS Code 00213J)</p>
          </div>
        </div>
      </div>

      <div className="course_australia">
        <div className="course_australia_left">
          <img src={usa6} alt="course" />
        </div>
        <div className="course_australia_right">
          <h4>Popular Courses</h4>
          <div className="course_box">
            <p>Business & Management</p>
          </div>
          <div className="course_box">
            <p>Engineering & Built Environment</p>
          </div>
          <div className="course_box">
            <p>Computer Science & Information Technology</p>
          </div>
          <div className="course_box">
            <p>Health & Nursing</p>
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

export default Australia;
