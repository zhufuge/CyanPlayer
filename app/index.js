import React from 'react';
import {render} from 'react-dom';

import Login from './log';

class App extends React.Component {
  render() {
    return (
      <div className="log" style={styles.container}>
        <h1 style={styles.h1}>欢迎</h1>
        <p style={styles.description}>
          人生的一切境界，上至高山之巅，下至低谷之地，
        </p>
        <p style={styles.description}>在某些人眼里视乎已为他们的先辈踏遍，</p>
        <p style={styles.description}>而所有的东西也无一不为前人关注所及。</p>
        <Login />
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

    marginBlockStart: '0.3em',
    marginBlockEnd: '0.3em',
  },
  description: {
    color: 'white',
    marginBlockStart: '0.5em',
    marginBlockEnd: '0.5em',
  },
};

render(<App />, document.getElementById('root'));
