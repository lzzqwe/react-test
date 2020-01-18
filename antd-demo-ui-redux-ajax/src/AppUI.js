import React from 'react'
import { Button,Input,List } from 'antd';
//  一个组件只有render函数 可以使用 无状态组件 这样性能更高
class AppUI extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{marginLeft:50}}>
          <label htmlFor="friend">输入框：</label>
          <Input value={this.props.inputValue} onChange={this.props.handleChange} id='friend' placeholder='请输入' style={{width:300,marginTop:50,marginRight:10}}/>
          <Button onClick={this.props.handleSubmit} type="primary">提交</Button>
        </div>
        <List
          style={{width:350,marginLeft:50,marginTop:20}}
          bordered
          itemLayout="horizontal"
          dataSource={this.props.list}
          renderItem={(item,index) => (
            <List.Item onClick={() =>{return this.props.handleDeleteItem(index)}}>
              <List.Item.Meta
                title={item}
              />
            </List.Item>
          )}
        />,
      </React.Fragment>
    )
  }
}
export default AppUI