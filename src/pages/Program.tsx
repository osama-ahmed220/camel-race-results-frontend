import React, { Component } from "react";
import "../App.css";
import { Program } from "../interfaces/Program";
import Header from "../components/Header/Header";
import SubHeader from "../components/SubHeader/SubHeader";
import BodyTopActionBar from "../components/BodyTopActionBar/BodyTopActionBar";
import Card from "../components/Card/Card";
import { RouteChildrenProps } from "react-router";
import config from "../config";

interface State {
  isLoaded: boolean;
  program: Program | null;
  error: string;
}

class ProgramPage extends Component<
  RouteChildrenProps<{ programID: string }>,
  State
> {
  state: Readonly<State> = {
    isLoaded: false,
    program: null,
    error: ""
  };

  componentDidMount() {
    // hit api
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/");
      return;
    }
    let programID = "";
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.programID
    ) {
      programID = this.props.match.params.programID;
    }
    if (!programID) {
      this.setState({
        isLoaded: true,
        error: "Program ID not found"
      });
      return;
    }
    fetch(`${config.apiURL}/program/${programID}`, {
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
          this.setState({
            isLoaded: true,
            program: result.message
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

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
    const { races } = this.state.program!;
    return (
      <>
        <Header title={this.state.program!.title} />
        <SubHeader />
        <div className="customBody pt-5 container-fluid">
          <BodyTopActionBar />
          <div
            className="d-flex justify-content-between text-center flex-row-reverse tableHeadings mt-4"
            style={{ color: "#fef4af" }}
          >
            <div style={{ flex: 0.5 }} />
            <div>المركز</div>
            <div className="text-right" style={{ flex: 1.5 }}>
              الاسم
            </div>
            <div>الرموز</div>
            <div>النقاط</div>
          </div>
          {/* Cards */}
          {races.map(race => {
            return <Card key={race.id} race={race} />;
          })}
        </div>
      </>
    );
  }
}

export default ProgramPage;
