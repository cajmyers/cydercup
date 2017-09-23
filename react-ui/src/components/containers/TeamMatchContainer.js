//
// PageTeamsContainer.js
import React, {Component} from 'react';
import {connect} from 'react-redux'
import TeamMatch from '../presentation/TeamMatch';
import MenuItem from 'material-ui/MenuItem';
import {setMatchPlayer} from '../../model/actions/actions';


class TeamMatchContainer extends Component {
    handleChangePlayer1 = (event, index, value) => {
        let key = this.props.team + "_" + this.props.matchNumber;
        let player2Id = null;
        if (this.props.matchList && this.props.matchList[key]) {
            player2Id = this.props.matchList[key].player2Id;
        }
        this.props.dispatch(setMatchPlayer(this.props.matchNumber, this.props.team, value, player2Id));
    };

    handleChangePlayer2 = (event, index, value) => {
        let key = this.props.team + "_" + this.props.matchNumber;
        let player1Id = null;
        if (this.props.matchList && this.props.matchList[key]) {
            player1Id = this.props.matchList[key].player1Id;
        }
        this.props.dispatch(setMatchPlayer(this.props.matchNumber, this.props.team, player1Id, value));
    };

    render() {
        let playerItems = [];
        if (this.props.players) {
            this.props.players.forEach(player => {
                if (player.team.trim() === this.props.team) {
                    playerItems.push(
                        <MenuItem
                            value={player.id}
                            key={player.id}
                            primaryText={player.name + " " + player.surname}
                        />
                    );
                }
            })
        }

        let key = this.props.team + "_" + this.props.matchNumber;
        let player1Id = null;
        let player2Id = null;
        if (this.props.matchList && this.props.matchList[key]) {
            player1Id = this.props.matchList[key].player1Id;
            player2Id = this.props.matchList[key].player2Id;
        }
        return (
            <TeamMatch
                matchNumber={this.props.matchNumber}
                player1={player1Id}
                player2={player2Id}
                selectPlayer1={this.handleChangePlayer1}
                selectPlayer2={this.handleChangePlayer2}
                players={playerItems}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        matchList: state.actionReducer.matchList,
    }
};

const ConnectedTeamMatchContainer = connect(mapStateToProps)(TeamMatchContainer);
export default ConnectedTeamMatchContainer;
