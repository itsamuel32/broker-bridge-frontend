import { useState } from "react";
import "./App.css";
import InvestmentCalculator from "./componenets/calculators/InvestmentCalculator";
import ChartComponent from "./componenets/graphs/HistoricalDataGraph";
import fetchEtoroData from "./services/FetchEtoroRequest";
import EToroBroker from "./componenets/brokers/eToro/eToroBroker";
import Hero from "./componenets/common/hero/Hero";
import AssetsSection from "./componenets/assetSection/AssetsSection";

function App() {

  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedInvStartDate, setSelectedInvStartDate] = useState(null);
  const [selectedInvEndDate, setSelectedInvEndDate] = useState(null);
  const [selectedInvAmount, setSelectedInvAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const [eToroData, setEtoroData] = useState(null);

  // Method to be called when the calculate button is clicked
  const handleCalculations = async (event) => {
    event.preventDefault();

    

    if (
      
      selectedAsset &&
      selectedFrequency &&
      selectedCurrency &&
      selectedInvAmount &&
      selectedPaymentMethod &&
      selectedInvStartDate &&
      selectedInvAmount >= 5
    ) {
      const data = await fetchEtoroData(
       
        selectedAsset,
        selectedFrequency,
        selectedInvAmount,
        selectedInvStartDate,
        selectedInvEndDate,
        selectedCurrency,
        selectedPaymentMethod
      );

      setEtoroData(data);
    }
  };

  const handleSelectAsset = (prefix) => {
    setSelectedAsset(prefix);
  };

  return (
    <div className="App">
      <Hero />
      <AssetsSection
        onSelectAsset={handleSelectAsset}
        selectedAsset={selectedAsset}
      />
      <InvestmentCalculator
        setSelectedFrequency={setSelectedFrequency}
        setSelectedInvAmount={setSelectedInvAmount}
        setSelectedInvStartDate={setSelectedInvStartDate}
        setSelectedInvEndDate={setSelectedInvEndDate}
        setSelectedCurrency={setSelectedCurrency}
        setSelectedPaymentMethod={setSelectedPaymentMethod}
        onSubmit={handleCalculations}
      />

      <div className="brokers-container">
        {eToroData && (
          <EToroBroker data={eToroData} selected_currency={selectedCurrency} />
        )}{" "}
        {eToroData && (
          <EToroBroker data={eToroData} selected_currency={selectedCurrency} />
        )}
      </div>

      {eToroData && (
        <ChartComponent
          graph_data={eToroData}
          selectedAsset={selectedAsset}
          selectedCurrency={selectedCurrency}
        />
      )}
    </div>
  );
}

export default App;
