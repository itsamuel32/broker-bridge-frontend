import React from "react";
import "../../styling/broker-item.css";

const BrokerItem = ({ broker }) => {
  return (
    <div className="broker-item">
      <h3>{broker.name}</h3>
      <ul className="broker-details">
        <li>Trading Fee: {broker.trading_fee}</li>
        <li>Withdrawal Fee: {broker.withdrawal_fee}</li>
        <li>Entry Fee: {broker.entry_fee}</li>
        <li>Management Fee: {broker.management_fee}</li>
        <li>Minimum Deposit: {broker.minimum_deposit}</li>
        <li>Investment Value: {broker.investment_value}</li>
        <li>
          Investment Value after Fees: {broker.investment_value_after_fees}
        </li>
      </ul>
      <a href={broker.website} className="visit-broker-btn">
        Visit Broker
      </a>
    </div>
  );
};

export default BrokerItem;
