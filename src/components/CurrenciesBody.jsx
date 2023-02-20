import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrenciesBody = ({ refresh }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/currency");
      setData(res.data);
    };
    getData();
  }, [refresh]);

  const identifyCategory = (currency) => {
    return currency.category === "fast"
      ? "box-red bg-red"
      : currency.category === "limited"
      ? "box-yellow bg-yellow"
      : currency.category === "nostock"
      ? "box-black bg-black"
      : "";
  };

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="body">
      {data.map((currency) => {
        if (currency.category !== "null") {
          return (
            <div
              key={currency._id}
              className={`box ${identifyCategory(currency)}`}
            >
              <p className="code">{currency.code}</p>
              <p className="cname">{currency.cname}</p>
              {currency.category === "nostock" ? (
                <div className="cross"></div>
              ) : null}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default CurrenciesBody;
