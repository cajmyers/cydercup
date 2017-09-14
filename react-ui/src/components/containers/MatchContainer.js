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
        let clyde1 = {firstName: "", surname: ""};
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
        let up = 0;
        if (this.props.scores && this.props.scores.fourballs) {
            let holes = this.props.scores.fourballs[this.props.match - 1];
            for (var i = 0; i < 18; i++) {
                if (holes[i] === 1) {
                    up++;
                } else if (holes[i] === 2) {
                    up--;
                }
            }
        }

        return (
            <Match
                match={this.props.match}
                mudhutter1={mudhutter1}
                mudhutter2={mudhutter2}
                clyde1={clyde1}
                clyde2={clyde2}
                up={up}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        matchList: state.actionReducer.matchList,
        scores: state.actionReducer.scores,
    }
};

const ConnectedMatchContainer = connect(mapStateToProps)(MatchContainer);
export default ConnectedMatchContainer
