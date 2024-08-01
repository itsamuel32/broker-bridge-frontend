import React from "react";
import BrokerItem from "./BrokerItem";
import "../../styling/broker-list.css";
import FetchBrokersData from "../../services/FetchDataRequest";

const BrokersList = () => {
  const BROKERS_ENDPOINT = "http://localhost:8080/broker/all";

  const [data, loading, error] = FetchBrokersData(BROKERS_ENDPOINT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No Brokers displayed.</p>;

  return (
    <div className="broker-list">
      {data &&
        data.map((broker) => <BrokerItem key={broker.id} broker={broker} />)}
    </div>
  );
};

export default BrokersList;
