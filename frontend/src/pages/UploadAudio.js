import { useState } from 'react'
import audioUpload from '../helper/audioCloudinary'
import GoshenApi from '../api'
import { toast } from 'react-toastify'
import { CgClose } from 'react-icons/cg'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const UploadAudio = ({ onClose, fetchAllAudio }) => {
  const [data, setData] = useState({
    title: '',
    author: '',
    audioBody: [],
  })

  const handleUpload = async(e) => {
    const file = e.target.files[0]
    if (!file) {
      toast.error('please select a valid audio')
      return
    }

   const uploadCloudinary = await audioUpload(file)

   if (!uploadCloudinary){
    toast.error('upload Failed please try again')
    return;
   }

    setData((prev) => {
      return{
        ...prev,
        audioBody :  [...prev.audioBody, uploadCloudinary.url]
      }
    })
    console.log('audiofile', uploadCloudinary.url)
    
  }
  const handleOnChange = (e) => {
    const {name, value} = e.target
       setData((prev) => {
        return {
          ...prev,
          [name] : value
        }
       })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const fetchApi = await fetch(GoshenApi.newAudio.url, {
      method : GoshenApi.newAudio.method,
      credentials : 'include',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })

    const response = await fetchApi.json()

    if (response.success) {
      toast.success(response.message)
      fetchAllAudio()
      onClose()
    }

    if (response.error) {
      toast.error(response.message)
    }

    console.log('new audio', response)
   }
  const handleDelete = (index) => {
    setData((prev) => {
      const updatedAudioBody = prev.audioBody.filter((_, i) => i !== index);
      return {
        ...prev,
        audioBody: updatedAudioBody,
      };
    });
  };
return (
        
    <div className='fixed top-0 bottom-0 right-0 left-0 opacity-95 w-full h-full flex items-center justify-center  bg-gray-400'>
       <div className='bg-slate-200 w-full max-w-2xl max-h-[80%] p-4 rounded-lg opacity-100 '>
        <div className='flex justify-between'>
        <h1 className='text-xl text-black font-bold'>Upload audio</h1>
        <div className='p-2 text-xl font-semibold' onClick={onClose}>
          <CgClose />
        </div>
        </div>

        <div>
          <form className='flex flex-col gap-3 p-4' onSubmit={handleSubmit}>
            <label htmlFor='title'>Title :</label>
            <input 
                type='text'
                id='title'
                value={data.title}
                onChange={handleOnChange}
                name='title'
                //required
                className='border px-4 py-1 rounded-lg focus:outline-none focus:ring-2'
            />

            <label htmlFor='author'>Author :</label>
            <input 
                type='text'
                id='author'
                value={data.author}
                onChange={handleOnChange}
                name='author'
                //required
                className='border px-4 py-1 rounded-lg focus:outline-none focus:ring-2'
            />

            <label htmlFor='audioBody'>Upload Audio</label>
            <div>
              <label htmlFor='audioUpload'>
                <div className='border w-full bg-white h-32 cursor-pointer p-2 flex justify-center items-center rounded-lg flex-col'>
                  <div className=' rounded-lg gap-2'>
                    <span className='text-4xl'>
                      <FaCloudUploadAlt />
                    </span>
                
                  </div>
                    <p>upload file</p>
                      <input
                      type='file'
                      value=""
                      onChange={handleUpload}
                      accept='audio/*'
                    />
                  
                </div>
              </label>

              <div>
                {
                  data?.audioBody[0] ? (
                    <div>
                      {
                        data.audioBody.map((el, index) => {
                          return (
                            <div key={index} className='flex '>
                              <audio 
                                src={el}
                                controls
                              />

                              <div>
                                <MdDelete  onClick={handleDelete}/>
                              </div>
                            </div>
                          )
                        }) 
                      }
                    </div>
                  ) : (
                    <p className='text-sm text-red-600'>*upload audio</p>
                  )
                }
              </div>
            </div>
                    <button className='px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600'>Upload</button>
          </form>
        </div>
       </div>
    </div>
)
}

export default UploadAudio