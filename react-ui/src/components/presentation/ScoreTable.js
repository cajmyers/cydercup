//
// Match.js
import React, {Component} from 'react';
import PlayedIcon from 'material-ui/svg-icons/image/brightness-1';
import NotPlayedIcon from 'material-ui/svg-icons/content/block';

class ScoreTable extends Component {
    render() {
        const style = {
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
        };

        console.log("ScoreTable props: ", this.props);

        var scoreBlocks = [];
        var mudhutter = <PlayedIcon style={style.hole} color="red"/>;
        var clyde = <PlayedIcon style={style.hole} color="blue"/>;
        var half = <PlayedIcon style={style.hole} color="#aaaaaa"/>;
        var none = <NotPlayedIcon style={style.hole} color="#aaaaaa"/>;
        for (var i = 0; i < 18; i++) {
            var icon = none;
            if (this.props.holes && this.props.holes[i] === 1) {
                icon = mudhutter;
            } else if (this.props.holes && this.props.holes[i] === 2) {
                icon = clyde;
            } else if (this.props.holes && this.props.holes[i] === 3) {
                icon = half;
            }
            scoreBlocks.push(
                <div key={i} style={style.scoreCell}>
                    {icon}
                </div>
            )
        }
        return (
            <div style={style.scoreTable}>
                <div style={style.scoreRow}>
                    {scoreBlocks}
                </div>
            </div>
        )
    };
}

export default ScoreTable;

