import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";
import europe from "../images/europe/europe2.jpg";

import france from "../images/europe/france1.jpg";
import france2 from "../images/europe/france2.jpg";
import france3 from "../images/europe/france3.jpg";
import france4 from "../images/europe/france4.jpeg";

import germany from "../images/europe/germany1.jpg";
import germany2 from "../images/europe/germany2.jpg";
import germany3 from "../images/europe/germany3.jpg";
import germany4 from "../images/europe/germany4.jpg";

import netherland from "../images/europe/netherland1.jpg";
import netherland2 from "../images/europe/netherland2.jpg";
import netherland3 from "../images/europe/netherland3.jpg";
import netherland4 from "../images/europe/netherland4.jpg";

import sweden from "../images/europe/sweden1.jpg";
import sweden2 from "../images/europe/sweden2.jpg";
import sweden3 from "../images/europe/sweden3.jpg";
import sweden4 from "../images/europe/sweden4.jpg";

import austria from "../images/europe/austria1.jpg";
import austria2 from "../images/europe/austria2.jpg";
import austria3 from "../images/europe/austria3.jpg";
import austria4 from "../images/europe/austria4.jpg";

import denmark from "../images/europe/denmark1.jpg";
import denmark2 from "../images/europe/denmark2.jpg";
import denmark3 from "../images/europe/denmark5.jpg";
import denmark4 from "../images/europe/denmark4.jpg";

import finland from "../images/europe/finland1.jpeg";
import finland2 from "../images/europe/finland2.jpg";
import finland3 from "../images/europe/finland3.jpg";
import finland4 from "../images/europe/finland4.jpg";

import italy from "../images/europe/italy.png";
import italy2 from "../images/europe/italy2.jpg";
import italy3 from "../images/europe/Italy3.jpg";
import italy4 from "../images/europe/italy4.jpg";

import hungary from "../images/europe/hungary1.jpg";
import hungary2 from "../images/europe/hungary2.jpg";
import hungary3 from "../images/europe/hungary3.jpg";
import hungary4 from "../images/europe/hungary4.jpg";

import switerland from "../images/europe/switzerland1.jpg";
import switerland2 from "../images/europe/switerland2.jpg";
import switerland3 from "../images/europe/switerland3.jpg";
import switerland4 from "../images/europe/switerland4.jpg";

import span from "../images/europe/span1.jpg";
import span2 from "../images/europe/span2.jpg";
import span3 from "../images/europe/span3.jpg";
import span4 from "../images/europe/span4.jpg";

import lithuania from "../images/europe/lithuania1.jpg";
import lithuania2 from "../images/europe/lithuania2.jpg";
import lithuania3 from "../images/europe/lithuania3.jpg";
import lithuania4 from "../images/europe/lithuania4.jpeg";

import cyprus from "../images/europe/cyprus1.jpg";
import cyprus2 from "../images/europe/cyprus2.jpg";
import cyprus3 from "../images/europe/cyprus3.jpg";
import cyprus4 from "../images/europe/cyprus4.jpg";

import malta from "../images/europe/malta.jpg";
import malta2 from "../images/europe/malt22.jpg";
import malta3 from "../images/europe/malta3.jpg";
import malta4 from "../images/europe/malt4.jpg";

