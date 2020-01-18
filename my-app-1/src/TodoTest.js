import React from 'react'

class TodoTest extends React.Component {
  render() {
    console.log('todoTest  render')
    return (
      <div>{this.props.content}</div>
    )
  }
}
export default TodoTest