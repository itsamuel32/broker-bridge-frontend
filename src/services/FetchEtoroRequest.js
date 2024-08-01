import axios from "axios";

async function fetchEtoroData(
  
  selectedAsset,
  selectedFrequency,
  selectedInvAmount,
  selectedInvStartDate,
  selectedInvEndDate,
  selectedCurrency,
  selectedPaymentMethod
) {
  const HISTORICAL_ENDPOINT = process.env.REACT_APP_ETORO_CALCULATIONS_ENDPOINT;
  const params = new URLSearchParams({
    stock_name: selectedAsset,
    investment_amount: selectedInvAmount,
    investment_frequency: selectedFrequency,
    selected_currency: selectedCurrency,
    payment_method: selectedPaymentMethod,
    start_date: selectedInvStartDate,
  }).toString();

  const url =
    `${HISTORICAL_ENDPOINT}?${params}&` +
    (selectedInvEndDate ? `&end_date=${selectedInvEndDate}` : "");
  console.log(url)
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    alert("Unable to calculate eToro data: " + error);
    return error;
  }
}

export default fetchEtoroData;
