 // 
// FourBalls.js
import React, { Component } from 'react';
import Match from './Match'

class FourBalls extends Component {
    render () {
        console.log("FourBalls props: ", this.props)
        return (
            <div>
                <Match
                    match={1}
                    mudhutter1={{firstName: "Jon", surname: "Winstanley"}}
                    mudhutter2={{firstName: "Greg", surname: "McDonald"}}
                    clyde1={{firstName: "Raymond", surname: "Murray"}}
                    clyde2={{firstName: "David", surname: "Annand"}}
                    holes={[3, 2, 3, 1, 1, 3, 1, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0]}
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
