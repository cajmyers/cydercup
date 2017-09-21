import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
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

    handleWinner = (event, index, value) => {
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
                textAlign: "center",
                width: "15%",
                display: "inline-block",
                verticalAlign: "top",
                paddingTop: 33,
            },
            winnerSelect: {
                width: "85%",
                display: "inline-block",
                paddingBottom: 10,
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

        const winner = [];
        winner.push(<MenuItem value={0} key={0} leftIcon={none} primaryText="Not Played"/>);
        winner.push(<MenuItem value={1} key={1} leftIcon={mudhutter} primaryText="Mudhutters"/>);
        winner.push(<MenuItem value={2} key={2} leftIcon={clyde} primaryText="Clydebank"/>);
        winner.push(<MenuItem value={3} key={3} leftIcon={half} primaryText="Halved"/>);

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
                <SelectField
                    floatingLabelText="Hole"
                    fullWidth={true}
                    value={this.state.hole}
                    onChange={this.handleChange}
                >
                    {holes}
                </SelectField>
                <div style={style.winnerIcon}>
                    {selectedIcon}
                </div>
                <div style={style.winnerSelect}>
                    <SelectField
                        floatingLabelText="Winner"
                        fullWidth={true}
                        value={selected}
                        onChange={this.handleWinner}
                    >
                        {winner}
                    </SelectField>
                </div>
            </Dialog>
        )
    };
}

export default EditMatch;
