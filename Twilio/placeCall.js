const keys = require('../env')

const TWILIO_SID = keys.TWILIO_SID
const TWILIO_TOKEN = keys.TWILIO_TOKEN

const client = require('twilio')(TWILIO_SID, TWILIO_TOKEN)

const url = keys.TWILIO_CALL_URI

const placeCall = () =>
{
    client.calls.create({
        from: keys.CALLER_NUMBER,
        to: keys.RECEIVER_NUMBER,
        url,
        method: 'GET'
    })
}

module.exports = placeCall