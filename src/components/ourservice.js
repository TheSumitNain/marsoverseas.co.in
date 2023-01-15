import React from "react";
import { Link } from "react-router-dom";

const ourservice = () => {
  return (
    <>
      <div className="service_name" id="ourServices">
        <h1 className="waviy">
          <span style={{ "--i": "1" }}>S</span>
          <span style={{ "--i": "2" }}>E</span>
          <span style={{ "--i": "3" }}>R</span>
          <span style={{ "--i": "4" }}>V</span>
          <span style={{ "--i": "5" }}>I</span>
          <span style={{ "--i": "6" }}>C</span>
          <span style={{ "--i": "7" }}>E</span>
          <span style={{ "--i": "8" }}>S</span>
        </h1>
      </div>

      <div className="service_list">
        <h4> IELTS </h4>
        <p>
          <span>International English Language Testing System (IELTS)</span> is
          known as the one of the most popular English language test in the
          world. Every year, more than 2.9 million peoples appear in this test.
          This test is taken to assess the English skills of a candidate in
          different modules. These modules include
          <span>reading, listening, writing </span>
          and <span> speaking.</span> This is a criteria to judge you that how
          well or easy it is for you to study, work, and learn in the English
          language countries.
        </p>

        <p>
          It is a most common basic requirement. After achieving the required
          band Score in IELTS you will be able to study, live and work in
          different countries around the world. There are about 140 countries in
          the world that accepts the <span>IELTS certificate</span> as the proof
          of English language Proficiency
          <Link to="/ielts">
            <span> Learn More</span>
          </Link> <br/>
        </p>

        <h4>PTE</h4>
        <p>
          <span> PTE Academic </span> is a computer based English language test
          for international students, which is accredited by leading
          universities and colleges around the world. Due to the availability of
          earliest dates and immediate results, it is a fast emerging English
          Language Proficiency test among the students
          <Link to="/pte">
            
            <span> Learn More</span>
          </Link> <br />
        </p> 

        <h4> Study-Destination </h4>
        <p>
          Today, it is a challenge for the Students to search out a trust worthy
          <span> study visa consultant</span>. Most of the students are not sure
          about their visa consultants, whether they are genuine or not. Here at
          Mars Overseas we are promising you to provide the accurate advice
          about study visa related to your profile. Mars Overseas is the best
          Study Visa consultancy.We have Tie-ups with the top most colleges and
          universities in
          <span>
            <Link to="study-destination/canada">
               
              <span> Canada</span> 
            </Link>
            ,
            <Link to="study-destination/australia">
              
              <span> Australia</span>
            </Link>
            ,
            <Link to="study-destination/newzealand">
              
              <span> New-Zealand</span>
            </Link>
            ,
            <Link to="study-destination/ireland">
              
              <span> Ireland</span>
            </Link>
            ,
            <Link to="study-destination/usa">
              
              <span> USA</span>
            </Link>
            ,
            <Link to="study-destination/UK">
              
              <span> United-Kingdom</span>
            </Link>
            ,
            <Link to="study-destination/europe">
              
              <span> Europe</span>
            </Link>
            ,
            <Link to="study-destination/asia">
              
              <span> Asia </span>
            </Link>
          </span> 
          and <span>Schengen Countries.</span>
          <br />
        </p>

        <h4>MBBS ABORAD</h4>
        <p>
          Medicine is one of the most popular careers paths across the world
          including India. The journey to becoming a doctor typically starts
          with gaining an MBBS degree. But, getting a medical seat in India is
          not fiercely competitive. Studying abroad is one of the best options
          for the students who didn’t score a good rank in the NEET examination.
          Studying medicine abroad is comparatively less expensive and has a
          high ROI. There are many universities abroad that prefer taking the
          students from various countries to establish a positive co-culture
          environment. Foreign universities maintain high standards in terms of
          quality of education at cheaper / lesser fees when compared to India
          <Link to="/mbbs-abroad">
            <span> Learn More</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default ourservice;
