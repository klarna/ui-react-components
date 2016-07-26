import React, { PropTypes } from 'react'

export default class Customize extends React.Component {
  getChildContext () {
    return { customize: this.props }
  }

  render () {
    return (
      <span>
        {this.props.children}
      </span>
    )
  }
}

Customize.childContextTypes = {
  customize: PropTypes.object
}
