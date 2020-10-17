const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const { python } = require('compile-run');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send(JSON.stringify({output: "hoge"}));
});

app.post('/', (request, response) => {
    const code = decodeURIComponent(request.body.code);
    const resultPromise = python.runSource(code);
    resultPromise
        .then(result => {
            const tmp = result.stderr == ""?result.stdout:result.stderr;
            response.send(JSON.stringify({output: encodeURIComponent(tmp)}));
        })
        .catch(err => {
            response.send(JSON.stringify({output: err}));
        });
});

// const server = app.listen(3000, ()=>console.log("Server is running!\nprease access http://localhost:3000"));

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});