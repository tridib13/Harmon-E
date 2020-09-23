const keys = require('../env')

const TWILIO_SID = keys.TWILIO_SID
const TWILIO_TOKEN = keys.TWILIO_TOKEN

const client = require('twilio')(TWILIO_SID, TWILIO_TOKEN)

const sendSMS = (name, id, history, latitude, longitude) =>
{
    client.messages.create(
        {
            from: keys.CALLER_NUMBER,
            to: keys.RECEIVER_NUMBER,
            body: `\n\nPatient name: ${name} \n\n Patient ID: ${id} \n\n Patient medical history: ${history} \n\n Patient location (latitude, longitude): ${latitude}, ${longitude}. \n\n Ambulance required urgently!`
        }
    )
}

module.exports = sendSMS
