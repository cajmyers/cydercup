 // 
// PageTeams.js
import React, { Component } from 'react';
import Title from './Title'

class PageTeams extends Component {
    render () {
        console.log("PageTeams props: ", this.props)
        return (
            <div>
                <Title 
                    backgroundColor="#cc4f19"
                    banner={require('../../images/banner_teams.jpg')}
                    text="T E A M S"
                />
                <div className="container">
                    {this.props.players}
                </div>
            </div>
        )
    };
}       

export default PageTeams;
