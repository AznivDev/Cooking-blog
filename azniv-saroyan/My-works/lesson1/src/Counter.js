import React from 'react'

class Counter extends React.Component {
    constructor(props) {
      super(props); 
    }
    render(){
      return (
        <>
            <button onClick = {() => this.props.addOne()}>Add one</button>
        </>
      )
        
    }
  }
  export default Counter