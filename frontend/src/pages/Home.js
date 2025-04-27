
import { FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md'
import ImageSlide from '../components/imageSlide';

//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../components/Variant'
import Boxes from './Boxes';


const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)] h-full overflow-x-scroll background'>
        <div className='bg-purple-900 max-h-screen flex items-center justify-center'>
            <div className='flex items-center justify-center w-screen min-h-screen'>
                 <ImageSlide />
            </div>
        </div>

        <section className='w-full mt-2 mx-auto'>
            <Boxes />
        </section>
        <div>
            <div>
            <div className='p-6 bg-blue-800 min-h-60 mx-11 opacity-90 mb-16 shadow-lg rounded-lg md:float-right md:mr-6 md:ml-16 md:w-9/12'>
                <h1 className='font-bold font-serif text-white text-2xl flex justify-center'>Our Visions</h1>
                <ul className=' text-amber-100 font-semibold'>
                    <li className='mb-3 text-l'>Winning Souls into God's Kingdom</li>
                    <li className='mb-3 text-l'>Helping Men & Women to Shine in the Light of God</li>
                    <li className='mb-3 text-l'>Holiness</li>
                    <li className='mb-3 text-l'>Making Heaven</li>
                    <li className='mb-3 text-l'>Standing For the Truth & Integrity</li>
                </ul>
            </div>
            </div>

            <div className='p-6 min-h-60 bg-blue-800 mx-11 opacity-90 shadow-lg rounded-lg md:float-left md:w-9/12 mb-16'>
               <div>
               <h1 className='font-bold text-white text-2xl flex justify-center'>Purpose of the Vision</h1>
                <ul className=' text-amber-100 font-semibold'>
                    <li className='mb-3 text-l'>Restoration of Destinies [1 samuel  30:8, joel 2:25] </li>
                    <li className='mb-3 text-l'>Setting the Captives Free [Isaiah 61:11]</li>
                    <li className='mb-3 text-l'>Fruitfulness [Genesis 1:28]</li>
                    <li className='mb-3 text-l'>Royal Priesthood [1 Peter 2:9]</li>
                </ul>
               </div>
            </div>

            <div className='flex flex-row justify-center py-3 gap-7 md:clear-both md:mt-10'>
                   <a href='https://youtube.com/@apostlegloryhelenikeleji3559?si=DDicRgBTUCcPFA5s' className='text-4xl text-red-600'> <FaYoutube /></a>
                   <a href='https://www.facebook.com/christ.goshen.7' className='text-4xl text-blue-600'> <FaFacebook /></a>
                   <a href='https://www.facebook.com/christ.goshen.7' className='text-4xl text-green-600'> <FaWhatsapp /></a>
                   <a href='https://www.gmail.com/christgoshencitybethel@gmail.com' className='text-4xl text-blue-600'> <MdEmail/></a>
                
            </div>
        </div>
    </main>
  )
}

export default Home