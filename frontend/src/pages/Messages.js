import React, { useEffect, useState } from 'react'
import MessageCard from '../components/Message'
import GoshenApi from '../api'
import { toast } from 'react-toastify'

const Messages = () => {
  const [allMessages, setAllMessages] = useState([])

  const fetchAllAudio = async () => {
    const fetchApi = await fetch(GoshenApi.allAudio.url, {
      method : GoshenApi.allAudio.method,
      'content-type': 'application/json'
    })

    const response = await fetchApi.json()

    if(response.success){
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
    return <div className='flex justify-center items-center min-h-screen'>
      <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'>

      </div>
    </div>
  }
  return (
   <main>
    <div>
     <div className='flex px-4 py-4 '>
        <div className='flex flex-auto justify-between '>
            <h1 className='text-2xl font-semibold'>All Audio</h1>
        </div>
    </div>
    <div >
       {
         allMessages.map((audio, index) => {
             return(
               <MessageCard key={index + allMessages} fetchData={fetchAllAudio} data={audio}/>
             )
              })
            }        
     </div>
    </div>
   </main>
  )
}

export default Messages