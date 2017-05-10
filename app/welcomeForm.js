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
      isSignin: true
    };

    this.setSignin = this.setSignin.bind(this);
  }

  setSignin(signin) {
    this.setState({isSignin: signin});
  }

  render() {
    const isSignin = this.state.isSignin;
    return (
      <form action="" style={styles.container}>
        <RadiusInput placeholder="用户名"/>
        <RadiusInput placeholder="密码" type="password"/>
        <RaisedButton
          type="submit"
          label={isSignin ? '登录' : '注册'}
          labelStyle={{fontSize: 20}}
          primary={true}
          style={assign({margin: 10}, styles.submit) }
          buttonStyle={assign({backgroundColor: teal500}, styles.submit)}
          overlayStyle={styles.submit}/>
        <br/>
        <WelcomeLink
          isSignin={isSignin}
          setSignin={(s) => this.setState({isSignin: s})}
          />
      </form>
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
