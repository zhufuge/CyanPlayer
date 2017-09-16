import React from 'react'

import Play from 'material-ui/svg-icons/av/play-circle-outline'

const DEFAULT = {
  src: '/img/0.png',
  value: '你打开苦难的里面，打开了我',
}

const assign = Object.assign
const curtail = (s, l=21) => (s.l < l) ? s : s.slice(0, l - 1) + '...'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverImg: false,
      hoverText: false,
    }
  }

  render() {
    const props = this.props
    return (
      <div style={assign({}, styles.container, props.style)}
           onClick={() => this.props.onClick()}>
        <div
          onMouseOver={() => this.setState({ hoverImg: true })}
          onMouseOut={() => this.setState({ hoverImg: false })}
          style={{ position: 'relative' }}>
          <img
            src={this.props.src || DEFAULT.src}
            style={assign({}, styles.image, props.imgStyle)}/>
          {this.state.hoverImg ? <Play style={styles.mask}/> : null}
        </div>
        <p
          onMouseOver={() => this.setState({ hoverText: true })}
          onMouseOut={() => this.setState({ hoverText: false })}
          style={assign(
          { color: this.state.hoverText ? '#333' : '#555' },
          styles.text,
          props.textStyle,
          )}>
          {props.value ? curtail(props.value) : DEFAULT.value}
        </p>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 178,
    height: 236,
    cursor: 'pointer',
  },
  image: {
    width: 176,
    height: 176,
    border: '1px solid #eee',
  },
  mask: {
    width: 32,
    height: 32,
    position: 'absolute',
    color: '#fffc',
    bottom: 12,
    right: 9,
  },
  text: {
    marginTop: 5,
    fontSize: 15,
  }
}

export default Card
