import React from 'react'

const MessageCard = ({ data, fetchData }) => {

  console.log(data, 'audio card')
  return (
    <div className='flex mx-5 border rounded-lg bg-slate-200 w-fit'>
        <div className='px-4 py-2'>
           <p className='flex justify-center'>{data?.title} By {data?.author}</p>
            {data?.audioBody && data.audioBody.length > 0 && (
              <audio src={data.audioBody[0]} controls className='rounded-lg'/>
            )}
            <p 
            className='flex justify-center py-3 text-lg underline text-black' 
            onClick={() => downloadAudio(data)}>Download {data?.title} by {data?.author}</p>

        </div>
    </div>
  )
}
const downloadAudio = async (data) => {
  try {
    const response = await fetch(data?.audioBody[0]);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${data?.title} by ${data?.author}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading the audio file', error);
  }
  console.log('data', data?.audioBody);
}



export default MessageCard