import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleFileUpload = async () => {
    if (file) {
      const chunkSize = 1024 * 1024; // 1 MB chunks (adjust as needed)
      // Initialize variables for tracking progress and starting index
      let start = 0;
      let end = Math.min(chunkSize, file.size);
      while (start < file.size) {
        // Create a chunk of the file
        const chunk = file.slice(start, end);
        const percentage = (end / file.size) * 100;
        console.log(`Percentage completed: ${percentage.toFixed(2)}%`);
        setUploadProgress(percentage.toFixed(2));
        // Create a FormData object and append the chunk to it
        const formData = new FormData();
        formData.append("file", chunk, file.name);
        // Send the chunk to the server
        try {
          const response = await axios.post(
            "http://192.168.1.2:8000/upload-chunk",
            formData
          );

          console.log(response.data);

          // Update the start and end indices for the next chunk
          start = end;
          end = Math.min(start + chunkSize, file.size);
        } catch (err) {
          console.error(err);
          break; // Break the loop if an error occurs
        }
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button className="btn" onClick={handleFileUpload}>
        Upload
      </button>
      <progress
        className="progress progress-info w-56"
        value={uploadProgress}
        max="100"
      ></progress>
    </div>
  );
}

export default App;
