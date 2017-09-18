 // 
// MatchTabs.js
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FourBalls from './FourBalls'
import Singles from './Singles'

class MatchTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({slideIndex: value,});
    };


    render () {
        const style = {
            headline: {
                fontSize: 24,
                paddingTop: 16,
                marginBottom: 12,
                fontWeight: 400,
            },
            content: {
                backgroundColor: "white",
            },
        }

        console.log("MatchTabs props: ", this.props);
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}                    
                >
                    <Tab label="Four-balls" value={0} />
                    <Tab label="Singles" value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    style={style.content}
                    >
                    <div>
                        <FourBalls/>
                    </div>
                    <div>
                        <Singles/>
                    </div>
                </SwipeableViews>
            </div>
        )
    };
}       

export default MatchTabs;
