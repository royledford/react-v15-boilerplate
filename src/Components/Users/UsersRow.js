import React, { Component } from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'
import './UsersRow.css'

export default class UsersRow extends Component {
  static propTypes = {
    key: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
  }
  static defaultProps = {
    key: 0,
    user: {
      id: 98248973,
      firstName: 'Jovany',
      lastName: 'Gislason',
      email: 'Flo.Ruecker@hotmail.com',
      cost: 19438603,
    },
  }

  render() {
    const { key, user } = this.props
    return (
      <tr key={key} className="usersrow-row">
        <td>
          <a href="#">Delete</a>
        </td>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{numeral(user.cost).format('$0,0.00')}</td>
      </tr>
    )
  }
}
