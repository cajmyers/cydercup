// 
// PageTeamsContainer.js
import React, { Component } from 'react';
import PageTeams from '../presentation/PageTeams'
import {connect} from 'react-redux'


class PageTeamsContainer extends Component {
    render () {
        console.log("PageTeamsContainer props: ", this.props)
        return (
            <PageTeams />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
    }
}

const ConnectedPageTeamsContainer = connect(mapStateToProps)(PageTeamsContainer)
export default ConnectedPageTeamsContainer
