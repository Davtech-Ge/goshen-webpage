import React from 'react';
import video from '/images/firstImage.mp4'

const Image = () => {
    return (
        <section className='bg-black py-10 px-4'>
            <video src={video} autoPlay loop muted style={{
                width: '100%',
                height: '50%',
                pointerEvents: 'none',
            }} 
            />
        </section>
    )
}

export default Image