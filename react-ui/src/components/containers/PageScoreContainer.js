// 
// PageScoreContainer.js
import React, { Component } from 'react';
import PageScore from '../presentation/PageScore'
import {connect} from 'react-redux'

class PageScoreContainer extends Component {
  render () {
    return (
     <PageScore 
       message="Howdy"
      />
    )
  };
}

const mapStateToProps = (state/*, props*/) => {
    return {}
}

const ConnectedPageScoreContainer = connect(mapStateToProps)(PageScoreContainer)
export default ConnectedPageScoreContainer
