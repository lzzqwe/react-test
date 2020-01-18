import React from 'react'
// Fragment是占位符
class TodoList extends React.Component {
  constructor(props) {
    super(props)  // 调用父类的构造函数
    this.state = {
      arr:['学编程','学英语','学游泳'],
      inputValue:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.handleDeleItem = this.handleDeleItem.bind(this)
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
  render() {
    return (
      <React.Fragment>
        <div>  {/*label是扩大点击的区域*/}
          <label htmlFor="son">请输入:</label>
          <input id='son' value={this.state.inputValue} onChange={this.handleChange} type="text"/>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            this.state.arr.map((item,index) => {
              return <li 
                      key={index}
                      dangerouslySetInnerHTML={{__html:item}}
                      onClick={() => {this.handleDeleItem(index)}}
                     >
                     </li>
            })
          }
        </ul>
      </React.Fragment> 
    )
  }
}
export default TodoList