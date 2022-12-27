import React from 'react'
import './App.css';
import Counter from './Counter'
import Increase from './Increase'
import Users from './users/Users.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 1
    }
  }
  addOne(){
    this.setState({count: this.state.count + 1})
  }
  increaseOne(){
    this.setState({count: this.state.count - 1})
  }
  render(){
    return (
      <div className='appContainer'>
        {/* <div className='calculate'>
          <Counter number = {this.state.count} addOne={() => this.addOne()} />
          <p className='number'>{this.state.count}</p>
          <Increase number = {this.state.count} increaseOne={() => this.increaseOne()} />
        </div>   */}
        <Users />
      </div>
    )
  }
}

export default App;
