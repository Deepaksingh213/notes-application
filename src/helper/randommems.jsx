import { useEffect, useState } from "react";

const useRandomMems = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('error', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, error, loading, setUrl];
};

export default useRandomMems;
