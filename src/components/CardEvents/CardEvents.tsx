import React from "react";

import "./CardEvents.css";
import { PEvent } from "../../interfaces/PEvent";
import CardEventItem from "../CardEventItem/CardEventItem";

interface Props {
  pEvents: PEvent[];
}

const CardEvents: React.SFC<Props> = ({ pEvents }) => {
  return (
    <div className="eventContainer ml-5 mr-5 mt-2 pb-4">
      {pEvents.map(e => (
        <CardEventItem key={e.id} pEvent={e} />
      ))}
    </div>
  );
};

export default CardEvents;
