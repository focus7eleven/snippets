import React from 'react'
import UserService from 'services/user'
import { Button } from 'antd';

class AuthContainer extends React.Component {
  state = {
    root: {
      child1: {
        leave1: [123,234],
        leave2: 'l2'
      },
      child2: {
        leave3: false,
        leave4: () => {}
      }
    }
  }

 async handleLogin(test) {
    const res = await UserService.signIn('longcha', '123')
    console.log('res : ', res );
  }
  
  render() {
    return (
      <div>
        <div>
          <Button type="primary" onClick={this.handleLogin}>sign in</Button>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}


export default AuthContainer