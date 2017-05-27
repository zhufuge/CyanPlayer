import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    const imgSrc = this.props.src || '/img/0.png';
    let value = '你打开苦难的里面，打开了我';
    if (this.props.value !== void 0) {
      let string = this.props.value.toString();
      value = (string.length < 21) ? string : string.slice(0, 20) + '...';
    }

    return (
      <div style={styles.container}>
        <a href="#"
           style={{textDecoration: 'none'}}
           onClick={this.handleClick}>
          <img alt="[相关图片]" src={imgSrc} style={styles.image}/>
          <p style={styles.p}>{value}</p>
        </a>
      </div>
    );
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
};

export default Card;
