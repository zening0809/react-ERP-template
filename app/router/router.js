import React, { Component } from 'react'
import { Router, Route, Link, Redirect, hashHistory, browserHistory, IndexRoute } from 'react-router'



import Login from '../containers/login/index'
import GroupManage from '../containers/powerManage/groupManage'



export default class Routers extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Login}
                    onLeave={({ params }) => {
                        console.log('离开了登录页 我们去首页');
                    }}
                >
                </Route>
                
            </Router>
        )
    }
}