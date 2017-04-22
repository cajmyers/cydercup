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
       totalPoints={18}
       mudhutters={4.5}
       clydes={3.5}
      />
    )
  };
}

const mapStateToProps = (state/*, props*/) => {
    return {}
}

const ConnectedPageScoreContainer = connect(mapStateToProps)(PageScoreContainer)
export default ConnectedPageScoreContainer
