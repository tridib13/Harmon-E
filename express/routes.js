const router = require('express').Router()

const responder = require('./readModifyXML')

router.get('/', (req, res) =>
{
    res.send('Hello')
})

router.get('/ambulance.xml', (req, res) => 
{
    const xmlResponse = responder('ambulance')
    res.type('application/xml')
    res.send(xmlResponse)
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