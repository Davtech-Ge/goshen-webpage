import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoshenApi from '../api';
import { toast } from 'react-toastify'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState({
        username : '',
        password : ''
    })

    const handleInput = (e) => {
        const { name, value} = e.target

            setData((prev) => {
               return{
                ...prev,
                [name] : value
               }
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fetchApi = await fetch(GoshenApi.login.url, {
            method: GoshenApi.login.method,
            credentials : "include",
            headers : {
                "content-type" : 'application/json'
            },
            body : JSON.stringify(data)
        })

        const  response = await fetchApi.json()
        console.log('response', response)

        if (response.success) {
            toast.success(response.message)
            navigate('/user')
        }

        if (response.error) {
            toast.error(response.message)
        }
    }
  return (
    <section id='login'>
       <div className='container p-20 mx-auto w-full'>
         <div className='p-5 max-w-sm mx-auto w-full bg-gray-800 shadow-md rounded'>
            <div className=' h-15 w-10 ml-3 mb-6'>
                    <h1 className='text-2xl font-bold text-center text-white'>Login</h1>
            </div>
            <div>
                <div>
                     <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                         <label htmlFor='username' className='text-white font-semibold'>User :</label>
                         <input 
                            type='text'
                            name='username'
                            value={data.username}
                            onChange={handleInput}
                            required
                            placeholder='Ente your Username'
                            className='border px-4 py-2 rounded-lg focus:outline-none focus:ring-2'
                         /> 

                        <label htmlFor='password' className='text-white font-semibold'>Password :</label>
                        <div className=' relative'>
                            <div>
                                    <input 
                                    type={
                                        showPassword ?  "text" : "password" 
                                    }
                                    name='password'
                                    value={data.password}
                                    onChange={handleInput}
                                    required
                                    className='border px-4 py-2 w-full h-full rounded-lg outline-none focus:ring-2'
                                    placeholder='Enter your password'
                                    />
                            </div>
                        
                         <div className='absolute flex 
                         inset-y-0 right-3 items-center'>
                            <span onClick={()=> setShowPassword(!showPassword)} className='text-2xl cursor-pointer'>
                                {
                                    showPassword ?
                                    <FaEye /> : 
                                    <FaEyeSlash />
                                }
                            </span>
                            </div>

                        </div>
                        <button className='w-full mt-3 transition duration-200 bg-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-700'>Submit</button>
                    </form>

                    <div className='flex mt-4'>
                        <p className='text-white'>Don't have an account ?</p>
                        <Link to={"/signup"} className='hover:underline text-purple-700'>Sign Up</Link>
                    </div>
                </div>
            </div>
         </div>
       </div>
    </section>
  )
}

export default Login