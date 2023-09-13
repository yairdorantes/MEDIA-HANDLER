import axios from "axios";
import { api } from "../api";
import { useState } from "react";
import { toast } from "react-hot-toast";
const FileActions = ({ file }) => {
  const [delQuestion, setDelQuestion] = useState(false);
  const delFile = () => {
    axios
      .delete(`${api}/del_file`, {
        data: { file_id: file.id_file, path: file.source },
      })
      .then((res) => {
        console.log(res);
        toast.success("File deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("File no deleted :(");
      });
    setDelQuestion(false);
  };
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
      <div id="action-buttons" className="flex  justify-evenly items-center">
        <div className="" onClick={() => setDelQuestion(!delQuestion)}>
          <svg
            className="w-8 h-8 hover:text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M17 6V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1H4a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3V8h1a1 1 0 100-2h-3zm-2-1H9v1h6V5zm2 3H7v11a1 1 0 001 1h8a1 1 0 001-1V8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <svg
            className="w-8 h-8 hover:text-yellow-500"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" />
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
          </svg>
        </div>
        <div>
          <svg
            className="w-7 h-7 hover:text-blue-500"
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
          >
            <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </div>
      </div>

      <div
        id="del-question"
        className={`absolute transition-all duration-350 ${
          delQuestion ? "bottom-10" : "-bottom-80"
        }  w-80 rounded-lg bg-gray-900 p-4 -translate-x-1/2 left-1/2`}
      >
        <div className="text-center mb-10">Delete this item?</div>
        <div className="flex justify-around gap-4">
          <div
            onClick={() => setDelQuestion(false)}
            className="p-2 cursor-pointer bg-slate-800 w-24 rounded-3xl text-center text-gray-300 font-bold"
          >
            Cancel
          </div>
          <div
            onClick={delFile}
            className="p-2 cursor-pointer bg-slate-800 w-24 rounded-3xl text-center text-red-500 font-bold"
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileActions;
