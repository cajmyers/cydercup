import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';

class TeamSingle extends Component {
    selectPlayer = (event, key, value) => {
        console.log("TeamSingle: ", event, key, value);
        this.props.selectFunc(value, this.props.orderNumber);
    };

    render() {
        const style = {
            container: {
                width: "100%",
                textAlign: "center",
            },
            label: {
                display: "inline-block",
                fontFamily: "Roboto",
                fontSize: 16,
                textAlign: "right",
                paddingRight: 10,
                paddingTop: 10,
                verticalAlign: "top"
            },
            selector: {
                display: "inline-block",
                width: "80%",
            },
        };

        return (
            <div style={style.container}>
                <div style={style.label}>
                    {this.props.orderNumber}:
                </div>
                <div style={style.selector}>
                    <SelectField
                        value={this.props.selected}
                        onChange={this.selectPlayer}
                        fullWidth={true}
                        maxHeight={200}
                    >
                        {this.props.players}
                    </SelectField>
                </div>
            </div>
        )
    }
}

export default TeamSingle;
