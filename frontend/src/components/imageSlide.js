import React, { useEffect, useState } from 'react'

const image =[
    '/images/image.png',
    '/images/signin.gif',
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
]

const ImageSlide = () => {
   const [current, setCurrent] = useState(0);
   const [prev, setPrev] = useState(null)

   const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % image.length)
   }

   const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + image.length) % image.length)
   }

   useEffect(() => {
   const interval = setInterval(() => {
    setPrev(current)
    setCurrent((prev) => (prev + 1) % image.length)
}, 5000)
    return () => clearInterval(interval)
   }, [current])
  return (
    <div className='relative w-full min-h-screen mx-auto overflow-hidden rounded-b-lg shadow-lg shadow-gray-800'>
        {prev && 
        <img src={image[prev]} alt={image[prev]} 
        className=' absolute inset-0 w-full max-h-screen min-h-screen object-cover transition-opacity duration-1000 opacity-100 animate-fadeIn'
         />
        }
        <img src={image[current]} alt={image[current]} 
        className='absolute inset-0 w-full max-h-screen min-h-screen object-cover transition-opacity duration-700 opacity-0 animate-fadeIn'
         />

            <button onClick={prevSlide} 
                disabled={current === 0}
               className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full '>
                &lt;
            </button>
            <button onClick={nextSlide} 
               className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full'>
                &gt;
            </button>
    </div>
  )
}

export default ImageSlide