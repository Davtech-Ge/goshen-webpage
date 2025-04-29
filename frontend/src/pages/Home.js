import Boxes from './Boxes';
import Image from '../components/Image'
import Livestream from '../components/Livestream';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LatestFeatures from '../components/LatestFeatures';
import AboutUS from '../components/AboutUS';

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)] h-full overflow-x-scroll'>
        <div className='bg-gray-800 flex items-center justify-center'>
            <div className='flex items-center justify-center w-full h-[80vh]'>
                <Image />
            </div>

            <div>
                <LatestFeatures />
                <AboutUS />
            </div>
        </div>

        <section className='w-full mt-2 mx-auto'>
            <h1 className='text-white'>GOSHEN LINKS</h1>
            <Boxes />
        </section>

        <div>
            <div className='text-white'>
                <h1>GSOM</h1>
                <h1>Goshen School of Ministry</h1>
                <p>The Goshen School of Ministry (GSOM) is a programme organised by Christ Goshen City with the vision of raising kingdom ambassadors to transform the society. We seek to raise, train and equip kingdom ambassadors who will represent Christ and His agenda in any/every sphere of influence they find themselves</p>

                <button>REGISTER</button>
            </div>
        </div>

        <div className='text-white'>
            <h1>LOCATIONS</h1>
            <p>We are <span>one church</span> with two branches in Kaduna</p>

            <div>
                <h1><Link to={'/'} >Maigero </Link></h1>
                <h1><Link to={'/'} >Narayi </Link></h1>
            </div>
        </div>

        <div>
            <div className='text-white'> 
                <img src='../logo/externalminis.jpg' alt='testimonies' className='w-full h-45 object-cover relative' />
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