import React from "react";
import Reply from "./Reply.js";
import Address from "./Address";
import { Icon } from "@iconify/react";
import why from "../images/dest/why.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div>
          <h1>About Us</h1>
          <p>Registration No:- 06-009-2020-00016</p>
        </div>
      </div>

      <div className="about_para">
        <p align="justify">
          <span> Mars Overseas </span> founded its roots in 2019 with a motto to
          provide Education Guidance and Assistance in Admission to students in
          India as well as Abroad. There are lots of students in India who have
          the dream to study abroad. But it is not so easy as it seems. It
          requires your hard work and huge amount of money to make it possible
          for you.
        </p>
        <p align="justify">
          Today, it is a challenge for the Students to search out a trustworthy
          <span>study visa consultant</span>. Most of the students are not sure
          about their visa consultants, whether they are genuine or not. Here at
          Mars Overseas we are promising you to provide the accurate advice
          about study visa related to your profile. Mars Overseas is the best
          Study Visa consultancy.We have Tie-ups with the top most colleges and
          universities in
          <span>
             Canada, Australia, New Zealand, USA/UK, Ireland, Singapore 
          </span>
          and <span>Schengen Countries.</span> Later on with time it got its
          name and with time it was developed into a well known organisation.
        </p>
        <p align="justify">
          We have been serving our clients to choose a specific professional
          course after completing their schooling, by providing them the
          knowledge of various courses and streams like Medical, Engineering,
          Law, Journalism, Pharmacy, Nursing etc. in India as well as in Abroad.
          We have tie-ups with top institutions which provide guaranteed
          placements after finishing their course in India as well as in Abroad.
          Our unique assistance service has helped many students in getting them
          through their Dream College/University and reaching their goals.
        </p>
      </div>

      <div className="mission">
        <div>
          <h2>Our Mission</h2>
        </div>
        <p align="center">
          Mars Overseas aspire to help students to find right path to well
          deserved institute. We desire to suggest best Universities thereby
          giving brilliant and unparalleled experience to our students.
        </p>
        <div>
          <h2>Vision</h2>
        </div>
        <p align="center">
          Our vision is to be the global leader in education industries, for
          that Mars Overseas working day and night.
        </p>
      </div>

      <div className="why">
        <div className="why_heading">
          <h1>Why us</h1>
        </div>

        <div className="why_reason">
          <div className="why_reason_left">
            <div className="icon_box">
              <Icon className="icon1" icon="mdi:person-check" />
            </div>
            <h3>Expert Counsellors</h3>
            <p align="center">
              We have a dedicated team of expert counselors who will solve all
              you query related to you career
            </p>

            <div className="icon_box">
              <Icon className="icon1" icon="ant-design:like-outlined" />
            </div>
            <h3>Transparent System</h3>
            <p align="center">
              We provide a very transparent system to students
            </p>
          </div>

          <div className="why_reason_center">
            <img src={why} alt="img" />
          </div>

          <div className="why_reason_right">
            <div className="icon_box">
              <Icon className="icon1" icon="icon-park-outline:save-one" />
            </div>
            <h3>Individual Attention</h3>
            <p align="center">
              We provides individual Attention to every student, for that we
              assign a dedicated counselor to each student
            </p>

            <div className="icon_box">
              <Icon className="icon1" icon="fluent:building-bank-24-regular" />
            </div>
            <h3>Best University</h3>
            <p align="center">
              We have tie ups with only best quality University or colleges in
              India and Abroad
            </p>
          </div>
        </div>
      </div>

      <div className="service_provide">
        <h2>Services We Provide</h2>
        <p>Career Counseling And Admission Assistance</p>
        <p align="justify">
          It is a very difficult for the students to choose a course and stream.
          There are many doubtful questions in their mind regarding their course
          and its prospect after they complete it. Will their studies provide
          them a suitable job? What about the Growth?
        </p>
        <p align="justify">
          Everyone has their own Area of Interest, Specialization, Command and
          this gives arise to new way of thinking. It is very essential that one
          should utilize his maximum potential and even in their own way.
        </p>
        <p align="justify">
          Now a days education and technology has reached new heights and its
          becoming more convenient for students to purse a course. Various new
          courses have been also started in the last decade, with a direction of
          Specification and Department so as to make Masters of a particular
          trade and thus providing more capability and raising the
          Employ-ability. On the other hand it has also made the completions
          among ourselves more tough. <br />
          We guide student about the various colleges and universities where
          he/she must apply to get the seat for the desired course he is looking
          for. We intimate them from time tor time information about the
          application form and Exams of the Colleges/ Universities.
        </p>

        <ul>
          <li>
            We assist them from the Day 1 till the Student finds the desired
            seat.
          </li>
          <li>We provide them a very Transparent system .</li>
          <li>
            We provide admission assistance in almost all the premiere
            institutes of the country, so as to provide the best consultancy
            services to the students.
          </li>
          <li>Each and every student is promised individual attention</li>
          <li>
            Student will not face the difficulty of getting admission in any
            university which matches his/her competencies and skills.
          </li>
          <li>
            We help them in applying for a course or for enrolling for an exam
            or filling the form.
          </li>
          <li>We guide them for Scholarships.</li>
          <li>We guide them for Education loans.</li>
        </ul>
      </div>

      <div>
        <Reply />
      </div>

      <Address />
    </>
  );
};

export default About;
