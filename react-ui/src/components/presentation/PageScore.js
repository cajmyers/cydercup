 // 
// PageScore.js
import React, { Component } from 'react';
import Title from './Title'
import MatchTabs from './MatchTabs'
import Paper from 'material-ui/Paper'

function createTableBlocks(totalPoints, mudhutters, clydes, style) {
        var scoreBlocks = [];
        var blockStyle = style.scoreCell2;
        for (var i = 0; i < totalPoints; i++) { 
            if (i < mudhutters) {
                blockStyle = (i/2 % 1 === 0) ? style.scoreCellMudhutter1 : style.scoreCellMudhutter2;
            } else if (i >= totalPoints - clydes) {
                blockStyle = (i/2 % 1 === 0) ? style.scoreCellClydes1 : style.scoreCellClydes2;
            } else {
                blockStyle = (i/2 % 1 === 0) ? style.scoreCell1 : style.scoreCell2;
            }
            scoreBlocks.push(<div key={i} style={blockStyle}>.</div>)
            if (i === (totalPoints/2) - 1) {
                scoreBlocks.push(<div key={999} style={style.winLine}>.</div>)               
            }
        }
    return scoreBlocks;
}

class PageScore extends Component {
    render () {
        var blockWidth = (100 / this.props.totalPoints);
        console.log(blockWidth)
        var base = {
           scoreCell: {
                fontSize: 1,
                display: "table-cell",
                borderTop: "1px solid #ebebeb",
                borderBottom: "1px solid #ebebeb",
                borderLeft: "1px solid #ebebeb",
                backgroundColor: "lightgrey",
                color: "lightgrey",
                borderTopColor: "lightgrey",
                borderBottomColor: "lightgrey",
           },
           scoreMudhutters: {
                backgroundColor: "red",
                borderTopColor: "red",
                color: "red",
                borderBottomColor: "#d20004",
           },
           scoreClydes: {
                backgroundColor: "blue",
                borderTopColor: "blue",
                color: "blue",
                borderBottomColor: "darkblue",
           },
           value: {
                fontSize: 30,
                fontWeight: 500,
                color: "white",
           }
        }
        var style = {
            body: {
                fontFamily: "Roboto",
            },
            scoreTable: {
                display: "table",
                border: "1px solid transparent",
                borderCollapse: "collapse",
                boxSizing: "border-box",
                width: "100%",
                height: 50,
                margin: "0 auto",
            },
            scoreRow: {
                display: "table-row",
            },
            scoreCell1: {
                ...base.scoreCell,
            },
            scoreCell2: {
                ...base.scoreCell,
                borderLeft: "1px solid lightgrey",
            },
            scoreCellMudhutter1: {
                ...base.scoreCell,
                ...base.scoreMudhutters,
                borderLeft: "1px solid #ff666a",
            },
            scoreCellMudhutter2: {
                ...base.scoreCell,
                ...base.scoreMudhutters,
                borderLeft: "1px solid red",
            },
            scoreCellClydes1: {
                ...base.scoreCell,
                ...base.scoreClydes,
                borderLeft: "1px solid #0248f5",
            },
            scoreCellClydes2: {
                ...base.scoreCell,
                ...base.scoreClydes,
                borderLeft: "1px solid blue",
                borderRight: "1px solid #0248f5",
            },
            scoreText: {
                marginTop: 5,
                fontWeight: 900,
            },
            win: {
                fontWeight: 500
            },
            winLine: {
                ...base.scoreCell,
                backgroundColor: "black",
                borderTopColor: "black",
                color: "black",
                borderBottomColor: "black",
                width: 2,
            },
            mudhutterTitle: {
                float: "left",
                marginLeft: 5,
            },
            mudhutterScore: {
                color: "red",
            },
            clydeTitle: {
                float: "right",
                marginRight: 5,
            },
            clydeScore: {
                color: "blue",
            },
            scoreArea: {
                position: "relative",
                width: "100%",
                height: 50,
                marginTop: 5,
                marginBottom: 15,
            },
            scoreAreaOverlay: {
                position: "absolute",
                width: "100%",
                top: 0,
                left: 0,
            },
            scoreAreaOverlayTop: {
                position: "absolute",
                width: "100%",
                top: 0,
                left: 0,
                zIndex: 999,
            },
            scoreValueMudhutters: {
                ...base.value,
                float: "left",
                marginLeft: 15,
            },
            scoreValueClydes: {
                ...base.value,
                float: "right",
                marginRight: 15,
            },
        }

        var scoreBlocks = createTableBlocks(this.props.totalPoints*2, this.props.mudhutters*2, this.props.clydes*2, style);
        return (
            <div style={style.body}>
                <Title 
                    backgroundColor="#629749"
                    banner={require('../../images/banner2.jpg')}
                    text="S C O R E"
                />
                <div style={style.scoreText}>
                    <div style={style.mudhutterTitle}>Mudhutters</div>
                    <span style={style.win}>{(this.props.totalPoints/2)+0.5} to win</span>
                    <div style={style.clydeTitle}>Clydebank</div>
                </div>
                <Paper style={style.scoreArea} zDepth={3}>
                    <div style={style.scoreAreaOverlayTop}>
                        <div style={style.scoreValueMudhutters}>{this.props.mudhutters}</div>
                        <div style={style.scoreValueClydes}>{this.props.clydes}</div>
                    </div>
                    <div style={style.scoreAreaOverlay}>                 
                        <div style={style.scoreTable}>
                            <div style={style.scoreRow}>
                                {scoreBlocks}
                            </div>
                        </div>
                    </div>
                </Paper>
                <MatchTabs />
            </div>
        )
    };
}       

export default PageScore;
