import {
    SET_PAGE, REQUEST_PLAYERS, RECEIVE_PLAYERS, SET_MATCH_PLAYERS, SET_SINGLES_ORDER
} from '../actions/actions';

export default function actionReducer(state = {}, action) {
    var key = null;
    var newList = {};
    switch (action.type) {
        case SET_MATCH_PLAYERS:
            let matchKey = action.team+"_"+action.matchNumber;
            if (state.matchList) {
                for (key in state.matchList) {
                    if (key === 'length' || !state.matchList.hasOwnProperty(key)) continue;
                    newList[key] = state.matchList[key];
                }
            }
            if (!newList[matchKey]) {
                newList[matchKey] = {};
            }
            newList[matchKey].player1Id = action.player1Id;
            newList[matchKey].player2Id = action.player2Id;
            return {
                ...state,
                matchList: newList
            };
        case SET_SINGLES_ORDER:
            let singlesKey = action.team+"_"+action.order;
            if (state.singlesOrder) {
                for (key in state.singlesOrder) {
                    if (key === 'length' || !state.singlesOrder.hasOwnProperty(key)) continue;
                    newList[key] = state.singlesOrder[key];
                }
            }
            newList[singlesKey] = action.playerId;
            return {
                ...state,
                singlesOrder: newList
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
        default:
            return state
    }
}