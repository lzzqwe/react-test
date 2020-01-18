import React from 'react';
import { Button,Input,List } from 'antd';
import store from './store'

// import './App.css';
  import './index.scss';
import {getInputChangeAction,getSubmitChange,getDeleteTodo} from '../src/store/actionCreator'
/**
 * 1.安装redux yarn add redux
 * 2.创建store 在src目录下创建store文件夹 在文件下创建index.js
 */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    
    // console.log(store.getState()) // 获取store的数据
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)  //store 发生变化 handleStoreChange立即调用
  }
  handleStoreChange() {
    console.log('store change')
    this.setState(store.getState())
  }
  handleChange(e) {
  // react中action是个对象的形式  创建action
    const action = getInputChangeAction(e.target.value)  
    //action传给了store
    store.dispatch(action)
  }
  handleSubmit() {
    const action = getSubmitChange()
    store.dispatch(action)

  }
  handleDeleteItem(index) {
   const action = getDeleteTodo(index)
   store.dispatch(action)

  }
  render() {
    return (
      <React.Fragment>
        <div className='ko' style={{marginLeft:50}}>
          <label htmlFor="friend">输入框：</label>
          <Input value={this.state.inputValue} onChange={this.handleChange} id='friend' placeholder='请输入' style={{width:300,marginTop:50,marginRight:10}}/>
          <Button onClick={this.handleSubmit} type="primary">提交</Button>
        </div>
        <List
          style={{width:350,marginLeft:50,marginTop:20}}
          className='list'
          bordered
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleDeleteItem.bind(this,index)}>
              <List.Item.Meta
                title={item.title}
              />
            </List.Item>
          )}
        />,
      </React.Fragment>
    )
  }
}

export default App;
// () => { this.handleDeleteItem(index)}

