import React, { Component } from 'react';

class Title extends Component {
  render() {
    const style = {
      container: {
        position: 'relative',
        backgroundColor: "#336221",
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
        top: 15,
        left: 0
      }
    }

    return (
      <div style={style.container}>
        <img style={style.image} src={require('../images/banner2.jpg')} alt="None" />   
        <h3 style={style.title}>S C O R E</h3>
      </div>
    )
  };
}

export default Title;
