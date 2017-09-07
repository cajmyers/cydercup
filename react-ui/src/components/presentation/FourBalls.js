 // 
// FourBalls.js
import React, { Component } from 'react';
import MatchContainer from '../containers/MatchContainer';

class FourBalls extends Component {
    render () {
        console.log("FourBalls props: ", this.props)
        return (
            <div>
                <MatchContainer
                    match={1}
                />
                <MatchContainer
                    match={2}
                />
                <MatchContainer
                    match={3}
                />
                <MatchContainer
                    match={4}
                />
                <MatchContainer
                    match={5}
                />
                <MatchContainer
                    match={6}
                />
            </div>
        )
    };
}       

export default FourBalls;
