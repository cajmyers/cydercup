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
        return (
            <Match
                match={this.props.match}
                mudhutter1={mudhutter}
                mudhutter2={null}
                clyde1={clyde}
                clyde2={null}
                holes={[3, 2, 3, 1, 1, 3, 1, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0]}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        singlesOrder: state.actionReducer.singlesOrder,
    }
};

const ConnectedSingleContainer = connect(mapStateToProps)(SingleContainer);
export default ConnectedSingleContainer
