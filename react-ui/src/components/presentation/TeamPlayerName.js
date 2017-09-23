import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

class TeamPlayerName extends Component {
    render() {
        const style = {
            container: {
                fontFamily: 'Roboto',
                height: 30,
                textAlign: "center",
                paddingLeft: 10,
            },
            name: {
                width: "35%",
                display: "inline-block",
                textAlign: "right",
                marginRight: "1%",
                fontSize: 14,
            },
            surname: {
                width: "40%",
                display: "inline-block",
                textAlign: "left",
                marginLeft: "1%",
                fontSize: 17,
                fontWeight: 800,
            },
            editButton: {
                display: "inline-block",
                verticalAlign: "top",
                width: 22,
                height: 22,
                padding: 0,
                margin: 0,
            },
        }

        return (
            <div style={style.container}>
                <IconButton
                    style={style.editButton}
                    tooltip={"Edit player"}
                    tooltipPosition="top-right"
                    onClick={this.props.handleEdit}
                >
                    <EditIcon/>
                </IconButton>

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
