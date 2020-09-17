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

module.exports = router