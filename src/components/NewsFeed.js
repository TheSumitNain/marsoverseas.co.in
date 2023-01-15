    import React, { useState, useEffect } from "react";
import firebase from "../Firebase/firebase";
import Slider from "react-slick";

const ref2 = firebase.firestore().collection("post");

const NewsFeed = () => {
  const [data, setData] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div className="post_box">
        <div className="post_head">
          <h1> Upcoming Events </h1>
        </div>
        <Slider {...settings}>
          {data.map((dev) => {
            return (
              <div>
                <div
                  className="post_inner"
                  style={{ backgroundImage: `url(${dev.img})` }}
                ></div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default NewsFeed;
