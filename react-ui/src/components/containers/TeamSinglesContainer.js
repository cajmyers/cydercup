//
// PageTeamsContainer.js
import React, {Component} from 'react';
import {connect} from 'react-redux'
import MenuItem from 'material-ui/MenuItem';
import TeamSingle from '../presentation/TeamSingle';
import {setSinglesOrder} from '../../model/actions/actions';


class TeamSinglesContainer extends Component {
    handleSetSinglesOrder = (playerId, order) => {
        console.log("ConnectedTeamSinglesContainer: ", playerId, order);
        this.props.dispatch(setSinglesOrder(this.props.team, playerId, order));
    };

    render() {
        console.log("TeamSinglesContainer: ", this.props);
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
        let playerSelectors = [];
        if (this.props.players) {
            var index = 1;
            this.props.players.forEach((player) => {
                if (player.team.trim() === this.props.team) {
                    let selected = null;
                    let key = this.props.team+"_"+index;
                    if (this.props.singlesOrder && this.props.singlesOrder[key]) {
                        selected = this.props.singlesOrder[key];
                    }
                    playerSelectors.push(
                        <TeamSingle
                            orderNumber={index}
                            selected={selected}
                            key={player.id}
                            players={playerItems}
                            selectFunc={this.handleSetSinglesOrder}
                        />
                    );
                    index++;
                }
            })
        }

        return (
            <div>
                {playerSelectors}
            </div>
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        singlesOrder: state.actionReducer.singlesOrder,
    }
};

const ConnectedTeamSinglesContainer = connect(mapStateToProps)(TeamSinglesContainer);
export default ConnectedTeamSinglesContainer;
