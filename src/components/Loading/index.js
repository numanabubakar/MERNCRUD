import React from 'react'
import { MutatingDots } from  'react-loader-spinner'


const Loading = () => {
  return (
    <div className='text-center'>
          <MutatingDots
      height="100"
      width="100"
      timeout={3000}
      ariaLabel='loading-indicator'
    />
    </div>
  )
}

export default Loading;