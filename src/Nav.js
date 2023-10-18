import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nc from "./Nc";

let Nav = () => {
  let obj = useContext(Nc);
  return (
    <div className="nav-total">
      {obj.d == true && (
        <aside>
          <h2>
            <i class="fa-solid fa-record-vinyl"></i>Dashboard
            <i class="fa-regular fa-circle-xmark" onClick={obj.fun}></i>
          </h2>
          <div className="nav">
            <Link to="/" onClick={obj.fun}>
              <i class="fa-solid fa-house"></i>Dashboard
            </Link>
            <Link to="/product" onClick={obj.fun}>
              <i class="fa-solid fa-box"></i>Product
            </Link>
            <Link to="customers" onClick={obj.fun}>
              <i class="fa-solid fa-users"></i>Customers
            </Link>
            <Link to="/income" onClick={obj.fun}>
              <i class="fa-solid fa-coins"></i>Income
            </Link>
            <Link to="/promote" onClick={obj.fun}>
              <i class="fa-solid fa-rectangle-ad"></i>Promote
            </Link>
            <Link to="/help" onClick={obj.fun}>
              <i class="fa-solid fa-circle-info"></i>Help
            </Link>
          </div>
          <div className="user" onClick={obj.fun}>
            User
          </div>
        </aside>
      )}
      <div className="overlay" onClick={obj.fun}></div>
    </div>
  );
};
export default Nav;
