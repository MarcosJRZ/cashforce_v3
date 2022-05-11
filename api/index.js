const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index.routes.js')

const app = express();
const port = process.env.PORT || 8080;

routes(app);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app;