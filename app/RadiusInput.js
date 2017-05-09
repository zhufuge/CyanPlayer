import React from 'react';
import {cyan300} from 'material-ui/styles/colors';

class RadiusInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick() {
    if (this.Input !== null) {
      this.Input.focus();
    }
    this.setState({onClick: true});
  }

  handleBlur() {
    this.setState({onClick: false});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.onClick !== nextState.onClick)
      ? true
      : false;
  }

  render() {
    const props = this.props;
    return (
      <div style={this.state.onClick ? styles.containerClicked : styles.container}
           onClick={this.handleClick}>
        <input
          name=""
          ref={(ref) => this.Input = ref}
          type={props.type || "text"}
          value={props.value}
          placeholder={props.placeholder}
          onBlur={this.handleBlur}
          style={styles.input}/>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 300,
    height: 26,
    padding: 10,
    margin: 12,
    marginTop: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 26,
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
    width: 200,
    fontSize: 18,
  },
  containerClicked: {
    width: 300,
    height: 26,
    padding: 10,
    margin: 12,
    marginTop: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 26,
    borderColor: "white",
    borderColor: cyan300,
    backgroundColor: "transparent",

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default RadiusInput;
