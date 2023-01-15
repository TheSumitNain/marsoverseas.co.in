import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import firebase from './firebase';

const ref = firebase.firestore().collection("developer");
const FBCreate = () => {
    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");

    function createDoc(newDataObj) {
        ref.doc(newDataObj.id).set(newDataObj)
            .catch((err) => {
                console.error(err);
            }) 
        setName("");
        setSkill("");
    }

    return (
        <>
            <div>
                <br /> <br /> <br />
                <input type="text" id='name1' placeholder='name'
                 value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />

                <input type="text" id='skill1' placeholder='skill'
                 value={skill} onChange={(e) => setSkill(e.target.value)} />  <br /> <br />

                <button onClick={() => { createDoc({ name, skill, id: uuidv4() }) }}>
                click to create new doc
                </button>
            </div>
        </>
    )
}

export default FBCreate