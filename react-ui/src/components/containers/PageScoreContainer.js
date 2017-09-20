// 
// PageScoreContainer.js
import React, {Component} from 'react';
import PageScore from '../presentation/PageScore'
import {connect} from 'react-redux'
import {fetchScores} from '../../model/actions/actions';

class PageScoreContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchScores());
    }

    render() {
        return (
            <PageScore
                message="Howdy"
                totalPoints={18}
                mudhutters={4.5}
                clydes={3.5}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {}
}

const ConnectedPageScoreContainer = connect(mapStateToProps)(PageScoreContainer)
export default ConnectedPageScoreContainer
