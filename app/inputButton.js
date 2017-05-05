import React from 'react';

class InputButton extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <input name="" type="text" value="" style={styles.input}/>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 320,
    height: 32,
    padding: 10,
    margin: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 32,
    borderColor: "white",
    backgroundColor: "transparent",
  },
  input: {
    backgroundColor: "transparent",
    border: 'none',
  },
};

export default InputButton;
