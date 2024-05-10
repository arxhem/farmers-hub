import React from 'react'
import './Listing.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import rice from "../../../assets/rice.jpg"
import tractor from "../../../assets/tractor.jpg"
import policy from "../../../assets/policy.jpg"
import pest from "../../../assets/pest.jpg"
import scientist from "../../../assets/scientist.jpg"
const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Listing</h1>
        <button className='btn flex'>
          See <BsArrowRightShort className='icon'/>
        </button>
      </div>
      <div className="secContainer flex">
        <div className="singleItem">
        <img src={rice}  className='rice' alt='imk'/>
          <h3>Rice</h3>
          <AiFillHeart className='icon'/></div>
      

    
        <div className="singleItem">
        <img src={policy}  className='img' alt='imk'/>
          <h3>Policies</h3>
          <AiFillHeart className='icon'/></div>
      
        <div className="singleItem">
        <img src={pest}  className='img' alt='imk'/>
          <h3>Pest</h3>
          <AiFillHeart className='icon'/></div>


    
        <div className="singleItem">
        <img src={tractor}  className='img' alt='imk'/>
          <h3>Equipments</h3>
          <AiFillHeart className='icon'/></div>
      </div>

      <div className="seller flex">
        <div className="topseller ">
          <div className="heading flex">
          <h3>Top sellers</h3>
          <button className='btn flex'>
          See All<BsArrowRightShort className='icon'/>
        </button>
          </div>


        </div>
      </div>
      <section>
      <div className='justify-center items-center'>
      <h1 className=''>Experts</h1>
      </div>
      <div className='flex flex-row'>
      <ul className='flex flex-row justify-between gap-8'>
        
      </ul>

      </div>



      </section>
    </div>

  )
}

export default Listing