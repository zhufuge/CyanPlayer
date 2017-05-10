import React from 'react';

import {teal400} from 'material-ui/styles/colors';
const assign = Object.assign;

class WelcomeLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignin = this.handleSignin.bind(this);
  }

  handleSignin(e, signin) {
    e.preventDefault();
    if (this.props.isSignin === !signin) {
      this.props.setSignin(signin);
    }
  }

  render() {
    const isSignin = this.props.isSignin;
    return (
      <div style={styles.container}>
        <div style={styles.hr}></div>
        <a style={isSignin ? styles.active : styles.a}
           href="#signin" onClick={(e) => this.handleSignin(e, true)}>登录</a>
        <span style={styles.a}> · </span>
        <a style={(!isSignin) ? styles.active : styles.a}
           href="#signup" onClick={(e) => this.handleSignin(e, false)}>注册</a>
        <div style={styles.hr}></div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: 12,
  },
  a: {
    color: 'white',
    fontSize: 18,
    textDecoration: 'none',
  },
  active: {
    color: teal400,
    fontSize: 18,
    textDecoration: 'none',
  },
  hr: {
    display: 'inline-block',
    height: 1.6,
    backgroundColor: 'white',
    width: 100,
    margin: 6,
  },
};

module.exports = WelcomeLink;
