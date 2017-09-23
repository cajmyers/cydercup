import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setPlayerName} from '../../model/actions/actions';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TeamPlayerName from '../presentation/TeamPlayerName'
import TextField from 'material-ui/TextField';

class TeamPlayerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editDialogOpen: false,
            name: props.name,
            surname: props.surname,
        };
    }

    handleEdit = (event) => {
        this.setState({editDialogOpen: true});
    };

    handleClose = () => {
        this.setState({editDialogOpen: false});
    };

    handleSubmit = (event) => {
        this.props.dispatch(setPlayerName(this.props.id, this.state.name,this.state.surname));
        this.setState({editDialogOpen: false});
    };

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleChangeSurname = (event) => {
        this.setState({
            surname: event.target.value,
        });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                secondary={true}
                keyboardFocused={true}
                onClick={this.handleSubmit}
            />,
        ];

        return (
            <div>
                <TeamPlayerName
                    name={this.props.name}
                    surname={this.props.surname}
                    handleEdit={this.handleEdit}
                />
                <Dialog
                    title="Edit Player Name"
                    actions={actions}
                    modal={false}
                    open={this.state.editDialogOpen}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        id="text_field_name"
                        value={this.state.name}
                        fullWidth={true}
                        onChange={this.handleChangeName}
                    />
                    <TextField
                        id="text-field-surname"
                        value={this.state.surname}
                        fullWidth={true}
                        onChange={this.handleChangeSurname}
                    />
                </Dialog>
            </div>
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {}
}

const ConnectedTeamPlayerContainer = connect(mapStateToProps)(TeamPlayerContainer)
export default ConnectedTeamPlayerContainer
