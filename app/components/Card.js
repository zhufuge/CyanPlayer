import React from 'react'

const DEFAULT = {
  src: '/img/0.png',
  value: '你打开苦难的里面，打开了我',
}

const curtail = (s, l=21) => (s.l < l) ? s : s.slice(0, l - 1) + '...'

class Card extends React.Component {
  handleClick(event) {
    event.preventDefault()
    this.props.onClick()
  }

  render() {
    return (
      <div style={styles.container}>
        <a href="#"
           style={{ textDecoration: 'none' }}
           onClick={(event) => this.handleClick(event)}>
          <img alt="[相关图片]" src={this.props.src || DEFAULT.src} style={styles.image}/>
          <p style={styles.p}>
            {this.props.value ? curtail(this.props.value) : DEFAULT.value}
          </p>
        </a>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 178,
    height: 236,
    margin: 10,
  },
  image: {
    width: 176,
    height: 176,
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
  },
  p: {
    marginTop: 5,
    color: '#333',
  }
}

export default Card
