import React from "react";
import ireland1 from "../images/dest/ireland5.jpg";
import ireland2 from "../images/dest/ireland4.jpeg";
import usa3 from "../images/dest/ireland3.jpg";
import ireland4 from "../images/dest/ireland7.jpg";
import usa6 from "../images/dest/usa6.jpg";
import Reply from "../components/Reply";
import Address from "../components/Address";

const Ireland = () => {
  return (
    <>
      <div className="ireland_main">
        <div className="ireland_main_heading">
          <h6>
            Study Destinations <span>Ireland</span>
          </h6>
          <h1>Study In Ireland</h1>
        </div>
        <div className="ireland_main_img">
          <img src={ireland1} alt="ireland1" />
          <img src={ireland2} alt="ireland2" />
        </div>
      </div>

      <div className="ireland_para">
        <p>
          Set yourself on a path of a global career with one of the world’s most
          dynamic & advanced education systems. Foster your creativity &
          entrepreneurship in universities that are developing world class
          graduates to address challenges of today and the future.
        </p>
      </div>
      <hr style={{ width: "80%", margin: " 0 10%", color: "gray" }} />

      <div className="why_ireland">
        <div className="why_ireland_left">
          <h4>Why Study in Ireland?</h4>
          <p>
            Home to 9 of 10 global ICT companies, 8 of the 10 global
            pharmaceutical companies, a global financial services powerhouse and
            a centre of international banking excellence, Ireland is the
            European hub to over 1,000 leading multinational corporations across
            multiple sectors. Potential career opportunities in a host of global
            giants including Microsoft, Google, PayPal, Apple, Twitter,
            Microsoft, LinkedIn, Pfizer, GSK and Genzyme make studying in
            Ireland a very lucrative opportunity. High academic standards of
            Irish universities are enabling their graduates to make an impact on
            academia, research and the global business world.
          </p>
        </div>
        <div className="why_ireland_right">
          <h4>Quick facts</h4>
          <ul>
            <li>Europe’s fastest growing economy</li>
            <li>Ranked #10 Globally for High-Quality Scientific Research</li>
            <li> Post Study Work Visa up to 2 Years </li>
            <li>All Universities Globally Ranked among top 5%</li>
            <li>Ranked as the 13th most peaceful place on Earth</li>
            <li>
              Qualifications quality assured by Quality & Qualifications
              Ireland, an Irish State Agency
            </li>
            <li> Among the top 20 education systems worldwide </li>
            <li>
              {" "}
              Ireland is ranked 11th in the 2018 Global Innovation Index{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="education_cost_ireland_heading">
          <h2>Cost of Education in Ireland</h2>
        </div>
      <div className="education_cost_ireland">
        <table>
          <tr>
            <th>Types of Expenses</th>
            <th>Annual Expenses in €</th>
          </tr>
          <tr>
            <td>Tuition Fees for one-year (Indicative)</td>
            <td>15000</td>
          </tr>
          <tr>
            <td>Living and Accommodation</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>Airfare to Ireland (Indicative)</td>
            <td>700</td>
          </tr>
          <tr>
            <td>Visa Fees </td>
            <td>195</td>
          </tr>
          <tr>
            <th>Total Expenses</th>
            <th>25895</th>
          </tr>
        </table>
      </div>

      <div className="career_ireland">
        <div className="career_ireland_left">
          <div className="img1">
            <img src={usa3} alt="usa3" />
          </div>
          <div className="img2">
            <img src={ireland4} alt="ireland4" />
          </div>
        </div>
        <div className="career_ireland_right">
          <h5>Careers & Industry Insights</h5>
          <p>
            Ireland has made huge strides in economic development in the last
            few decades and has improved its living conditions better than most
            of the countries in the world. Ireland has a highly-advanced
            ‘knowledge economy’ emphasizing on the sectors of agribusiness, life
            sciences and financial services & technology. This country ranks
            first for high-value foreign direct investment (FDI) flows and
            performs better than most countries measure of well-being such as
            jobs & earnings, health status, education & skills and work-life
            balance in the Better Life Index. IT Services, Financial Services,
            Renewable Energy, Business Services, Medical/Health & Pharmaceutical
            Industry are the top industries for employment opportunities.
          </p>
        </div>
      </div>

      <div className="college_ireland">
        <div className="college_ireland_heading">
          <h2>Popular Universities</h2>
        </div>
        <div className="college_list_ireland">
          <div className="college">
            <p>Trinity College Dublin, Dublin</p>
          </div>

          <div className="college">
            <p>University College Dublin, Dublin</p>
          </div>
          <div className="college">
            <p>The National University of Ireland Galway</p>
          </div>
          <div className="college">
            <p>University College Cork, Cork</p>
          </div>
          <div className="college">
            <p>
              Dublin City University, Dublin (Pathway as well as UG & PG Direct
              Entry)
            </p>
          </div>
          <div className="college">
            <p>University of Limerick, Limerick</p>
          </div>
          <div className="college">
            <p>
              Maynooth University, Maynooth (Pathway as well as UG & PG Direct
              Entry)
            </p>
          </div>
          <div className="college">
            <p>
              Technological University Dublin (Pathway as well as UG & PG Direct
              Entry)
            </p>
          </div>
          <div className="college">
            <p>Dundalk Institute of Technology, Dundalk</p>
          </div>
          <div className="college">
            <p>
              Technological University of the Shannon: Midlands Midwest, Shannon
              (Limerick and Athlone Campus)
            </p>
          </div>
        </div>
      </div>

      <div className="course_ireland">
        <div className="course_ireland_left">
          <img src={usa6} alt="course" />
        </div>
        <div className="course_ireland_right">
          <h4>Popular Courses</h4>
          <div className="course_box">
            <p>Computer & Data Science</p>
          </div>
          <div className="course_box">
            <p>Data & Business Analytics</p>
          </div>
          <div className="course_box">
            <p>Investment Banking & Finance</p>
          </div>
          <div className="course_box">
            <p>Pharmaceutical Sciences</p>
          </div>
          <div className="course_box">
            <p>Engineering & Construction</p>
          </div>
        </div>
      </div>

      <div>
        <Reply/>
      </div>

      <Address />
    </>
  );
};

export default Ireland;
