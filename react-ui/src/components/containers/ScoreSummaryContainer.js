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
        return (
            <ScoreSummary
                totalPoints={totalPoints}
                mudhutters={4.5}
                clydes={3.5}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
    }
};

const ConnectedScoreSummaryContainer = connect(mapStateToProps)(ScoreSummaryContainer);
export default ConnectedScoreSummaryContainer
