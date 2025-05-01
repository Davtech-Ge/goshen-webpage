import React, { useEffect, useState } from 'react'
import LogoIcon from '../logo/image.png'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDetails } from '../store/userSlice'
import ROLES from '../common/roles'
import GoshenApi from '../api'
import { toast } from 'react-toastify'


const Header = () => {
     const [displayMenuIcon, setDisplayMenuIcon] = useState(false)
     const [hideIcons, setHideIcons] = useState(false)

    // const dispatch = useDispatch();
    // const User = useSelector(state => state?.user.user?.data);

//     const handleLogout = async () => {
//         try {
//          const fetchApi = await fetch(GoshenApi.logOut.url, {
//             method: GoshenApi.logOut.method,
//             credentials: 'include',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//          if (!fetchApi.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await fetchApi.json();

//         if (data.success) {
//             toast.success(data.message);
//             dispatch(setUserDetails(null));
//         } else if (data.error) {
//             toast.error(data.message);
//         }
//     } catch (error) {
//         console.error('Logout failed:', error);
//         toast.error('Failed to log out. Please try again.');
//     }
//    }
useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY < 100){
            setHideIcons(true)
    } else {
        setHideIcons(false)
    }
}
        window.addEventListener('scroll', handleScroll)
}, []);
 

  return (
   <header className='fixed top-0 z-10 bg-transparent w-full'> 
    {hideIcons && (
       <>
        <div className='p-4 flex items-center justify-between'>
            <div className='p-4 flex justify-start'>
                <img src={LogoIcon} alt='CGCA' width={50} height={50} className='rounded-full shadow-lg' />
            </div>
            <div className='p-4 flex justify-between'>
                <button className='bg-black bg-opacity-85 text-white px-4 py-2 rounded-md' onClick={() => setDisplayMenuIcon(!displayMenuIcon)}>
                {displayMenuIcon ? <FiX size={16} /> : <FiMenu size={16} />}
                </button> 
            </div>
         </div>
       </>
    )}
     <div>
    <nav>
        <div className='flex justify-start items-start'>
                <div className='relative z-50'>
                    
                {
                    displayMenuIcon && (
                        <>
                        <div 
                            className='fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40 
                             ' onClick={()=> setDisplayMenuIcon(false)}
                        />    
                            <div className='absolute -mt-36 min-h-screen left-0 bg-gray-950 rounded-lg shadow-lg min-w-96 z-50'>
                                <ul className='p-6 mt-10 text-gray-800'>
                                <li className='px-4 py-2 mb-4 text-2xl text-gray-400 '><Link to={"/services"} className='border-gray-400 border shadow-lg  hover:bg-slate-400 rounded-lg p-2'>Our Services</Link></li>
                                <li className='px-4 py-2 mb-4 text-2xl text-gray-400'><Link to={"/messages"} className='border-gray-400 border shadow-lg  hover:bg-slate-400 rounded-lg p-2'>Messages</Link></li>
                                <li className='px-4 py-2 mb-4 text-2xl text-gray-400'><Link to={"/contact"} className='border-gray-400 border shadow-lg  hover:bg-slate-400 rounded-lg p-2'>Contact Us</Link></li>
                                <li className='px-4 py-2 mb-4 text-2xl text-gray-400'><a href='/boxes' to={"/boxes"} className='border-gray-400 border shadow-lg hover:bg-slate-400 rounded-lg p-2'>About Us</a></li>                              
                                </ul>
                            </div>
                        </>
                        
                    )
                } 
                </div>
                
        </div>
    </nav>  
    </div>

   </header>
  )
}

export default Header