import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PlayedIcon from 'material-ui/svg-icons/image/brightness-1';
import NotPlayedIcon from 'material-ui/svg-icons/content/block';


class EditMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hole: 1,
        };
    }

    handleChange = (event, index, value) => {
        this.setState({hole: value});
    };

    handleWinner = (event, value) => {
        this.props.handleSubmit(this.state.hole, value);
    };

    componentWillReceiveProps(nextProps) {
        var firstNotPlayed = 1;
        if (nextProps.scores) {
            for (let i = 0; i <= 17; i++) {
                if (nextProps.scores[i] === 0) {
                    firstNotPlayed = i + 1;
                    break;
                }
            }
        }
        this.setState({hole: firstNotPlayed});
    }

    render() {
        const style = {
            container: {
                textAlign: "center",
            },
            title: {
                paddingBottom: 0,
                textAlign: "center",
            },
            cancel: {
                color: "#888888",
            },
            hole: {
                marginTop: 5,
                width: 16,
                height: 16,
            },
            winnerIcon: {
                textAlign: "left",
                display: "inline-block",
                verticalAlign: "top",
                paddingTop: 33,
                paddingLeft: 4,
                paddingRight: 20,
            },
            holeSelect: {
                width: 80,
                display: "inline-block",
                paddingBottom: 10,
            },
            radioGroup: {
                fontSize: 16,
                width: 140,
                display: "inline-block",
                textAlign: "left",
            },
            radioButton: {
                marginBottom: 5,
            },
        };
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.props.handleCancel}
            />,
        ];

        const holes = [];
        for (let i = 1; i <= 18; i++) {
            holes.push(<MenuItem value={i} key={i} primaryText={i}/>);
        }

        var mudhutter = <PlayedIcon style={style.hole} color="red"/>;
        var clyde = <PlayedIcon style={style.hole} color="blue"/>;
        var half = <PlayedIcon style={style.hole} color="#aaaaaa"/>;
        var none = <NotPlayedIcon style={style.hole} color="#aaaaaa"/>;

        const buttons = [];
        buttons.push(<RadioButton value={0} key={0} label="Not Played" style={style.radioButton}/>);
        buttons.push(<RadioButton value={1} key={1} label="Mudhutters" style={style.radioButton}/>);
        buttons.push(<RadioButton value={2} key={2} label="Clydebank" style={style.radioButton}/>);
        buttons.push(<RadioButton value={3} key={3} label="Halved" style={style.radioButton}/>);

        var selected = 0;
        if (this.props.scores) {
            selected = this.props.scores[this.state.hole - 1];
        }

        var selectedIcon = none;
        switch (selected) {
            case 1:
                selectedIcon = mudhutter;
                break;
            case 2:
                selectedIcon = clyde;
                break;
            case 3:
                selectedIcon = half;
                break;
            default:
                selectedIcon = none;
                break;
        }


        return (
            <Dialog
                title={"Match " + this.props.match}
                actions={actions}
                titleStyle={style.title}
                modal={false}
                open={this.props.editDialogOpen}
                onRequestClose={this.props.handleCancel}
            >
                <div style={style.container}>
                    <div style={style.winnerIcon}>
                        {selectedIcon}
                    </div>
                    <div style={style.holeSelect}>
                        <SelectField
                            floatingLabelText="Hole"
                            fullWidth={true}
                            value={this.state.hole}
                            onChange={this.handleChange}
                        >
                            {holes}
                        </SelectField>
                    </div>
                    <br/>
                    <RadioButtonGroup
                        name="winner"
                        style={style.radioGroup}
                        valueSelected={selected}
                        onChange={this.handleWinner}
                    >
                        {buttons}
                    </RadioButtonGroup>
                </div>
            </Dialog>
        )
    };
}

export default EditMatch;
