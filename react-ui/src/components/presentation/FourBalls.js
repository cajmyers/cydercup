 // 
// FourBalls.js
import React, { Component } from 'react';
import MatchContainer from '../containers/MatchContainer';
import Match from './Match'

class FourBalls extends Component {
    render () {
        console.log("FourBalls props: ", this.props)
        return (
            <div>
                <MatchContainer
                    match={1}
                />
                <Match
                    match={2}
                    mudhutter1={{firstName: "Chris", surname: "Roberts"}}
                    mudhutter2={{firstName: "Rob", surname: "Winstanley"}}
                    clyde1={{firstName: "Brian", surname: "Henderson"}}
                    clyde2={{firstName: "Gordon", surname: "Eastop"}}
                    holes={[1, 1, 2, 2, 2, 3, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                />
            </div>
        )
    };
}       

export default FourBalls;
