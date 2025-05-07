import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Location = () => {
  const [highlight, setHighlight] = useState('Maigero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100) {
        setHighlight('Maigero')
      } else {
        setHighlight('Narayi')
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <div className='bg-black text-white p-4'>
        <div className='relative w-full h-2/5'>
            <img src='/images/location.png' alt='location' className='w-full h-full object-cover' />

            <div className='absolute top-1/2 w-full'>
              <div className='flex items-center gap-6 text-lg'>
                <span>LOCATION</span>
                <p className=''>We are <span>one church</span> with two branches in Kaduna</p>

            <div className='flex-col '>
                <span 
                className={`transition-all duration-300 ${highlight === "Maigero" ? 'text-xl font-bold' : 'text-sm'}`}
                >
                  <Link to={'/'} >Maigero </Link>
                </span>

                <span className={`transition-all duration-300 ${highlight === "Narayi" ? 'text-xl font-bold' : 'text-sm'}`}>
                  <Link to={'/'} >Narayi </Link>
                </span>
            </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Location