import React from 'react'
import Ourservice from "./ourservice"
import MainIcon from './MainIcon'
import Service from './Service'
import NewsFeed from './NewsFeed'
import Location from './Location'
import Testimony from './Testimony'
import Reply from "./Reply"
import Address from "./Address"

const Home = () => {
  return (
    <div>
        <MainIcon/>
        <Ourservice />
        {/* <Service/> */}
        <NewsFeed />
        <Testimony />
        <div id='home_reply'>
        <Reply />
        </div>
        <Location />
        <Address/>
    </div>
  )
}

export default Home