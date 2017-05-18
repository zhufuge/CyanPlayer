import React from 'react';

class Subheader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const onClick = this.props.onClick;
    if (onClick !== void 0) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <h3 style={styles.h3}>{this.props.title}</h3>
        <a href="#" style={styles.a} onClick={this.handleClick}>更多></a>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
  h3: {
    display: 'inline',
    margin: 6,
    color: '#333',
    fontWeight: '400',
  },
  a: {
    textDecoration: 'none',
    margin: 6,
    color: '#666',
    fontSize: 14,
  }
};

export default Subheader;
