import React from 'react';
import {render} from 'react-dom';

import RadiusInput from './RadiusInput';
import RadiusButton from './RadiusButton';
import RaisedButton from 'material-ui/RaisedButton';

class Welcome extends React.Component {
  render() {
    return (
      <div className="log" style={styles.container}>
        <h1 style={styles.h1}>欢迎进入</h1>
        <p style={styles.description}>
          人生的一切境界，上至高山之巅，下至低谷之地，
        </p>
        <p style={styles.description}>在某些人眼里视乎已为他们的先辈踏遍，</p>
        <p style={styles.description}>而所有的东西也无一不为前人关注所及。</p>
        <form action="">
          <RadiusInput placeholder="用户名"/>
          <RadiusInput placeholder="密码" type="password"/>
          <RaisedButton
            type="submit"
            label="登录"
            labelStyle={{fontSize: 20}}
            primary={true}
            style={styles.submit}
            buttonStyle={styles.submitButton}
            overlayStyle={styles.submitButton}/>
        </form>
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
  h1: {
    fontSize: 45,
    fontWeight: '100',
    color: 'white',

    marginBlockStart: '0em',
    marginBlockEnd: '0.3em',
  },
  description: {
    color: 'white',
    marginBlockStart: '0em',
    marginBlockEnd: '0.5em',
  },
  submit: {
    width: 320,
    height: 46,
    borderRadius: 32,
    margin: 12,
  },
  submitButton: {
    width: 320,
    height: 46,
    borderRadius: 32,
  }
};

module.exports = Welcome;
