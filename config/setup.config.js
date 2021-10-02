require('dotenv').config();
const start = require('./server.config');

const baseUrl = process.env.BASE_URL;
const port = process.env.PORT;

if (baseUrl.includes('localhost') && baseUrl.includes(port))
    start(port);
