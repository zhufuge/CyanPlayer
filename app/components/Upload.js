import React from 'react';

import Add from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      filename: '上传歌曲',
    };

    this.fileSelected = this.fileSelected.bind(this);
    this.imgSelected = this.imgSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  imgSelected() {
    const file = this.imgInput.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (reader.error) {
          console.log('加载失败');
        } else {
          this.setState({src: event.target.result});
        }
      };

      reader.readAsDataURL(file);
    }
  }
  fileSelected() {
    const file = this.fileInput.files[0];
    if (file) {
      this.setState({filename: file.name});
    }
  }

  handleSubmit() {
    alert('上传成功');
  }

  render() {
    const img = (this.state.src === '')
          ? <Add style={styles.add} color="white"/>
          : <img alt="" src={this.state.src}/>;
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.imgContainer}>
            {img}
            <input
              ref={ref => this.imgInput = ref}
              style={styles.imgInput}
              onChange={this.imgSelected}
              accept="image/*"
              type="file" />
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
            label={this.state.filename}
            labelPosition="before"
            style={styles.upload}
            containerElement="label">
            <input
              ref={(ref) => this.fileInput = ref}
              type="file"
              style={styles.fileInput}
              accept="audio/*"
              onChange={this.fileSelected}/>
          </RaisedButton>
          <RaisedButton
            style={styles.submit}
            label="提交"
            onTouchTap={this.handleSubmit}
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
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginLeft: 30,
    border: '1px solid #666',
    borderRadius: 6,
    backgroundColor: '#eee',
  },
  imgInput: {
    position: 'absolute',
    cursor: 'pointer',
    width: 300,
    height: 300,
    opacity: 0,
  },
  add: {
    height: 150,
    width: 150,
  },
  upload: {
    marginTop: 20,
  },
  fileInput: {
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
