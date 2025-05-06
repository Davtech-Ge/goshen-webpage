import React from 'react'
import { Link } from 'react-router-dom';

const Location = () => {
  return (
    <div className='bg-black text-white py-4 px-4'>
        <div className='relative w-full h-2/5'>
            <img src='/images/location.png' alt='location' className='w-full h-full object-cover' />

            <div className='absolute top-1/2 '>
            <h1>LOCATIONS</h1>
            <p className='left-5'>We are <span>one church</span> with two branches in Kaduna</p>

            <div className='flex-col '>
                <h1><Link to={'/'} >Maigero </Link></h1>
                <h1><Link to={'/'} >Narayi </Link></h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Location