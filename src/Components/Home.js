import React, { Component } from 'react'
import Users from './Users/Users'
import './Home.css'

class Home extends Component {

  render() {
    return (
      <div className="home-wrap">
        <Users />
      </div>
    )
  }
}

export default Home
