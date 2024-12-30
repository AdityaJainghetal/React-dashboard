import React from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  // Chart Configurations
  const charts = {
    bar: {
      options: {
        chart: { id: "bar-chart" },
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
      },
      series: [
        {
          name: "Revenue",
          data: [30, 40, 45, 50, 49, 60],
        },
      ],
      type: "bar",
    },
    line: {
      options: {
        chart: { id: "line-chart" },
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
      },
      series: [
        {
          name: "Profit",
          data: [10, 20, 15, 30, 25, 40],
        },
      ],
      type: "line",
    },
    pie: {
      options: { labels: ["Product A", "Product B", "Product C"] },
      series: [44, 55, 13],
      type: "pie",
    },
  };

  // Styles
  const containerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-around",
  };

  const chartStyles = {
    flex: 1,
    minWidth: "300px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "#fff",
  };

  return (
    <div className="dashboard">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Dashboard</h1>
      <div style={containerStyles}>
        {/* Bar Chart */}
        <div style={chartStyles}>
          <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
          <Chart
            options={charts.bar.options}
            series={charts.bar.series}
            type={charts.bar.type}
            width="100%"
          />
        </div>

        {/* Line Chart */}
        <div style={chartStyles}>
          <h2 style={{ textAlign: "center" }}>Line Chart</h2>
          <Chart
            options={charts.line.options}
            series={charts.line.series}
            type={charts.line.type}
            width="100%"
          />
        </div>

        {/* Pie Chart */}
        <div style={chartStyles}>
          <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
          <Chart
            options={charts.pie.options}
            series={charts.pie.series}
            type={charts.pie.type}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
