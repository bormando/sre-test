const express = require('express');
const responses = require('./responses.json');
const bodyParser = require('body-parser');

function start(port) {
    const app = express();
    let server;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/country_codes', async function(req, res) {
        await res.status(200).send(responses.countries);
    });

    app.get('/country/:code', async function(req, res) {
        const code = req.params.code;
        if (!responses.countries.includes(code))
            await res.status(404).send({
                "message": `Country code ${code} not found!`
            });
        else {
            const response = responses.cases;
            await response.map(entry => { entry["Country_code"] = code });
            await res.status(200).send(response);
        }
    });

    before(async function() {
        server = await app.listen(port);
        console.log(`Mock server is running on port ${port}`);
    });

    after(function() {
        server.close();
    });
}

module.exports = start;