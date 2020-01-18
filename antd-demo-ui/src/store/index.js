import {createStore} from 'redux'
/**
 *  store相当于图书馆的管理员 他记不住全部的书籍信息 
 * 所以需要个笔记本来辅助管理员工作 需要将笔记本传给管理员
 * createStore(笔记本)
 */
import reducer from './reducer'
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )  //这样 store就清楚仓库存储的数据了
export default store
