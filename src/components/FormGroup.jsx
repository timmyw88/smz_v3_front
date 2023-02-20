import React from "react";

const FormGroup = ({ input, setInput, select, setSelect }) => {
  const identifyCategory = (select) => {
    return select === "null"
      ? "bg-blue"
      : select === "fast"
      ? "bg-red"
      : select === "limited"
      ? "bg-yellow"
      : "bg-black";
  };
  return (
    <div className="form-group">
      <input
        type="text"
        maxLength={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        value={select}
        onChange={(e) => setSelect(e.target.value)}
        className={`${identifyCategory(select)}`}
      >
        <option value="fast">Selling Fast</option>
        <option value="limited">Limited Stock</option>
        <option value="nostock">Out of Stock</option>
        <option value="null">Not Specified</option>
      </select>
    </div>
  );
};

export default FormGroup;
