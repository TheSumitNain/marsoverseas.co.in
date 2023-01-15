import React from "react";
import usa1 from "../images/dest/usa1.jpg";
import usa2 from "../images/dest/usa2.png";
import usa3 from "../images/dest/usa3.png";
import usa4 from "../images/dest/usa4.png";
import usa6 from "../images/dest/usa6.jpg";
import Reply from "../components/Reply";
import Address from "../components/Address";

const Usa = () => {   
  return (
    <>
      <div className="usa_main">
        <div className="usa_main_heading">
          <h6>
            Study Destinations <span>USA</span>
          </h6>
          <h1>Study In USA</h1>
        </div>
        <div className="usa_main_img">
          <img src={usa1} alt="usa1" />
          <img src={usa2} alt="usa2" />
        </div>
      </div>

      <div className="usa_para">
        <p align="justify">
          The United States of America has been a global leader in the field of
          education and boasts of a lion’s share of top ranked universities
          according to all major international rankings. Few countries offer as
          many high ranked universities and noble laureate academia, as USA
          does.
        </p>
      </div>
      <hr style={{ width: "80%", margin: " 0 10%", color: "gray" }} />

      <div className="why_usa">
        <div className="why_usa_left">
          <h4>Why Study in USA?</h4>
          <p>
            Study in one of the most prestigious higher education systems
            globally and access some high-end technology and cutting-edge
            research for an immersive, engaging & collaborative study
            experience. Choose from an extensive range of schools, numerous
            study disciplines and niche qualifications that are difficult to
            find by in other parts of the world and experience a uniquely
            flexible education system allowing you to apply to a variety of
            programs suiting your academic & career goals. Graduate with a truly
            global outlook and real-world skills for the future.
          </p>
        </div>
        <div className="why_usa_right">
          <h4>Quick facts</h4>
          <ul>
            <li>USA hosts more than a million international students</li>
            <li>Over 25% of world’s top 100 universities are in the USA</li>
            <li>
              Post-study stay back visas (OPT) up to 3 years for STEM programs
            </li>
            <li>Internships (CPT) up to 12 months while studying</li>
            <li>Merit Based & Need Based Scholarships</li>
            <li>
              Over 4500 accredited universities & institutions to choose from
            </li>
            <li>
              12 of the best student cities in the world (QS Best Student Cities
              2023)
            </li>
            <li>
              Opportunities for Research, Teaching & Graduate Assistantships
            </li>
          </ul>
        </div>
      </div>


      <div className="education_cost_usa_heading">
          <h2>Cost of Education in USA</h2>
        </div>

      <div className="education_cost_usa">
        <table>
          <tr>
            <th>Types of Expenses</th>
            <th>Annual Expenses in USD</th>
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
            <td>Airfare from India to USA</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Visa Fees (Visa & SEVIS)</td>
            <td>510</td>
          </tr>
          <tr>
            <th>Total Expenses</th>
            <th>41510</th>
          </tr>
        </table>
      </div>

      <div className="career_usa">
        <div className="career_usa_left">
          <div className="img1">
            <img src={usa3} alt="usa3" />
          </div>
          <div className="img2">
            <img src={usa4} alt="usa4" />
          </div>
        </div>
        <div className="career_usa_right">
          <h5>Careers & Industry Insights</h5>
          <p>
            One of the most technologically powerful and dynamic countries, USA
            is the largest & most dominant economy globally. Sectors that
            empower this world’s most productive economy include Healthcare,
            Technology, Construction, Retail, Manufacturing, Finance & Insurance
            and Real Estate. Top jobs with high remuneration prospects for
            international students include Medicine, Computer & Information
            Systems Managers, Architectural & Engineering Managers and Marketing
            & Financial Managers. Standard of living in the USA is among the
            highest in the world with high per capita income. This nation
            performs very well in many measures of well-being such as income &
            wealth, health status, jobs and earnings, education & skills and
            environmental quality.
          </p>
        </div>
      </div>

      <div className="college_usa">
        <div className="college_usa_heading">
          <h2>Popular Universities</h2>
        </div>
        <div className="college_list_usa">
          <div className="college">
            <p>University of Connecticut, Connecticut (Public Ivy - Only UG)</p>
          </div>

          <div className="college">
            <p>
              University of California, Riverside, California (Graduate Business
              Programs & College of Engineering and UCR Extension)
            </p>
          </div>
          <div className="college">
            <p>
              Virginia Tech Language and Culture Institute, Blacksburg, Virginia
              (Only UG Pathways)
            </p>
          </div>
          <div className="college">
            <p>University of Arizona, Tucson, Arizona</p>
          </div>
          <div className="college">
            <p>
              Drexel University, Philadelphia, Pennsylvania (UG Gateways,
              College of Engg-MS only and IEP)
            </p>
          </div>
          <div className="college">
            <p>University of Delaware, Newark, Delaware (Only UG)</p>
          </div>
          <div className="college">
            <p>Colorado State University, Fort Collins, Colorado</p>
          </div>
          <div className="college">
            <p>University of Illinois at Chicago, Illinois</p>
          </div>
          <div className="college">
            <p>The University of Alabama Tuscaloosa, Alabama</p>
          </div>
          <div className="college">
            <p>Claremont Graduate University, Claremont, California</p>
          </div>
        </div>
      </div>

      <div className="course_usa">
        <div className="course_usa_left">
          <img src={usa6} alt="course" />
        </div>
        <div className="course_usa_right">
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

     <div id="reply_usa">
      <Reply />
     </div>

      <Address/>
    </>
  );
};

export default Usa;


