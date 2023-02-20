import React, { useState, useEffect } from "react";
import axios from "axios";

import FormGroup from "./FormGroup";

const Form = ({ refresh, setRefresh, channel, toast }) => {
  const [data, setData] = useState([]);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");
  const [input9, setInput9] = useState("");
  const [input10, setInput10] = useState("");
  const [input11, setInput11] = useState("");
  const [input12, setInput12] = useState("");
  const [input13, setInput13] = useState("");
  const [input14, setInput14] = useState("");
  const [input15, setInput15] = useState("");
  const [input16, setInput16] = useState("");
  const [input17, setInput17] = useState("");
  const [input18, setInput18] = useState("");
  const [input19, setInput19] = useState("");
  const [input20, setInput20] = useState("");

  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [select3, setSelect3] = useState("");
  const [select4, setSelect4] = useState("");
  const [select5, setSelect5] = useState("");
  const [select6, setSelect6] = useState("");
  const [select7, setSelect7] = useState("");
  const [select8, setSelect8] = useState("");
  const [select9, setSelect9] = useState("");
  const [select10, setSelect10] = useState("");
  const [select11, setSelect11] = useState("");
  const [select12, setSelect12] = useState("");
  const [select13, setSelect13] = useState("");
  const [select14, setSelect14] = useState("");
  const [select15, setSelect15] = useState("");
  const [select16, setSelect16] = useState("");
  const [select17, setSelect17] = useState("");
  const [select18, setSelect18] = useState("");
  const [select19, setSelect19] = useState("");
  const [select20, setSelect20] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/currency");
      setData(res.data);

      setInput1(res.data[0].code);
      setInput2(res.data[1].code);
      setInput3(res.data[2].code);
      setInput4(res.data[3].code);
      setInput5(res.data[4].code);
      setInput6(res.data[5].code);
      setInput7(res.data[6].code);
      setInput8(res.data[7].code);
      setInput9(res.data[8].code);
      setInput10(res.data[9].code);
      setInput11(res.data[10].code);
      setInput12(res.data[11].code);
      setInput13(res.data[12].code);
      setInput14(res.data[13].code);
      setInput15(res.data[14].code);
      setInput16(res.data[15].code);
      setInput17(res.data[16].code);
      setInput18(res.data[17].code);
      setInput19(res.data[18].code);
      setInput20(res.data[19].code);

      setSelect1(res.data[0].category);
      setSelect2(res.data[1].category);
      setSelect3(res.data[2].category);
      setSelect4(res.data[3].category);
      setSelect5(res.data[4].category);
      setSelect6(res.data[5].category);
      setSelect7(res.data[6].category);
      setSelect8(res.data[7].category);
      setSelect9(res.data[8].category);
      setSelect10(res.data[9].category);
      setSelect11(res.data[10].category);
      setSelect12(res.data[11].category);
      setSelect13(res.data[12].category);
      setSelect14(res.data[13].category);
      setSelect15(res.data[14].category);
      setSelect16(res.data[15].category);
      setSelect17(res.data[16].category);
      setSelect18(res.data[17].category);
      setSelect19(res.data[18].category);
      setSelect20(res.data[19].category);
    };
    getData();
  }, [refresh]);

  const inputs = [
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
    input7,
    input8,
    input9,
    input10,
    input11,
    input12,
    input13,
    input14,
    input15,
    input16,
    input17,
    input18,
    input19,
    input20,
  ];

  const setInputs = [
    setInput1,
    setInput2,
    setInput3,
    setInput4,
    setInput5,
    setInput6,
    setInput7,
    setInput8,
    setInput9,
    setInput10,
    setInput11,
    setInput12,
    setInput13,
    setInput14,
    setInput15,
    setInput16,
    setInput17,
    setInput18,
    setInput19,
    setInput20,
  ];
  const selects = [
    select1,
    select2,
    select3,
    select4,
    select5,
    select6,
    select7,
    select8,
    select9,
    select10,
    select11,
    select12,
    select13,
    select14,
    select15,
    select16,
    select17,
    select18,
    select19,
    select20,
  ];

  const setSelects = [
    setSelect1,
    setSelect2,
    setSelect3,
    setSelect4,
    setSelect5,
    setSelect6,
    setSelect7,
    setSelect8,
    setSelect9,
    setSelect10,
    setSelect11,
    setSelect12,
    setSelect13,
    setSelect14,
    setSelect15,
    setSelect16,
    setSelect17,
    setSelect18,
    setSelect19,
    setSelect20,
  ];

  const toastSuccess = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const toastError = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      for (let i = 0; i < data.length; i++) {
        await axios.put(
          `http://localhost:5000/currency/${data[i]._id}/update`,
          {
            code: inputs[i],
            category: selects[i],
          }
        );
      }
      toast.success("Updated Successfully!", toastSuccess);
      setRefresh(!refresh);
      channel.postMessage("");
    } catch (err) {
      toast.error(err.response.data.msg, toastError);
      console.log(err.response.data);
    }
  };

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-data-div">
        <div className="form-box">
          <h4>Selling Fast</h4>
          {selects.map((select, index) => {
            if (select === "fast") {
              return (
                <FormGroup
                  key={index}
                  input={inputs[index]}
                  setInput={setInputs[index]}
                  select={selects[index]}
                  setSelect={setSelects[index]}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="form-box">
          <h4>Limited Stock</h4>
          {selects.map((select, index) => {
            if (select === "limited") {
              return (
                <FormGroup
                  key={index}
                  input={inputs[index]}
                  setInput={setInputs[index]}
                  select={selects[index]}
                  setSelect={setSelects[index]}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="form-box">
          <h4>Out of Stock</h4>
          {selects.map((select, index) => {
            if (select === "nostock") {
              return (
                <FormGroup
                  key={index}
                  input={inputs[index]}
                  setInput={setInputs[index]}
                  select={selects[index]}
                  setSelect={setSelects[index]}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="form-box">
          <h4>Slot Available</h4>
          {selects.map((select, index) => {
            if (select === "null") {
              return (
                <FormGroup
                  key={index}
                  input={inputs[index]}
                  setInput={setInputs[index]}
                  select={selects[index]}
                  setSelect={setSelects[index]}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="update-div">
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default Form;
