const router = require('express').Router()
const xml = require('xml')

const responder = require('./readModifyXML')

router.get('/ambulance', (req, res) => 
{
    const xmlResponse = responder('ambulance')
    res.type('application/xml')
    res.send(xmlResponse)
})

module.exports = router