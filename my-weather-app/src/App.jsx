import "./App.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
