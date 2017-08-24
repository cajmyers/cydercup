 // 
// PageTeams.js
import React, { Component } from 'react';
import Title from './Title'
import TeamContainer from '../containers/TeamContainer';

class PageTeams extends Component {
    render () {
        const style = {
            teamTabs: {
                paddingTop: 20,
            },
        }
        console.log("PageTeams props: ", this.props)
        return (
            <div>
                <Title 
                    backgroundColor="#cc4f19"
                    banner={require('../../images/banner_teams.jpg')}
                    text="T E A M S"
                />
                <div className="container" style={style.teamTabs}>
                    <TeamContainer />
                    {this.props.players}
                </div>
            </div>
        )
    };
}       

export default PageTeams;
