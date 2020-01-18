import React from 'react'

import './index.css'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:'小明爱宝宝',
      show:true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle() {
    this.setState({
      show:!this.state.show
    })
  }
  render() {
    return (
      <div>
        <p className={this.state.show ? 'show' : 'hide'}>hello</p>
        <button style={{marginTop:'100px'}} onClick={this.handleToggle}>toggle</button>
      </div>
    )
  }
}
export default App