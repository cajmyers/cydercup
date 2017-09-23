import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setPage, fetchScores, fetchPlayersIfNeeded, fetchMatchList, fetchSinglesOrder} from '../../model/actions/actions'
import MenuItem from 'material-ui/MenuItem';
import Header from '../presentation/Header'

class HeaderContainer extends Component {
    selectPage = (event, child) => {
        console.log("selectPage event: ", event);
        console.log("selectPage child: ", child);
        this.props.dispatch(setPage(child.key));
    };

    handleRefresh = (event) => {
        console.log("handleRefresh event: ", event);
        this.props.dispatch(fetchScores());
        this.props.dispatch(fetchPlayersIfNeeded());
        this.props.dispatch(fetchMatchList());
        this.props.dispatch(fetchSinglesOrder());
    };

    render() {
        var items = [];
        items.push(<MenuItem key="teams" primaryText="Teams"/>);
        items.push(<MenuItem key="score" primaryText="Score"/>);
        return (
            <Header
                items={items}
                onItemTouchTap={this.selectPage}
                refreshFunc={this.handleRefresh}
            />
        )
    };
}

const mapStateToProps = (state/*, props*/) => {
    return {}
}

const ConnectedHeaderContainer = connect(mapStateToProps)(HeaderContainer)
export default ConnectedHeaderContainer
