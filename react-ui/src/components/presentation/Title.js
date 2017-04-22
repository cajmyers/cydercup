import React, { Component } from 'react';

class Title extends Component {
  render() {
    const style = {
      container: {
        position: 'relative',
        backgroundColor: this.props.backgroundColor,
        height: 70,
        color: "white",
        overflow: "hidden",
        display: 'flex',
        justifyContent: 'center'
      },
      image: {
        display: 'block',
        width: '100%',
        alignSelf: 'center'
      },
      title: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        alignSelf: 'center',
        width: '100%',
        position: 'absolute',
        top: '25%',
        left: 0
      }
    }

    return (
      <div style={style.container}>
        <img style={style.image} src={this.props.banner} alt="None" />   
        <h3 style={style.title}>{this.props.text}</h3>
      </div>
    )
  };
}

export default Title;
