import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Filter from "./Filter";
let Prods = () => {
  let fil = ["last 30 days", "last 1 year"];
  let [prod, setProd] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProd(res.data.products);
    });
  }, []);
  return (
    <div className="prods">
      <div className="product-top">
        <h3>Product</h3>
        <span>
          <Search />
          <Filter fil={fil} />
        </span>
      </div>
      <div className="products">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {prod.map((item) => (
              <tr>
                <td>
                  <img src={item.images[0]} />
                  {item.title}
                </td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Prods;
