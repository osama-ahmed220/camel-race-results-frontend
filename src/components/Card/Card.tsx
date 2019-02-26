import React, { Component } from "react";
import { Race } from "../../interfaces/Race";
import { Collapse } from "reactstrap";
import CardMeta from "../CardMeta/CardMeta";
import CardEvents from "../CardEvents/CardEvents";

interface State {
  collapse: boolean;
}

interface Props {
  race: Race;
}

class Card extends Component<Props, State> {
  state: Readonly<State> = {
    collapse: false
  };
  //   constructor(props: Props) {
  //     super(props);
  //     console.log(this.state.races);
  //   }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  generateFlagAndColor = (
    position: number = 1
  ): { flag: any; bgColor: string } => {
    switch (position) {
      case 1:
        return {
          flag: require("../../assets/images/positions/first.png"),
          bgColor: "#fef4af"
        };
      case 2:
        return {
          flag: require("../../assets/images/positions/second.png"),
          bgColor: "#dbdbdb"
        };
      case 3:
        return {
          flag: require("../../assets/images/positions/third.png"),
          bgColor: "#d5b8a8"
        };
      default:
        return {
          flag: require("../../assets/images/positions/all_positions.png"),
          bgColor: "#ffffff"
        };
    }
  };

  render() {
    const {
      race: {
        position,
        totalCode,
        totalPoints,
        participant: { name },
        metas,
        pEvents
      }
    } = this.props;
    const { flag, bgColor } = this.generateFlagAndColor(position);
    return (
      <div className="myCard" style={{ backgroundColor: bgColor }}>
        <div
          className="d-flex justify-content-between text-center flex-row-reverse tableHeadings mt-2 align-items-center pt-2 pb-2 clickable"
          onClick={this.toggle}
        >
          <div style={{ flex: 0.5 }}>
            <img src={flag} alt="" style={{ width: "35px" }} />
          </div>
          <div>{position}</div>
          <div className="text-right" style={{ flex: 1.5 }}>
            محمد راشد بن غدير الكتبي
          </div>
          <div>{totalCode}</div>
          <div>{totalPoints}</div>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <CardMeta metas={metas} />
          <CardEvents pEvents={pEvents} />
        </Collapse>
      </div>
    );
  }
}

export default Card;
