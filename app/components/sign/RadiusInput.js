import React from 'react';
import {teal300} from 'material-ui/styles/colors';

class RadiusInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      value: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.warning !== this.props.warning) {
      if (nextProps.warning !== false){
        this.setState({color: '#FF5722'});
      } else {
        this.setState({color: 'white'});
      }
    }
  }

  handleClick() {
    if (this.Input !== null) {
      this.Input.focus();
    }
    this.setState({color: teal300});
    this.props.switchWarning();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleBlur() {
    this.setState({color: 'white'});
    this.props.getValue(this.state.value);
  }

  render() {
    const props = this.props;
    return (
      <div style={styles.container(this.state.color)}
           onClick={this.handleClick}>
        <input
          type={props.type}
          placeholder={props.placeholder}
          ref={(ref) => this.Input = ref}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          style={styles.input}/>
      </div>
    );
  }
}

const styles = {
  container: (bc) => ({
    width: 300,
    height: 26,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 26,
    borderColor: bc,
    backgroundColor: "transparent",

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  input: {
    backgroundColor: "transparent",
    border: 'none',
    color: 'white',
    height: 30,
    width: 200,
    fontSize: 18,
  },
};

export default RadiusInput;
