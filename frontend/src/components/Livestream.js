import React from 'react'

const Livestream = ({number}) => {
  return (
    <div className='flex bg-gray-900 justify-center items-center'>
        <a href='https://www.facebook.com/christ.goshen.7'>
        <img src="../logo/1745803848598.jpg" alt='Livestream' className='relative flex w-96 h-52 object-cover' />
        <h1 className='text-white'>Watch Now {number}</h1>
        </a>
    </div>
  )
}

export default Livestream