const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const MOCK = false;
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

function sendScores(res) {
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM scores ORDER BY id ASC', function (err, result) {
            done();
            if (err) {
                console.error(err);
                res.send("Error " + err);
            }
            else {
                var data = {"fourballs": [], "singles": []}
                for (let i = 0; i < result.rows.length; i++) {
                    row = result.rows[i];
                    let dataRow = [];
                    for (let n = 1; n <= 18; n++) {
                        dataRow.push(row["hole_"+n]);
                    }
                    if (i < 6) {
                        data.fourballs.push(dataRow);
                    }
                    else {
                        data.singles.push(dataRow);
                    }
                }
                res.send({results: data});
            }
        });
    });    
}

app.get('/api/v1/scores', function (req, res) {
    res.set('Content-Type', 'application/json');
    if (MOCK) {
        if (scores.length === 0) {
            scores = require('./assets/scores.json');
        }
        res.send(scores);
    }
    else {
        sendScores(res);
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
    else {
        var id = match;
        if (matchType === "singles") {
            id += 6;
        }
        var query = "UPDATE scores SET hole_" + hole + " = " + winner + " WHERE id = " + id;
        console.log("post score query: ", query);
        pg.connect(process.env.DATABASE_URL, function (err, client, done) {
            client.query(query, function (err, result) {
                done();
                if (err) {
                    console.error(err);
                    res.send("Error " + err);
                }
                else {
                    sendScores(res);
                }
            });
        });
    }
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
