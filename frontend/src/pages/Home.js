
import { FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md'


const Home = () => {
  return (
    <main className='bg-teal-100 min-h-[calc(100vh-80px)] h-full overflow-x-scroll'>
        <div>
            <div className='p-4 text-2xl'>
                <h1 className='font-semibold text-xl'>Welcome to Christ Goshen City Assembly</h1>
                <p className='text-lg'>The place of encounter and transformation, where destinies are liberated.</p><br />
            </div>

            <div>
            <div className='p-6 bg-blue-800 mx-11 opacity-90 mb-16 shadow-lg rounded-lg relative md:float-right md:mr-6 md:ml-16 md:w-9/12'>
                <h1 className='font-bold font-serif text-white text-2xl flex justify-center'>Our Visions</h1>
                <ul className=' text-amber-100 font-semibold'>
                    <li>Winning Souls into God's Kingdom</li>
                    <li>Helping Men & Women to Shine in the Light of God</li>
                    <li>Holiness</li>
                    <li>Making Heaven</li>
                    <li>Standing For the Truth & Integrity</li>
                </ul>
            </div>
            </div>

            <div className='p-6  bg-blue-800 mx-11 opacity-90 shadow-lg rounded-lg md:float-left md:w-9/12'>
               <div>
               <h1 className='font-bold text-white text-2xl flex justify-center'>Purpose of the Vision</h1>
                <ul className=' text-amber-100 font-semibold'>
                    <li>Restoration of Destinies [1 samuel  30:8, joel 2:25] </li>
                    <li>Setting the Captives Free [Isaiah 61:11]</li>
                    <li>Fruitfulness [Genesis 1:28]</li>
                    <li>Royal Priesthood [1 Peter 2:9]</li>
                </ul>
               </div>
            </div>

            <div className='flex flex-row mt-10 justify-center py-3 gap-7 md:clear-both md:mt-10'>
                   <a href='https://youtube.com' className='text-4xl text-red-600'> <FaYoutube /></a>
                   <a href='https://youtube.com' className='text-4xl text-blue-600'> <FaFacebook /></a>
                   <a href='https://youtube.com' className='text-4xl text-green-600'> <FaWhatsapp /></a>
                   <a href='https://youtube.com' className='text-4xl text-blue-600'> <MdEmail/></a>
                
            </div>
        </div>
    </main>
  )
}

export default Home