const Europe = () => {
  return (
    <>
      <div className="europe_main">
        <div className="europe_main_heading">
          <h6>
            <span>Home</span> Study Destinations
          </h6>
          <h1>Study in Europe</h1>
          <p>
            Discover everything you need to know as a citizen from in or outside
            Europe to plan and complete studies on the continent.
          </p>
          <button><a href="#reply_europe">Enquire Now</a></button>
        </div>
        <img src={europe} alt="europe" />
      </div>
      <div className="europe_country_list">
        <div className="europe_country_list_heading">
          <h1>Explore our study destinations!</h1>
        </div>
        <ul>
          <li>
            <a href="#france">France</a>
          </li>
          <li>
            <a href="#germany">Germany</a>
          </li>
          <li>
            <a href="#netherlands">Netherlands</a>
          </li>
          <li>
            <a href="#austria">Austria</a>
          </li>
          <li>
            <a href="#denmark">Denmark</a>
          </li>
          <li>
            <a href="#italy">Italy</a>
          </li>
          <li>
            <a href="#hungary">Hungary</a>
          </li>

          <li>
            <a href="#sweden">Sweden</a>
          </li>
          <li>
            <a href="#finland">Finland</a>
          </li>
          <li>
            <a href="#switzerland">Switzerland</a>
          </li>
          <li>
            <a href="#spain">Spain</a>
          </li>
          <li>
            <a href="#lithuania">Lithuania</a>
          </li>
          <li>
            <a href="#cyprus">Cyprus</a>
          </li>
          <li>
            <a href="#malta">Malta</a>
          </li>
        </ul>
      </div>

      <div className="france bg1">
        <div className="france_left">
          <h2 id="france">France</h2>
          <p>
            France is home to one of the most prestigious educational systems in
            the world. No matter what subjects or degrees you wish to pursue,
            there are plenty of universities and institutions that are a perfect
            match to your academic pursuits in France.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>64 Nobel Laureates and 15 Fields Medals</li>
            <li>Post Study Work Visa up to 2 Years (post Masters’ degree)</li>
            <li>France is home to 3,500 higher education institutions</li>
            <li>
              4 French universities in top 100 in the world (QS World Rankings
              2022)
            </li>
            <li>Affordable tuition fee and living expenses</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>
        </div>
        <div className="france_right">
          <div className="img1">
            <img src={france} alt="france" />
            <img src={france2} alt="france" />
          </div>

          <div className="img2">
            <img src={france3} alt="france" />
            <img src={france4} alt="france" />
          </div>
        </div>
      </div>

      <div className="france bg2">
        <div className="france_right">
          <div className="img1">
            <img src={germany} alt="germany" />
            <img src={germany2} alt="germany" />
          </div>

          <div className="img2">
            <img src={germany3} alt="germany" />
            <img src={germany4} alt="germany" />
          </div>
        </div>
        <div className="france_left">
          <h2 id="germany">Germany</h2>
          <p>
            Germany is fast becoming one of the most favoured choices for
            international education with hundreds of thousands of students
            seeking an entry in German universities. This country offers an
            unparalleled learning ecosystem known for producing high quality
            graduates who achieve high employability and better salaries in the
            global job market.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              More than 400 state-recognised institutions of higher education
            </li>
            <li>20,000 different study programmes to choose from</li>
            <li>
              Germany boasts of having over 400,000 international students
            </li>
            <li>Post Study Work Visa up to 1.5 Years</li>
            <li>Study in Europe’s strongest econom</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
      </div>

      <div className="france bg3">
        <div className="france_left">
          <h2 id="netherlands">Netherlands</h2>
          <p>
            With Netherlands hosting students from as many as 160 countries, you
            can experience an excellent international culture in Dutch
            universities, which is complemented by an education ecosystem that
            is student centered and industry oriented at the same time.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              9 universities among top 200 in the world (QS World Rankings 2022)
            </li>
            <li>
              Multicultural country -One in every 10 university students is an
              international student
            </li>
            <li>Post Study Work Visa up to 1 Year</li>
            <li>
              Amsterdam, the capital city, is among the best student cities
              worldwide
            </li>
            <li>Over 2000 English taught programs to choose from</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
        <div className="france_right">
          <div className="img1">
            <img src={netherland} alt="netherland" />
            <img src={netherland2} alt="netherland" />
          </div>

          <div className="img2">
            <img src={netherland3} alt="netherland" />
            <img src={netherland4} alt="netherland" />
          </div>
        </div>
      </div>

      <div className="france bg1">
        <div className="france_right">
          <div className="img1">
            <img src={austria} alt="austria" />
            <img src={austria2} alt="austria" />
          </div>

          <div className="img2">
            <img src={austria3} alt="austria" />
            <img src={austria4} alt="austria" />
          </div>
        </div>
        <div className="france_left">
          <h2 id="austria">Austria</h2>
          <p>
            Austria lies in the centre of Europe with easy access to its
            neighbouring countries by air, road, or rail.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              With a thriving industry base and high employment ratio, the
              opportunities for graduates are many and varied
            </li>
            <li>
              With a thriving industry base and high employment ratio, the
              opportunities for graduates are many and varied
            </li>
            <li>
              Austria is widely recognized as one of the most livable countries
              in the world
            </li>
            <li>
              In 2018, seven Austrian universities were included in the QS World
              University Rankings, with five institutions making it into the top
              500
            </li>
            <li>
              There are various scholarship opportunities and financial
              assistance programs for international students
            </li>
            <li>Austria also has one of the lowest crime rates in Europe</li>
            <li>Post study work visa of upto 12 months to search for a job</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>
        </div>
      </div>

      <div className="france bg2">
        <div className="france_left">
          <h2 id="denmark">Denmark</h2>
          <p>
            Denmark regularly ranks on lists of most pleasant, safest and
            happiest places on earth thanks to its high quality of life and per
            capita income, as well as its advanced education, health care and
            civil rights. Undertaking an education in Denmark places you right
            in the centre of this socially developed nation. Denmark is
            consistently featured on the list of top 10 countries in Europe to
            study abroad, especially when it comes to the personal development
            opportunities and the access to higher quality teaching.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              The Danes are known to consistently be ranked as the happiest
              people on the planet
            </li>
            <li>
              Education for all is a key priority in Denmark in order to ensure
              growth, welfare and competitiveness
            </li>
            <li>
              Danish universities and higher education institutions are highly
              international and offer many programmes in English
            </li>
            <li>Post study work visa for 6 months to search for a job</li>
            <li>
              Denmark's location makes it a gateway to other Scandinavian
              countries and the rest of Europe
            </li>
            <li>
              The strong welfare state ensures economic equality in society and
              virtually no corruption and low crime rates
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
        <div className="france_right">
          <div className="img1">
            <img src={denmark} alt="denmark" />
            <img src={denmark2} alt="denmark" />
          </div>

          <div className="img2">
            <img src={denmark3} alt="denmark" />
            <img src={denmark4} alt="denmark" />
          </div>
        </div>
      </div>

      <div className="france bg3">
        <div className="france_right">
          <div className="img1">
            <img src={italy} alt="italy" />
            <img src={italy2} alt="italy" />
          </div>

          <div className="img2">
            <img src={italy3} alt="italy" />
            <img src={italy4} alt="italy" />
          </div>
        </div>
        <div className="france_left">
          <h2 id="italy">Italy</h2>
          <p>
            Italy is widely known for being an education hub of Europe and is
            home to an impressive 40 universities which feature in the QS World
            University Rankings 2021. But there’s more to Italy than exceptional
            education - delicious food to beautiful museums and most importantly
            the career opportunities.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>Home to some of the oldest universities in the world</li>
            <li>Cost of living and tuition fees in Italy is budget-friendly</li>
            <li>
              Courses offered in the field of Architecture, Arts, Design and
              Fashion, Italy is very fluent in the language of Research and
              Science
            </li>
            <li>Wide offer of courses in English language</li>
            <li>
              Post study work visa of upto 1 year post completion of education
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
      </div>

      <div className="france bg1">
        <div className="france_left">
          <h2 id="hungary">Hungary</h2>
          <p>
            Hungarian higher education has been representing academic excellence
            for more than 650 years with its first university founded in 1367.
            Now, there are 65 higher education institutions in Hungary.
            Hungarian institutions offer more than 500 courses in English,
            German, French and other languages. The foreign language programmes
            are of a high standard and tuition fees are very favourable when
            compared to its competitors.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              Students can earn double degrees at many universities through
              joint degree programmes
            </li>
            <li>
              Students can combine studies with professional practice by taking
              an Erasmus internship in Hungary
            </li>
            <li>Globally accepted degrees</li>
            <li>
              Many local and international companies offer internship positions
              to students
            </li>
            <li>
              The tuition fee and living costs in Hungary are relatively
              affordable, compared to most other parts of Europe
            </li>
            <li>
              Post study work visa of 9 months post completion of education
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
        <div className="france_right">
          <div className="img1">
            <img src={hungary} alt="hungary" />
            <img src={hungary2} alt="hungary" />
          </div>

          <div className="img2">
            <img src={hungary3} alt="hungary" />
            <img src={hungary4} alt="hungary" />
          </div>
        </div>
      </div>  

      <div className="france bg2">
        <div className="france_right">
          <div className="img1">
            <img src={sweden} alt="sweden" />
            <img src={sweden2} alt="sweden" />
          </div>

          <div className="img2">
            <img src={sweden3} alt="sweden" />
            <img src={sweden4} alt="sweden" />
          </div>
        </div>
        <div className="france_left">
          <h2 id="sweden">Sweden</h2>
          <p>
            With an education system that fosters creativity and emphasizes more
            on academic pursuits than just achieving higher grades and home to
            universities that instil ambition, innovation and critical thinking,
            Sweden is among the most innovative study destinations in the world.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>Around 40 universities to study from</li>
            <li>Over 900 programs to choose from</li>
            <li>
              6 Swedish universities among world’s top 200 (QS World Rankings
              2022)
            </li>
            <li>Post Study Work Visa up to 1 Year</li>
            <li>Capital city of Stockholm is among the best student cities</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>
        </div>
      </div>

      <div className="france bg3">
        <div className="france_left">
          <h2 id="finland">Finland</h2>
          <p>
            A country with pristine natural beauty and landscapes, Finland is
            among Europe’s most modern and innovative countries. With an
            education system that is at par with global standards, it is also a
            popular choice of international students due to the academic
            reputation of Finnish Universities.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              7 universities among top 500 in the world (QS World Rankings 2022)
            </li>
            <li>Post Study Work Visa up to 1 Year</li>
            <li>Helsinki – among the most popular student cities</li>
            <li>Finland hosts over 20,000 international students</li>
            <li>
              13 universities and 22 universities of applied sciences (UAS) to
              choose from
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
        <div className="france_right">
          <div className="img1">
            <img src={finland} alt="finland" />
            <img src={finland2} alt="finland" />
          </div>

          <div className="img2">
            <img src={finland3} alt="finland" />
            <img src={finland4} alt="finland" />
          </div>
        </div>
      </div>

      <div className="france bg1">
        <div className="france_right">
          <div className="img1">
            <img src={switerland} alt="switerland" />
            <img src={switerland2} alt="switerland" />
          </div>

          <div className="img2">
            <img src={switerland3} alt="switerland" />
            <img src={switerland4} alt="switerland" />
          </div>
        </div>
        <div className="france_left">
          <h2 id="switzerland">Switzerland</h2>
          <p>
            Switzerland has a very innovative educational system. Swiss
            universities are among the best, not only in Europe but in the
            entire world. Each year, Switzerland accepts a large influx of
            international students from all over the world, all aiming to add
            Swiss higher education degree to their academic careers.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              Home of most global sport world bodies, global business
              corporations and international UN organisations, World Trade
              Offices, and Hotel and Tourism bodies (IATA etc)
            </li>
            <li>
              3 Swiss Universities are ranked in top 100 in the world (QS World
              Rankings 2023)
            </li>
            <li>
              About 2,60,000 students enrolled at a Swiss higher education
              institutions
            </li>
            <li>
              Paid Internship opportunities available for International Students
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
      </div>

      <div className="france bg2">
        <div className="france_left">
          <h2 id="spain">Spain</h2>
          <p>
            A major economic power in Europe, Spain has rapidly become a hub for
            young, creative talent, with hundreds of start-ups, entrepreneurs
            boarding on new ventures and growing business industries. With an
            economical cost of living and unending opportunities to play sports
            and socialize, Spain is the perfect location for international
            education.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              The Spanish offer of graduates and postgraduates is broad and of
              very high level. Résumé will earn points with an educational
              experience in Spain
            </li>
            <li>
              One of the safest countries in the world and people are very
              friendly
            </li>
            <li>Spaniards are happy to converse with international students</li>
            <li>
              Spain is about 17% cheaper than Germany and can be more than 30%
              less than the cost of living in France. Reasonable transportation
              cost
            </li>
            <li>
              Going to university at undergraduate or post-graduate level boosts
              job prospects
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
        <div className="france_right">
          <div className="img1">
            <img src={span} alt="span" />
            <img src={span2} alt="span" />
          </div>

          <div className="img2">
            <img src={span3} alt="span" />
            <img src={span4} alt="span" />
          </div>
        </div>
      </div>

      <div className="france bg3">
        <div className="france_right">
          <div className="img1">
            <img src={lithuania} alt="lithuania" />
            <img src={lithuania2} alt="lithuania" />
          </div>

          <div className="img2">
            <img src={lithuania3} alt="lithuania" />
            <img src={lithuania4} alt="lithuania" />
          </div>
        </div>
        <div className="france_left">
          <h2 id="lithuania">Lithuania</h2>
          <p>
            Lithuania is a modern northern European country and a member of the
            European Union. Foreigners are welcome and English is a widely
            spoken language in Lithuania. Lithuania is a country of the fastest
            and cheapest internet connection in the European Union. Lithuanian
            institutions offer over 500 study programmes taught in English or
            Russian which are Internationally recognized.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>
              International students are eligible to apply for Lithuanian state
              scholarships
            </li>
            <li>
              The cost of living in Lithuania is cheaper than 54 percent of the
              countries in the world
            </li>
            <li>
              Lithuanian people are known for their welcoming, friendly
              attitudes and it is the easiest country in the Schengen Area to
              get a visa from
            </li>
            <li>
              Lithuanian grants students the right to work up to 20 hours a week
              with education
            </li>
            <li>Post study work visa of upto 15 months to search for a job</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
      </div>

      <div className="france bg2">
        <div className="france_left">
          <h2 id="cyprus">Cyprus</h2>
          <p>
            Cyprus is an island divided into northern and southern parts. Cyprus
            is one of the largest islands in the Mediterranean Sea, located in
            the south of Turkey. Studying in Cyprus may be interesting for many
            students, as in addition to the well-ranked universities in the
            country, the cost of studying in Cyprus is also very affordable.
            Cyprus provides a great opportunity for students to study in
            different fields such as medical, paramedical, finance, art, and
            music fields.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>More than 25,000 students to choose study in Cyprus</li>
            <li>
              Top-notch quality of education at a reasonable cost, Bachelor and
              Master’s degree in Cyprus is recognized world-wide
            </li>
            <li>
              Scholarships for international students that cover up to forty
              percent of tuition fees
            </li>
            <li>Plethora of opportunities for career-growth</li>
            <li>English is the official language of Cyprus</li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
        <div className="france_right">
          <div className="img1">
            <img src={cyprus} alt="cyprus" />
            <img src={cyprus2} alt="cyprus" />
          </div>

          <div className="img2">
            <img src={cyprus3} alt="cyprus" />
            <img src={cyprus4} alt="cyprus" />
          </div>
        </div>
      </div>

      <div className="france bg3">
        <div className="france_right">
          <div className="img1">
            <img src={malta} alt="malta" />
            <img src={malta2} alt="malta" />
          </div>

          <div className="img2">
            <img src={malta3} alt="malta" />
            <img src={malta4} alt="malta" />
          </div>
        </div>
        <div className="france_left">
          <h2 id="malta">Malta</h2>
          <p>
            Malta has a rich history that dates to prehistory, it has a modern
            outlook and has stepped up to the times and kept pace with the
            world, not just in terms of overall outlook. International students
            who choose to study abroad in Malta are guaranteed of quality
            education through self-awareness, combined with world recognition.
          </p>
          <h5>Quick facts</h5>
          <ul>
            <li>Top-notch quality of education at a reasonable cost</li>
            <li>Plethora of opportunities for career-growth</li>
            <li>
              Roughly 90% of the population speak English and Malta is a popular
              destination for students seeking English language courses in
              Europe
            </li>
            <li>More than 200 courses are offered in Malta</li>
            <li>
              Popular courses in field of agriculture, forestry and fishery,
              education and teaching and tourism and leisure, Social and
              behavioural sciences, Transport and logistics
            </li>
          </ul>
          <button className="reply_asia_btn"><a href="#reply_europe">Enquire Now</a></button>

        </div>
      </div>

      <div id="reply_europe">
        <Reply />
      </div>

      <Address />
    </>
  );
};

export default Europe;
