const AudioModel = require("../model/Audio");

const newAudioController = async (req, res) => {
    try {
        
        const newAudio = new AudioModel(req.body)

        await newAudio.save()

        console.log("audio", newAudio)
        res.status(201).json({
            message: 'Audio created successfully',
            success: true,
            data: newAudio
        })
    } catch (err) {
        console.error(err);
        res.status(400).json({
            message: err.message || 'server err',
            success: false,
            error: true
        })
    }
}

module.exports = newAudioController