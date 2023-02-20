import React from "react";

const CurrenciesHead = () => {
  return (
    <div className="header">
      <div className="box">
        <div className="color-box box-red bg-red"></div>
        <p>Selling Fast</p>
      </div>
      <div className="box">
        <div className="color-box box-yellow bg-yellow"></div>
        <p>Limited Stock</p>
      </div>
      <div className="box">
        <div className="color-box box-black bg-black">
          <div className="cross-sm"></div>
        </div>
        <p>Out of Stock</p>
      </div>
    </div>
  );
};

export default CurrenciesHead;
