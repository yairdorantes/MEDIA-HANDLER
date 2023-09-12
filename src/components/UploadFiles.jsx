import axios from "axios";
import { api } from "../api";
import { useState } from "react";
import FileUI from "./FileUI";
const UploadFiles = () => {
  const [filesList, setFilesList] = useState([]);
  const [uploadList, setUploadList] = useState([]);
  const saveFileData = (file) => {
    const fileData = {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
    };
    axios
      .post(`${api}/file_data`, fileData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileUpload = async (file, index) => {
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
        setUploadList((prevUploadList) => {
          const updatedUploadList = [...prevUploadList];
          updatedUploadList[index] = percentage.toFixed(2);
          return updatedUploadList;
        });
        if (percentage === 100) {
          saveFileData(file);
        }
        // Create a FormData object and append the chunk to it
        const formData = new FormData();
        formData.append("file", chunk, file.name);
        // Send the chunk to the server
        try {
          await axios.post(`${api}/upload_file`, formData);
          // console.log(response.data);
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
  const processFiles = async () => {
    for (let i = 0; i < filesList.length; i++) {
      await handleFileUpload(filesList[i], i);
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(e) => {
          // setFile(e.target.files[0]);
          console.log(e.target.files);
          setFilesList(Array.from(e.target.files));
        }}
      />
      <button className="btn" onClick={processFiles}>
        Upload
      </button>

      {/* <FileUI /> */}
      {filesList && filesList.length > 0 && (
        <div>
          {filesList.map((file, i) => (
            <FileUI file={file} percentage={uploadList[i]} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadFiles;
