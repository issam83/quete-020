import React, { Component } from 'react'
import './App.css';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password: "",
            name: "",
            lastname: "",
            confirmation: "",
        }
        
        this.updateEmailField = this.updateEmailField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      updateEmailField(event) {
        this.setState({[event.target.name]: event.target.value});
      }

      updateConfirmation=(event)=> {
        this.setState({confirmation: event.target.value});
      }

    handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        if (this.state.password !== this.state.confirmation){
          console.log(this.state.password)
          console.log(this.state.confirmation)
        
          alert("Wrong password, you fool...");
        } else {
          alert("Welcome 007");
        }
      }
      
  render() {
    
    return (
      <div>
          <h1>{JSON.stringify(this.state,1,1)}</h1>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
        <input
         onChange={this.updateEmailField} 
         type="email" 
         name="email"
         value={this.state.email}
         />
         <div className="form-data">
         <label htmlFor="password">Password</label>
         <input
         type="password"
         id="password"
         name="password"
         onChange={this.updateEmailField}
         value={this.state.password}
         
         //event => this.setState({email: event.target.value})
          />
          </div>
          <div className="form-data">
         <label htmlFor="password"> Confirmation</label>
         <input
         type="password"
         id="Password confirmation"
         name="Password confirmation"
         onChange={this.updateConfirmation}
         value={this.state.confirmation}
         
         //event => this.setState({email: event.target.value})
          />

         </div>

         <div className="form-data">
         <label htmlFor="name">Name</label>
         <input
         type="text"
         id="name"
         name="name"
         onChange={this.updateEmailField}
         value={this.state.name}
         />
        </div>

         <div className="form-data">
         <label htmlFor="lastname">Lastname</label>
         <input
         type="text"
         id="lastname"
         name="lastname"
         onChange={this.updateEmailField}
         value={this.state.lastname}
          />
         </div>
         <input type="submit" value="Soumettre"/>
         </form> 
      </div>
    )
  }
}
