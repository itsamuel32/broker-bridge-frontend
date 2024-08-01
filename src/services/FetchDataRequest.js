import { useEffect, useState } from "react";

const FetchDataRequest = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        let requestData = await response.json();
        setData(requestData);
        console.log(requestData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
};

export default FetchDataRequest;
