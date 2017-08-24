// 
// PageTeamsContainer.js
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


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
            h1: {
                fontFamily: "Roboto",
                fontSize: 22,
                fontWeight: 500,
                marginTop: 15,
                display: "inline-block",
            },
            addButton: {
                marginLeft: 20,
                marginTop: 8,
            }
        }
        let players = [];
        if (this.props.players) {
            this.props.players.forEach(function(player, i) {
                players.push(<span key={i}>{player.name}</span>);
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
                    <div>
                        <h1 style={style.h1}>
                            Players
                        </h1>
                        <FloatingActionButton mini={true} style={style.addButton} backgroundColor="DarkSeaGreen">
                            <ContentAdd />
                        </FloatingActionButton>
                        <div>
                            {players}
                        </div>
                    </div>
                    <div>
                        <h1 style={style.h1}>
                            Players
                        </h1>
                        <FloatingActionButton mini={true} style={style.addButton} backgroundColor="DarkSeaGreen">
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
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
