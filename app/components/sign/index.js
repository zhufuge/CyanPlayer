import React from 'react';

import Form from './Form';

class Sign extends React.Component {
  render() {
    return (
      <div className="log" style={styles.container}>
        <div style={Object.assign({marginBottom: 12}, styles.container)}>
          <h1 style={styles.h1}>欢迎进入</h1>
          <p style={styles.p}>
            人生的一切境界，上至高山之巅，下至低谷之地，
          </p>
          <p style={styles.p}>在某些人眼里视乎已为他们的先辈踏遍，</p>
          <p style={styles.p}>而所有的东西也无一不为前人关注所及。</p>
        </div>
        <Form />
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
  p: {
    color: 'white',
    marginBlockStart: '0em',
    marginBlockEnd: '0.5em',
  },
};

export default Sign;
