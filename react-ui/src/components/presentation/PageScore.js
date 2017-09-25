 // 
// PageScore.js
import React, { Component } from 'react';
import Title from './Title'
import MatchTabs from './MatchTabs'
import ScoreSummaryContainer from '../containers/ScoreSummaryContainer'
import RaisedButton from 'material-ui/RaisedButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';

class PageScore extends Component {
    render () {
        var style = {
            body: {
                fontFamily: "Roboto",
            },
            button: {
                margin: 12,
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
                <div style={{marginTop: 20}}/>
                <RaisedButton
                    label="Clear All Scores"
                    primary={true}
                    style={style.button}
                    icon={<DeleteIcon />}
                    onClick={this.props.deleteAll}
                />
            </div>
        )
    };
}       

export default PageScore;
