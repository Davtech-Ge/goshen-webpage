import { Link, Outlet, useNavigate } from 'react-router-dom';
import image from '../logo/signin.gif'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ROLES from '../common/roles';

const Dashboard = () => {
    const User = useSelector(state => state?.user.user?.data)
    const navigate = useNavigate()

    useEffect(()=>{
        if( User?.role !== ROLES.ADMIN ) {
            navigate('/')
        }
    }, [User])

    return (
            <div className=" min-h-[calc(100vh-120px)] md:flex hidden"> 
               <aside className="bg-gray-300 w-full min-h-full max-w-60">
                    <div className='flex justify-center pt-5'>
                        <img src={image} alt={image} width={80} height={80} className='rounded-full opacity-80'/>
                    </div>
                    <div className='p-4 gap-3'>
                        <p className='text-lg font-semibold'>{User?.username}</p>
                        <p className='text-lg font-semibold'>{User?.role}</p>
                    </div>
                    <div>
                        <Link to={"all_audio"}>All Audio</Link>
                    </div>
               </aside>
            
              <main className='h-full w-full '>
                <Outlet />
              </main>

            </div>
    )
}

export default Dashboard;