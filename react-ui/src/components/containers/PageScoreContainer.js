// 
// PageScoreContainer.js
import React, {Component} from 'react';
import PageScore from '../presentation/PageScore'
import DeleteDialog from '../presentation/DeleteDialog'
import {connect} from 'react-redux'
import {fetchScores, issueSnackbarMessage, deleteAll} from '../../model/actions/actions';

class PageScoreContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteDialogOpen: false,
        };
    }
    
    componentDidMount() {
        this.props.dispatch(fetchScores());
    }

    deleteAll = () => {
        this.setState({deleteDialogOpen: true});
    }

    handleCancel = () => {
        this.setState({deleteDialogOpen: false});
    }

    handleSubmit = () => {
        this.setState({deleteDialogOpen: false});
        this.props.dispatch(issueSnackbarMessage("Deleting all scores"));
        this.props.dispatch(deleteAll());
    }

    render() {
        return (
            <div>
                <PageScore
                    deleteAll={this.deleteAll}
                />
                <DeleteDialog
                    open={this.state.deleteDialogOpen}
                    handleCancel={this.handleCancel}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {}
}

const ConnectedPageScoreContainer = connect(mapStateToProps)(PageScoreContainer)
export default ConnectedPageScoreContainer
