import React from "react";
import StockTable from "../stocks/StockTable";
import "./index.styling.css";

const AssetsSection = ({ selectedAsset, onSelectAsset }) => {
  return (
    <div className="container">
      <div className="table-container">
        <StockTable
          onSelectAsset={onSelectAsset}
          selectedAsset={selectedAsset}
        />
      </div>
      <div className="text-container">
        <h2>1. Select Asset for Trading</h2>
        <p>
          Select an asset that you would like to trade. So far, there are only
          10 assets displayed, but this will change in the future. Here will be
          a pagination of different assets just like in other stock
          applications.
        </p>
      </div>
    </div>
  );
};

export default AssetsSection;
