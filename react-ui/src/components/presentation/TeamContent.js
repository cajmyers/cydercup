import React, {Component} from 'react';
import TeamPlayerContainer from '../containers/TeamPlayerContainer';
import TeamMatchContainer from '../containers/TeamMatchContainer';
import TeamSinglesContainer from '../containers/TeamSinglesContainer';

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
            section: {
                marginBottom: 30,
            },
            matches: {
                textAlign: "center",
            }
        };

        let players = [];
        if (this.props.players) {
            this.props.players.forEach(function (player, i) {
                players.push(
                    <div key={i}>
                        <TeamPlayerContainer
                            id={player.id}
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
                <div style={style.section}>
                    {players}
                </div>
                <div style={style.matches}>
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
                <h1 style={style.h1}>
                    Singles Order
                </h1>
                <TeamSinglesContainer team={this.props.team}/>
            </div>
        )
    }
}

export default TeamContent;
