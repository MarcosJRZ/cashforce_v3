const bodyParser = require('body-parser');
const cnpjs = require('./cnpjsRoute.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cnpjs)
    app.get('/', (req, res) => res.send('inicial'))
}