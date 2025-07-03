import React, { useState } from "react";
import axios from 'axios';
//
export const Filecomp = ({ getDataFromServer }) => {
  const [file, setFile] = useState(null);
  const handleSubmit = async () => {
    try {

      const res = await axios.post(
        "http:// localhost:8080/api/file/upload", 
        {file},
        { 
        headers : {
          "Content-Type": "multipart/form-data",
        },
      }
    );
      getDataFromServer(); // Refresh the data after upload
      console.log("File uploaded successfully",res.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
