import React from 'react';

import store from './store'

import AppUI from'./AppUI'
import './App.css';
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
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
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
      <AppUI 
       inputValue={this.state.inputValue}
       list={this.state.list}
       handleChange={this.handleChange}
       handleSubmit={this.handleSubmit}
       handleDeleteItem={this.handleDeleteItem}
      />
    )
  }
}

export default App;
