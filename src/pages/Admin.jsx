import React from "react";
import Currencies from "../components/Currencies";
import { ToastContainer, toast } from "react-toastify";
import Form from "../components/Form";
import Time from "../components/Time";

import "react-toastify/dist/ReactToastify.css";

const Admin = ({ refresh, setRefresh, channel }) => {
  return (
    <>
      <ToastContainer />
      <div className="main-page">
        <div className="head text-white">
          <h2>STOCK AVAILABILITY GAUGE</h2>
          <Time />
        </div>
        <div className="body">
          <div className="currency-div">
            <Currencies refresh={refresh} />
          </div>
          <div className="booking-div">
            <Form
              refresh={refresh}
              setRefresh={setRefresh}
              channel={channel}
              toast={toast}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
