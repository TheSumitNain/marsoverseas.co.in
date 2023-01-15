import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import firebase from "../Firebase/firebase";
import { Icon } from "@iconify/react";

const ref = firebase.firestore().collection("users");
const Service = () => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const uuid = uuidv4();

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = state;
    if (name && phone && email && message) {
      console.log(uuid);
      const data = { ...state, id: uuid };

      console.log(state);
      ref
        .doc(uuid)
        .set(data)
        .catch((err) => {
          console.error(err);
        });
      setState({ name: "", phone: "", email: "", message: "" });
    } else {
      console.log("please fill the data");
      alert("Please fill all fields properly");
    }
  };

  return (
    <>
      <div className="query" id="enquiryForm">
        <div className="qform">
          <form>
            <div className="form_heading">
              <h2>Enquiry Form</h2>
            </div>
            <div>
              <div className="name_phone">
                <input
                  className="input1"
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  value={state.name}
                  onChange={InputEvent}
                />

                <input
                  className="input1"
                  type="phone"
                  name="phone"
                  placeholder="Phone Number*"
                  value={state.phone}
                  onChange={InputEvent}
                />
              </div>
              <div>
                <input
                  className="input2"
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={state.email}
                  onChange={InputEvent}
                />
              </div>
              <div>
                <textarea
                  className="textarea"
                  type="text"
                  name="message"
                  placeholder="Enquiry For*"
                  value={state.message}
                  onChange={InputEvent}
                />
              </div>
              <button className="submit_btn" onClick={submitData}>
                {" "}
                SUBMIT{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Service;
