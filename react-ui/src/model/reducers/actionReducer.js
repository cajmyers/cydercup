import {
    SET_PAGE, REQUEST_PLAYERS, RECEIVE_PLAYERS
} from '../actions/actions';

export default function actionReducer(state = {}, action) {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                pageId: action.pageId
            }
        case REQUEST_PLAYERS:
            return {
                ...state,
                isFetchingPlayers: true,
            }
        case RECEIVE_PLAYERS:
            return {
                ...state,
                isFetchingPlayers: false,
                players: action.players,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}