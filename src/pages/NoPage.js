import React from 'react'
import {TbError404} from 'react-icons/tb'
import {IoIosArrowRoundBack} from 'react-icons/io'
import {Link} from 'react-router-dom'
const NoPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5 pt-5 '>
 <TbError404  className='display-1 '/> 
 <h1> Page No Found   </h1>
 <p className='fs-4 mt-5'><Link to="/members"> <IoIosArrowRoundBack /> Go to Members Page</Link>.</p>
    </div>
  )
}

export default NoPage