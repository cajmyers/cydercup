 // 
// Singles.js
import React, { Component } from 'react';
import SingleContainer from '../containers/SingleContainer';

class Singles extends Component {
    render () {
        console.log("FourBalls props: ", this.props)
        return (
            <div>
                <SingleContainer match={1}/>
                <SingleContainer match={2}/>
                <SingleContainer match={3}/>
                <SingleContainer match={4}/>
                <SingleContainer match={5}/>
                <SingleContainer match={6}/>
                <SingleContainer match={7}/>
                <SingleContainer match={8}/>
                <SingleContainer match={9}/>
                <SingleContainer match={10}/>
                <SingleContainer match={11}/>
                <SingleContainer match={12}/>
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