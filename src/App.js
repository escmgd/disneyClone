import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//NOTE: Switch has changed to Routes in from react-router-dom v 6.2
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />    
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
