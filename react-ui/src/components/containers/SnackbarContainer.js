import React, {Component} from 'react'
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';
import {issueSnackbarMessage} from '../../model/actions/actions';
import {DEBUG} from '../../settings';


class SnackbarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    componentWillUpdate(nextProps /*, nextState*/) {
        if (nextProps.snackbarMessage && (nextProps.snackbarMessage !== this.props.snackbarMessage)) {
            this.setState({
                open: true,
            });
        }
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
        this.props.dispatch(issueSnackbarMessage(null));
    };

    render() {
        const style = {
            content: {
                color: "white",
                textAlign: "center",
            }
        };
        DEBUG && console.log("SnackbarContainer render this.state.open: ", this.state.open);
        let message = "";
        if (this.props.snackbarMessage) {
            message = this.props.snackbarMessage;
        }
        return (
            <div>
                <Snackbar
                    open={this.state.open}
                    message={message}
                    contentStyle={style.content}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

const mapStateToProps = (state/*, props*/) => {
    return {
        snackbarMessage: state.actionReducer.snackbarMessage,
    }
};

const ConnectedSnackbarContainer = connect(mapStateToProps)(SnackbarContainer);

export default ConnectedSnackbarContainer;
