 // 
// PageScore.js
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Title from './Title'

class PageScore extends Component {
    render () {

        var style = {
            block: {
                width: 10,
                height: 40,
                display: "inline-block",
                backgroundColor: "lightgrey",
                borderCollapse: true,
                border: "solid white 1px"
            },
            mudhutter: {
                width: 10,
                height: 40,
                display: "inline-block",
                backgroundColor: "red",
                borderCollapse: true,
                border: "solid white 1px"
            },
            clyde: {
                width: 10,
                height: 40,
                display: "inline-block",
                backgroundColor: "blue",
                borderCollapse: true,
                border: "solid white 1px"
            }
        }
        var scoreBlocks = [];
        scoreBlocks.push(<div key="1" style={style.mudhutter}></div>)
        scoreBlocks.push(<div key="2" style={style.block}></div>)
        scoreBlocks.push(<div key="3" style={style.block}></div>)
        scoreBlocks.push(<div key="4" style={style.block}></div>)
        scoreBlocks.push(<div key="5" style={style.block}></div>)
        scoreBlocks.push(<div key="6" style={style.block}></div>)
        scoreBlocks.push(<div key="7" style={style.block}></div>)
        scoreBlocks.push(<div key="8" style={style.block}></div>)
        scoreBlocks.push(<div key="9" style={style.block}></div>)
        scoreBlocks.push(<div key="10" style={style.block}></div>)
        scoreBlocks.push(<div key="11" style={style.block}></div>)
        scoreBlocks.push(<div key="12" style={style.block}></div>)
        scoreBlocks.push(<div key="13" style={style.block}></div>)
        scoreBlocks.push(<div key="14" style={style.block}></div>)
        scoreBlocks.push(<div key="15" style={style.block}></div>)
        scoreBlocks.push(<div key="16" style={style.block}></div>)
        scoreBlocks.push(<div key="17" style={style.clyde}></div>)
        scoreBlocks.push(<div key="18" style={style.clyde}></div>)
        return (
            <div>
                <Title 
                    banner={require('../../images/banner2.jpg')}
                    text="S C O R E"
                />
                <div className="score-indicator">{scoreBlocks}</div>
                <div className="container">
                    <RaisedButton label="Default" />
                    <p className="App-intro">
                        {this.props.message}
                    </p>
                </div>
            </div>
        )
    };
}       

export default PageScore;
