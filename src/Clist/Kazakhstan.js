import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";

import flag from "../images/list/kazakhstan-flag.jpg";
import city from "../images/list/kazakhstan-city.jpg";

const Kazakhstan = () => {
  return (
    <>
      <div className="kazakhstan">
        <div className="logo">
          <h1>Kazakhstan</h1>
        </div>
        <div className="table_map">
          <table>
            <tr>
              <td>Language</td>
              <td> Kazakh, Russian </td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>Astana</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Tenge </td>
            </tr>
            <tr>
              <td>Exchange Rate</td>
              <td> ₹1 = 5.15 Tenge</td>
            </tr>

            <tr>
              <td>Population</td>
              <td> 71 lakh</td>
            </tr>

            <tr>
              <td>Time Difference from India</td>
              <td>+30 minutes from India</td>
            </tr>

            <tr>
              <td>MBBS in Kazakhstan Tuition Fees</td>
              <td>Between US $ 3,000 to 5,700</td>
            </tr>

            <tr>
              <td>Type of colleges</td>
              <td>Both Private and Government</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>5-years</td>
            </tr>
            <tr>
              <td>Medium of Instruction </td>
              <td>
                English, student will be taught <br /> the local language.
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21866695.164860662!2d66.90873!3d48.00841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a91007ecfca947%3A0x5f7b842fe4b30e1b!2sKazakhstan!5e0!3m2!1sen!2sus!4v1670826237405!5m2!1sen!2sus"
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

      <div className="md_kazakhstan">
        <div className="md_kazakhstan_heading">
          <h2>MD (MBBS) in Kazakhstan</h2>
        </div>
        <span>Course Duration – 6 Years.</span>
        <ul>
          <li>Eligibility</li>
        </ul>
        <span> – NEET Qualified (2018 or 2019)</span>
        <span> -Aggregate of 50% Score Required in PCB and 10+2.</span>
        <ul>
          <li>
            Living Cost- Average living cost will be around 100,000-150,000/-
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
          <li> Scholarship for MBBS</li>
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

      <div className="advantage_kazakhstan">
        <h4>Advantages of studying MBBS in Kazakhstan</h4>
        <ul>
          <li>
            5-year course duration options available for international students
          </li>
          <li>
            Most of the MBBS colleges and universities provide excellent hostel
            facilities with the mess.
          </li>
          <li>Availability of Indian food is everywhere.</li>
          <li>
            There are direct flights between Indian airports and Almaty, the
            largest city in Kazakhstan.
          </li>
          <li>
            Major medical universities are recognized by WHO, USMLE, IMED, GMC,
            MCI.
          </li>
          <li>World class education to their enrolled students.</li>
          <li>
            Complete practical training provided to the students along with the
            classroom study.
          </li>
          <li>
            Students get the opportunity to go for exchange programs in other
            countries.
          </li>
        </ul>

        <h4>Why you should study medicine in Kazakhstan?</h4>
        <p>1 Affordable tuition fee structure.</p>
        <p>2 Best Teacher – Student Ratio</p>
        <p>3 The curriculum designed as per the international standard.</p>
        <p>4 Globally recognized medical degree.</p>
        <p>5 Offer high quality education and cheaper fees.</p>
        <p>6 Listed in World Directory of Medical Colleges.</p>
        <p>
          7 No donation & capitation fees to get MBBS seat in best medical
          universities.
        </p>
        <p>8 No IELTS & TOEFL.</p>
        <p>
          9 After completing MBBS course from Kazakhstan medical universities,
          students are eligible to practice in any part of the world.
        </p>
        <p>
          10 All medical universities use modern technology and infrastructure.
        </p>
        <p>
          11 Cost of living in Kazakhstan is very cheap as compared to others
          countries in Europe.
        </p>
        <p>12 Tuition fee and accommodation fees are affordable.</p>

        <h4>MBBS course duration in Kazakhstan</h4>
        <ul>
          <li> Duration of MBBS course in Kazakhstan is 6 years.</li>
          <li>
            Including 1 year internship with private & government hospitals.
          </li>
        </ul>

        <h4>MBBS in Kazakhstan – Is it safe for indian students?</h4>
        <ul>
          <li>
            {" "}
            In a survey conducted by the Kazakhstan government – India ranked
            among the top 50 countries sending a large number of students to
            Kazakhstan.
          </li>
          <li>
            {" "}
            Тhе Іndіаn studеnts whо already pursuing МВВЅ course іn Kazakhstan
            аrе рrоvіdеd wіth рrореr sесurіtу аnd sаfеtу by their government
            authorities.
          </li>
        </ul>

        <h4>Faculty for MBBS in Kazakhstan</h4>
        <p>General medicine faculty</p>
        <p>Therapeutic faculty</p>
        <p>Faculty of pediatrics</p>
        <p>Medico-prophylactic faculty</p>
        <p>Stomatology faculty</p>
        <p>Pharmacy faculty</p>
        <p>Faculty of management in Public Health and Pharmacy</p>
        <p>Postgraduate</p>

        <h4>Syllabus for MBBS study in Kazakhstan</h4>
        <p>
          In Kazakhstan medical universities, the syllabus is almost same as
          Indian medical universities. The universities offer good superior
          facilities for the Indian students so they can gain their skill 7
          knowledge about the medicine and body complex problems. After
          completing 2nd-year aspirants has to visit government & private
          hospitals to practice. After the 6th semester, students practice under
          the supervision of senior doctors. Following are the syllabus that
          MBBS students will study while completing their medical degree in
          Kazakhstan:
        </p>

        <ul>
          <li>Medicine</li>
          <li> Community Medicine</li>
          <li>Pediatrics</li>
          <li>Surgery</li>
          <li> Obstetrics and Gynecology</li>
          <li>Orthopedics</li>
          <li>Radiology</li>
          <li>Ophthalmology</li>
          <li>Anesthesiology</li>
          <li>Microbiology</li>
          <li>Skin and VD</li>
          <li>Pharmacology</li>
          <li>Psychiatry and Forensic Medicine</li>
          <li>Toxicology</li>
          <li>Anatomy</li>
          <li>Physiology</li>
          <li>Biochemistry</li>
          <li>Pathology</li>
        </ul>

        <h4>After Completing MBBS from Kazakhstan</h4>
        <p>
          Once the students complete their MBBS course from any reputed medical
          universities in Kazakhstan, there will be many opportunities arise for
          Indian students like they can come back to their homeland & appear for
          the MCI screening/FMGE (Foreign Medical Graduate Screening test) exam
          & if students qualify with good marks they can practice in India.
        </p>

        <h4>Admission process for MBBS in Kazakhstan</h4>
        <p>
          The process of MBBS admission in Kazakhstan is very simple and hassle
          free. Following are some of the eligibility criteria student must
          obtain to take admission for medicine course in Kazakhstan:
        </p>
        <ul>
          <li>
            The student must have obtained a minimum of 50% marks in PCB
            (Physics, Chemistry & Biology) for general category & 40% for SC/ST
            and OBC as per MCI rule.
          </li>
          <li> The applicant must be or above 17 years of age.</li>
          <li> No entrance examination is required for admission.</li>
          <li> No upper age limit to study in Kazakhstan</li>
        </ul>

        <h4>
          Application procedure and details for studying MBBS in Kazakhstan
        </h4>
        <ul>
          <li>
            Firstly, applicant should fill the application form with all the
            correct points of interest.
          </li>
          <li>
            After university acceptance, you will receive the admission letter
            from us.
          </li>
          <li>
            After admission letter, student has to submit his passport to our
            Delhi Office.
          </li>
          <li>
            Then,we will apply for student visa in the Embassy of Kazakhstan in
            Delhi. Embassy may call the student for an interview
          </li>
          <li>
            Once visa is stamped we will notify the aspirant for the travelling
            date.
          </li>
          <li>
            Once student reach to Kazakhstan and university officials receive
            the student upon arrival.
          </li>
          <li> Student will be accommodated to the university hostel.</li>
          <li>
            Student will pay the balance tuition fee to the international
            student department and joins the MBBS course.
          </li>
        </ul>
      </div>

      <div className="college_kazakhstan">
        <div className="college_kazakhstan_heading">
          <h2>Most Demanding Colleges In Kazakhstan</h2>
        </div>
        <table>
          <tr>
            <th>Collegies/Universities</th>
            <th>Total Fees</th>
          </tr>
          <tr>
            <td>Kazakh National Medical University</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>South Kazakhstan State Med Academy</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Al Farabi University</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Kazakh Russian Medical University</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Caspian International School of Medicine</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Kokshetau State University</td>
            <td>Fee: N/A</td>
          </tr>
          <tr>
            <td>Astana Medical College University</td>
            <td>Fee: N/A</td>
          </tr>
        </table>
      </div>
      
      <Reply />
      <Address />
    </>
  );
};

export default Kazakhstan;
