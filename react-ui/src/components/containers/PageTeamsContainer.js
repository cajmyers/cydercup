// 
// PageTeamsContainer.js
import React, { Component } from 'react';
import PageTeams from '../presentation/PageTeams'
import {connect} from 'react-redux'


class PageTeamsContainer extends Component {
    render () {
        console.log("PageTeamsContainer props: ", this.props)
        var players = [];
        if (this.props.players) {
            this.props.players.forEach(function(player, i) {
                players.push(<span key={i}>{player.name}</span>);
            })
        }
        return (
            <PageTeams players={players}/>
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        state: state
    }
}

const ConnectedPageTeamsContainer = connect(mapStateToProps)(PageTeamsContainer)
export default ConnectedPageTeamsContainer
