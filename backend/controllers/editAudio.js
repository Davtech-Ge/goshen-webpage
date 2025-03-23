const AudioModel = require('../model/Audio')

const deleteAudioController = async (req, res) => {
    try {

        const { data } = req.body

        console.log(req.body)

       const getItems = await AudioModel.findByIdAndDelete(data)

       const response = getItems.json()
       
       
       res.status(200).json({
        message : 'deleted successfully',
        success : true,
        error : false,
        data : response
       })
    } catch (error) {
       res.status(400).json({
        message: 'couldnt delete item',
        success : false,
        error: false
       }) 
    }
}

module.exports = deleteAudioController