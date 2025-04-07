import React, { useState } from 'react'
import { MdModeEdit } from 'react-icons/md'
import UpdatePost from '../pages/UpdateAudio'

const AudioCard = ({ data, fetchData }) => {
  const [updateAudio, setUpdateAudio] = useState(false)

return (
 <main className='flex w-full h-full'>
   <div className='flex mx-5 border rounded-lg bg-slate-200 w-fit'>
      <div className='px-4 py-2'>
        <div><MdModeEdit onClick={() =>setUpdateAudio(!updateAudio)}/></div>
         <p className='flex justify-center'>{data?.title} By {data?.author}</p>
          {data?.audioBody && data.audioBody.length > 0 && (
            <audio src={data.audioBody[0]} controls className='rounded-lg'/>
          )}

      </div>
  </div>

      <div>
        {updateAudio && <UpdatePost audio={data} fetchData={fetchData} onClose={() => setUpdateAudio(!updateAudio)} />}
      </div>
 </main>
)
}

export default AudioCard

