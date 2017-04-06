import React, { Component } from 'react';
import './stylesheets/App.css';
import './stylesheets/skeleton/skeleton.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './components/Header';
import Title from './components/Title';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          message: "Hi " + json.results[0].name,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
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
    return (
      <MuiThemeProvider>
        <div style={style.app}>
          <Header />
          <div style={style.inner}>
            <Title />
            <div className="container">
              <RaisedButton label="Default" />
              <p className="App-intro">
                {this.state.fetching
                  ? 'Fetching message from API'
                  : this.state.message}
              </p>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
