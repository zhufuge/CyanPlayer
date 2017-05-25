import React from 'react';

import Add from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
    };
  }

  render() {
    const img = (this.state.src === '')
          ? <Add style={styles.add} color="white"/>
          : <img alt="" src="/img/0.png"/>;
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.imgContainer}>
            {img}
          </div>
        </div>
        <div style={styles.right}>
          <TextField
            hintText=""
            floatingLabelText="歌曲名"/>
          <TextField
            hintText=""
            floatingLabelText="专辑名"/>
          <TextField
            hintText=""
            floatingLabelText="歌手名"/>
          <RaisedButton
            label="上传歌曲"
            labelPosition="before"
            style={styles.upload}
            containerElement="label">
            <input type="file" style={styles.exampleImageInput} />
          </RaisedButton>
          <RaisedButton
            style={styles.submit}
            label="提交"
            primary={true} />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 820,
    display: 'flex',
    marginTop: 50,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    marginTop: 32,
    width: 370,
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
    width: 256,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 300,
    overflow: 'hidden',
    marginLeft: 30,
    border: '1px solid #666',
    borderRadius: 6,
    backgroundColor: '#eee',
  },
  add: {
    height: 150,
    width: 150,
  },
  upload: {
    marginTop: 20,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  submit: {
    marginTop: 20,
  },
};

export default Upload;
