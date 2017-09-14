//
// MatchContainer.js
import React, {Component} from 'react';
import Match from '../presentation/Match'
import {connect} from 'react-redux'


class SingleContainer extends Component {
    render() {
        console.log("MatchContainer props: ", this.props);

        let mudhutter = {firstName: "", surname: ""};
        let clyde =  {firstName: "", surname: ""};
        if (this.props.players && this.props.singlesOrder) {
            if (this.props.singlesOrder["mudhutters_" + this.props.match]) {
                let playerId = this.props.singlesOrder["mudhutters_" + this.props.match];
                let player = this.props.players[playerId - 1];
                mudhutter = {firstName: player.name, surname: player.surname};
            }
            if (this.props.singlesOrder["clydebank_" + this.props.match]) {
                let playerId = this.props.singlesOrder["clydebank_" + this.props.match];
                let player = this.props.players[playerId - 1];
                clyde = {firstName: player.name, surname: player.surname};
            }
        }
        let up = 0;
        if (this.props.scores && this.props.scores.singles) {
            let holes = this.props.scores.singles[this.props.match - 1];
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
                mudhutter1={mudhutter}
                mudhutter2={null}
                clyde1={clyde}
                clyde2={null}
                up={up}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        singlesOrder: state.actionReducer.singlesOrder,
        scores: state.actionReducer.scores,
    }
};

const ConnectedSingleContainer = connect(mapStateToProps)(SingleContainer);
export default ConnectedSingleContainer
