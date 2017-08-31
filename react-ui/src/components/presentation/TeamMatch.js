import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';

class TeamMatch extends Component {
    render() {
        const style = {
            h1: {
                fontFamily: "Roboto",
                fontSize: 22,
                fontWeight: 500,
                marginTop: 15,
                marginBottom: 0,
            },
            matchContainer: {
                width: "100%",
            },
            matchFirstPlayer: {
                maxWidth: "40%",
            },
            connector: {
                display: "inline-block",
                verticalAlign: "top",
                margin: 10,
                marginTop: 20,
            }
        };

        return (
            <div style={style.matchContainer}>
                <h1 style={style.h1}>
                    Match {this.props.matchNumber}
                </h1>
                <SelectField
                    style={style.matchFirstPlayer}
                    value={this.props.player1}
                    onChange={this.props.selectPlayer1}
                    maxHeight={200}
                >
                    {this.props.players}
                </SelectField>
                <div style={style.connector}>
                    <span>and</span>
                </div>
                <SelectField
                    style={style.matchFirstPlayer}
                    value={this.props.player2}
                    onChange={this.props.selectPlayer2}
                    maxHeight={200}
                >
                    {this.props.players}
                </SelectField>
            </div>
        )
    }
}

export default TeamMatch;
