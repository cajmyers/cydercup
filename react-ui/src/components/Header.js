import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu'

class Header extends Component {
  render() {
    const style = {
      container: {
        position: 'absolute',
        width: '100%',
        maxWidth: 960,
        zIndex: 99,
        top: 0,
        left: 0,
        textAlign: 'right'
      },
      image: {
        height: 100,
        float: 'left',
        marginLeft: 10,
        marginTop: 5
      },
      banner: {
        height: 58,
      },
      bannerText: {
        fontFamily: 'Roboto',
        fontWeight: 500
      },
      menu: {
        margin: 10
      }
    }

    return (
      <div style={style.container}>
        <Paper style={style.banner} zDepth={2} rounded={false}>
          <img style={style.image} src={require('../images/cydercup_logo.png')} alt="None" />   
          <span style={style.bannerText}>Menu</span>
          <FlatButton
            icon={<Menu/>}
            style={style.menu}
          />
        </Paper>   
      </div>
    )
  };
}

export default Header;
