//
// MatchContainer.js
import React, {Component} from 'react';
import ScoreTable from '../presentation/ScoreTable'
import {connect} from 'react-redux'


class ScoreTableContainer extends Component {
    render() {
        console.log("ScoreTableContainer props: ", this.props);
        return (
            <ScoreTable
                holes={[3, 2, 3, 1, 1, 3, 1, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0]}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
    }
};

const ConnectedScoreTableContainer = connect(mapStateToProps)(ScoreTableContainer);
export default ConnectedScoreTableContainer
