import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";

import asia from "../images/dest/asia3.jpg";

import singapore from "../images/dest/singa1.jpg";
import singapore2 from "../images/dest/singa2.jpg";
import singapore3 from "../images/dest/singa3.jpg";
import singapore4 from "../images/dest/singa4.jpg";

import dubai from "../images/dest/dubai1.jpg";
import dubai2 from "../images/dest/dubai2.jpg";
import dubai3 from "../images/dest/dubai3.jpg";
import dubai4 from "../images/dest/dubai4.jpg";

import malaysia from "../images/dest/malaysia1.jpg";
import malaysia2 from "../images/dest/malaysia2.jpg";
import malaysia3 from "../images/dest/malaysia3.jpg";
import malaysia4 from "../images/dest/malaysia4.jpg";

import japan from "../images/dest/japan1.png";
import japan2 from "../images/dest/japan2.png";
import japan3 from "../images/dest/japan3.png";
import japan4 from "../images/dest/japan4.png";

import mauritius from "../images/dest/mauritius1.jpg";
import mauritius2 from "../images/dest/mauritius2.jpg";
import mauritius3 from "../images/dest/mauritius3.jpg";
import mauritius4 from "../images/dest/mauritius4.jpg";

import vietnam from "../images/dest/vietnam.jpg";
import vietnam2 from "../images/dest/vietnam2.jpg";
import vietnam3 from "../images/dest/vietnam3.jpg";
import vietnam4 from "../images/dest/vietnam4.jpg";

import china from "../images/dest/china1.jpg";
import china2 from "../images/dest/china2.jpeg";
import china3 from "../images/dest/china3.jpg";
import china4 from "../images/dest/china4.jpg";

