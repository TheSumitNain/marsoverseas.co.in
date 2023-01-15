import React from "react";

const Location = () => {
  return (
    <>
      {/* its css is in address.scss file */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.986046805829!2d76.32663647472084!3d29.31208495289914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39120452b28dacb7%3A0x3368f55abcae23e3!2sMars%20Overseas!5e0!3m2!1sen!2sin!4v1668693436344!5m2!1sen!2sin"
          className="google_map"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Location;
