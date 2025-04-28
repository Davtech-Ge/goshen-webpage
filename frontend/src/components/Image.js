import React from 'react';
import background from '../logo/edited2.png'

const Image = () => {
    return (
        <div className='flex w-full min-h-[80vh] object-fill'>
            <img src={background} alt={background} className=' object-cover overflow-hidden w-full h-[80vh] '/>
        </div>
    )
}

export default Image