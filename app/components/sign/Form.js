import React from 'react';
import {connect} from 'react-redux';
import {signin} from '../../actions';

import RaisedButton from 'material-ui/RaisedButton';
import {teal500} from 'material-ui/styles/colors';
import RadiusInput from './RadiusInput';
import Link from './Link';

const assign = Object.assign;

class Form extends React.Component {
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
          password = this.state.password,
          isSignin = this.state.isSignin;

    fetch("/Asign", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `username=${username}&password=${password}&isSignin=${isSignin}`
    }).then((res) => {
      if (res.ok) {
        this.props.setUsername(username);
        window.history.back(-1);
      } else if (res.status == 401) {
        this.setState({warning: true});
      }
    }, (e) => {
      console.log("连接失败！");
    });
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
        <Link
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

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => {
      dispatch(signin(username));
    }
  };
};

export default connect(null, mapDispatchToProps)(Form);
