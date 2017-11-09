import React, { Component } from 'react'
import userService from '../../Services/userService'
import UsersRow from './UsersRow'
import './Users.css'

export default class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      dataLoading: false,
    }
  }

  componentWillMount() {
    this.setState({ dataLoading: false })

    userService.getUsers().then(users => {
      this.setState({
        users: users,
        dataLoading: false,
      })
    })
  }

  render() {

    const renderUsers = this.state.users.map(user => <UsersRow key={user.id} user={user} />)

    return (
      <div>
        <table id="users" className="users-table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{renderUsers}</tbody>
        </table>
      </div>
    )
  }
}
