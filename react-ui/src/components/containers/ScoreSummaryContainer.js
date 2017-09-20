//
// ScoreSummaryContainer.js
import React, {Component} from 'react';
import ScoreSummary from '../presentation/ScoreSummary'
import {connect} from 'react-redux'


class ScoreSummaryContainer extends Component {
    render() {
        var totalPoints = 0;
        var playerCount = 0;
        if (this.props.players) {
            this.props.players.forEach(player => {
                if (player.team === "mudhutters") {
                    playerCount++;
                }
            })
            totalPoints = (playerCount / 2) + playerCount;
        }

        console.log("ConnectedScoreSummaryContainer props: ", this.props);

        var mudhutters = 0;
        var clydes = 0;
        if (this.props.cupStatus) {
            mudhutters = this.props.cupStatus.mudhutters;
            clydes = this.props.cupStatus.clydebank;
        }
        return (
            <ScoreSummary
                totalPoints={totalPoints}
                mudhutters={mudhutters}
                clydes={clydes}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        cupStatus: state.actionReducer.cupStatus,
    }
};

const ConnectedScoreSummaryContainer = connect(mapStateToProps)(ScoreSummaryContainer);
export default ConnectedScoreSummaryContainer
