import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Form validation
    if (!this.state.firstName) {
      errors.firstName = 'Input field is empty';
    }
    if (!this.state.lastName) {
      errors.lastName = 'Input field is empty';
    }
    if (!this.state.email || !this.validateEmail(this.state.email)) {
      errors.email = 'This is not a valid email';
    }
    if (!this.state.password) {
      errors.password = 'Password field is empty';
    }

    this.setState({ errors });

    // Submit the form (you can add your submission logic here)
  };

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <section id="intro">
        <div className="container">
          <div className="left-col">
            <h1>Learn to paint by <br /> watching others</h1>
            <p>See how experienced painters create art in real-time. Watching scripted tutorials is great,
              but understanding how artists think is invaluable.</p>
          </div>
          <div className="right-col">
            <div className="top-card">
              <p><span>Try it free 7 days then</span> $20/mo. thereafter</p>
            </div>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <div className={`field-group ${this.state.errors.firstName && 'error'}`}>
                  <label htmlFor="first-name">First Name</label>
                  <input
                    name="firstName"
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                  {this.state.errors.firstName && (
                    <p className="error-text">{this.state.errors.firstName}</p>
                  )}
                </div>
                <div className={`field-group ${this.state.errors.lastName && 'error'}`}>
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    name="lastName"
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                  {this.state.errors.lastName && (
                    <p className="error-text">{this.state.errors.lastName}</p>
                  )}
                </div>
                <div className={`field-group ${this.state.errors.email && 'error'}`}>
                  <label htmlFor="Email">Email Address</label>
                  <input
                    name="email"
                    id="Email"
                    type="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  {this.state.errors.email && (
                    <p className="error-text">{this.state.errors.email}</p>
                  )}
                </div>
                <div className={`field-group ${this.state.errors.password && 'error'}`}>
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                  {this.state.errors.password && (
                    <p className="error-text">{this.state.errors.password}</p>
                  )}
                </div>
                <button type="submit">Claim your free trial</button>
                <p className="form-footer">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
