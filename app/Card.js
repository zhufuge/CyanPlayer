import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <img alt="" src="/img/0.png" style={styles.image}/>
        <p style={styles.p}>你何以双眼好像是流泪，已再见不再认。</p>
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
    borderColor: '#ccc',
    borderStyle: 'solid',
  },
  p: {
    marginTop: 5,
    color: '#333',
  }
};

export default Card;
