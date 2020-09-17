const keys = require('../env')

const TWILIO_SID = keys.TWILIO_SID
const TWILIO_TOKEN = keys.TWILIO_TOKEN

const client = require('twilio')(TWILIO_SID, TWILIO_TOKEN)

const url = keys.TWILIO_CALL_URI

const placeCall = () =>
{
    client.calls.create({
        from: '+12059003645',
        to: '+919674746480',
        url
    })
}
placeCall()

module.exports = placeCall