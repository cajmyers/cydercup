//
// MatchContainer.js
import React, {Component} from 'react';
import Match from '../presentation/Match'
import {connect} from 'react-redux'


class MatchContainer extends Component {
    render() {
        console.log("MatchContainer props: ", this.props);

        let mudhutter1 = {firstName: "", surname: ""};
        let mudhutter2 = null;
        let clyde1 =  {firstName: "", surname: ""};
        let clyde2 = null;
        if (this.props.players && this.props.matchList) {
            if (this.props.matchList["mudhutters_" + this.props.match]) {
                let playerIds = this.props.matchList["mudhutters_" + this.props.match];
                let player = this.props.players[playerIds.player1Id - 1];
                mudhutter1 = {firstName: player.name, surname: player.surname}; 
                player = this.props.players[playerIds.player2Id - 1];
                mudhutter2 = {firstName: player.name, surname: player.surname}; 
            }
            if (this.props.matchList["clydebank_" + this.props.match]) {
                let playerIds = this.props.matchList["clydebank_" + this.props.match];
                let player = this.props.players[playerIds.player1Id - 1];
                clyde1 = {firstName: player.name, surname: player.surname}; 
                player = this.props.players[playerIds.player2Id - 1];
                clyde2 = {firstName: player.name, surname: player.surname}; 
            }
        }
        return (
            <Match
                match={this.props.match}
                mudhutter1={mudhutter1}
                mudhutter2={mudhutter2}
                clyde1={clyde1}
                clyde2={clyde2}
                holes={[3, 2, 3, 1, 1, 3, 1, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0]}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        matchList: state.actionReducer.matchList,
    }
};

const ConnectedMatchContainer = connect(mapStateToProps)(MatchContainer);
export default ConnectedMatchContainer
