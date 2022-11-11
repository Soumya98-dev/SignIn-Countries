import React from "react";

import LoginPage from "./components/LoginPage";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <div className="parent-container">
            <LoginPage />
            <Routes>
                <Route path="/homepage" element={<Homepage />} />
            </Routes>
        </div>
  );
}

export default App;
