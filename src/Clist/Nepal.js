import React from "react";
import Reply from "../components/Reply";
import Address from "../components/Address";

import flag from "../images/list/nepal-flag2.jpg";
import city from "../images/list/nepal-city.jpg";

const Nepal = () => {
  return (
    <>
      <div className="nepal">
        <div className="logo">
          <h1>Nepal</h1>
        </div>
        <div className="table_map">
          <table>
            <tr>
              <td>Population</td>
              <td> 2.9 crore (approx.)</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>Kathmandu</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Nepali, English</td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>
                Hindu,Buddhism, Islam, Kirant,
                <br /> Christianity, Animism{" "}
              </td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>Nepali Rupees</td>
            </tr>
            <tr>
              <td>Key Cities</td>
              <td>
                {" "}
                Kathmandu, Pokhara, Patan, <br />
                Biratnagar
              </td>
            </tr>
            <tr>
              <td>Exchange Rate</td>
              <td>1 NR = .60 INR</td>
            </tr>
            <tr>
              <td>GDP per capita</td>
              <td>$ 2,447.2 crores</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>
                Warm Dry summers & Fairly <br /> Severe Winters
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3594010.279314352!2d84.126407!3d28.395843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e0!3m2!1sen!2sus!4v1670755799795!5m2!1sen!2sus"
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

      <div className="mbbs_nepal">
        <p>
          1.<span>MBBS In Nepal</span> – Studying MBBS in Nepal is an excellent
          opportunity for the Indian students. Nepal happens to be a friendly
          and peaceful nation, having good relations with India and have no
          language problem because most of peoples in Nepal can understand Hindi
          and English, it is not possible in China and Russia where most of
          local people do not know English as well. Also Food habits and Weather
          conditions are similar to India. Communications with Nepal is very
          easy by Air / road, and also cost effective, no passport / visa
          required for Indian Citizens. The medical colleges in Nepal have the
          medical infrastructure and the syllabus followed is identical to that
          of Medical Council of India. Many medical colleges in Nepal promoted
          by Govt. Of India as well as Indian owners
        </p>
        <p>
          2. <span>MBBS in Nepal Cost</span> – MBBS in Nepal fee structure
          varies from 40 Lac – 45 Lac ( Total Package ) depends on medical
          college to college in Nepal , certainly depend on quality of the
          medical college also which is more cheaper than private medical
          colleges in India where minimum package is not less than Rs 70 Lac. So
          you can save near about Rs 25 Lac – Rs 35 Lac , just taking MBBS
          admission in Nepal, your neighbouring county.
        </p>
        <p>
          3. Education System in Nepal is very similar to India. The Course
          contents and pattern of MBBS education is also very similar and
          strictly follows MCI syllabus and Indian Medical books. The duration
          of the course for pursuing MBBS in Nepal is same as India. There are
          professors and lecturers in Nepal who are from India. Since a long
          time Indians are studying MBBS in Nepal, especially students from the
          northern part of India.
        </p>
        <p>
          4. You will be happy to note that some of the medical colleges are
          owned by Indian. Hence the management of the medical institution is of
          Indian entrepreneurs. The Nepal medical colleges have their offices in
          India to admit students for studying MBBS in Nepal in their colleges.
        </p>
        <p>
          5. Just like medical council of India and in line with India, there is
          Nepal Medical Council that monitors the medical colleges in Nepal. All
          medical colleges in Nepal are approved by Medical Council of India.
          Indian students after finishing their MBBS in Nepal, have to sit for
          the MCI Screening Test.
        </p>
        <p>
          6. After passing the MCI Screening Test, the MBBS degree from Nepal of
          the Indian students becomes at par with the MBBS done in India. With
          this the MBBS graduate can apply for registration to practice in India
          or go for PG medical courses in India.
        </p>
        <p>
          7. Parents from India can visit to medical colleges in Nepal to meet
          with their son / daughter throughout the year without any Passport or
          Visa by Train / Flight. Nepal is well connected with India Borders.
        </p>
      </div>

      <div className="about_nepal">
        <h4>About Nepal</h4>
        <p>
          Federal Democratic Republic of Nepal For MBBS in Nepal is a sovereign
          country located in the Himalayas. The mountain range, in the north
          part of the country, has eight tallest mountains in the world,
          including that of Mount Everest. The birthplace of Lord Buddha that is
          Lumbini also lies in this region. This is considered to be one of the
          famous pilgrimage spots in the world. The capital of the country is
          Kathmandu. It is known for its multi-ethnicity and multi-cultural
          background.
        </p>

        <h4>History</h4>
        <p>
          The name of the country is mentioned in the Vedic texts. Scholars
          believe that the name of the country has derived its name from the
          Newar Kingdom. Monarchy is an integral part of the history of the
          country. Fron 18th century to 2008, Shah Dynasty ruled the country. In
          2008, monarchy was ultimately abolished, and a democratic republic was
          established.
        </p>

        <h4>Geography</h4>
        <p>
          Two neighboring countries of the country are India and China. There
          are over 240 peaks in the country that are 20,000 feet above the sea
          level.
        </p>

        <h4>Why Nepal</h4>
        <p>
          Nepal is a preferred location, especially for Indian students owing to
          a number of reasons. The quality education provided by these
          institutes, competitive fee structure, and less complicated
          documentation are among few reasons, for Indian students choosing this
          country for higher education. Moreover the food habits, culture and
          lifestyle is matched to a great deal with that of India. Unlike other
          countries, you do not require any Visa to study in this country. Many
          of the colleges are approved by the Medical Council of India and even
          curriculum of MBBS course is similar to that followed in Indian
          counterparts. Being an English and Hindi speaking region, Indian
          students find it easy to communicate with the people of this country.
        </p>

        <h4>Fees Structures</h4>
        <p>
          Medical colleges in Nepal are known to have affordable fee structure.
          Students need to pay these fees once at the onset of the course. For
          four and half years they have to pay approximately $60,000. Apart from
          this, you need to pay the hostel charges and other expenses.
        </p>

        <h4>Admission Process</h4>
        <p>
          For enrolling to MBBS course, Indian students have to submit an
          eligibility certificate to these universities. This is dispensed by
          the Medical Council of India. International students have to go
          through a selection test and based on its results, they will be
          admitted to different universities. This test consists of a rigorous
          interview process and on clearing these; students are registered with
          respective universities. Depending on the aptitude and scores,
          students are selected. Students need to attain the age of 17 years
          before they seek admission to this course. Though different medical
          schools have different criteria, but mostly it is compulsory to
          complete secondary education with subjects like English, Physics,
          Chemistry and Biology. You need to score minimum of 50% in these
          subjects. Documents that need to be submitted are a copy of the school
          certificate examination and a copy of the mark sheet. Along with a
          copy of passport; recent photographs and a medical certificate need to
          be submitted to the respective medical school.
        </p>

        <h4>Hostel</h4>
        <p>
          Separate hostel accommodations are provided to boys and girls. These
          hostels are located within the campus. It is compulsory to stay in
          these hostels. Students have to pay the fee or hostel charges once for
          the four and half years. During internship, students can pay their
          hostel charges from the internship allowance that they get. Students
          are not allowed to change or shift hostel, once they are admitted to
          it. The hostel management is responsible for taking care of security
          of students, cleanliness, providing good canteen facilities and
          regular water and electricity immediately.
        </p>

        <h4>Transportation</h4>
        <p>
          Owing to the mountainous terrain, construction of the road is
          difficult and incurs huge expenses. Majority of the inhabitants of the
          country have to travel to reach the main roads. Aviation is the only
          resort for travelling within the country and overseas. Nepal has 47
          airports with paved runways.
        </p>

        <h4>Food</h4>
        <p>
          In the hostel and university canteens, students can avail Indian food
          also. Be it your choice of vegetarian food or non-vegetarian food, you
          can opt for both in these canteens.
        </p>

        <h4>Climate</h4>
        <p>
          There are five climatic zones in the country. The country enjoys five
          distinct seasons. Those are spring, summer, monsoon, autumn and
          winter. Terai region has tropical and subtropical climate.
        </p>
      </div>

      <div className="advantage_nepal">
        <h4>Advantages of Studying MBBS in Nepal</h4>
        <p>
          <span>MBBS in Nepal</span> has the following advantages:
        </p>

        <ul>
          <li>
            Climate: Pleasant weather, the weather in Nepal is similar to that
            of India. Nepal experiences five seasons: summer, monsoon, autumn,
            winter and spring.
          </li>
          <li>
            Close to India: The distance between Delhi and Kathmandu (Nepal) is
            816 km and it takes only
            <span>1 hour and 25 minutes of flying time</span> to reach there.
            There are about 7 flights daily from Delhi to Kathmandu including
            Air India, Royal Nepal Airlines, IndiGo, Spice Jet and Jet Airways.
            It is the ideal location to study MBBS in for students who don’t
            want to go far away from home.
          </li>
          <li>
            Language: English is commonly spoken in Nepal and the education is
            in English only.
          </li>
          <li>
            Curriculum: The curriculum or syllabus followed in Nepal is very
            similar to that of India and thus enables the students to get better
            prepared for MCI Screening Test.
          </li>
          <li>
            No visa/passport required: Nepal is one country where a passport or
            a visa is not required to enter the country. According to the
            Embassy of Nepal, a citizen of Indian can enter Nepal either with
            his/her passport or with a photo identity card issued by the
            government. You can also go to Nepal by road. This is a major reason
            why many students prefer to do their <span>MBBS from Nepal</span>.
          </li>
          <li>The quality of Medical Education is very high in Nepal.</li>
          <li>
            The syllabus followed in Nepal is similar to that prescribed by the
            Medical Council of India.
          </li>
          <li>
            MBBS degree, which the student would get after completing MBBS in
            Nepal is recognized by MCI.
          </li>
        </ul>
      </div>
      
      <Reply />
      <Address />
    </>
  );
};

export default Nepal;
