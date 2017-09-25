import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class DeleteDialog extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.props.handleCancel}
      />,
      <FlatButton
        label="Delete"
        secondary={true}
        onClick={this.props.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Are you sure?"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleCancel}
        >
          WARNING: This action will delete all fourball and singles match information! 
        </Dialog>
      </div>
    );
  }
}

export default DeleteDialog;
