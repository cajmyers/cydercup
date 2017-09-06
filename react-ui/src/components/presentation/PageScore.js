 // 
// PageScore.js
import React, { Component } from 'react';
import Title from './Title'
import MatchTabs from './MatchTabs'
import ScoreSummaryContainer from '../containers/ScoreSummaryContainer'

class PageScore extends Component {
    render () {
        var style = {
            body: {
                fontFamily: "Roboto",
            },
        };

        return (
            <div style={style.body}>
                <Title 
                    backgroundColor="#629749"
                    banner={require('../../images/banner2.jpg')}
                    text="S C O R E"
                />
                <ScoreSummaryContainer/>
                <MatchTabs />
            </div>
        )
    };
}       

export default PageScore;
