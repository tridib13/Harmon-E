const router = require('express').Router()

const responder = require('./readModifyXML')
const placeCall = require('../Twilio/placeCall')

let xmlResponse

router.get('/', (req, res) =>
{
    res.send('Hello')
})

router.post('/ambulance', (req, res) => 
{
    const { name, id, history, lat, long } = req.body.details

    xmlResponse = responder('ambulance', name, id, history, lat, long)
    // res.type('application/xml')
    // res.send(xmlResponse)
    res.redirect('/ambulance.xml')

    // placeCall()
})

router.get('/ambulance.xml', (req, res) =>
{
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