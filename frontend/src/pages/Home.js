import Boxes from './Boxes';
import Image from '../components/Image'
import Livestream from '../components/Livestream';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const handleClick = (buttonId) => {
        setSelectedButton(buttonId)
    };
  return (
    <main className='min-h-[calc(100vh-80px)] h-full overflow-x-scroll'>
        <div className='bg-gray-800 flex items-center justify-center'>
            <div className='flex items-center justify-center w-full h-[80vh]'>
                <Image />
            </div>
        </div>

        <div>
            <div className='relative flex clear-both w-full bg-slate-950'>
                <div className='bg-slate-950 text-white clear-both'>
                   {
                        selectedButton === null && ( <Livestream number={1}/>)
                   }
                    {
                        selectedButton === 1 && (<Livestream number={1}/>)
                    }
                    {
                        selectedButton === 2 && (<Livestream number={2}/>)
                    }
                    {
                        selectedButton === 3 && (<Livestream number={3}/>)
                    }
                </div>
            <div className='flex w-full grid-flow-row'>
                <button onClick={() => handleClick(1)} className='text-white'>Stream Live</button>
                <button onClick={() => handleClick(2)} className='text-white'>Watch our Live</button>
                <button onClick={() => handleClick(3)} className='text-white'>Give seed, tithe, offering</button>
            </div>
        </div>
        </div>

        <div className='text-white'>
           <Link to={'/about'} >
             <img src='../logo/edited2.png' alt='About us' className='relative w-full h-40 object-cover '/>
             <div>
             <h1>ABOUT US</h1>
             <p>Christ Goshen is a weekly Apostolic and prophetic platform where people come to experience the Word, Worship, Miracle and Love. The revelatory teachings help believers to experience true intimacy with the Holy Spirit and learn to be with Him, be like Him and Represent Him</p>

             <button>LEARN MORE</button>
             </div>
           </Link>
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