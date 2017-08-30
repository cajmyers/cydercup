//
// actions.js
import {MOCK} from '../../settings';

export const SET_PAGE = 'SET_PAGE'
export function setPage(pageId) {
    return {
        type: SET_PAGE,
        pageId: pageId
    }
}

export const REQUEST_PLAYERS = 'REQUEST_PLAYERS'
function requestPlayers() {
    return {
        type: REQUEST_PLAYERS
    }
}

export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'
function receivePlayers(json) {
    console.log("receivePlayers json: ", JSON.stringify(json));
    return {
        type: RECEIVE_PLAYERS,
        players: json.results,
        receivedAt: Date.now()
    }
}

function fetchPlayers() {
    if (MOCK) {
        var json = require('../../assets/players.json')
        return function (dispatch) {
            dispatch(receivePlayers(json));
        }
    }
    else {
        var url = "/api";
        console.log(url);
        return function (dispatch) {
            dispatch(requestPlayers())
            return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePlayers(json)))
        }
    }
}

function shouldFetchPlayers(state) {
    const players = state.actionReducer['players']

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