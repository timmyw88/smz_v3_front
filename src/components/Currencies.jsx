import React from "react";

import CurrenciesHead from "./CurrenciesHead";
import CurrenciesBody from "./CurrenciesBody";

const Currencies = ({ refresh }) => {
  return (
    <div className="currencies">
      <CurrenciesHead />
      <CurrenciesBody refresh={refresh} />
    </div>
  );
};

export default Currencies;
