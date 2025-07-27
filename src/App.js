import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import EnhancedPortfolio from "./components/EnhancedPortfolio";

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<EnhancedPortfolio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DarkModeProvider>
  );
}

export default App;