import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/skeleton/skeleton.css';

class Header extends Component {
  render() {
    const style = {
      AppHeader: {
        backgroundColor: "#336221",
        height: 80,
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
      <div style={style.AppHeader}>
        <img style={style.image} src={require('../images/cyder_cup_banner.jpg')} alt="None" />   
        <h3 style={style.title}>S C O R E</h3>
      </div>
    )
  };
}

export default Header;
