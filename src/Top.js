import { useContext } from "react";
import Search from "./Search";
import Nc from "./Nc";

let Top = () => {
  let obj = useContext(Nc);
  return (
    <div className="top">
      <i>
        {obj.d == false && <i class="fa-solid fa-bars" onClick={obj.fun}></i>}
        Hello,user
      </i>
      <Search />
    </div>
  );
};
export default Top;
