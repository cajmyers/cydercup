import React, {Component} from 'react'
import {connect} from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress';
import {DEBUG} from '../../settings'


class ProgressContainer extends Component {
    render() {
        const style = {
            visible: {
                visibility: 'visible',
                marginRight: 20,
            },
            invisible: {
                visibility: 'hidden'
            }
        };
        var displayStyle =  style.invisible;
        if (this.props.isFetchingScores ||
            this.props.isFetchingPlayers) {
            displayStyle = style.visible;
        }

        DEBUG && console.log("ProgressContainer render props: ", this.props);
        return (
            <CircularProgress style={displayStyle} size={30} thickness={2} color="black"/>
        );
    }
}

const mapStateToProps = (state/*, props*/) => {
    return {
        isFetchingScores: state.actionReducer.isFetchingScores,
        isFetchingPlayers: state.actionReducer.isFetchingPlayers,
    }
};

const ConnectedProgressContainer = connect(mapStateToProps)(ProgressContainer);

export default ConnectedProgressContainer;
