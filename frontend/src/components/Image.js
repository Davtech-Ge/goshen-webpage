import React from 'react';
import background from '../logo/edited2.png'

const Image = () => {
    return (
        <section className='bg-black py-10 px-4'>
            <div className='max-w-5xl mx-auto'>
                <div className='mb-6 over-hidden rounded-lg shadow-lg'>
                <img src={background} alt={background} className=' w-full'/>
                </div>
            </div>
        </section>
    )
}

export default Image