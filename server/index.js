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
var matchlist = [];
var singlesorder = [];

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.

app.get('/api/v1/singlesorder', function (req, res) {
    res.set('Content-Type', 'application/json');
    if (MOCK) {
        if (singlesorder.length === 0) {
            singlesorder = require('./assets/singlesorder.json');
        }
        res.send(singlesorder);
    }
    else {
        sendSinglesOrder(res);
    }
});

function sendSinglesOrder(res) {
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM singlesorder ORDER BY team, playerorder', function (err, result) {
            done();
            if (err) {
                console.error(err);
                res.send("Error " + err);
            }
            else {
                var data = {}
                for (let i = 0; i < result.rows.length; i++) {
                    let row = result.rows[i];
                    data[row.team + "_" + row.playerorder] = row.playerid;
                }
                res.send({results: data});
            }
        });
    });
}

app.post('/api/v1/singlesorder', function (req, res) {
    console.log("matchplayers req.body", req.body);
    var team = req.body.team;
    var playerorder = parseInt(req.body.playerorder, 10);
    var playerid = parseInt(req.body.playerid, 10);
    if (!playerid) {
        playerid = null;
    }
    console.log("post singlesorder params: ", team, playerorder, playerid);
    if (MOCK) {
        singlesorder["results"][team + "_" + playerorder] = playerid;
        res.send(singlesorder);
    }
    else {
        var query = "UPDATE singlesorder SET playerid = " + playerid + " WHERE team = '" + team + "' and playerorder = " + playerorder;
        console.log("post singlesorder query: ", query);
        pg.connect(process.env.DATABASE_URL, function (err, client, done) {
            client.query(query, function (err, result) {
                done();
                if (err) {
                    console.error(err);
                    res.send("Error " + err);
                }
                else {
                    sendSinglesOrder(res);
                }
            });
        });
    }
});


app.get('/api/v1/matchlist', function (req, res) {
    res.set('Content-Type', 'application/json');
    if (MOCK) {
        if (matchlist.length === 0) {
            matchlist = require('./assets/matchlist.json');
        }
        res.send(matchlist);
    }
    else {
        sendMatchlist(res);
    }
});

function sendMatchlist(res) {
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM matchlist ORDER BY team, match', function (err, result) {
            done();
            if (err) {
                console.error(err);
                res.send("Error " + err);
            }
            else {
                var data = {}
                for (let i = 0; i < result.rows.length; i++) {
                    let row = result.rows[i];
                    data[row.team + "_" + row.match] = {"player1Id": row.player1id, "player2Id": row.player2id}
                }
                res.send({results: data});
            }
        });
    });
}

app.post('/api/v1/matchplayers', function (req, res) {
    console.log("matchplayers req.body", req.body);
    var team = req.body.team;
    var match = parseInt(req.body.match, 10);
    var player1id = parseInt(req.body.player1id, 10);
    if (!player1id) {
        player1id = null;
    }
    var player2id = parseInt(req.body.player2id, 10);
    if (!player2id) {
        player2id = null;
    }
    console.log("post matchplayers params: ", team, match, player1id, player2id);
    if (MOCK) {
        matchlist["results"][team + "_" + match].player1id = player1id;
        matchlist["results"][team + "_" + match].player2id = player2id;
        res.send(matchlist);
    }
    else {
        var query = "UPDATE matchlist SET player1id = " + player1id + ", player2id = " + player2id + " WHERE team = '" + team + "' and match = " + match;
        console.log("post matchplayers query: ", query);
        pg.connect(process.env.DATABASE_URL, function (err, client, done) {
            client.query(query, function (err, result) {
                done();
                if (err) {
                    console.error(err);
                    res.send("Error " + err);
                }
                else {
                    sendMatchlist(res);
                }
            });
        });
    }
});

app.get('/api/v1/players', function (req, res) {
    res.set('Content-Type', 'application/json');
    if (MOCK) {
        if (players.length === 0) {
            players = require('./assets/players.json');
        }
        res.send(players);
    }
    else {
        sendPlayers(res);
    }
});

function sendPlayers(res) {
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM players ORDER BY id', function (err, result) {
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
    console.log("post score params: ", matchType, match, hole, winner);
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

app.delete('/api/v1/scores', function (req, res) {
    if (MOCK) {
        scores = require('./assets/scores.json');
        res.send(scores);
    }
    else {
        var query = "UPDATE scores SET hole_1 = 0";
        for (let i = 2; i <= 18; i++) {
            query += ", hole_" + i + " = 0";
        }
        console.log("delete scores query: ", query);
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

app.post('/api/v1/player', function (req, res) {
    var id = parseInt(req.body.id, 10);
    var name = req.body.name;
    var surname = req.body.surname;
    console.log("post player params: ", id, name, surname);
    if (MOCK) {
        players["results"][id-1].name = name;
        players["results"][id-1].surname = surname;
        res.send(players);
    }
    else {
        var query = "UPDATE players SET name = '" + name + "', surname = '" + surname + "' WHERE id = " + id;
        console.log("post player query: ", query);
        pg.connect(process.env.DATABASE_URL, function (err, client, done) {
            client.query(query, function (err, result) {
                done();
                if (err) {
                    console.error(err);
                    res.send("Error " + err);
                }
                else {
                    sendPlayers(res);
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
