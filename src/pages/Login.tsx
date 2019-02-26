import React from "react";
import Button from "reactstrap/lib/Button";
import { RouterProps } from "react-router";
import config from "../config";

interface State {
  error: string;
}

class Login extends React.Component<RouterProps, State> {
  state: Readonly<State> = {
    error: ""
  };

  login = () => {
    fetch(`${config.apiURL}/login/`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(
        result => {
          if (!result.bool) {
            this.setState({
              error: result.message
            });
            return;
          }
          localStorage.setItem("token", result.token);
          this.props.history.push("/programs");
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };

  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <Button onClick={this.login}>Login</Button>
      </div>
    );
  }
}

export default Login;
