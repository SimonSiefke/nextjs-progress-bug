import React from 'react'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = (res && res.statusCode) || (err && err.statusCode)
    return { statusCode }
  }

  render() {
    return <div></div>
  }
}

export default Error
