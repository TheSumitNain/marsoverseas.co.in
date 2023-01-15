import React from 'react'
import { Link } from 'react-router-dom'

const Countrylist = () => {
    const Arr = [
        {
            id: 0,
            country: "PHILIPPINES",
            link: "/mbbs-abroad-philippines"
        },
        {
            ID: 1,
            country: "CHINA",
            link: "/mbbs-abroad-china"
        },
        {
            id: 2,
            country: "NEPAL",
            link: "/mbbs-abroad-nepal"
        },
        {
            id: 3,
            country: "BANGLADESH",
            link: "/mbbs-abroad-bangladesh"
        },
        {
            id: 4,
            country: "KYRGYZSTAN",
            link: "/mbbs-abroad-kyrgyzstan"
        },
        {
            id: 5,
            country: "KAZAKHSTAN",
            link: "/mbbs-abroad-kazakhstan"
        },
        {
            id: 6,
            country: "UZBEKISTAN",
            link: "/mbbs-abroad-uzbekistan"
        },
        {
            id: 7,
            country: "UKRAINE",
            link: "/mbbs-abroad-ukraine"
        },
        {
            id: 8,
            country: "GEORGIA",
            link: "/mbbs-abroad-georgia"
        },
        {
            id: 9,
            country: "ARMENIA",
            link: "/mbbs-abroad-armenia"
        },
        {
            id: 10,
            country: "BELARUS",
            link: "/mbbs-abroad-belarus"
        },
        {
            id: 11,
            country: "CENTRAL AMERICA",
            link: "/mbbs-abroad-central-america"
        },
        {
            id: 12,
            country: "SOUTH AMERICA",
            link: "/mbbs-abroad-south-america"
        },
        {
            id: 13,
            country: "RUSSIA",
            link: "/mbbs-abroad-russia"
        },
        {
            id: 14,
            country: "MAURITIUS",
            link: "/mbbs-abroad-mauritius"
        },
        {
            id: 15,
            country: "EGYPT",
            link: "/mbbs-abroad-egypt"
        }







    ]
    
    return (
        <>
        <div className='country'>
        <div className='country_heading'>
            <h2>Read more about MBBS abroad Countries</h2>
        </div>
            <div className='country_list'>
                  {
                    Arr.map((elem) => { 
                        return (
                            <>
                                <ul>
                                    <li key={elem.id}> <Link className='mbbs_country' to={elem.link}>{elem.country}</Link> </li>
                                </ul>
                            </>
                        )
                    })
                  }
            </div>
        </div>
        </>
    )
}

export default Countrylist