import Boxes from './Boxes';
import Image from '../components/Image'
import Livestream from '../components/Livestream';
import { useState } from 'react';
import LatestFeatures from '../components/LatestFeatures';
import AboutUS from '../components/AboutUS';
import School from '../components/School';
import Location from '../components/Location';
import Testimony from '../components/Testimony';

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)] h-full overflow-x-scroll'>
        <div className='bg-gray-800 flex items-center justify-center'>
            <div className='flex items-center justify-center w-full h-full'>
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
            <School />
        </div>

        <div className='w-full mt-2 mx-auto'>
            <Location />
        </div>

        <div>
            <div className='w-full h-full mx-auto mt-2'> 
               <Testimony />
            </div>
        </div>
    </main>
  )
}

export default Home