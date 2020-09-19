const router = require('express').Router()

const responder = require('./readModifyXML')
const placeCall = require('../Twilio/placeCall')

router.get('/', (req, res) =>
{
    res.send('Hello')
})

router.post('/ambulance.xml', (req, res) => 
{
    const { name, id, history, lat, long } = req.params

    const xmlResponse = responder('ambulance', name, id, history, lat, long)
    res.type('application/xml')
    res.send(xmlResponse)

    placeCall()
})

router.get('/police.xml', (req, res) => 
{
    const xmlResponse = responder('police')
    res.type('application/xml')
    res.send(xmlResponse)
})

router.get('/fire_engine.xml', (req, res) => 
{
    const xmlResponse = responder('fire_engine')
    res.type('application/xml')
    res.send(xmlResponse)
})

module.exports = router