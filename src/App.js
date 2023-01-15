import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Ielts from "./components/Ielts";
import Pte from "./components/Pte";
import Mbbs from "./components/Mbbs/Mbbs";

import Philippines from "./Clist/Philippines";
import Belarus from "./Clist/Belarus";
import Ukraine from "./Clist/Ukraine";
import China from "./Clist/China";
import Nepal from "./Clist/Nepal";
import Bangladesh from "./Clist/Bangladesh";
import Georgia from "./Clist/Georgia";
import Armenia from "./Clist/Armenia";
import CentralAmerica from "./Clist/CentralAmerica";
import SouthAmerica from "./Clist/SouthAmerica";
import Kyrgyzstan from "./Clist/Kyrgyzstan";
import Kazakhstan from "./Clist/Kazakhstan";
import Egypt from "./Clist/Egypt";
import Mauritius from "./Clist/Mauritius";
import Russia from "./Clist/Russia";
import Uzbekistan from "./Clist/Uzbekistan";

import Asia from "./Destination/Asia";
import Canada from "./Destination/Canada";
import Europe from "./Destination/Europe";
import Ireland from "./Destination/Ireland";
import Australia from "./Destination/Australia";
import Newzealand from "./Destination/Newzealand";
import Usa from "./Destination/Usa";
import Uk from "./Destination/Uk";

import Pagenotfound from "./components/Pagenotfound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ielts" element={<Ielts />} />
        <Route path="/pte" element={<Pte />} />
        <Route path="/mbbs-abroad" element={<Mbbs />} />

        <Route path="mbbs-abroad-philippines" element={<Philippines />} />
        <Route path="mbbs-abroad-belarus" element={<Belarus />} />
        <Route path="mbbs-abroad-ukraine" element={<Ukraine />} />
        <Route path="mbbs-abroad-china" element={<China />} />
        <Route path="mbbs-abroad-nepal" element={<Nepal />} />
        <Route path="mbbs-abroad-bangladesh" element={<Bangladesh />} />
        <Route path="mbbs-abroad-georgia" element={<Georgia />} />
        <Route path="mbbs-abroad-armenia" element={<Armenia />} />
        <Route
          path="mbbs-abroad-central-america"
          element={<CentralAmerica />}
        />
        <Route path="mbbs-abroad-south-america" element={<SouthAmerica />} />
        <Route path="mbbs-abroad-kyrgyzstan" element={<Kyrgyzstan />} />
        <Route path="mbbs-abroad-kazakhstan" element={<Kazakhstan />} />
        <Route path="mbbs-abroad-egypt" element={<Egypt />} />
        <Route path="mbbs-abroad-mauritius" element={<Mauritius />} />
        <Route path="mbbs-abroad-russia" element={<Russia />} />
        <Route path="mbbs-abroad-uzbekistan" element={<Uzbekistan />} />

        <Route path="study-destination/asia" element={<Asia />} />
        <Route path="study-destination/australia" element={<Australia />} />
        <Route path="study-destination/europe" element={<Europe />} />
        <Route path="study-destination/ireland" element={<Ireland />} />
        <Route path="study-destination/canada" element={<Canada />} />
        <Route path="study-destination/usa" element={<Usa />} />
        <Route path="study-destination/uk" element={<Uk />} />
        <Route path="study-destination/newzealand" element={<Newzealand />} />

        <Route path="/*" element={<Pagenotfound />} />
      </Routes>

      <ScrollToTop
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
        borderRadius: "50%" }}
        smooth
        color="teal"
        top="500"
      />
    </>
  );
};

export default App;
