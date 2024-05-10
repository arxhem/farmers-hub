import React from 'react'
import './app.css'
import SideBar from './components/SideBar/SideBar'
import Body from './components/BodySection/Body'

const App = () => {
  return (
   <>
   <div className='container'>
   <SideBar />
   <Body/>

   </div>
   </>
  )
}

export default App