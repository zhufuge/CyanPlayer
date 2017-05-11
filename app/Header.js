import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import MusicNote from 'material-ui/svg-icons/Image/music-note';
import Avatar from 'material-ui/Avatar';
import DropDown from 'material-ui/svg-icons/Navigation/arrow-drop-down';
import {cyan500, cyan200} from 'material-ui/styles/colors';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("touchTap");
  }

  render() {
    const dropDown = <DropDown color="white"/>;
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
          <FlatButton
            target="_blank"
            labelPosition="before"
            label={"Alice"}
            labelStyle={styles.userName}
            icon={dropDown}
            onClick={this.handleClick}
            />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
	  backgroundColor: cyan500,
	  boxSizing: 'border-box',
	  boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)',
	  borderRadius: 0,
	  position: 'relative',
	  zIndex: 1100,
	  width: '100%',
    height: 64,
	  display: 'flex',
	  paddingLeft: 32,
	  paddingRight: 32,
    color: 'white',

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
  userName: {
    color: 'white',
  }
};

module.exports = Header;
