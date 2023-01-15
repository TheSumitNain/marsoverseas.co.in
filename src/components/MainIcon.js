import React from 'react'
import three from "../images/3.jpg"
import five from "../images/2.jpg"
import aus from "../images/toronto.jpg"
import usa from "../images/usa2.jpg"
import Carousel from 'react-bootstrap/Carousel';

const MainIcon = () => {
    return (
        <>
            <div className='mainicon'>
                <div className='carousel'>
                    <Carousel slide={false} indicators={false} controls={false}>
                        <Carousel.Item>
                            <img className="carouselimg" src={usa} alt="1st" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselimg" src={five} alt="2nd" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselimg" src={aus} alt="3rd" />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className='study_main'>
                    <div className='study_text'>
                        <h2>Start your study <br />
                            abroad journey</h2>
                        <h3>
                            Mars Overseas helps students explore global education opportunities
                            and provide assistance at every step of the admission process.
                        </h3>
                        <div className='btndiv'>
                            <a href="#home_reply"> <button className='b1'> Contact Us </button> </a>
                            <a href="tel:+918607927944"> <button className='b2'> Call Now </button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainIcon