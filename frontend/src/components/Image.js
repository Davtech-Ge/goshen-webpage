import React from 'react';

const Image = () => {
    return (
        <div className='bg-black py-10 px-4 w-full md:h-screen h-1/2'>
            <img src='/images/homepage.jpg' alt='homepage' className='w-full h-full object-cover' />
           
        </div>
    )
}

export default Image

 {/* <video src={video} autoPlay loop muted style={{
                width: '100%',
                height: '50%',
                pointerEvents: 'none',
            }} 
            /> */}