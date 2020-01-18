import {CHANGE_INPUT_VALUE,CHANGE_SUBMIT_LIST,DELETE_TODO_ITEM} from './actionTypes.js'

const defaultState = {
    inputValue:'',
    list:[{
        title: '吃饭',
      },
      {
        title: '睡觉',
      },
      {
        title: '打游戏',
      },
      {
        title: '看书',
      },]
} //默认数据

// reducer 可以接受state 但是绝不能修改state  state表示之前的数据
export default (state=defaultState,action) => {
   // state 表示仓库中存储的所有的数据
   if(action.type === CHANGE_INPUT_VALUE) {
       // 所以要对state进行深拷贝
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState // 传给store
   }
   if(action.type === CHANGE_SUBMIT_LIST) {
     const newState = JSON.parse(JSON.stringify(state))
     newState.list.unshift({title:newState.inputValue})
     newState.inputValue=''
     return newState
   }
   if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
   }

   return state // 传给store
}
  
   