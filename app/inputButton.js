import React from 'react';

class InputButton extends React.Component {
  render() {
    const props = this.props,
          container = Object.assign(styles.container, props.style),
          inputStyle = Object.assign(styles.input, props.contentStyle);
    return (
      <div style={container}>
        <input name=""
               type={props.type || "text"}
               value={props.value}
               placeholder={props.placeholder}
               style={inputStyle}/>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 280,
    height: 32,
    padding: 10,
    margin: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 32,
    borderColor: "white",
    backgroundColor: "transparent",

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: "transparent",
    border: 'none',
    color: 'white',
    height: 30,
    fontSize: 20,
  },
};

export default InputButton;
