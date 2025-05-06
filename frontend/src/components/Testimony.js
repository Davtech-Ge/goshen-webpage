import React from 'react'

const Testimony = () => {
  return (
    <div className='w-full h-4/5 bg-black p-4'>
        <div className='relative '>
        <img src='/images/externalminis.jpg' alt='testimonies' className='w-full h-45 object-cover relative' />
               <div className='absolute top-0 left-0 p-4'>
               <h1>TESTIMONIES</h1>
               <h1>(FAITH STORIES)</h1>
               </div>

               <div className='absolute bottom-0 right-0 p-4'>
               <p>We welcome testimonies from our online viewers connecting across the world. please share your testimonies with us via:</p>
                <p>christgoshencitybethel@gmail.com</p>
                <button className='border-yellow-400 rounded-full text-yellow-400 hover:text-yellow-500'>SEND TESTIMONY</button>
               </div>
        </div>
    </div>
  )
}

export default Testimony