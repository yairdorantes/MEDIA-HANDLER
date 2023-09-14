import axios from "axios";
import { api } from "../api";
import { useState } from "react";
import FileUI from "./FileUI";
const UploadFiles = () => {
  const [filesList, setFilesList] = useState([]);
  const [arrowDirection, setArrowDirection] = useState(true);
  // console.log(window.location.pathname);
  const [uploadList, setUploadList] = useState([]);
  const saveFileData = (file) => {
    // This will log "file.txt"
    let pathname = window.location.pathname;
    let parts = pathname.split("/"); // Split the pathname by '/'
    let lastPart = parts.pop();
    const fileData = {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileFolder: lastPart,
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
      const chunkSize = 1024 * 1024 * 4; // 1 MB chunks (adjust as needed)
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
        formData.append("location", window.location.pathname);
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
    <div className="text-center mt-5">
      <input
        type="file"
        multiple
        onChange={(e) => {
          // setFile(e.target.files[0]);
          console.log(e.target.files);
          setFilesList(Array.from(e.target.files));
        }}
      />
      <button className="btn btn-success mt-2" onClick={processFiles}>
        Upload
      </button>

      {/* <FileUI /> */}
      {filesList && filesList.length > 0 && (
        <div
          className={`fixed bottom-0 transition-all ${
            arrowDirection ? "h-1/2" : "h-36"
          }  w-full -translate-x-1/2 left-1/2 bg-slate-900 rounded-lg`}
        >
          <div
            className=" m-2  flex justify-end cursor-pointer"
            onClick={() => setArrowDirection(!arrowDirection)}
          >
            <svg
              className={`w-8 h-8 text-teal-400 ${
                arrowDirection ? "rotate-180 " : "rotate-0"
              } transition-all`}
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M16 8A8 8 0 100 8a8 8 0 0016 0zm-7.5 3.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11.5z" />
            </svg>
          </div>
          <div className="overflow-y-auto h-full">
            {filesList.map((file, i) => (
              <FileUI file={file} percentage={uploadList[i]} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadFiles;
