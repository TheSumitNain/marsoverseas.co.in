import React from "react";
import nz1 from "../images/dest/nz1.jpg";
import nz2 from "../images/dest/nz3.jpg";
import nz3 from "../images/dest/nz2.jpg";
import nz4 from "../images/dest/nz4.jpg";
import usa6 from "../images/dest/usa6.jpg";
import Reply from "../components/Reply";
import Address from "../components/Address";

const Newzealand = () => {
  return (
    <>
      <div className="nz_main">
        <div className="nz_main_heading">
          <h6>
            Study Destinations <span>New Zealand</span>
          </h6>
          <h1>Study In New Zealand</h1>
        </div>
        <div className="nz_main_img">
          <img src={nz1} alt="nz1" />
          <img src={nz2} alt="nz2" />
        </div>
      </div>

      <div className="nz_para">
        <p>
          New Zealand offers world class education system, qualifications that
          are valued globally, an unmatchable lifestyle and friendly & welcoming
          natives. This island country has abundant natural beauty, breathtaking
          landscapes and picturesque coastlines that make studying in New
          Zealand an adventurous experience.
        </p>
      </div>
      <hr style={{ width: "80%", margin: " 0 10%", color: "gray" }} />

      <div className="why_nz">
        <div className="why_nz_left">
          <h4>Why Study in New Zealand?</h4>
          <p>
            Study in a high-quality education system closely monitored and
            regulated by the NZ government. Experience practical teaching style
            and hands-on learning to inculcate real-world skills that will open
            doors of global opportunities. Gain impeccable English language
            abilities to be effective in multicultural and challenging work
            environments. Stay ahead in the competition with NZ qualifications
            that are highly sought after in the international job market.
          </p>
        </div>
        <div className="why_nz_right">
          <h4>Quick facts</h4>
          <ul>
            <li>
              New Zealand universities are ranked in the top 3% in the world
            </li>
            <li>
              Only country in the world to have all its universities in the
              global top 500
            </li>
            <li>Over 20,000 international students from 160 countries</li>
            <li>
              8 state-funded universities, 16 Institutes of Technology and
              Polytechnics (ITPs) & 550 Private Training Establishments (PTEs)
            </li>
            <li>
              Post-study work visa up to three years and good permanent
              residency prospects
            </li>
            <li>
              Ranked as the top English-speaking country at preparing students
              for the future (The Economist Intelligence Unit in 2019)
            </li>
            <li>
              A member of the Lisbon Qualification Recognition Convention – NZ
              qualifications are recognised in over 50 countries
            </li>
            <li>Lower tuition fee with plenty of scholarships on offer</li>
          </ul>
        </div>
      </div>

      <div className="education_cost_nz_heading">
          <h2>Cost of Education in New Zealand</h2>
        </div>
      <div className="education_cost_nz">
        <table>
          <tr>
            <th>Types of Expenses</th>
            <th>Annual Expenses in NZD</th>
          </tr>
          <tr>
            <td>Tuition Fees for one-year (Indicative)*</td>
            <td>25000</td>
          </tr>
          <tr>
            <td>Living and Accommodation</td>
            <td>15000</td>
          </tr>
          <tr>
            <td>Airfare to New Zealand (Indicative)</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>Visa Fees (Visa & SEVIS)</td>
            <td>330</td>
          </tr>
          <tr>
            <th>Total Expenses</th>
            <th>41830</th>
          </tr>
        </table>
      </div>

      <div className="career_nz">
        <div className="career_nz_left">
          <div className="img1">
            <img src={nz3} alt="nz3" />
          </div>
          <div className="img2">
            <img src={nz4} alt="nz4" />
          </div>
        </div>
        <div className="career_nz_right">
          <h5>Careers & Industry Insights</h5>
          <p>
            One of the most technologically powerful and dynamic countries, nz
            is the largest & most dominant economy globally. Sectors that
            empower this world’s most productive economy include Healthcare,
            Technology, Construction, Retail, Manufacturing, Finance & Insurance
            and Real Estate. Top jobs with high remuneration prospects for
            international students include Medicine, Computer & Information
            Systems Managers, Architectural & Engineering Managers and Marketing
            & Financial Managers. Standard of living in the nz is among the
            highest in the world with high per capita income. This nation
            performs very well in many measures of well-being such as income &
            wealth, health status, jobs and earnings, education & skills and
            environmental quality.
          </p>
        </div>
      </div>

      <div className="college_nz">
        <div className="college_nz_heading">
          <h2>Popular Universities</h2>
        </div>
        <div className="college_list_nz">
          <div className="college">
            <p>Victoria University of Wellington, Wellington</p>
          </div>

          <div className="college">
            <p>
            University of Canterbury, Christchurch
            </p>
          </div>
          <div className="college">
            <p>
            Massey University, Palmerston North
            </p>
          </div>
          <div className="college">
            <p>University of Waikato College, Hamilton</p>
          </div>
          <div className="college">
            <p>
            Lincoln University, Lincoln
            </p>
          </div>
          <div className="college">
            <p>Auckland University of Technology, Auckland</p>
          </div>
          <div className="college">
            <p>Unitec Institute of Technology - Te Pūkenga, Auckland</p>
          </div>
          <div className="college">
            <p>Otago Polytechnic- Te Pūkenga, Dunedin & Auckland</p>
          </div>
          <div className="college">
            <p>Manukau Institute of Technology - Te Pūkenga, Auckland</p>
          </div>
          <div className="college">
            <p>Ara Institute of Canterbury - Te Pūkenga, Christchurch</p>
          </div>
        </div>
      </div>

      <div className="course_nz">
        <div className="course_nz_left">
          <img src={usa6} alt="course" />
        </div>
        <div className="course_nz_right">
          <h4>Popular Courses</h4>
          <div className="course_box">
            <p>Applied Sciences</p>
          </div>
          <div className="course_box">
            <p>Business & Management</p>
          </div>
          <div className="course_box">
            <p>Computer Science & Information Technology</p>
          </div>
          <div className="course_box">
            <p>Engineering & Technology</p>
          </div>
          <div className="course_box">
            <p>Public Health & Healthcare Administration</p>
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

export default Newzealand;
