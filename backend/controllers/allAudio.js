const AudioModel = require("../model/Audio")

const allAudioController = async (req, res) => {
    try {
      const AllAudio = await AudioModel.find().sort({ createdAt: -1 })  

      res.status(200).json({
        data: AllAudio,
        message: 'all Audio',
        success : true,
        error : false
      })
    } catch (err) {
        res.status(400).json({
            message: 'server err' || err.message,
            success: false,
            error: true
        })
    }
}

module.exports = allAudioController