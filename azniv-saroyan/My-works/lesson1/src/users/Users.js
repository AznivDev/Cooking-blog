import React from 'react'
import AddUser from './AddUser'

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    name: "Ani",
                    age: 10
                },
                {
                    name: "Aram",
                    age: 28
                }
            ], 
            name: '', 
            age: ''
        }
    }
    addUser(){
        this.setState({users: [...this.state.users, {name: this.state.name, age: this.state.age}]})
        this.state.name = ''
         this.state.age = ''
    }
    render(){
        return(
            <div>
                <input 
                    type="text" 
                    placeholder='Name'
                    value={this.state.name} 
                    onChange={(e)=>{this.setState({name: e.target.value})}}>
                </input>
                <input 
                    type="text" 
                    placeholder='Age'
                    value={this.state.age} 
                    onChange={(e)=>{this.setState({age: e.target.value})}}>
                </input>
                <button 
                    onClick={()=>{this.addUser()}}
                >
                    Add user
                </button>
                {this.state.users.map((user) => {
                     return <div key={user.name}>
                        <h1>{user.name}</h1>
                        <p>{user.age}</p>
                     </div>
                })}
            </div>
        )
    }
}
export default Users