import { useState } from "react";
import DataProvider from "./DataProvider";
import DataTable from "./UserData";

function App() {
  const [query, setQuery] = useState("react");
  return (
    <div>
      <div className="flex m-2">
        <span className="text-white flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md bg-purple-500">
          Search Data
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 flex flex-1 border sm:text-m rounded-r-md focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-rose-400"
        />
      </div>
      <DataProvider query={query}>
        <DataTable />
      </DataProvider>
    </div>
  );
}

export default App;
