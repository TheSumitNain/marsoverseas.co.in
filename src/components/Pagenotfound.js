import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Pagenotfound = () => {
    const navigate = useNavigate();

    const goback = () => {
         navigate(-1);
    }

  return (
    <>
       <div className='errorpage'>
       <h1>404</h1>
        <h2>oops! Page Not Found</h2>
        <p align="center">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
        <button onClick={goback}>back to previous page</button>
       <Link to="/"><button>go to home page</button></Link>
       </div>
    </>
  )
}

export default Pagenotfound