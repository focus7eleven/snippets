import React from 'react'
import UserService from 'services/user'
import { Button } from 'antd';

export default class AuthContainer extends React.Component {

  async handleLogin() {
    const res = await UserService.signIn('longcha', '123')
    console.log('res : ', res );
  }
  
  render() {
    return (
      <div>
        <div>
          <span> auth </span>
          <Button onClick={this.handleLogin}>sign in</Button>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}