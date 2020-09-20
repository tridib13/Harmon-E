const keys = require('../env')

const TWILIO_SID = keys.TWILIO_SID
const TWILIO_TOKEN = keys.TWILIO_TOKEN

const client = require('twilio')(TWILIO_SID, TWILIO_TOKEN)

const sendSMS = (name, id, history, latitude, longitude) =>
{
    client.messages.create(
        {
            from: '+12059003645',
            to: '+919674746480',
            body: `Patient name: ${name} \n\n Patient ID: ${id} \n\n Patient medical history: ${history} \n\n Patient location (lat, long): ${latitude, longitude}. \n\n Ambulance required urgently!`
        }
    )
}

module.exports = sendSMS
