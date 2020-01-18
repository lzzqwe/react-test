import React from 'react'

import TodoItem from './TodoItem'

import TodoTest from './TodoTest'
// Fragment是占位符
class TodoList extends React.Component {
  constructor(props) {
    super(props)  // 调用父类的构造函数
    this.state = { //当state和props变化时 组件的render函数也要变化 即数据变化 视图也变化
      arr:['学编程','学英语','学游泳'],
      inputValue:''
    }
    this.textInput = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDeleItem = this.handleDeleItem.bind(this)
  }
  handleSubmit() {

    // let list = [...this.state.arr]
    // list.unshift(this.state.inputValue)
    // this.setState({
    //   arr:list,
    //   inputValue:''
    // })   
    // state 不可直接修改
    this.setState({
      arr:[...this.state.arr,this.state.inputValue],
      inputValue:''
    })
  }
  handleChange(e) {
    console.log(this.textInput.current.value)
    this.setState({
      inputValue:e.target.value
    })
  }
  handleDeleItem(index) {
    let lis = [...this.state.arr]
    lis.splice(index,1)
    this.setState({
      arr:lis
    })
  }
  getTodoItem() {
    return this.state.arr.map((item,index) => {
      return <TodoItem key={index} handleDeleItem={this.handleDeleItem} content={item} index={index}/>
    })
  }
  render() {
    const {inputValue} = this.state
    console.log('render')
    return (
      <React.Fragment>
        <div>  {/*label是扩大点击的区域*/}
          <label htmlFor="son">请输入:</label>
          <input ref={this.textInput} id='son' value={inputValue} onChange={this.handleChange} type="text"/>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        <TodoTest content={inputValue}/>
      </React.Fragment>
    )
  }
}
export default TodoList