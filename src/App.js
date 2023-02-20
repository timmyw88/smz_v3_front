import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Admin from "./pages/Admin";
import "./App.css";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const channel = new BroadcastChannel("channel");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Main refresh={refresh} channel={channel} />}
        />
        <Route
          path="/admin"
          element={
            <Admin
              refresh={refresh}
              setRefresh={setRefresh}
              channel={channel}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
