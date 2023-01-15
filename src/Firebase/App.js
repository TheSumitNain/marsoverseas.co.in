import React, { useState, useEffect } from 'react';
import FBCreate from './FBCreate';
import firebase from './Firebase';

const ref = firebase.firestore().collection("developer");
const App = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    function getData() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setData(items)
            setLoader(false)
        })
    }

    function deleteDoc(docx) {
        ref.doc(docx.id).delete()
            .catch((err) => {
                console.error(err);
            })
    }

    // function getData2() {
    //     ref.get().then((item) => {
    //         const items = item.docs.map((doc) => doc.data());
    //         setData(items);
    //         setLoader(false);
    //     })
    // }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {loader === false && (data.map((dev) => {
                return <div key={dev.id}>
                    <h1>Name: {dev.name}</h1>
                    <p> Skill: {dev.skill} </p>
                    <button onClick={() => deleteDoc(dev)}>delete</button>
                    <button>edit</button>
                </div>
            }))}
            <FBCreate />
        </>
    )
}

export { ref };
export default App