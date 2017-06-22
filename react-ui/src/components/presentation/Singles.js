 // 
// Singles.js
import React, { Component } from 'react';
import Match from './Match'

class Singles extends Component {
    render () {
        console.log("FourBalls props: ", this.props)
        return (
            <div>
                <Match
                    match={1}
                    mudhutter1={{firstName: "Jon", surname: "Winstanley"}}
                    clyde1={{firstName: "Raymond", surname: "Murray"}}
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

export default Singles;

 /*
                 <Match
                    match={1}
                    mudhutter1={{firstName: "Jon", surname: "Winstanley"}}
                    clyde1={{firstName: "Raymond", surname: "Murray"}}
                    holes={[3, 2, 3, 1, 1, 3, 1, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0]}
                />
                <Match
                    match={2}
                    mudhutter1={{firstName: "Rob", surname: "Winstanley"}}
                    clyde1={{firstName: "Gordon", surname: "Eastop"}}
                    holes={[1, 1, 2, 2, 2, 3, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                />
                <Match
                    match={1}
                    mudhutter1={{firstName: "Jon", surname: "Winstanley"}}
                    clyde1={{firstName: "Raymond", surname: "Murray"}}
                    holes={[3, 2, 3, 1, 1, 3, 1, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0]}
                />
                <Match
                    match={2}
                    mudhutter1={{firstName: "Rob", surname: "Winstanley"}}
                    clyde1={{firstName: "Gordon", surname: "Eastop"}}
                    holes={[1, 1, 2, 2, 2, 3, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                />

  */