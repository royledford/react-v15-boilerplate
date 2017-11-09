import React, { Component } from 'react'

class Play extends Component {
  constructor(props) {
    super(props)
    this.state = {
      someState: false,
    }
  }

  render() {
    return (
      <div>
        <br />

        <h3 style={{ marginLeft: 20 }}>CompName</h3>
        <hr />
        <br />
        <div
          style={{
            height: 200,
            paddingLeft: 50,
          }}
        >
          <h1>Hello</h1>
        </div>
        <br />
      </div>
    )
  }
}

export default Play
