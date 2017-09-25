import React, {Component} from 'react';
import Paper from 'material-ui/Paper'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import ProgressContainer from '../containers/ProgressContainer';
import SnackbarContainer from '../containers/SnackbarContainer';

class Header extends Component {
    render() {
        const style = {
            container: {
                position: 'fixed',
                width: '100%',
                maxWidth: 960,
                zIndex: 1000,
                top: 0,
                left: 0,
                textAlign: 'right'
            },
            image: {
                height: 100,
                float: 'left',
                marginLeft: 10,
                marginTop: 5
            },
            banner: {
                height: 58,
            },
            bannerText: {
                fontFamily: 'Roboto',
                fontWeight: 500
            },
            menu: {
                margin: 5
            }
        }

        return (
            <div className="Header" style={style.container}>
                <Paper style={style.banner} zDepth={2} rounded={false}>
                    <img style={style.image} src={require('../../images/cydercup_logo.png')} alt="None"/>
                    <ProgressContainer/>
                    <IconButton
                        onClick={this.props.refreshFunc}
                    >
                        <RefreshIcon />
                    </IconButton>
                    <IconMenu
                        style={style.menu}
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        onItemTouchTap={this.props.onItemTouchTap}
                    >
                        {this.props.items}
                    </IconMenu>
                </Paper>
                <SnackbarContainer />
            </div>
        )
    };
}

export default Header
