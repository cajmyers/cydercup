import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class EditMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            winner: 0,
        };
    }

    handleChange = (event, index, value) => this.setState({value: value});
    handleWinner = (event, index, value) => this.setState({winner: value});


    render() {
        const style = {
            cancel: {
                color: "#888888",
            }
        };
        const actions = [
            <FlatButton
                label="Cancel"
                labelStyle={style.cancel}
                onClick={this.props.handleCancel}
            />,
            <FlatButton
                label="Submit"
                secondary={true}
                onClick={this.props.handleSubmit}
            />,
        ];

        const holes = [];
        for (let i = 1; i <= 18; i++) {
            holes.push(<MenuItem value={i} key={i} primaryText={i}/>);
        }
        const winner = [];
        winner.push(<MenuItem value={0} key={0} primaryText="Not Played"/>);
        winner.push(<MenuItem value={1} key={1} primaryText="Mudhutters"/>);
        winner.push(<MenuItem value={2} key={2} primaryText="Clydebank"/>);
        winner.push(<MenuItem value={3} key={3} primaryText="Halved"/>);

        return (
            <Dialog
                title={"Edit match " + this.props.match}
                actions={actions}
                modal={true}
                open={this.props.editDialogOpen}
            >
                <SelectField
                    floatingLabelText="Hole"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    {holes}
                </SelectField>
                <SelectField
                    floatingLabelText="Winner"
                    value={this.state.winner}
                    onChange={this.handleWinner}
                >
                    {winner}
                </SelectField>
            </Dialog>
        )
    };
}

export default EditMatch;
