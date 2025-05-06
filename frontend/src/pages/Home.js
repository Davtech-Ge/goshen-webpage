import Boxes from './Boxes';
import Image from '../components/Image'
import Livestream from '../components/Livestream';
import { useState } from 'react';
import LatestFeatures from '../components/LatestFeatures';
import AboutUS from '../components/AboutUS';
import School from '../components/School';
import Location from '../components/Location';

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)] h-full overflow-x-scroll'>
        <div className='bg-gray-800 flex items-center justify-center'>
            <div className='flex items-center justify-center w-full h-42'>
                <Image />
            </div>
        </div>

        <div>
            <LatestFeatures />
            <AboutUS />
        </div>

        <section className='w-full mt-2 mx-auto'>
            <h1 className='text-white'>GOSHEN LINKS</h1>
            <Boxes />
        </section>

        <div className='w-full mt-2 mx-auto'>
        <h1 className="flex text-2xl text-gray-400">GSOM</h1>
            <School />
        </div>

        <div className='w-full mt-2 mx-auto'>
            <Location />
        </div>

        <div>
            <div className='text-white'> 
                <img src='/images/externalminis.jpg' alt='testimonies' className='w-full h-45 object-cover relative' />
                <h1>TESTIMONIES</h1>
                <h1>(FAITH STORIES)</h1>

                <p>We welcome testimonies from our online viewers connecting across the world. please share your testimonies with us via:</p>
                <p>christgoshencitybethel@gmail.com</p>
                <button>SEND TESTIMONY</button>
            </div>
        </div>
    </main>
  )
}

export default Home