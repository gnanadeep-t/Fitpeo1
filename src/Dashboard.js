import Card from "./Card";
import ChartBar from "./ChartBar";
import ChartPie from "./ChartPie";
import Prods from "./Prods";
import Top from "./Top";

let Dashboard = () => {
  let img = [
    "https://png.pngtree.com/png-vector/20190822/ourmid/pngtree-revenue-capital-earnings-make-making-money-profit--flat-co-png-image_1695810.jpg",
    "https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-sales-order.png",
    "https://cdn-icons-png.flaticon.com/512/2200/2200787.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEtq5cOgcrmFVqCNgmX4H94hjU8FUJezYBA&usqp=CAU"
  ];
  return (
    <div className="dashboard">
      <Top />
      <div className="card-con">
        <Card img={img[0]} text="Earnings" value="$100" per="12%" />
        <Card img={img[1]} text="Orders" value="$100" per="12%" />
        <Card img={img[2]} text="Balence" value="$100" per="12%" />
        <Card img={img[3]} text="Total Sales" value="$100" per="12%" />
      </div>
      <div className="charts-con">
        <div className="barchart">
          <ChartBar />
        </div>
        <div className="piechart">
          <h3>Customers</h3>
          <p>Customers that buy products</p>
          <ChartPie />
        </div>
      </div>
      <Prods />
    </div>
  );
};
export default Dashboard;
