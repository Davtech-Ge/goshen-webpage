import React, {  useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md'
import GoshenApi from '../api';
import { toast } from 'react-toastify';

const Contact = () => {
  const [data, setData] = useState({
    fullName : '',
    email : '',
    phoneNumber : '',
    subscriber : false
  })

  const handleChange = (e) => {
    const {id, value} = e.target
       setData((prev) => {
        return {
          ...prev,
          [id] : value
        }
       })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fetchApi = await fetch(GoshenApi.subscriber.url, {
      method : GoshenApi.subscriber.method,
      credentials: 'include',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    const response = await fetchApi.json()

    if (response.success){
      toast.success(response.message)
    }

  }

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_8f8uq2l',
       'template_v1ubk5d',
        form.current, 
        '1Il6ynyJgXkTYc1KT')
      .then((result) => {
        console.log(result.text);
        console.log('message sent')
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <main className='min-h-[calc(100vh-120px)] bg-teal-100 flex '>
       <aside className=' max-w-9 bg-teal-200 min-h-[calc(100vh-120px)]' >
        <div className='flex flex-col items-baseline mt-72 gap-7'>
          <a href='https://youtube.com' className='text-4xl text-red-600'> <FaYoutube /></a>
          <a href='https://youtube.com' className='text-4xl text-blue-600'> <FaFacebook /></a>
          <a href='https://youtube.com' className='text-4xl text-green-600'> <FaWhatsapp /></a>
          <a href='https://youtube.com' className='text-4xl text-blue-600'> <MdEmail/></a>
        </div>
      </aside>
      <div className='bg-gray-950 mx-auto md:w-2/6 h-full my-10 rounded-lg'>
      <form ref={form} onSubmit={sendEmail && handleSubmit} className='flex flex-col gap-3 text-amber-200 p-4'>
        <label>Full Name</label>
        <input type='text' name='user_name' id='fullName' onChange={handleChange} value={data.fullName}  className='text-black rounded-lg'/>
        <label>Email:</label>
        <input type='email' name='user_email' id='email' onChange={handleChange} value={data.email}  className='text-black rounded-lg'/>
        <label>Phone Number:</label>
        <input type='tel' name='user_name' value={data.phoneNumber} id='phoneNumber' className='text-black rounded-lg'/>
        <label>Message</label>
        <textarea name='message' className='text-black rounded-lg'/>

        <div className='flex gap-3'>
        <input type='checkbox' value={data.subscriber} id='subscriber' onChange={handleChange} name='subscriber' />
        <p>SUbscribe to our newsletter</p>
        </div>
        <input type='submit' value='send' className='border rounded-full mt-3 py-1 bg-gray-600 cursor-pointer hover:bg-gray-700'/>
      </form>
      </div>
    </main>
  )
}

export default Contact