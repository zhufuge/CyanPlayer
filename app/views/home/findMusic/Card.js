import React from 'react'

import Play from 'material-ui/svg-icons/av/play-circle-outline'
import { curtail } from '../../../common/util'

const DEFAULT = {
  src: '/img/0.png',
  value: '你打开苦难的里面，打开了我',
}

const assign = Object.assign

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
      <div style={assign({}, styles.container, props.style)}>
        <div
          onMouseOver={() => this.setState({ hoverImg: true })}
          onMouseOut={() => this.setState({ hoverImg: false })}
          onClick={() => this.props.onClick()}
          style={{ position: 'relative', cursor: 'pointer' }}>
          <img
            src={this.props.src || DEFAULT.src}
            style={assign({}, styles.image, props.imgStyle)}/>
          { this.props.primary && this.state.hoverImg
            // FIXME hover bug
            ? <Play style={styles.mask}/>
            : null}
        </div>
        <span
          onMouseOver={() => this.setState({ hoverText: true })}
          onMouseOut={() => this.setState({ hoverText: false })}
          onClick={() => this.props.onClick()}
          style={assign(
              { color: this.state.hoverText ? '#333' : '#555' },
              styles.text,
              props.textStyle,
          )}>
          {props.value ? curtail(props.value, 21) : DEFAULT.value}
        </span>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 178,
    height: 236,
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
    zIndex: 100,
  },
  text: {
    margin: '5px 0',
    fontSize: 15,
    cursor: 'pointer',
  }
}

export default Card
