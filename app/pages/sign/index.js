import React from 'react'

import Form from './Form'

class Sign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    }
  }

  updateWindow() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindow.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindow.bind(this))
  }

  render() {
    return (
      <div className="flex-c-c" style={Object.assign({
          height: this.state.height,
          width: this.state.width,
      }, styles.container)}>
        <div className="flex-c-c" style={styles.content}>
          <h1 style={styles.h1}>欢迎进入我的世界</h1>
          <p style={styles.p}>
            人生的一切境界，上至高山之巅，下至低谷之地，
          </p>
          <p style={styles.p}>在某些人眼里视乎已为他们的先辈踏遍，</p>
          <p style={styles.p}>而所有的东西也无一不为前人关注所及。</p>
        </div>
        <Form />
      </div>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'column',
    background: `no-repeat bottom url('../img/background.jpg')`,
  },
  content: {
    flexDirection: 'column',
    marginBottom: 12,
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
}

export default Sign
