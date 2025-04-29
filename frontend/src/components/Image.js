import React from 'react';
import background from '../logo/edited2.png'

const Image = () => {
    return (
        <div className='flex w-full h-52 object-fill'>
            <img src={background} alt={background} className=' object-cover overflow-hidden w-full h-42 '/>
        </div>
    )
}

export default Image