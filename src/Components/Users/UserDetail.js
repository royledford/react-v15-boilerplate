import React, { Component } from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'
import './UserDetail.css'

export default class UserDetail extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }
  static defaultProps = {
    user: {
      id: 98248973,
      firstName: 'Jovany',
      lastName: 'Gislason',
      email: 'Flo.Ruecker@hotmail.com',
      cost: 19438603,
    },
  }

  render() {
    const {user} = this.props

    return (
      <div className="userdetail-wrap">
        <h1>{`${user.firstName} ${user.lastName}`} </h1>
        <hr />
        <p>{user.id}</p>
        <p>{user.email}</p>
        <p>{numeral(user.cost).format('$0,0.00')}</p>
      </div>
    )
  }
}
