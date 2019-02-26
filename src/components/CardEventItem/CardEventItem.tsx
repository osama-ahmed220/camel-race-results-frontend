import React, { Component } from "react";

import "./CardEventItem.css";
import { PEvent } from "../../interfaces/PEvent";
import { Collapse } from "reactstrap";
import { YoutubeParser } from "../../utils/youtubeParser";

interface Props {
  pEvent: PEvent;
}

interface State {
  collapse: boolean;
}

class CardEventItem extends Component<Props, State> {
  state: Readonly<State> = {
    collapse: false
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  openVideo = (url: string): void => {
    window.open(url, "_blank");
  };

  render() {
    const {
      pEvent: {
        name,
        totalNumber,
        eDate,
        rounds,
        position,
        age,
        timing,
        point,
        video
      }
    } = this.props;
    const ytVParser = new YoutubeParser();
    const videoThumbNail = ytVParser.getVideoThumbnail(video);
    const iconClassName = this.state.collapse ? "open" : "";
    return (
      <div className="eventPanel mt-2">
        <div
          className="eventPanelHeader d-flex justify-content-between flex-row-reverse clickable"
          onClick={this.toggle}
        >
          <div className="text-right" style={{ flex: 1 }}>
            {name}
          </div>
          <div style={{ fontWeight: "bold" }}>{totalNumber}</div>
          <div className="d-flex align-items-center mr-3 cardEventHeaderIcon">
            <img
              src={require("../../assets/images/up_arrow.png")}
              alt=""
              className={iconClassName}
            />
          </div>
        </div>
        <Collapse isOpen={this.state.collapse} style={{ padding: "0 15px" }}>
          <div className="eventPanelBody d-flex flex-row-reverse text-right">
            <div>
              <div className="eventpannelBody_head">التاريخ</div>
              <div className="eventPanelBody_body">{eDate}</div>
            </div>
            <div>
              <div className="eventpannelBody_head">الشوط</div>
              <div className="eventPanelBody_body">{rounds}</div>
            </div>
            <div>
              <div className="eventpannelBody_head">المركز</div>
              <div className="eventPanelBody_body">{position}</div>
            </div>
            <div>
              <div className="eventpannelBody_head">السن</div>
              <div className="eventPanelBody_body">{age}</div>
            </div>
            <div>
              <div className="eventpannelBody_head">التوقيت</div>
              <div className="eventPanelBody_body">{timing}</div>
            </div>
            <div>
              <div className="eventpannelBody_head">النقاط</div>
              <div className="eventPanelBody_body">{point}</div>
            </div>
          </div>
          <div className="videoHead text-right">رابط الفيديو</div>
          <div className="videoBody d-flex justify-content-end">
            <div
              className="videoPanel clickable"
              onClick={() => this.openVideo(video)}
            >
              {!videoThumbNail && (
                <img
                  src={require("../../assets/images/vider_bg.png")}
                  alt=""
                  className="bg"
                />
              )}
              {videoThumbNail && <img src={videoThumbNail} className="bg" />}
              <img
                src={require("../../assets/images/play_icon.png")}
                alt=""
                className="playIcon"
              />
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default CardEventItem;
