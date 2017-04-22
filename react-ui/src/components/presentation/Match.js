 // 
// Match.js
import React, { Component } from 'react';

class Match extends Component {
    render () {
        const style = {
            container: {
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: "white",
                position: "relative",
            },
            mudhutters: {
                backgroundColor: "red",
                color: "red",
                height: 75,
            },
            clydes: {
                backgroundColor: "blue",                
                color: "blue",
                height: 75,
            },
            mudhutterNames: {
                textAlign: "left",
            },
            clydeNames: {
                textAlign: "right",
            },
            small: {
                fontSize: 12,
            },
            surname: {
                fontSize: 15,
                fontWeight: 800,
                marginTop: -5,
            },
            title: {
                marginTop: 5,
            },
            scoreBlock: {
                marginTop: -5,
            },
            scoreBlockUp: {
                marginTop: -5,
                color: "red",
            },
            scoreBlockDown: {
                marginTop: -5,
                color: "blue",
            },
            scoreText: {
                display: "inline-block",
                fontSize: 20,
                fontWeight: 900,
            },
            scoreValue: {
                display: "inline-block",
                fontSize: 40,
                fontWeight: 900,
            },
            scoreTable: {
                display: "table",
                boxSizing: "border-box",
                width: "100%",
                height: 30,
                margin: "0 auto",
            },
            scoreRow: {
                display: "table-row",
            },
            scoreCell: {
                display: "table-cell",
            },
            hole: {
                marginTop: 8,
                width: 16,
                height: 16,
            },
        }

        var scoreBlocks = []
        var mudhutter = <img style={style.hole} src={require('../../images/hole_mudhutter.png')} alt="hole"/>
        var clyde = <img style={style.hole} src={require('../../images/hole_clyde.png')} alt="hole"/>
        var half = <img style={style.hole} src={require('../../images/hole_half.png')} alt="hole"/>
        var none = <img style={style.hole} src={require('../../images/hole_none.png')} alt="hole"/>
        var up = 0;
        for (var i = 0; i < 18; i++) {
            var icon = none
            if (this.props.holes[i] === 1) {
                icon = mudhutter;
                up++;
            } else if (this.props.holes[i] === 2) {
                icon = clyde;
                up--;
            } else if (this.props.holes[i] === 3) {
                icon = half;
            }
            scoreBlocks.push(
                <div key={i} style={style.scoreCell}>
                    {icon}
                </div>
            )
        }
        var scoreStyle = style.scoreBlock;
        if (up > 0) {
            scoreStyle = style.scoreBlockUp;
        } else if (up < 0) {
            scoreStyle = style.scoreBlockDown;
        }
        up = Math.abs(up);
        if (up === 0) {
            up = "All Square"
        }

        console.log("Match props: ", this.props)
        return (
            <div className="container" style={style.container}>
                <div className="row">
                    <div className="one column" style={style.mudhutters}>.</div>
                    <div className="three columns" style={style.mudhutterNames}>
                        <div style={style.small}>{this.props.mudhutter1.firstName}</div> 
                        <div style={style.surname}>{this.props.mudhutter1.surname}</div>                            
                        <div style={style.small}>{this.props.mudhutter2.firstName}</div> 
                        <div style={style.surname}>{this.props.mudhutter2.surname}</div>
                    </div>
                    <div className="four columns" style={style.small}>
                        <div style={style.title}>Match {this.props.match}</div>
                        <div style={scoreStyle}>
                            <div style={style.scoreValue}>{up}</div>
                            <div style={style.scoreText}>up</div>
                        </div>
                    </div>
                    <div className="three columns" style={style.clydeNames}>
                        <div style={style.small}>{this.props.clyde1.firstName}</div> 
                        <div style={style.surname}>{this.props.clyde1.surname}</div>                            
                        <div style={style.small}>{this.props.clyde2.firstName}</div> 
                        <div style={style.surname}>{this.props.clyde2.surname}</div>
                    </div>
                    <div className="one column" style={style.clydes}>.</div>                    
                </div>
                <div style={style.scoreTable}>
                    <div style={style.scoreRow}>
                        {scoreBlocks}
                    </div>
                </div>
            </div>
        )
    };
}       

export default Match;
