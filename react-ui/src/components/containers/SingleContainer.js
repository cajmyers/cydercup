//
// MatchContainer.js
import React, {Component} from 'react';
import Match from '../presentation/Match'
import EditMatch from '../presentation/EditMatch';
import {sendScore} from '../../model/actions/actions';
import {connect} from 'react-redux'


class SingleContainer extends Component {
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
        this.props.dispatch(sendScore("singles", this.props.match, hole, winner));
        this.setState({editDialogOpen: false});
    };

    render() {
        console.log("MatchContainer props: ", this.props);

        let mudhutter = {firstName: "", surname: ""};
        let clyde = {firstName: "", surname: ""};
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
        var up = 0;
        var remaining = 18;
        var completed = false;
        if (this.props.matchStatus && this.props.matchStatus.fourballs) {
            let status = this.props.matchStatus.singles[this.props.match - 1];
            up = status.up;
            remaining = status.remaining;
            completed = status.completed;
        }
        var holes = [];
        if (this.props.scores && this.props.scores.singles) {
            holes = this.props.scores.singles[this.props.match - 1];
        }


        return (
            <div>
                <Match
                    match={this.props.match}
                    handleEdit={this.handleEdit}
                    scores={holes}
                    mudhutter1={mudhutter}
                    mudhutter2={null}
                    clyde1={clyde}
                    clyde2={null}
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
        singlesOrder: state.actionReducer.singlesOrder,
        scores: state.actionReducer.scores,
        matchStatus: state.actionReducer.matchStatus,
    }
};

const ConnectedSingleContainer = connect(mapStateToProps)(SingleContainer);
export default ConnectedSingleContainer
