import React from "react";

const BodyTopActionBar = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <div>
          <a href="#" className="btn iconBtn">
            <img src={require("../../assets/images/three_layer.png")} alt="" />
          </a>
        </div>
        <div>
          <button type="button" className="btn btn-primary customBtn">
            أرشيف
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div>
          <a href="#" className="btn iconBtn">
            <img
              src={require("../../assets/images/add_mobile.png")}
              alt=""
              style={{ width: 20 }}
            />
          </a>
        </div>
        <div>
          <a href="#" className="btn iconBtn">
            <img src={require("../../assets/images/right_arrow.png")} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BodyTopActionBar;
