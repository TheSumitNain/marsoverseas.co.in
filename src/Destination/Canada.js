import React from "react";
import canada1 from "../images/dest/canada1.jpg";
import canada2 from "../images/dest/canada2.jpg";
import canada3 from "../images/dest/canada3.jpg";
import canada4 from "../images/dest/canada4.jpg";
import usa6 from "../images/dest/usa6.jpg";
import Reply from "../components/Reply";
import Address from "../components/Address";

const Canada = () => {
  return (
    <>
      <div className="canada_main">
        <div className="canada_main_heading">
          <h6>
            Study Destinations <span>Canada</span>
          </h6>
          <h1>Study In Canada</h1>
        </div>
        <div className="canada_main_img">
          <img src={canada1} alt="canada1" />
          <img src={canada2} alt="canada2" />
        </div>
      </div>

      <div className="canada_para">
        <p>
          A country that offers a truly dynamic education system with some of
          the world’s best universities, a high standard of living & a promising
          future, Canada is undoubtedly amongst the most popular and ideal study
          destinations in the world.
        </p>
      </div>
      <hr style={{ width: "80%", margin: " 0 10%", color: "gray" }} />

      <div className="why_canada">
        <div className="why_canada_left">
          <h4>Why Study in Canada?</h4>
          <p>
            Study in a country that has tripled its international student
            population over the past decade, thanks to its globally recognized
            universities offering a world class education, highly practical
            programs with hands-on learning and some of the most affordable
            tuition fees among English-speaking countries. Enjoy top quality
            life in the ‘most liveable cities’ of Vancouver and Toronto and
            advance your career in one of the very resource rich, industrialized
            and stable economies.
          </p>
        </div>
        <div className="why_canada_right">
          <h4>Quick facts</h4>
          <ul>
            <li>Among the Safest Countries Globally</li>
            <li>Hands-on learning</li>
            <li> Paid Internships Available</li>
            <li>Post Study Work Visa up to 3 Years</li>
            <li>Excellent Immigration Opportunities</li>
          </ul>
        </div>
      </div>

      <div className="education_cost_canada_heading">
          <h2>Cost of Education in Canada</h2>
        </div>
      <div className="education_cost_canada">
        <table>
          <tr>
            <th>Types of Expenses</th>
            <th></th>
            <th>Annual Expenses in CAD</th>
          </tr>
          <tr>
            <th></th>
            <th>Diploma</th>
            <th>Degree</th>
          </tr>
          <tr>
            <td>Tuition Fees for one-year (Indicative)*</td>
            <td>15000</td>
            <td>20000</td>
          </tr>
          <tr>
            <td>Living and Accommodation</td>
            <td>10200</td>
            <td>10200</td>
          </tr>
          <tr>
            <td>Airfare from India to Canada</td>
            <td>2500</td>
            <td>2500</td>
          </tr>
          <tr>
            <td>Visa Fees (Including Biometric Fees)</td>
            <td>235</td>
            <td>235</td>
          </tr>
          <tr>
            <th>Total Expenses</th>
            <th>27935</th>
            <th>32935</th>
          </tr>
        </table>
      </div>

      <div className="career_canada">
        <div className="career_canada_left">
          <div className="img1">
            <img src={canada3} alt="canada3" />
          </div>
          <div className="img2">
            <img src={canada4} alt="canada4" />
          </div>
        </div>
        <div className="career_canada_right">
          <h5>Careers & Industry Insights</h5>
          <p>
            Among the wealthiest nations in the world, Canada is a land of
            opportunities for those who wish to study, live and prosper.
            Canada’s highly sophisticated economy is fuelled by sectors such as
            Agriculture, Energy, Technology, Manufacturing & Services. Top
            careers international students can look forward to include
            Engineering, Construction, IT, Healthcare, Law and Banking &
            Finance. This country enjoys a job growth rate well above its
            population growth rate and offers a high standard of living to all
            its residents including international students.
          </p>
        </div>
      </div>

      <div className="course_canada">
        <div className="course_canada_left">
          <img src={usa6} alt="course" />
        </div>
        <div className="course_canada_right">
          <h4>Popular Courses</h4>
          <div className="course_box">
            <p>Allied Health & Social Services</p>
          </div>
          <div className="course_box">
            <p>Business & Management</p>
          </div>
          <div className="course_box">
            <p>Computer Science & IT</p>
          </div>
          <div className="course_box">
            <p>Construction & Engineering</p>
          </div>
          <div className="course_box">
            <p>Media & Journalism</p>
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

export default Canada;
