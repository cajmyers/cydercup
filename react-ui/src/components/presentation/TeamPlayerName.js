import React, {Component} from 'react';

class TeamPlayerName extends Component {
    render() {
        const style = {
            container: {
                fontFamily: 'Roboto',
                height: 30,
                textAlign: "left",
                paddingLeft: 10,
            },
            name: {
                width: "48%",
                display: "inline-block",
                textAlign: "right",
                marginRight: "1%",
                fontSize: 14,
            },
            surname: {
                width: "49%",
                display: "inline-block",
                textAlign: "left",
                marginLeft: "1%",
                fontSize: 17,
                fontWeight: 800,
            },
        }

        return (
            <div style={style.container}>
                <div style={style.name}>
                    {this.props.name}
                </div>
                <div style={style.surname}>
                    {this.props.surname}
                </div>
            </div>
        )
    };
}

export default TeamPlayerName;
