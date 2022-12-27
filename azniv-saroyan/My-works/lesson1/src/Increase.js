import React from 'react'

class Increase extends React.Component {
    constructor(props) {
      super(props); 
    }
    render(){
      return (
        <>
            <button onClick = {() => this.props.increaseOne()}>Increase one</button>
        </>
      )
        
    }
  }
  export default Increase