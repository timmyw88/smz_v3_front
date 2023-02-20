import React from "react";

const Currencies = () => {
  return (
    <div className="currencies">
      <div className="column">
        <div className="header header-red bg-red">
          <p>Selling Fast</p>
        </div>
        <div className="body body-red">
          <div className="box box-red bg-red">
            <p className="code">GBP</p>
            <p className="cname">Great Britain Pound</p>
          </div>
          <div className="box box-red bg-red">
            <p className="code">JPY</p>
            <p className="cname">Japanese Yen</p>
          </div>
          <div className="box box-red bg-red">
            <p className="code">AUD</p>
            <p className="cname">Australian Dollar</p>
          </div>
          <div className="box box-red bg-red">
            <p className="code">AUD</p>
            <p className="cname">Australian Dollar</p>
          </div>
          <div className="box box-red bg-red">
            <p className="code">AUD</p>
            <p className="cname">Australian Dollar</p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="header header-yellow bg-yellow">
          <p>Limited Stock</p>
        </div>
        <div className="body body-yellow">
          <div className="box box-yellow bg-yellow">
            <p className="code">GBP</p>
            <p className="cname">Great Britain Pound</p>
          </div>
          <div className="box box-yellow bg-yellow">
            <p className="code">JPY</p>
            <p className="cname">Japanese Yen</p>
          </div>
          <div className="box box-yellow bg-yellow">
            <p className="code">AUD</p>
            <p className="cname">Australian Dollar</p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="header header-black bg-black">
          <p>Out of Stock</p>
        </div>
        <div className="body body-black">
          <div className="box box-black bg-black">
            <p className="code">GBP</p>
            <p className="cname">Great Britain Pound</p>
          </div>
          <div className="box box-black bg-black">
            <p className="code">JPY</p>
            <p className="cname">Japanese Yen</p>
          </div>
          <div className="box box-black bg-black">
            <p className="code">AUD</p>
            <p className="cname">Australian Dollar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currencies;
