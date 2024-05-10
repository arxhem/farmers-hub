import React from 'react'
import './Body.css'
import Activity from './ActivityS/Activity.jsx'
import Top from './TopS/Top.jsx'
import Listing from './ListingS/Listing.jsx'
const Body = () => {
  return (
    <div className='mainContent'>
      <Top />
      <div className='bottom flex'>
      <Listing />
      <Activity/>
      </div>

    </div>
  )
}

export default Body