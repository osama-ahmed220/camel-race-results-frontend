import React, { Component } from "react";
import { RouterProps } from "react-router";
import { Program } from "../interfaces/Program";

import "../App.css";
import Button from "reactstrap/lib/Button";
import config from "../config";

interface State {
  isLoaded: boolean;
  error: string;
  programs: Program[];
}

class ProgramList extends Component<RouterProps, State> {
  state: Readonly<State> = {
    isLoaded: false,
    error: "",
    programs: []
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/");
      return;
    }
    fetch(`${config.apiURL}/program/`, {
      headers: new Headers({
        Authorization: token
      })
    })
      .then(res => res.json())
      .then(
        result => {
          if (!result.bool) {
            this.setState({
              isLoaded: true,
              error: result.message
            });
            return;
          }
          this.setState(() => ({
            programs: result.message,
            isLoaded: true
          }));
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  openProgram = (id: string) => {
    this.props.history.push("/program/" + id);
  };

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="fullBody">
          <div className="loader" />
        </div>
      );
    }
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <div>
        {this.state.programs.map(({ id, title }) => (
          <Button key={id} onClick={() => this.openProgram(id)}>
            {title}
          </Button>
        ))}
      </div>
    );
  }
}

export default ProgramList;
