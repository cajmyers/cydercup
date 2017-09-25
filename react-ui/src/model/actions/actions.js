//
// actions.js


export const ISSUE_SNACKBAR_MESSAGE = 'ISSUE_SNACKBAR_MESSAGE';
export function issueSnackbarMessage(message) {
    return {
        type: ISSUE_SNACKBAR_MESSAGE,
        message: message
    }
}

export const SET_PAGE = 'SET_PAGE';
export function setPage(pageId) {
    return {
        type: SET_PAGE,
        pageId: pageId
    }
}

export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
function requestPlayers() {
    return {
        type: REQUEST_PLAYERS
    }
}

export const REQUEST_PLAYERS_CANCELLED = 'REQUEST_PLAYERS_CANCELLED';
function requestPlayersCancelled() {
    return {
        type: REQUEST_PLAYERS_CANCELLED
    }
}

export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';
function receivePlayers(json) {
    console.log("receivePlayers json: ", JSON.stringify(json));
    return {
        type: RECEIVE_PLAYERS,
        players: json.results,
        receivedAt: Date.now()
    }
}

export function setMatchPlayer(match, team, player1id, player2id) {
    var url = "/api/v1/matchplayers";
    console.log(url);
    var opts = {
        team: team,
        match: match,
        player1id: player1id,
        player2id: player2id
    };
    return (dispatch) => {
        dispatch(requestPlayers());
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts)
        })
            .then(response => response.json())
            .then(json => {
                console.log('Complete:', json);
                dispatch(receiveMatchList(json))
            })
            .catch(function (error) {
                console.error("fetchScores error: ", error);
                dispatch(issueSnackbarMessage("fetchScores: " + error));
                dispatch(requestPlayersCancelled());
            });
    }
}

export const RECEIVE_MATCH_LIST = "RECEIVE_MATCH_LIST";
export function receiveMatchList(json) {
    return {
        type: RECEIVE_MATCH_LIST,
        matchList: json.results,
        receivedAt: Date.now()
    }
}

export function fetchMatchList() {
    var url = "/api/v1/matchlist";
    console.log(url);
    return function (dispatch) {
        dispatch(requestPlayers());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveMatchList(json)))
            .catch(function (error) {
                console.error("fetchScores error: ", error);
                dispatch(issueSnackbarMessage("fetchScores: " + error));
                dispatch(requestPlayersCancelled());
            });
    }
}

export const RECEIVE_SINGLES_ORDER = "RECEIVE_SINGLES_ORDER";
export function receiveSinglesOrder(json) {
    return {
        type: RECEIVE_SINGLES_ORDER,
        singlesOrder: json.results,
        receivedAt: Date.now()
    }
}

export function fetchSinglesOrder() {
    var url = "/api/v1/singlesorder";
    console.log(url);
    return function (dispatch) {
        dispatch(requestPlayers());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveSinglesOrder(json)))
            .catch(function (error) {
                console.error("fetchScores error: ", error);
                dispatch(issueSnackbarMessage("fetchScores: " + error));
                dispatch(requestPlayersCancelled());
            });
    }
}

export function setSinglesOrder(team, playerid, order) {
    var url = "/api/v1/singlesorder";
    console.log(url);
    var opts = {
        team: team,
        playerorder: order,
        playerid: playerid
    };
    return (dispatch) => {
        dispatch(requestPlayers());
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts)
        })
            .then(response => response.json())
            .then(json => {
                console.log('Complete:', json);
                dispatch(receiveSinglesOrder(json))
            })
            .catch(function (error) {
                console.error("fetchScores error: ", error);
                dispatch(issueSnackbarMessage("fetchScores: " + error));
                dispatch(requestPlayersCancelled());
            });
    }
}

function fetchPlayers() {
    var url = "/api/v1/players";
    console.log(url);
    return function (dispatch) {
        dispatch(requestPlayers());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePlayers(json)))
            .catch(function (error) {
                console.error("fetchScores error: ", error);
                dispatch(issueSnackbarMessage("fetchScores: " + error));
                dispatch(requestPlayersCancelled());
            });
    }
}

function shouldFetchPlayers(state) {
    const players = state.actionReducer['players'];

    if (!players) {
        return true
    } else if (players.length <= 0) {
        return true
    } else if (state.actionReducer.isFetchingPlayers) {
        return false
    } else {
        return true
    }
}

export function fetchPlayersIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchPlayers(getState())) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchPlayers())
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}

export const REQUEST_SCORES = 'REQUEST_SCORES';
function requestScores() {
    return {
        type: REQUEST_SCORES
    }
}

export const REQUEST_SCORES_CANCELLED = 'REQUEST_SCORES_CANCELLED';
function requestScoresCancelled() {
    return {
        type: REQUEST_SCORES_CANCELLED
    }
}

export const RECEIVE_SCORES = 'RECEIVE_SCORES';
function receiveScores(json) {
    console.log("receiveScores json: ", JSON.stringify(json));
    return {
        type: RECEIVE_SCORES,
        scores: json.results,
        receivedAt: Date.now()
    }
}

export function fetchScores() {
    var url = "/api/v1/scores";
    console.log(url);
    return function (dispatch) {
        dispatch(requestScores());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveScores(json)))
            .catch(function (error) {
                console.error("fetchScores error: ", error);
                dispatch(issueSnackbarMessage("fetchScores: " + error));
                dispatch(requestScoresCancelled());
            });
    }
}

export function sendScore(matchType, match, hole, winner) {
    var url = "/api/v1/score";
    console.log(url);
    var opts = {
        matchType: matchType,
        match: match,
        hole: hole,
        winner: winner
    };
    return (dispatch) => {
        dispatch(requestScores());
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts)
        })
            .then(response => response.json())
            .then(json => {
                console.log('Complete:', json);
                dispatch(receiveScores(json))
            })
            .catch(function (error) {
                console.error("fetchScores error: ", error);
                dispatch(issueSnackbarMessage("fetchScores: " + error));
                dispatch(requestScoresCancelled());
            });
    }
}

export function setPlayerName(id, name, surname) {
    var url = "/api/v1/player";
    console.log(url);
    var opts = {
        id: id,
        name: name,
        surname: surname
    };
    return (dispatch) => {
        dispatch(requestPlayers());
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts)
        })
            .then(response => response.json())
            .then(json => {
                console.log('Complete:', json);
                dispatch(receivePlayers(json))
            })
            .catch(function (error) {
                console.error("fetchScores error: ", error);
                dispatch(issueSnackbarMessage("fetchScores: " + error));
                dispatch(requestPlayersCancelled());
            });
    }
}