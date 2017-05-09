import React from 'react';
import {cyan500} from 'material-ui/styles/colors';

class RadiusButton extends React.Component {

  render() {
    const props = this.props;
    return (
      <div style={styles.container}>
        {this.props.value}
      </div>
    );
  }
}

const styles = {
  container: {
    width: 280,
    height: 32,
    padding: 10,
    margin: 12,
    borderRadius: 32,
    backgroundColor: cyan500,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
  },
};

export default RadiusButton;
