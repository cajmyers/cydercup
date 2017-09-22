//
// actions.js

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

export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';
function receivePlayers(json) {
    console.log("receivePlayers json: ", JSON.stringify(json));
    return {
        type: RECEIVE_PLAYERS,
        players: json.results,
        receivedAt: Date.now()
    }
}

export const SET_MATCH_PLAYERS = "SET_MATCH_PLAYERS";
export function setMatchPlayer(matchNumber, team, player1Id, player2Id) {
    return {
        type: SET_MATCH_PLAYERS,
        matchNumber: matchNumber,
        team: team,
        player1Id: player1Id,
        player2Id: player2Id
    }
}

export const SET_SINGLES_ORDER = "SET_SINGLES_ORDER";
export function setSinglesOrder(team, playerId, order) {
    return {
        type: SET_SINGLES_ORDER,
        team: team,
        playerId: playerId,
        order: order,
    }
}

function fetchPlayers() {
    var url = "/api/v1/players";
    console.log(url);
    return function (dispatch) {
        dispatch(requestPlayers())
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePlayers(json)))
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
    }
}