 // 
// PageScore.js
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Title from './Title'

class PageScore extends Component {
    render () {
        return (
            <div>
                <Title 
                    banner={require('../../images/banner2.jpg')}
                    text="S C O R E"
                />
                <div className="container">
                    <RaisedButton label="Default" />
                    <p className="App-intro">
                        {this.props.message}
                    </p>
                </div>
            </div>
        )
    };
}       

export default PageScore;
