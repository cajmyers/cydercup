//
// MatchContainer.js
import React, {Component} from 'react';
import Match from '../presentation/Match'
import {connect} from 'react-redux'


class MatchContainer extends Component {
    render() {
        console.log("MatchContainer props: ", this.props);
        return (
            <Match
                match={this.props.match}
                mudhutter1={{firstName: "Jon", surname: "Winstanley"}}
                mudhutter2={{firstName: "Greg", surname: "McDonald"}}
                clyde1={{firstName: "Raymond", surname: "Murray"}}
                clyde2={{firstName: "David", surname: "Annand"}}
                holes={[3, 2, 3, 1, 1, 3, 1, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0]}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {}
};

const ConnectedMatchContainer = connect(mapStateToProps)(MatchContainer);
export default ConnectedMatchContainer
