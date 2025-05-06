import React from 'react'

const Testimony = () => {
  return (
    <div className='w-full h-4/5 bg-black p-4'>
        <div className='relative '>
        <img src='/images/externalminis.jpg' alt='testimonies' className='w-full h-45 object-cover relative' />
               
              

               <div className='absolute bottom-0 right-0 p-4'>
               <h1 className='text-sm text-gray-400'>TESTIMONIES</h1>
               <h1 className='text-sm text-gray-400'>(FAITH STORIES)</h1>
               <p className='text-xs text-gray-400'>We welcome testimonies from our online viewers connecting across the world. please share your testimonies with us via:</p>
                <p className='text-xs text-blue-800 underline'>christgoshencitybethel@gmail.com</p>
                <button className='border border-yellow-400 rounded-full text-sm p-2 text-yellow-400 hover:text-yellow-500'>SEND TESTIMONY</button>
               </div>
        </div>
    </div>
  )
}

export default Testimony