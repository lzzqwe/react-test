import React from 'react';


import store from './store'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'
import './App.css';
import { getInputChangeAction, getSubmitChange, getDeleteTodo, getTodoList } from '../src/store/actionCreator'
/**
 * 1.安装redux yarn add redux
 * 2.创建store 在src目录下创建store文件夹 在文件下创建index.js
 */

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }
    render() {
        return (
            <TodoItem 
       inputValue={this.props.inputValue}
       list={this.props.list}
       handleChange={this.props.handleChange}
       handleSubmit={this.props.handleSubmit}
       handleDeleteItem={this.props.handleDeleteItem}
      />
        )

    }
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(e) {
            // react中action是个对象的形式  创建action
            const action = getInputChangeAction(e.target.value)
            //action传给了store
            dispatch(action)
        },
        handleSubmit() {
            const action = getSubmitChange()
            dispatch(action)

        },
        handleDeleteItem(index) {
            const action = getDeleteTodo(index)
            dispatch(action)

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)