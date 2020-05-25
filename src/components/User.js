import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p>Mistake! Refresh page</p>
    }

    if (isFetching) {
      return <p>Loading...</p>
    }

    if (name) {
      return <h3>Hello, {name}!</h3>
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Login
        </button>
      )
    }
  }
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}