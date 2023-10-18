import { useContext, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Nc from "./Nc";

let ChartBar = () => {
  let [st, setSt] = useState({
    series: [
      {
        name: "Earnings",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }
    ],
    options: {
      chart: {
        height: 200,
        type: "bar"
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "bottom",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      title: {
        text: "Monthly Earnings",
        floating: true,
        offsetY: 0,
        align: "left",
        style: {
          color: "#444"
        }
      }
    }
  });
  return (
    <div id="barchart" className="chart">
      <ReactApexChart
        options={st.options}
        series={st.series}
        type="bar"
        height={260}
      />
    </div>
  );
};
export default ChartBar;
