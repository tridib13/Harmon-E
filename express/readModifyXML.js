const path = require('path')
const fs = require('fs')
const parser = require('xml2json')

let objFormat

const pathName = path.join(__dirname, '../Twilio/callContent.xml')

fs.readFile(pathName, 'utf8', (err, data) =>
{
    if(err)
        console.log(err)

    objFormat = JSON.parse(parser.toJson(data, {reversible: true}))
})

const responder = requiredService =>
{
    switch(requiredService)
    {
        case 'ambulance':
            objFormat.Response.Say['$t'] = 'Ambulance needed'
            return parser.toXml(JSON.stringify(objFormat))

        case 'police':
            objFormat.Response.Say['$t'] = 'Police needed'
            return parser.toXml(JSON.stringify(objFormat))

        case 'fire_engine':
            objFormat.Response.Say['$t'] = 'Fire Engine needed'
            return parser.toXml(JSON.stringify(objFormat))

        default:
            return
    }
}

module.exports = responder