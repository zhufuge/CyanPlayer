import React from 'react';
import {connect} from 'react-redux';
import {signin} from '../actions';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MusicNote from 'material-ui/svg-icons/image/music-note';
import Avatar from 'material-ui/Avatar';
import Icon_DropDown from 'material-ui/svg-icons/Navigation/arrow-drop-down';
import {cyan500, cyan200} from 'material-ui/styles/colors';

import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };

    this.handleInfoButton = this.handleInfoButton.bind(this);
    this.handleOnRequestChange = this.handleOnRequestChange.bind(this);
    this.handleQuit = this.handleQuit.bind(this);
  }

  signButton() {
    const dropDown = <Icon_DropDown color="white"/>;
    return (
      <Link to="/sign">
        <FlatButton
          target="_blank"
          labelPosition="before"
          label="登录"
          labelStyle={styles.username}
          icon={dropDown}
          />
      </Link>
    );
  }

  infoButton() {
    const dropDown = <Icon_DropDown color="white"/>;
    return (
      <FlatButton
        target="_blank"
        labelPosition="before"
        label={this.props.username}
        labelStyle={styles.username}
        icon={dropDown}
        onTouchTap={this.handleInfoButton}
        />
    );
  }

  handleInfoButton() {
    this.setState({openMenu: true});
  }

  handleOnRequestChange(value){
    this.setState({openMenu: value});
  }

  handleQuit() {
    this.props.quit('登录');
  }

  render() {
    const iconButton = <IconButton></IconButton>,
          info = (this.props.username === '登录')
          ? this.signButton()
          : this.infoButton();
    return (
      <div style={styles.container}>
        <div style={styles.side}>
          <div>
            <MusicNote style={styles.album} color="white" hoverColor={cyan200}/>
          </div>
          <h1 style={styles.h1}>音乐</h1>
        </div>
        <div style={styles.side}>
          <Avatar size={32}>L</Avatar>
          {info}
          <IconMenu
            iconButtonElement={iconButton}
            open={this.state.openMenu}
            onRequestChange={this.handleOnRequestChange}>
            <MenuItem value="1" primaryText="其他" />
            <MenuItem
              value="quit"
              onTouchTap={this.handleQuit}
              primaryText="退出登录" />
          </IconMenu>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
	  zIndex: 100,

    width: '100%',
    height: 54,
	  paddingLeft: 32,
	  paddingRight: 32,
	  boxSizing: 'border-box',
	  boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)',
	  borderRadius: 0,
    backgroundColor: cyan500,
    color: 'white',

    display: 'flex',
    justifyContent: 'space-between',
  },
  side: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  album: {
    height: 42,
    width: 42,
  },
  h1: {
    margin: 0,
	  paddingTop: 0,
	  fontSize: 24,
	  fontWeight: 400,
    flex: 1,
    textAlign: 'center',
  },
  username: {
    color: 'white',
  }
};

const mapStateToProps = (state) => {
  return {
    username: state.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    quit: (username) => {
      dispatch(signin(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
