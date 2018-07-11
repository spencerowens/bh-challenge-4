import React from 'react'
import { Redirect } from 'react-router-dom'
import default loginProcess
import * as actions from './actions'
import connected from 'State/connect'
import { selector as UsersState } from 'Process/users/reducer'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {email: 'bryce@helio.com',
          password: '123'
         }
       }

loginProcess = WrappedComponent => {
  class Login extends React.Component {
    handleClick = (email, password) => {
      this.props.userAuthActions.fetch(email, password)
    }

    render() {
      const { active } = this.props.UserState
      console.log('active', active)
      if (active)
        return <Redirect to={{ pathname: '/landing', state: { from: this.props.location } }} />

      return <WrappedComponent loginProcess={this.handleClick} {...this.props} />
    }
  }

  return connected([UsersState], [actions])(Login)
}

export default loginProcess
