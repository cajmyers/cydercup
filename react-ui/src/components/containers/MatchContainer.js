//
// MatchContainer.js
import React, {Component} from 'react';
import Match from '../presentation/Match';
import EditMatch from '../presentation/EditMatch';
import {sendScore} from '../../model/actions/actions';
import {connect} from 'react-redux'


class MatchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editDialogOpen: false,
        };
    }

    handleEdit = (event) => {
        this.setState({editDialogOpen: true});
    };

    handleClose = () => {
        this.setState({editDialogOpen: false});
    };

    handleSubmit = (hole, winner) => {
        this.props.dispatch(sendScore("fourballs", this.props.match, hole, winner));
        this.setState({editDialogOpen: false});
    };

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
        var up = 0;
        var remaining = 18;
        var completed = false;
        if (this.props.matchStatus && this.props.matchStatus.fourballs) {
            let status = this.props.matchStatus.fourballs[this.props.match - 1];
            up = status.up;
            remaining = status.remaining;
            completed = status.completed;
        }
        var holes = [];
        if (this.props.scores && this.props.scores.fourballs) {
            holes = this.props.scores.fourballs[this.props.match - 1];
        }

        return (
            <div>
                <Match
                    match={this.props.match}
                    handleEdit={this.handleEdit}
                    scores={holes}
                    mudhutter1={mudhutter1}
                    mudhutter2={mudhutter2}
                    clyde1={clyde1}
                    clyde2={clyde2}
                    up={up}
                    remaining={remaining}
                    completed={completed}
                />
                <EditMatch
                    match={this.props.match}
                    scores={holes}
                    editDialogOpen={this.state.editDialogOpen}
                    handleCancel={this.handleClose}
                    handleSubmit={this.handleSubmit}
                    />
            </div>
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        matchList: state.actionReducer.matchList,
        scores: state.actionReducer.scores,
        matchStatus: state.actionReducer.matchStatus
    }
};

const ConnectedMatchContainer = connect(mapStateToProps)(MatchContainer);
export default ConnectedMatchContainer
