import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setPage} from '../../model/actions/actions'
import MenuItem from 'material-ui/MenuItem';
import Header from '../presentation/Header'

class HeaderContainer extends Component {
  selectPage = (event, child) => {
    console.log("selectPage event: ", event);
    console.log("selectPage child: ", child);
    this.props.dispatch(setPage(child.key));
  }

  render() {
    var items = [];
    items.push(<MenuItem key="teams" primaryText="Teams" />);
    items.push(<MenuItem key="score" primaryText="Score" />);
    return (
      <Header 
        items={items} 
        onItemTouchTap={this.selectPage}
      />
    )
  };
}

const mapStateToProps = (state/*, props*/) => {
    return {}
}

const ConnectedHeaderContainer = connect(mapStateToProps)(HeaderContainer)
export default ConnectedHeaderContainer
