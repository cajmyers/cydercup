import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui/svg-icons/content/remove-circle';

class TeamPlayerName extends Component {
  render() {
    const style = {
      container: {
        fontFamily: 'Roboto',
      },
      name: {
        width: "45%",
        display: "inline-block",
        textAlign: "right",
        marginRight: "1%",
        fontSize: 14,
      },
      surname: {
        width: "45%",
        display: "inline-block",
        textAlign: "left",
        marginLeft: "1%",
        fontSize: 17,
        fontWeight: 800,
      },
      removeButton: {
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
          style={style.removeButton} 
          tooltip={"Delete "+ this.props.name + " " + this.props.surname}
          tooltipPosition="top-right"
        >
          <RemoveIcon/>
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
