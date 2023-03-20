import { useState, useEffect } from "react";
import { DataContext } from "./CreateContext";

const DataProvider = ({ children, query }) => {
  const [data, setData] = useState([]);

  const DATA_API = `https://hn.algolia.com/api/v1/search?query=${query}`;

  const fetchData = async () => {
    const response = await fetch(DATA_API);
    const jsonData = await response.json();
    setData(jsonData.hits);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
