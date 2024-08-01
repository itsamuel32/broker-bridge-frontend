import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import "./index.styling.css";

const ChartComponent = ({ selectedAsset, graph_data, selectedCurrency }) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    setGraphData(graph_data?.stock_data);
  }, [graph_data]);

  // Custom tooltip content to display both date and close price
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const activePayload = payload.find((p) => p.value !== null);
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <p className="label">{`Date: ${moment(label).format(
            "MMM DD, YYYY"
          )}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="intro" style={{ color: entry.color }}>
              {` Total Assets:  ${entry.value.toFixed(2)} ${selectedCurrency}`}
            </p>
          ))}
          {activePayload.payload.deposit_fee != null && (
            <p className="fee">{`Deposit Fee: -${activePayload.payload.deposit_fee.toFixed(
              2
            )} ${selectedCurrency}`}</p>
          )}
          {activePayload.payload.withdrawal_fee != null && (
            <p className="fee">{`Withdraw Fee: -${activePayload.payload.withdrawal_fee.toFixed(
              2
            )} ${selectedCurrency}`}</p>
          )}
        </div>
      );
    }
    return null;
  };
  // Formatter for the XAxis tick labels
  const monthTickFormatter = (tick) => {
    return moment(tick).format("MMM DD YYYY");
  };

  return (
    <div children="chart-container">
      <h2 className="chart-title">{selectedAsset}</h2>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          margin={{
            top: 0,
            right: 50,
            left: 50,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis
            data={graphData}
            dataKey="close_date"
            tickFormatter={monthTickFormatter}
            fontSize={13}
            fontWeight={"500"}
          />
          <YAxis tickCount={10} />
          <Tooltip content={<CustomTooltip />} />

          <Line
            data={graphData}
            type="monotone"
            dataKey="close_price"
            stroke="#3cc93f"
            activeDot={{ r: 5 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
