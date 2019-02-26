import React from "react";

import "./CardMeta.css";
import { Meta } from "../../interfaces/Meta";
import CarMetaItem from "../CardMetaItem/CarMetaItem";

interface Props {
  metas: Meta[];
}

// #f4eab7
const CardMeta: React.SFC<Props> = ({ metas }) => {
  return (
    <div className="cardMeta mb-4">
      <CarMetaItem
        pMeta={{
          id: "",
          age: "السن",
          cat1: "حقاقه",
          cat2: "لقايا",
          cat3: "إيذاع",
          cat4: "ثنايا",
          cat5: "حول وزمول"
        }}
      />
      {metas.map(m => (
        <CarMetaItem key={m.id} pMeta={m} borderType="light" />
      ))}
    </div>
  );
};

export default CardMeta;
