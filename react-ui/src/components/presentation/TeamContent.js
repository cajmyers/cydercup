import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TeamPlayerName from './TeamPlayerName';
import TeamMatchContainer from '../containers/TeamMatchContainer';

class TeamContent extends Component {
    render() {
        const style = {
            tabContentContainer: {
                width: "100%",
                position: "relative",
            },
            h1: {
                fontFamily: "Roboto",
                fontSize: 22,
                fontWeight: 500,
                marginTop: 15,
                display: "inline-block",
            },
            addButton: {
                position: "absolute",
                right: 10,
                top: 3,
            },
            playerList: {
                marginBottom: 20,
            },
        };

        let players = [];
        if (this.props.players) {
            this.props.players.forEach(function (player, i) {
                players.push(
                    <div key={i}>
                        <TeamPlayerName
                            name={player.name}
                            surname={player.surname}
                        />
                    </div>
                );
            })
        }

        return (
            <div style={style.tabContentContainer}>
                <h1 style={style.h1}>
                    Players
                </h1>
                <FloatingActionButton mini={true} style={style.addButton} backgroundColor="DarkSeaGreen">
                    <ContentAdd />
                </FloatingActionButton>
                <div style={style.playerList}>
                    {players}
                </div>
                <TeamMatchContainer
                    matchNumber={1}
                    team={this.props.team}
                />
                <TeamMatchContainer
                    matchNumber={2}
                    team={this.props.team}
                />
                <TeamMatchContainer
                    matchNumber={3}
                    team={this.props.team}
                />
                <TeamMatchContainer
                    matchNumber={4}
                    team={this.props.team}
                />
                <TeamMatchContainer
                    matchNumber={5}
                    team={this.props.team}
                />
                <TeamMatchContainer
                    matchNumber={6}
                    team={this.props.team}
                />
            </div>
        )
    }
}

export default TeamContent;
