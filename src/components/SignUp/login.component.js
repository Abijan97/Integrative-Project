import React, { Component } from "react";
import "./login.css";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      change: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (

      <div className="div-signin">
        
        <div>
          <form onSubmit={this.handleSubmit}>
              <h3>SignIn</h3>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={this.handleChange}
            />
            <button onSubmit={this.handleSubmit}>Sign In</button>
          </form>
        </div>
      </div>
    
    );
  }
}
