import React, { Component } from "react";
import { connect } from "react-redux";
import { config } from "../../app/config";
import { ProcessLoginRequestAction } from "../../stateManagement/actions/authActions";
import { Redirect } from "react-router-dom";
import { NotificationInfoAction } from "../../stateManagement/actions/notificationAction";

class Login extends Component {
  state = {
    email: config.DEMO.email,
    password: config.DEMO.password,
    nextPage: "home",
  };

  componentDidMount() {
    if (this.props.location.state) {
      let { redirectTo, message } = this.props.location.state;
      if (redirectTo && redirectTo !== "") {
        this.props.notificationService(message);
        this.setState({ ...this.state, nextPage: redirectTo });
      }
    }
  }

  updateValue = (e) => {
    let o = {};
    o[e.target.name] = e.target.value;
    this.setState((s) => ({ ...s, ...o }));
  };

  processLogin = () => {
    this.props.notificationService(`Logging In.Please wait`);
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    return !this.props.isLoggedIn ? (
      <div className="row">
        <h1>
          <div className="waves-effect">
            <div className="material-icons login-logo">android</div>
            <div>POC</div>
          </div>
        </h1>
        <form onSubmit={(e) => e.preventDefault() || this.processLogin()}>
          <div className="row">
            <div className="input-field">
              <input
                name="email"
                value={this.state.email}
                type="email"
                style={{
                  width: "333px",
                }}
                onChange={(e) => this.updateValue(e)}
                className="validate"
              />
              <label className="active" htmlFor="email">
                Email
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                name="password"
                type="password"
                style={{
                  width: "333px",
                }}
                onChange={(e) => this.updateValue(e)}
                className="validate"
                value={this.state.password}
              />
              <label className="active" htmlFor="password">
                Password
              </label>
            </div>
          </div>

          <div className="row">
            <button
              className="waves-effect waves-light btn-large"
              style={{ width: "100%" }}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    ) : (
      <Redirect to={this.state.nextPage} />
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session,
});

const mapDispatchToProps = {
  login: ProcessLoginRequestAction,
  notificationService: NotificationInfoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
