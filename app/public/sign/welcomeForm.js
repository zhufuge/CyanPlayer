import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {teal500} from 'material-ui/styles/colors';
import RadiusInput from './RadiusInput';
import WelcomeLink from './welcomeLink';

const assign = Object.assign;

class WelcomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: true,
      username: '',
      password: '',
      warning: false,
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.switchSign = this.switchSign.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.switchWarning = this.switchWarning.bind(this);
  }

  handleUsername(value) {
    this.setState({username: value});
  }

  handlePassword(value) {
    this.setState({password: value});
  }

  switchSign(signin) {
    this.setState({isSignin: signin});
  }

  handleTouchTap(event) {
    const username = this.state.username,
          password = this.state.password;
    if (username === '123' && password === '123') {
      window.history.back(-1);
    } else {
      this.setState({warning: true});
    }
  }

  switchWarning() {
    this.setState({warning: false});
  }

  render() {
    const state = this.state,
          isSignin = state.isSignin;
    return (
      <div style={styles.container}>
        <RadiusInput
          placeholder="用户名"
          warning={this.state.warning}
          switchWarning={this.switchWarning}
          getValue={this.handleUsername}/>
        <RadiusInput
          placeholder="密码"
          type="password"
          warning={this.state.warning}
          switchWarning={this.switchWarning}
          getValue={this.handlePassword}/>
        <RaisedButton
          label={isSignin ? '登录' : '注册'}
          labelStyle={{fontSize: 20}}
          primary={true}
          onTouchTap={this.handleTouchTap}
          style={assign({margin: 10}, styles.submit) }
          buttonStyle={assign({backgroundColor: teal500}, styles.submit)}
          overlayStyle={styles.submit}/>
        <br/>
        <WelcomeLink
          isSignin={isSignin}
          switchSign={(s) => this.setState({isSignin: s})}
          />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    width: 320,
    height: 46,
    borderRadius: 32,
  },
};

module.exports = WelcomeForm;
