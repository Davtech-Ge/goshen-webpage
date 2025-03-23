import React, { useEffect, useState } from 'react'
import AudioCard from '../components/AudioCard'
import UploadAudio from './UploadAudio'
import GoshenApi from '../api'
import { toast } from 'react-toastify'

const AllMessages = () => {
  const [allMessages, setAllMessages] = useState([])
  const [openUploadSCreen, setOpenUploadScreen] = useState(false)

  const fetchAllAudio = async () => {
    const fetchApi = await fetch(GoshenApi.allAudio.url, {
      method : GoshenApi.allAudio.method,
      'content-type': 'application/json'
    })

    const response = await fetchApi.json()

    console.log('audios', response)

    if(response.success){
      toast.success(response.message)
      setAllMessages(response?.data || [])
    }

    if(response.error){
      toast.error(response.message)
    }
  }
  useEffect(() => {
    fetchAllAudio()
  }, [])
  
  if (!allMessages.length) {
    return <div>Loading...</div>
  }
  return (
   <main>
    <div>
     <div className='flex px-4 py-4 '>
        <div className='flex flex-auto justify-between '>
            <h1 className='text-2xl font-semibold'>All Audio</h1>
          <div>
            <button className='text-xl bg-slate-500 px-4 py-2 rounded-full' onClick={() => setOpenUploadScreen(prev => !prev)}>upload Audio</button>
          </div>
        </div>
    </div>
    <div className='gap-3'>
       {
         allMessages.map((audio, index) => {
             return(
               <AudioCard key={index + allMessages} fetchData={fetchAllAudio} data={audio}/>
             )
              })
            }
            
     </div>
    {
      openUploadSCreen && (
        <UploadAudio onClose={() => setOpenUploadScreen(prev => !prev)} />
      )
    }
    </div>
   </main>
  )
}

export default AllMessages