const Asia = () => {
  return (
    <>
      <div className="asia_main">
        <div className="asia_main_heading">
          <h6>
            <span>Home</span> Study Destinations
          </h6>
          <h1>Study in Asia</h1>
          <p>
            Learn about study abroad in Asia. Asian universities combine rich
            traditions with high-tech facilities and unique research
            opportunities.
          </p>
          <button><a href="#reply_asia">Enquire Now</a></button>
        </div>
        <img src={asia} alt="asia" />
      </div>

      <div className="asia_country_list">
        <div className="asia_country_list_heading">
          <h1>Explore our study destinations!</h1>
        </div>
        <ul>
          <li>
            <a href="#singapore">Singapore</a>
          </li>
          <li>
            <a href="#dubai">Dubai</a>
          </li>
          <li>
            <a href="#malaysia">Malaysia</a>
          </li>
          <li>
            <a href="#mauritius">Mauritius</a>
          </li>
          <li>
            <a href="#japan">Japan</a>
          </li>
          <li>
            <a href="#vietnam">Vietnam</a>
          </li>
          <li>
            <a href="#china">China</a>
          </li>
        </ul>
      </div>

      <div className="singapore bg1">
        <div className="singapore_left">
          <h2 id="singapore">Singapore</h2>
          <p>
            Study in Singapore to experience one of the best education systems
            in the world, to earn a globally recognized qualification from high
            ranked institutions and to experience a multicultural society with a
            very high quality of life.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              Ranked as the second-best country to live and work in, according
              to an HSBC ranking in 2019
            </li>
            <li>2 universities ranked among the top 20 in the world</li>
            <li>One of the financial capitals of the world</li>
            <li>
              Institutions affiliated with top international universities in the
              USA, the UK, Canada & Australia
            </li>
            <li>Transfer opportunities to parent campus</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_asia">Enquire Now</a></button>

        </div>
        <div className="singapore_right">
          <div className="img1">
            <img src={singapore} alt="singapore" />
            <img src={singapore2} alt="singapore" />
          </div>

          <div className="img2">
            <img src={singapore3} alt="singapore" />
            <img src={singapore4} alt="singapore" />
          </div>
        </div>
      </div>

      <div className="singapore bg2">
        <div className="singapore_right">
          <div className="img1">
            <img src={dubai} alt="dubai" />
            <img src={dubai2} alt="dubai" />
          </div>

          <div className="img2">
            <img src={dubai3} alt="dubai" />
            <img src={dubai4} alt="dubai" />
          </div>
        </div>
        <div className="singapore_left">
          <h2 id="dubai">Dubai</h2>
          <p>
            Study in Dubai, a futuristic city that is home to over 60 world
            renowned university campuses and colleges and that offers plenty of
            higher education opportunities meeting your aspirations. Pursue a
            world class undergraduate or postgraduate degree from this
            destination and advance your career globally.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>Dubai – a popular student city</li>
            <li>
              Institutions in Dubai are affiliated with top international
              universities in Australia and The UK
            </li>
            <li>Global tourism and entertainment hub</li>
            <li>A safe city and a modern design capital</li>
            <li>
              Excellent full time and part time job opportunities for
              international students
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_asia">Enquire Now</a></button>

        </div>
      </div>

      <div className="singapore bg3">
        <div className="singapore_left">
          <h2 className="malaysia">Malaysia</h2>
          <p>
            With natural attractions, rich culture and gorgeous scenery,
            Malaysia attracts people from all over the world. The country has a
            unique combination of ancient and modern architecture, inspired by
            their mix of cultures and ethnicities. Its location makes it the
            perfect destination for any international student looking for a new
            experience for their studies and has progressively emerged as one of
            the prominent student destinations in Asia. Home to many
            international Universities, it is well-known for providing quality
            education at inexpensive costs as well as simpler visa and
            immigration procedures thus attracting students from across the
            globe.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              8 Malaysian universities in the 2023 QS World University ranking
              top 500
            </li>
            <li>
              Malaysia is an increasingly popular place to get tertiary
              education with more than 95,000 international students from over
              100 countries studying in Malaysia
            </li>
            <li>Affordable cost of living and cost of education</li>
            <li>Home to many foreign Universities</li>
            <li>Scholarship opportunities for International students</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_asia">Enquire Now</a></button>
          
        </div>
        <div className="singapore_right">
          <div className="img1">
            <img src={malaysia} alt="malaysia" />
            <img src={malaysia2} alt="malaysia" />
          </div>

          <div className="img2">
            <img src={malaysia3} alt="malaysia" />
            <img src={malaysia4} alt="malaysia" />
          </div>
        </div>
      </div>

      <div className="singapore bg1">
        <div className="singapore_right">
          <div className="img1">
            <img src={mauritius} alt="mauritius" />
            <img src={mauritius2} alt="mauritius" />
          </div>

          <div className="img2">
            <img src={mauritius3} alt="mauritius" />
            <img src={mauritius4} alt="mauritius" />
          </div>
        </div>
        <div className="singapore_left">
          <h2 id="mauritius">Mauritius</h2>
          <p>
            Mauritius is a located in the Indian Ocean which is best known for
            its white beaches, reefs and fascinating forests. It is one of the
            best countries to pursue an education at an affordable price in
            South Asia. The country has developed one of the finest education
            systems that have led to students enrolling in universities from
            various parts of the world. It provides world-class and
            internationally recognised education followed by affordable living
            costs for international students.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>Home to many foreign Universities</li>
            <li>
              International Students can work part time for 20 hours per week
            </li>
            <li>
              It has carved a reputation of being socially, economically and
              politically stable
            </li>
            <li>Plethora of opportunities for career-growth</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_asia">Enquire Now</a></button>

        </div>
      </div>

      <div className="singapore bg2">
        <div className="singapore_left">
          <h2 id="japan">Japan</h2>
          <p>
            Japan is renowned for its excellent education system and is one of
            the top-performing country in reading literacy, math and sciences.
            Excellent safety, accessibility, and high quality of life standards
            make Japan a top location for students. Studying abroad in Japan
            means that the students will further studies in a well-rounded
            education system, experience a unique new culture, and gain a more
            international perspective. Japan is a popular study abroad
            destination and offers many advantages for students. International
            students in Japan can engage with Japanese culture, cuisine, and
            language. Japan is widely considered a safe country for students,
            with efficient public transportation.
          </p>
          <h5>Quick facts</h5>
          <ul>   
            <li>1st City GDP (USD 1.8 Trill.)</li>
            <li>76% of foreign companies’ HQs</li>
            <li>3rd Global power City Index 2017</li>
            <li>4th Global City Ranking 2017</li>
            <li>Tokyo is among the best student cities (QS 2019)</li>
            <li>
              Most extensive, dependable, and affordable transport system in the
              world
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_asia">Enquire Now</a></button>
        </div>
        <div className="singapore_right">
          <div className="img1">
            <img src={japan} alt="japan" />
            <img src={japan2} alt="japan" />
          </div>

          <div className="img2">
            <img src={japan3} alt="japan" />
            <img src={japan4} alt="japan" />
          </div>
        </div>
      </div>

      <div className="singapore bg3">
        <div className="singapore_right">
          <div className="img1">
            <img src={vietnam} alt="vietnam" />
            <img src={vietnam2} alt="vietnam" />
          </div>

          <div className="img2">
            <img src={vietnam3} alt="vietnam" />
            <img src={vietnam4} alt="vietnam" />
          </div>
        </div>
        <div className="singapore_left">
          <h2 id="vietnam">Vietnam</h2>
          <p>
            Vietnam is known for its rigorous curriculum that is deemed
            competitive for students. Vietnam is the home to many world heritage
            sites recognized by UNESCO. Vietnam is known for its endless natural
            beauty and its famous attraction. Vietnam’s economy is growing
            steadily at near 7% which will make it fastest growing markets in
            the world. Vietnam offers a variety of programs while the student
            will study in a multi- cultural environment
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              Increasing economic growth creates strong demand in Manpower
              resources
            </li>
            <li>
              One of the safest countries and is among the 11 world countries
              those are free from conflict
            </li>
            <li>
              Cost of Living and Tuition fee is much affordable compared to
              study in Australia and UK
            </li>
            <li>Degrees are globally recognised</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_asia">Enquire Now</a></button>
        </div>
      </div>

      <div className="singapore bg1">
        <div className="singapore_left">
          <h2 id="china">China</h2>
          <p>
            The number of higher education institutions in China has doubled in
            the last decade, and there are almost 3,000 institutions now. 6
            Chinese universities rank within the top 100 as per the QS World
            University Rankings 2021. Overall, 40 Chinese institutions received
            a ranking. China has also made numerous partnerships with renowned,
            reputed universities of the UK and the U.S.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              6 of Chinese Universities are ranked in top 100 in the world (QS
              World Rankings 2023)
            </li>
            <li>
              Due to its growing economy over the past three decades numerous
              Fortune 500 companies are based in China
            </li>
            <li>
              500,000 international students studying at Chinese universities
            </li>
            <li>
              Tuition fees is almost 5 times lower than the UK or the US
              Universities
            </li>
            <li>
              Popular courses in field of Engineering, Computer Science,
              International Business, MBA, Medicine to Chinese Language,
              Calligraphy, and Martial Arts
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_asia">Enquire Now</a></button>
        </div>
        <div className="singapore_right">
          <div className="img1">
            <img src={china} alt="china" />
            <img src={china2} alt="china" />
          </div>

          <div className="img2">
            <img src={china3} alt="china" />
            <img src={china4} alt="china" />
          </div>
        </div>
      </div>
       
       <div id="reply_asia">
        <Reply />
       </div>

      <Address />
    </>
  );
};

export default Asia;
