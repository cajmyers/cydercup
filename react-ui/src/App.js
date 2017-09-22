import React, { Component } from 'react';
import {Provider} from 'react-redux'
import './stylesheets/App.css';
import './stylesheets/skeleton/skeleton.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import myBaseTheme from './themes/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PageScoreContainer from './components/containers/PageScoreContainer';
import PageTeamsContainer from './components/containers/PageTeamsContainer';
import HeaderContainer from './components/containers/HeaderContainer';
import {connect} from 'react-redux'
import {fetchPlayersIfNeeded} from './model/actions/actions'


injectTapEventPlugin();

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlayersIfNeeded());
  }

  render() {
    const style = {
      app: {
        textAlign: 'center',
        maxWidth: 960
      },
      inner: {
        fontFamily: 'Roboto',
        marginTop: 52
      }
    }
    console.log("App store: ", this.props.store.getState())
    console.log("App props: ", this.props)
    var page = null;
    switch(this.props.pageId) {
      case 'teams': {
        page = <PageTeamsContainer />;
        break;
      }
      case 'score': {
        page = <PageScoreContainer />;
        break;
      }
      default: {
        page = <PageTeamsContainer />;
      }
    }
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider muiTheme={getMuiTheme(myBaseTheme)}>
          <div style={style.app}>
            <HeaderContainer />
            <div style={style.inner}>
              {page}
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

const mapStateToProps = (state/*, props*/) => {
    return {
        pageId: state.actionReducer.pageId
    }
}

const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp

