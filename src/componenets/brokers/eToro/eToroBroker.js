import React, { useEffect, useState } from "react";
import "./index.styling.css";
import icon from "../../../assets/images/Etoro_logo.png";

const EToroBroker = ({ data, selected_currency }) => {
  const [brokerData, setBrokerData] = useState(null);
  const [currency, setCurrencyData] = useState(null);
  useEffect(() => {
    if (data && data.fees_data) {
      setBrokerData(data.fees_data);
    }
    setCurrencyData(selected_currency);
  }, [data, selected_currency]);

  if (!brokerData) {
    return <div>Please Select Data </div>;
  }

  return (
    <div className="broker-container">
      <img
        src={icon}
        alt={`${brokerData.broker_name} logo`}
        className="broker-logo"
      />

      <div className="broker-content">
        <div className="broker-general">
          <ul className="broker-details">
            <li>User Tier: {brokerData.user_tier || "N/A"}</li>
            <li>
              Account Opening Fee: {brokerData.account_opening_fee || 0}{" "}
              {currency}
            </li>
            <li>
              Management Fee: {brokerData.management_fee || 0} {currency}
            </li>
            <li>
              Inactivity Fee: {brokerData.inactivity_fee || 0} {currency}
            </li>
            <li>
              Total Shares Bought:{" "}
              {brokerData.total_shares_bought.toFixed(3) || "N/A"}
            </li>
            <li>
              Portfolio Value Before Fees:{" "}
              {brokerData.portfolio_value_before_fees.toFixed(2) || "N/A"}{" "}
              {currency}
            </li>
          </ul>
        </div>
        <div className="broker-fees">
          {brokerData.deposit_fees && (
            <div className="fees-table">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key="Deposit" className="fee-header-2 deposit">
                    <td colSpan="2">Deposit Fees:</td>
                  </tr>
                  {Object.entries(brokerData.deposit_fees).map(
                    ([date, fee]) => (
                      <tr key={date} className="deposit">
                        <td>{date}</td>
                        <td>{fee.toFixed(2)}</td>
                      </tr>
                    )
                  )}
                  <tr key="Withdrawal" className="fee-header-2 withdrawal">
                    <td colSpan="2">Withdrawal Fees:</td>
                  </tr>
                  {Object.entries(brokerData.withdrawal_fees).map(
                    ([date, fee]) => (
                      <tr key={date} className="withdrawal">
                        <td>{date}</td>
                        <td>{fee.toFixed(2)}</td>
                      </tr>
                    )
                  )}
                  <tr key={"fixed fee"} className="withdrawal">
                    <td>fixed withdrawal fee</td>
                    <td>{brokerData.fixed_withdrawal_fees}</td>
                  </tr>
                  <tr key="Total" className="total-fees">
                    <td>Total Fees Paid</td>
                    <td>{brokerData.total_fees_paid.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <p>
          Final Investment Value:{" "}
          {brokerData.portfolio_value_after_fees.toFixed(2)} {currency}
        </p>
      </div>
      <a
        href={`https://www.etoro.com/trading/demo-account/`}
        target="_blank"
        rel="noreferrer"
        className="visit-broker-btn"
      >
        Start Trading
      </a>
    </div>
  );
};

export default EToroBroker;
