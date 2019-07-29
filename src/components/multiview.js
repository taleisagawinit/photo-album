import React, { Component } from 'react'


class MultiView extends Component {
  render() {
    return (
      <div>
          <img src={this.props.image} alt="albumpic"></img>
          <p>{this.props.title}</p>
      </div>

    )
  }
}

export default MultiView