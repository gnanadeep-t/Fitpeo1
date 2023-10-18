import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Customers from "./Customers";
import Income from "./Income";
import Promote from "./Promote";
import Help from "./Help";
import { useState, useEffect } from "react";
import Nc from "./Nc";

export default function App() {
  let [d, setD] = useState(true);
  let [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    let handleResize = () => {
      setW(window.innerWidth);
    };
    fun1();
    window.addEventListener("resize", handleResize);
  }, [w]);
  let fun1 = () => {
    if (w > 1105) {
      setD(true);
    } else setD(false);
  };
  let fun = () => {
    if (d == false && w < 1105) {
      setD(true);
    } else if (d == true && w < 1105) {
      setD(false);
    }
  };

  let obj = { d: d, w: w, fun: fun, fun1: fun1 };
  return (
    <BrowserRouter>
      <Nc.Provider value={obj}>
        <div className="app">
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/income" element={<Income />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </Nc.Provider>
    </BrowserRouter>
  );
}
