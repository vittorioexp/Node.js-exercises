const express = require('express');
const app = express();
const port = 8080;

app.get(
    '/temperature/:location_code',
    function(req, res) {
        res.send( "The temperature is 18°C")
    }
);

const server = app.listen(
    port,
    function () {
        console.log('Listening on URL http://localhost:' + port);
    }
);