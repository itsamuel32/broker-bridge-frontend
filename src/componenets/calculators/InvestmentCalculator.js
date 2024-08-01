import React from "react";
import "./index.styling.css";

const InvestmentCalculator = ({
  setSelectedFrequency,
  setSelectedInvAmount,
  setSelectedInvStartDate,
  setSelectedInvEndDate,
  setSelectedCurrency,
  setSelectedPaymentMethod,
  onSubmit,
}) => {
  return (
    <div className="inv-calculator-container">
      <h2 className="calc-title">Investment Calculator</h2>
      <form className="investment-calculator" onSubmit={onSubmit}>
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="amount">Investment Amount</label>
            <input
              type="number"
              id="amount"
              min={5.0}
              // value={selectedInvAmount}
              onChange={(e) => setSelectedInvAmount(e.target.value)}
              placeholder="Enter investment amount"
            />
          </div>
          <div className="input-group">
            <label htmlFor="currency">Currency</label>
            <select
              id="currency"
              // value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value="">Select Currency</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select
              id="payment-method"
              // value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment Method</option>
              <option value="Debit/Credit Card">Debit/Credit Card</option>
              <option value="eToro Money">eToro Money</option>
              <option value="Wallets">Wallets</option>
              <option value="Online Banking">Online Banking</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>
        </div>
        <div className="date-section">
          <div className="input-group">
            <label htmlFor="frequency">Frequency</label>
            <select
              id="frequency"
              // value={selectedFrequency}
              onChange={(e) => setSelectedFrequency(e.target.value)}
            >
              <option value="">Select Frequency</option>
              <option value="one-time">One-time Transaction</option>
              <option value="monthly">Monthly Transaction</option>
              <option value="half_a_year">Twice a Year</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="start-date">Start of Investment</label>
            <input
              type="date"
              id="start-date"
              // value={selectedInvStartDate}
              onChange={(e) => setSelectedInvStartDate(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="end-date">End of Investment</label>
            <input
              type="date"
              id="end-date"
              // value={selectedInvEndDate}
              onChange={(e) => setSelectedInvEndDate(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="calculate-button">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default InvestmentCalculator;
