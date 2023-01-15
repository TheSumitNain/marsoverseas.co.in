import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import firebase from '../Firebase/firebase';

const ref = firebase.firestore().collection("reply");
const Reply = () => {

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  let Time = new Date().toLocaleString();

  function createDoc(newDataObj) {
       setError("");
      if(name && email && phone && comment) {
        ref.doc(newDataObj.id).set(newDataObj)
          .catch((err) => {
              setError(err);
          }) 
      setComment("");
      setName("");
      setEmail("");
      setPhone("");
      alert("Message sent successfully");
      } else {
        setError("Please enter all input properly");
      }
  }

  return (
    <>
        <div className="reply">
        <h2>Leave a Reply</h2> 
        <p>
          Your email address & mobile No. will not be published. Required fields are marked <span>*</span>
        </p>
      
        <label htmlFor="comment">Comment<span>*</span> </label> <br />
          <textarea name="comment" id="comment" minLength="20" maxLength="200"
          placeholder='You can write 20 - 200 letters...'
          value={comment} onChange={(e) => setComment(e.target.value)} 
          ></textarea> <br />

          <label for="name1">Name<span>*</span></label>
          <input type="text" name="name1" id='name1'
          value={name} onChange={(e) => setName(e.target.value)} /> 
          <br />
        
          <label for="email">Email:<span>*</span></label>
          <input type="email" id="email" name="email" 
          value={email} onChange={(e) => setEmail(e.target.value)} /> 
          <br />
          
          <label for="phone">Mobile No.<span>*</span></label>
          <input type="number" id="phone" name="phone" 
          value={phone} onChange={(e) => setPhone(e.target.value)} />
          <br /> 
           {error && <p className='error'> {error} </p> }
          <button type="submit" onClick={() => { createDoc({ name, comment, email, phone, id: uuidv4(), time: Time }) }}>
           Post Comment </button>
        
      </div> 
    </>
  )
}

export default Reply;