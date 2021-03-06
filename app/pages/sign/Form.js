import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUsername } from '../../actions'
import Ajax from '../../common/Ajax.js'

import RaisedButton from 'material-ui/RaisedButton'
import { teal500 } from 'material-ui/styles/colors'
import RadiusInput from './RadiusInput'
import Link from './Link'

const assign = Object.assign

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isIn: true,
      username: '',
      password: '',
      warning: false,
    }
  }
  handleClicked() {
    const state = this.state,
      username = state.username
    Ajax('sign', username, state.password, state.isIn).then((res) => {
      if (res.ok) {
        this.props.setUsername(username)
        this.props.history.push('/')
      } else if (res.status == 401) {
        this.setState({ warning: true })
      }
    })
  }

  render() {
    const state = this.state,
      isIn = state.isIn
    return (
      <div className="flex-c-c" style={styles.container}>
        <RadiusInput
          placeholder="用户名"
          warning={state.warning}
          switchWarning={() => this.setState({ warning: false })}
          getValue={(username) => this.setState({ username })}/>
        <RadiusInput
          placeholder="密码"
          type="password"
          warning={state.warning}
          switchWarning={() => this.switchWarning}
          getValue={(password) => this.setState({ password })}/>
        <RaisedButton
          label={isIn ? '登录' : '注册'}
          labelStyle={{ fontSize: 20 }}
          primary={true}
          onClick={() => this.handleClicked()}
          style={assign({ margin: 10 }, styles.submit) }
          buttonStyle={assign({ backgroundColor: teal500 }, styles.submit)}
          overlayStyle={styles.submit}/>
        <br/>
        <Link
          isSignin={isIn}
          switchSign={(isIn) => this.setState({ isIn })} />
      </div>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'column',
  },
  submit: {
    width: 320,
    height: 46,
    borderRadius: 32,
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => dispatch(setUsername(username)),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Form))
