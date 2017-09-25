import {
    ISSUE_SNACKBAR_MESSAGE,
    SET_PAGE,
    REQUEST_PLAYERS,
    RECEIVE_PLAYERS,
    RECEIVE_MATCH_LIST,
    RECEIVE_SINGLES_ORDER,
    REQUEST_SCORES,
    RECEIVE_SCORES,
    REQUEST_PLAYERS_CANCELLED,
    REQUEST_SCORES_CANCELLED,
} from '../actions/actions';

export default function actionReducer(state = {}, action) {
    switch (action.type) {
        case REQUEST_PLAYERS_CANCELLED:
            return {
                ...state,
                isFetchingPlayers: false,
            };
        case REQUEST_SCORES_CANCELLED:
            return {
                ...state,
                isFetchingScores: false,
            };
        case ISSUE_SNACKBAR_MESSAGE:
            return {
                ...state,
                snackbarMessage: action.message
            };
        case RECEIVE_MATCH_LIST:
            return {
                ...state,
                isFetchingMatchList: false,
                matchList: action.matchList,
                lastUpdated: action.receivedAt
            };
        case RECEIVE_SINGLES_ORDER:
            return {
                ...state,
                isFetchingSinglesOrder: false,
                singlesOrder: action.singlesOrder,
                lastUpdated: action.receivedAt
            };
        case SET_PAGE:
            return {
                ...state,
                pageId: action.pageId
            };
        case REQUEST_PLAYERS:
            return {
                ...state,
                isFetchingPlayers: true,
            };
        case RECEIVE_PLAYERS:
            return {
                ...state,
                isFetchingPlayers: false,
                players: action.players,
                lastUpdated: action.receivedAt
            };
        case REQUEST_SCORES:
            return {
                ...state,
                isFetchingScores: true,
            };
        case RECEIVE_SCORES:
            console.log("RECEIVE_SCORES action: ", action);
            let matchStatus = getMatchStatusArray(action.scores);
            let cupStatus = getCupStatus(matchStatus);
            return {
                ...state,
                isFetchingScores: false,
                scores: action.scores,
                matchStatus: matchStatus,
                cupStatus: cupStatus,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
}

function calcMatch(holes) {
    let up = 0;
    let remaining = 0;
    let completed = false;
    for (let hole = 0; hole < 18; hole++) {
        if (holes[hole] === 0) {
            remaining++;
        }
        else if (holes[hole] === 1) {
            up++;
        }
        else if (holes[hole] === 2) {
            up--;
        }
    }
    if (remaining === 0 || Math.abs(up) > remaining) {
        completed = true;
    }

    return {
        "up": up,
        "remaining": remaining,
        "completed": completed
    };
}

function getMatchStatusArray(scoresArray) {
    var statusArray = {"fourballs": [], "singles": []};
    for (let match = 0; match < scoresArray.fourballs.length; match++) {
        let holes = scoresArray.fourballs[match];
        statusArray.fourballs[match] = calcMatch(holes);
    }
    for (let match = 0; match < scoresArray.singles.length; match++) {
        let holes = scoresArray.singles[match];
        statusArray.singles[match] = calcMatch(holes);
    }

    return statusArray;
}

function getCupStatus(statusArray) {
    var mudhutters = 0.0;
    var clydebank = 0.0;
    for (let match = 0; match < statusArray.fourballs.length; match++) {
        let score = statusArray.fourballs[match];
        if (score.completed) {
            if (score.up > 0) {
                mudhutters += 1.0;
            }
            else if (score.up < 0) {
                clydebank += 1.0;
            }
            else {
                mudhutters += +0.5;
                clydebank += 0.5;
            }
        }
    }
    for (let match = 0; match < statusArray.singles.length; match++) {
        let score = statusArray.singles[match];
        if (score.completed) {
            if (score.up > 0) {
                mudhutters += 1.0;
            }
            else if (score.up < 0) {
                clydebank += 1.0;
            }
            else {
                mudhutters += +0.5;
                clydebank += 0.5;
            }
        }
    }
    return {
        "mudhutters": mudhutters,
        "clydebank": clydebank
    };
}
