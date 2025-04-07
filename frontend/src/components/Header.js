import React, { useState } from 'react'
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

    const dispatch = useDispatch();
    const User = useSelector(state => state?.user.user?.data);

    const handleLogout = async () => {
        try {
         const fetchApi = await fetch(GoshenApi.logOut.url, {
            method: GoshenApi.logOut.method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

         if (!fetchApi.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await fetchApi.json();

        if (data.success) {
            toast.success(data.message);
            dispatch(setUserDetails(null));
        } else if (data.error) {
            toast.error(data.message);
        }
    } catch (error) {
        console.error('Logout failed:', error);
        toast.error('Failed to log out. Please try again.');
    }
   }

  return (
   <header className='h-full w-full'>
    <div className='coverPhoto text-amber-100 shadow-md font-serif font-bold h-24'>   
    <div className='p-4 flex items-center mx-auto justify-between '>
    <div>
        <div className='p-2 '>
           <div className='flex pb-4'>
            <img src={LogoIcon} alt='CGCA' width={60} height={60} className='rounded-full' />
            </div>
        </div>
    </div>

    <nav>
        <div className='items-center gap-6 flex'>
        <div className='relative justify-center hidden md:flex'>
                    <Link to={"/"} className='mx-2'>Home</Link>
                    <Link to={"/services"} className='mx-2'>Our Services</Link>
                    <Link to={"/messages"} className='mx-2'>Messages</Link>
                    <Link to={"/contact"} className='mx-2'>Contact Us</Link>
                    <div>
                        {
                            User?.role === ROLES.ADMIN && ( <Link to={'/user'}>Dashboard</Link>) 

                        }
                    </div>
                    <div>
                        {
                            User?._id ? (
                                <button className='mx-2 bg-blue-600 px-2 py-1 rounded-full hover:bg-blue-700' onClick={handleLogout}>LogOut</button>
                            ) : (
                                <button className='mx-2 bg-blue-600 px-2 py-1 rounded-full hover:bg-blue-700' ><Link to={"/login"} >Login</Link></button>
                            )
                        }
                    </div>
                    
                </div>
                <div>
                    <button className='flex md:hidden focus:outline-none relative mx-6 mb-4' onClick={() => setDisplayMenuIcon(!displayMenuIcon)}>
                        {displayMenuIcon ? <FiX size={24} /> : <FiMenu size={24}/>}
                    </button> 
                {
                    displayMenuIcon && (
                        <div className='md:hidden flex flex-col mt-3 pt-2 px-4 space-y-3 pb-2 rounded-md justify-between opacity-95 coverPhoto bg-gray-800 z-50 text-black absolute' onClick={()=> setDisplayMenuIcon(false)}>
                            <Link to={"/"} className='mr-7 text-teal-300'>Home</Link>
                            <Link to={"/services"} className='mr-9 text-teal-300'>Our Services</Link>
                            <Link to={"/messages"} className='mr-7 text-teal-300'>Messages</Link>
                            <Link to={"/contact"} className='mr-7 text-teal-300'>Contact Us</Link>
                            <Link to={"/services"} className='mr-7 text-teal-300'>About Us</Link>
                        </div>
                    )
                } 
                </div>
                
        </div>
    </nav>
    </div>
    </div>
   </header>
  )
}

export default Header