import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const AllFileActions = () => {
  const [delQuestion, setDelQuestion] = useState(false);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
      <div onClick={() => setDelQuestion(true)}>
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M6 7H5v13a2 2 0 002 2h10a2 2 0 002-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z" />
        </svg>
      </div>
      <OutsideClickHandler onOutsideClick={() => setDelQuestion(false)}>
        <div
          id="del-question"
          className={`absolute transition-all duration-350 ${
            delQuestion ? "bottom-10" : "-bottom-80"
          }  w-80 rounded-lg bg-gray-900 p-4 -translate-x-1/2 left-1/2`}
        >
          <div className="text-center mb-10 font-bold">
            Delete items selected?
          </div>
          <div className="flex justify-around gap-4">
            <div
              onClick={() => setDelQuestion(false)}
              className="p-2 cursor-pointer bg-slate-800 w-24 rounded-3xl text-center text-gray-300 font-bold"
            >
              Cancel
            </div>
            <div
              //   onClick={delFile}
              className="p-2 cursor-pointer bg-slate-800 w-24 rounded-3xl text-center text-red-500 font-bold"
            >
              Delete
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AllFileActions;
