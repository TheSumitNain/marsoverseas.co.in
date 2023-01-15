import React, { useState, useEffect } from "react";
import firebase from "../Firebase/firebase";
import Slider from "react-slick";

const ref2 = firebase.firestore().collection("testimonials");

const Testimony = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(window.screen.width);

 const actualSize = () => {
    setState(window.innerWidth);
 }

  useEffect(() => {
    window.addEventListener("resize", actualSize);
  });
 
  let data2;
  if(state <= 700) {
      data2 = 1;
  } else if (state >= 700 && state <= 1000) {
    data2 = 2;
  } else {
    data2 = 3;
  }

  console.log(window.screen.width);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: data2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  function getData() {
    ref2.onSnapshot((queryShatshot) => {
      const items = [];
      queryShatshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <>
      <div className="box">
        <div className="testimony">
          <h2> TESTIMONIALS </h2>
          <p>How real people said about Mars Overseas</p>
        </div>
        <Slider {...settings}>
          {data.map((dev) => {
            return (
              <div>
                <div className="inner">
                  <div className="user">
                    <img src={dev.img} alt="pic" />
                    <div>
                      <p> {dev.message} </p>
                      <h3> {dev.name} </h3>
                      <h4>{dev.city}</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Testimony;
