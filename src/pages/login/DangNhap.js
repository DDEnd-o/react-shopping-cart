import React from "react";
import { Link } from "react-router-dom";

class DangNhap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  componentWillMount(){

  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3 mybg" ref="">
            <form
              onSubmit={(e) => this.onSubmit(e)}
              ref={(c) => {
                this.form = c;
              }}
            >
              <div className="row">
                <div className="col-md-12 text-center mytitle">Login</div>
              </div>

              <div className="form-group row">
                <label className="col-sm-4 col-form-label text-right">
                  Email
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    required
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleUserInput}
                  />
                  <span style={{color: "red", "font-size": "10px"}}>{this.state.formErrors.email}</span>
                </div>
              </div>
              

              <div className="form-group row">
                <label className="col-sm-4 col-form-label text-right">
                  Password
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleUserInput}
                  />
                  <span style={{color: "red", "font-size": "10px"}}>{this.state.formErrors.password}</span>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-12 text-center">
                  <a href="!#">Password Forget ?</a> &nbsp;&nbsp; | &nbsp;&nbsp;
                  <a href="!#">Sign Up !</a>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-12 text-center">
                  <Link to="/admin">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!this.state.formValid}
                    >
                      Login
                    </button>
                    &nbsp;&nbsp;
                  </Link>
                  <Link to="/">
                    <button type="button" className="btn btn-primary">
                      Exit
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DangNhap;
