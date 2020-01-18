import {CHANGE_INPUT_VALUE,CHANGE_SUBMIT_LIST,DELETE_TODO_ITEM,INNIT_TODO_ITEM} from './actionTypes'

export const getInputChangeAction = (value) => {
    return {
        type:CHANGE_INPUT_VALUE,
        value
    }
}
export const getSubmitChange = () => {
    return {
        type:CHANGE_SUBMIT_LIST
    }
}
export const getDeleteTodo = (index) => {
    return {
        type:DELETE_TODO_ITEM,
        index
    }
}
export const getInitAction = (data) => {
    return {
        type:INNIT_TODO_ITEM,
        data
    }
}