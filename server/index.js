const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const MOCK = true;
var players = [];
var scores = [];

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api/v1/players', function (req, res) {
    res.set('Content-Type', 'application/json');
    if (MOCK) {
        if (players.length === 0) {
            players = require('./assets/players.json');
        }
        res.send(players);
    }
    else {
        console.log(process.env.DATABASE_URL);
        pg.connect(process.env.DATABASE_URL, function (err, client, done) {
            client.query('SELECT * FROM players', function (err, result) {
                done();
                if (err) {
                    console.error(err);
                    res.send("Error " + err);
                }
                else {
                    res.send({results: result.rows});
                }
            });
        });
    }
});

app.get('/api/v1/scores', function (req, res) {
    res.set('Content-Type', 'application/json');
    if (MOCK) {
        if (scores.length === 0) {
            scores = require('./assets/scores.json');
        }
        res.send(scores);
    }
    else {
        console.log(process.env.DATABASE_URL);
        pg.connect(process.env.DATABASE_URL, function (err, client, done) {
            client.query('SELECT * FROM players', function (err, result) {
                done();
                if (err) {
                    console.error(err);
                    res.send("Error " + err);
                }
                else {
                    res.send({results: result.rows});
                }
            });
        });
    }
});

app.post('/api/v1/score', function (req, res) {
    var matchType = req.body.matchType;
    var match = parseInt(req.body.match, 10);
    var hole = parseInt(req.body.hole, 10);
    var winner = parseInt(req.body.winner, 10);
    console.log("score params: ", matchType, match, hole, winner);
    if (MOCK) {
        scores["results"][matchType][match - 1][hole - 1] = winner;
        res.send(scores);
    }
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
