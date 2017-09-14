//
// Match.js
import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import ScoreTableContainer from '../containers/ScoreTableContainer';

class Match extends Component {
    render() {
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
                height: 80,
            },
            clydes: {
                backgroundColor: "blue",
                color: "blue",
                height: 80,
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
                height: 16,
            },
            scoreBlock: {
                color: "#aaaaaa",
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
                fontSize: 32,
                fontWeight: 900,
            },
            nameContainerSingle: {
                marginTop: 20,
            }
        };

        var score = null;
        if (this.props.up > 0) {
            score = (
                <div style={style.scoreBlockUp}>
                    <div style={style.scoreValue}>{Math.abs(this.props.up)}</div>
                    <div style={style.scoreText}>up</div>
                </div>
            );
        } else if (this.props.up < 0) {
            score = (
                <div style={style.scoreBlockDown}>
                    <div style={style.scoreValue}>{Math.abs(this.props.up)}</div>
                    <div style={style.scoreText}>up</div>
                </div>
            );
        }
        else  {
            score = (
                <div style={style.scoreBlock}>
                    <div style={style.scoreText}>All Square</div>
                </div>
            );
        }

        var nameStyle = style.nameContainerSingle;

        var mudhutter2 = null;
        if (this.props.mudhutter2) {
            nameStyle = null;
            mudhutter2 = (
                <div>
                    <div style={style.small}>{this.props.mudhutter2.firstName}</div>
                    <div style={style.surname}>{this.props.mudhutter2.surname}</div>
                </div>
            );
        }
        var clyde2 = null;
        if (this.props.clyde2) {
            nameStyle = null;
            clyde2 = (
                <div>
                    <div style={style.small}>{this.props.clyde2.firstName}</div>
                    <div style={style.surname}>{this.props.clyde2.surname}</div>
                </div>
            );
        }

        var mudhutter1 = null;
        if (this.props.mudhutter1) {
            mudhutter1 = (
                <div style={nameStyle}>
                    <div style={style.small}>{this.props.mudhutter1.firstName}</div>
                    <div style={style.surname}>{this.props.mudhutter1.surname}</div>
                </div>
            );
        }
        var clyde1 = null;
        if (this.props.clyde1) {
            clyde1 = (
                <div style={nameStyle}>
                    <div style={style.small}>{this.props.clyde1.firstName}</div>
                    <div style={style.surname}>{this.props.clyde1.surname}</div>
                </div>
            );
        }

        console.log("Match props: ", this.props);
        return (
            <div className="container" style={style.container}>
                <div className="row">
                    <div className="one column" style={style.mudhutters}>.</div>
                    <div className="three columns" style={style.mudhutterNames}>
                        {mudhutter1}
                        {mudhutter2}
                    </div>
                    <div className="four columns" style={style.small}>
                        <FlatButton
                            label={"Match " + this.props.match}
                            labelPosition="before"
                            secondary={true}
                            icon={<EditIcon/>}
                        />
                        {score}
                    </div>
                    <div className="three columns" style={style.clydeNames}>
                        {clyde1}
                        {clyde2}
                    </div>
                    <div className="one column" style={style.clydes}>.</div>
                </div>
                <ScoreTableContainer
                    match={this.props.match}
                />
            </div>
        )
    };
}

export default Match;

/*
 <FlatButton
 label={"Match " + this.props.match}
 labelPosition="before"
 primary={true}
 icon={<EditIcon/>}
 />
 */