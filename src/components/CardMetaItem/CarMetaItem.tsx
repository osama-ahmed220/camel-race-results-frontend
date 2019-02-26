import React from "react";

import "./CardMetaItem.css";
import { Meta } from "../../interfaces/Meta";

interface Props {
  pMeta: Meta;
  borderType?: string;
}

const CarMetaItem: React.SFC<Props> = ({
  pMeta: { age, cat1, cat2, cat3, cat4, cat5 },
  borderType
}) => {
  let mainClassNames =
    "d-flex justify-content-between text-center flex-row-reverse tableHeadings align-items-center borderBottom ";
  borderType = borderType || "dark";
  mainClassNames = mainClassNames + borderType;
  const boldClassName: string = borderType === "dark" ? "bold" : "";
  return (
    <div className={mainClassNames}>
      <div className="text-right" style={{ flex: 1.5 }}>
        {age}
      </div>
      <div className={boldClassName}>{cat1}</div>
      <div className={boldClassName}>{cat2}</div>
      <div className={boldClassName}>{cat3}</div>
      <div className={boldClassName}>{cat4}</div>
      <div style={{ flex: 1.5 }} className={boldClassName}>
        {cat5}
      </div>
    </div>
  );
};

export default CarMetaItem;
