import React from "react";
import { Icon } from "@iconify/react";

const Address = () => {
  return (
    <>
      <div className="address"> 
        <div className="contact_us">  
          <h3>Contact Us</h3>
          <a href="tel:+918607927944">
            <p>
              <span>
                <Icon icon="ic:baseline-call" />
              </span>
              91 86 0792 7944
            </p>
          </a>

          <a href="tel:+919729999254">
            <p>
              <span>
                <Icon icon="ic:sharp-add-ic-call" />
              </span>
              91 97 2999 9254
            </p>
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marsoverseasjind@gmail.com">
            <p>
              <span>
                <Icon icon="ion:mail-unread" />
              </span>
              marsoverseasjind@gmail.com
            </p>
          </a>
        </div>
        <div className="office">
          <h3>Office</h3>
          <p>
            <span>
              <Icon icon="bxs:school" />
            </span>
            Mars Overseas
          </p>
          <p>
            <span>
              <Icon icon="carbon:location-current" />
            </span>
            SCO 112, Huda Market, Opp. DRDA, <br />
            <Icon icon="cil:location-pin" color="rgb(243, 243, 243)" /> Gohana
            Road Jind (Haryana)
          </p>
        </div>
        <div className="follow_us">
          <h3>Follow Us on</h3>
          <div className="socialbtn">
            <a href="https://www.facebook.com/MARSOVERSEASSTUDYABROAD">
              <Icon icon="typcn:social-facebook" className="social fb" />
            </a>
            <a>
              <Icon icon="ci:instagram" className="social insta" />
            </a>
            <a>
              <Icon icon="mdi:twitter" className="social twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright 2022 . All Rights Reserved</p>
      </div>
    </>
  );
};

export default Address;
