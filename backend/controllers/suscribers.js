const subscriberModel = require("../model/Suscriber")

const subscriberController = async (req, res) => {
    try {
        const { fullName, phoneNumber, email, suscription} = req.body

        const existingSubscriber = await subscriberModel.findById({email, phoneNumber })

        if (existingSubscriber){
            throw new Error("You are already our esteemed Subscriber, we will contact you soon!");
        }

        const newSubscriber = new subscriberModel(req.body)

        await newSubscriber.save()

        console.log('new subscriber', newSubscriber)
        res.status(201).json({
            message : 'Thank you for contacting us',
            data : newSubscriber,
            success : true,
            error : false
        })

    } catch (error) {
       res.status(400).json({
        message : 'server error ' || err.message,
        success : false,
        error : true
       }) 
    }
}

module.exports = subscriberController