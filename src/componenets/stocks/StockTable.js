import React from "react";
import FetchTop10Assets from "../../services/FetchDataRequest";
import "./index.styling.css";

const StockTable = ({ selectedAsset, onSelectAsset }) => {
  const [data, loading, error] = FetchTop10Assets(
    process.env.REACT_APP_STOCK_TOP_ENDPOINT
  );

  const renderStockItems = () => {
    return data.map((asset) => {
      const dailyChangeClass = `daily-change ${
        asset.daily_percentage_change.startsWith("-") ? "negative" : "positive"
      }`;
      return (
        <tr key={asset.prefix}>
          <td className="assetPrefix">{asset.prefix} </td>
          <td>$ {asset.current_price}</td>
          <td className={dailyChangeClass}>{asset.daily_percentage_change}</td>
          <td>{asset.volume}</td>
          <td>{asset.market_cap}</td>
          <td>
            <input
              type="radio"
              name="selectedStock"
              checked={selectedAsset === asset.prefix}
              onChange={() => onSelectAsset(asset.prefix)}
            />
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="assets-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Daily Change</th>
            <th>Volume</th>
            <th>Market Cap</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="6">Loading market data...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan="6">Assets are not displayed.</td>
            </tr>
          )}
          {!loading && !error && renderStockItems()}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
