import React from "react";
import { Filecomp } from "./Filecomp";
import "./App.css";
import axios from "axios";
// import { Filecomp } from './Filecomp'

function App() {
  const [fileData, setFileData] = React.useState([]);
  const getDataFromServer = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/file/get");
      const data = response.data;

      setFileData("Data from server:", data);
    } catch (error) {
      console.error("Error fetching data from server:", error);
    }
  };

  // Call the function to fetch data when the component mounts
  React.useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <>
      <Filecomp getDataFromServer={getDataFromServer} />

      {fileData.map((el) => (
        <div key={el._id}>
          <img src={`http://localhost:8080/${el.filename}`} alt={el._id} />
        </div>
      ))}
    </>
  );
}

export default App;
