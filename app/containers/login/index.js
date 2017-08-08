import React from 'react'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="用户名"/>
          <input type="password" placeholder="密码"/>
          <Link to="/home">登录</Link>
        </div>
      </div>
    )
  }
}