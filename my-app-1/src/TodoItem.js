import React from 'react'

import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }
  deleteItem () {
   
    const {handleDeleItem,index} = this.props
    // 遍历时 索引传过来可以直接调用  调用父组件传过来的方法
    handleDeleItem(index)
  }
  render() {
    const { index, content } = this.props
    console.log('TodoItem render')
    return (
      <React.Fragment>
        <li
          key={index}
          onClick={this.deleteItem}
        >
          {content}
        </li>
      </React.Fragment>
    )
  }
}
// 组件传参的限制
TodoItem.propTypes = {
  handleDeleItem:PropTypes.func.isRequired,
  index:PropTypes.number
}
// 组件的默认传参
TodoItem.defaultProps = {
  index:88 
}
export default TodoItem