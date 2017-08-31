// 
// PageTeamsContainer.js
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TeamContent from '../presentation/TeamContent';


class TeamContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({slideIndex: value,});
    };

    deletePlayer = (id) => {
        console.log("deletePlayer id: ", id);
    }

    render () {
        const style = {
            headline: {
                fontSize: 24,
                paddingTop: 16,
                marginBottom: 12,
                fontWeight: 400,
            },
            content: {
                backgroundColor: "white",
            },
            mudhutterTab: {
                color: "white",
                fontSize: 20,
                backgroundColor: "red",
                height: 50,
            },
            clydebankTab: {
                color: "white",
                fontSize: 20,
                backgroundColor: "blue",
                height: 50,
            },
            disabledTab: {
                backgroundColor: "lightgrey",
                height: 50,
            },
        };

        let mudhutters = [];
        let clydebanks = [];
        if (this.props.players) {
            this.props.players.forEach(function(player) {
                if (player.team === "mudhutters") {
                    mudhutters.push(player);
                } else {
                    clydebanks.push(player);
                }
            })
        }


        let mudhutterTabStyle = style.mudhutterTab;
        let clydebankTabStyle = style.disabledTab;
        if (this.state.slideIndex === 1) {
            mudhutterTabStyle = style.disabledTab;
            clydebankTabStyle = style.clydebankTab;
        }
        console.log("MatchTabs props: ", this.props)
        return (
            <div className="TeamContainer">
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}                    
                >
                    <Tab label="Mudhutters" style={mudhutterTabStyle} value={0} />
                    <Tab label="Clydebank" style={clydebankTabStyle} value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    style={style.content}
                    >
                    <TeamContent players={mudhutters} team="mudhutters"/>
                    <TeamContent players={clydebanks} team="clydebank"/>
                </SwipeableViews>
            </div>
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {
        players: state.actionReducer.players,
        state: state
    }
}

const ConnectedTeamContainer = connect(mapStateToProps)(TeamContainer)
export default ConnectedTeamContainer
