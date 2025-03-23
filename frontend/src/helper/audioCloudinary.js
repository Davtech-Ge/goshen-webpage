const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/video/upload` 

const audioUpload = async (video) => {
    const formData = new FormData()
    formData.append('file', video)
    formData.append('upload_preset', 'goshenAudio')
    formData.append('resource_type', 'video')

   try {
    const audioresponse = await fetch(url, {
        method : 'POST',
        body : formData
    })

   const data = await audioresponse.json()

   return data;

   } catch (err) {
    console.log("cloudinary upload error", err)
    return null;
   }
}

export default audioUpload