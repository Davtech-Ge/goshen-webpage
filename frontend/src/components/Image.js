import React from 'react';
import video from '/images/firstImage.mp4'

const Image = () => {
    return (
        <section className='bg-black py-10 px-4'>
            <img src='/image/homepage.jpg' alt='homepage' className='w-full md:h-screen h-56 object-cover' />
           
        </section>
    )
}

export default Image

 {/* <video src={video} autoPlay loop muted style={{
                width: '100%',
                height: '50%',
                pointerEvents: 'none',
            }} 
            /> */}