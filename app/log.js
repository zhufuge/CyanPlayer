import React from 'react';

import InputButton from './inputButton';

class Login extends React.Component {
  render() {
    return (
      <form action="">
        <InputButton placeholder="用户名"/>
        <InputButton placeholder="密码" type="password"/>
        <InputButton
          value="登录"
          type="submit"
          style={styles.submit}/>
      </form>
    );
  }
}

const styles = {
  submit: {
    backgroundColor: '#26af5f',
    borderColor: '#26af5f',
  },
};

export default Login;

