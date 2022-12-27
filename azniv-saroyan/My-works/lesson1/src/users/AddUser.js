import React from 'react'

class AddUser extends React.Component {
    constructor(props) {
        super(props); 
      }
      render(){
        return (
          <>
              <button onChange= {() => this.props.addUser()}>Add user</button>
          </>
        )
          
      }
}
export default AddUser