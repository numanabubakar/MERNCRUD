import React from 'react'

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear()
  return (
    <>
  <p className='contactBtn mb-0 p-2 text-center'>
    &copy; {year} All Right Reversed. By <b>NUMAN ABUBAKAR</b>
  </p>
    </>
  )
}

export default Footer