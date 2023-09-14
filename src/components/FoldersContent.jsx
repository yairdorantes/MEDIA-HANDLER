import { useEffect, useState } from "react";
import UploadFiles from "./UploadFiles";
import axios from "axios";
import { api } from "../api";
import { useToggleList } from "../myHooks/ListToggle";
import OutsideClickHandler from "react-outside-click-handler";
import AllFileActions from "./AllFileActions";

const FoldersContent = () => {
  const [files, setFiles] = useState([]);
  const [delQuestion, setDelQuestion] = useState(true);
  const { list, toggleList, setList } = useToggleList([]);
  const getFiles = () => {
    let pathname = window.location.pathname;
    let parts = pathname.split("/"); // Split the pathname by '/'
    let lastPart = parts.pop();
    axios
      .get(`${api}/get_files/${lastPart}`)
      .then((res) => {
        console.log(res);
        setFiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFiles();
  }, []);

  const fileTypeIcon = (type, style) => {
    const fileIcons = {
      pdf: (
        <svg
          className={style}
          fill="currentColor"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
        >
          <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 01-.45.606c-.28.337-.498.516-.635.572a.266.266 0 01-.035.012.282.282 0 01-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 00.5-1.05 12.045 12.045 0 00.51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 01-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 01.026.064.436.436 0 01-.06.2.307.307 0 01-.094.124.107.107 0 01-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 01-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 01.145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
          <path
            fillRule="evenodd"
            d="M4 0h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm5.5 1.5v2a1 1 0 001 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 011.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 00.51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 00-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 00-1.335-.05 10.954 10.954 0 01-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 00-.127-.538.7.7 0 00-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 01-1.062 2.227 7.662 7.662 0 00-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"
          />
        </svg>
      ),
      image: (
        <svg
          className={style}
          fill="currentColor"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
        >
          <path d="M6.002 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M1.5 2A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13zm13 1a.5.5 0 01.5.5v6l-3.775-1.947a.5.5 0 00-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 00-.63.062L1.002 12v.54A.505.505 0 011 12.5v-9a.5.5 0 01.5-.5h13z" />
        </svg>
      ),
      video: (
        <svg
          className={style}
          viewBox="0 0 980 1000"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M980 250H880v100h100v100H880v100h100v100H880v100h100v60c0 10.667-4 20-12 28s-17.333 12-28 12H40c-10.667 0-20-4-28-12S0 820.667 0 810v-60h100V650H0V550h100V450H0V350h100V250H0v-60c0-12 4-21.667 12-29 8-7.333 17.333-11 28-11h900c10.667 0 20 3.667 28 11s12 17 12 29v60M380 650l250-150-250-150v300" />
        </svg>
      ),
      application: (
        <svg
          className={style}
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M21.7 18.6v-1l1.1-.8c.1-.1.2-.2.1-.3l-1-1.7c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.2 0-.3.1-.3.2l-.2 1.3c-.3.2-.5.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c0 .1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.2.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.2.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.5-.3.8-.5l1.2.4c.1 0 .2 0 .3-.1l1-1.7c.1-.1.1-.2 0-.2l-1.1-.8m-3.7.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5M11 18c0-3.9 3.1-7 7-7 2 0 3.7.8 5 2.1V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9.3c-.8-1.1-1.3-2.5-1.3-4M3 4h18v3H3V4z" />
        </svg>
      ),
    };
    const inputString = type;
    const parts = inputString.split("/"); // Split the string by '/'
    const normalizedType = parts[0].toLowerCase(); // Get the first part
    if (normalizedType in fileIcons) {
      return fileIcons[normalizedType];
    }
    return (
      <svg
        className={style}
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="1em"
        width="1em"
      >
        <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z" />
      </svg>
    );
  };
  return (
    <div>
      {/* FoldersContent */}
      <UploadFiles />
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {files.map((file, i) => (
          <div
            key={i}
            className="w-24 relative"
            onClick={() => toggleList(file.id_file)}
          >
            <div className="">{fileTypeIcon(file.file_type, "w-16 h-16")}</div>
            <div className="overflow-ellipsis overflow-hidden">
              {file.file_name}
            </div>
            {list.length > 0 &&
              (list.includes(file.id_file) ? (
                <div className="absolute bottom-1 right-1">
                  <svg
                    className="rounded-full bg-white text-blue-600 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-3.97-3.03a.75.75 0 00-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 00-1.06 1.06L6.97 11.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-.01-1.05z" />
                  </svg>
                </div>
              ) : (
                <div className="absolute bottom-1 right-1 bg-black rounded-full border border-white w-6 h-6 bg-opacity-60" />
              ))}
          </div>
        ))}
      </div>
      {list.length > 0 && <AllFileActions />}
    </div>
  );
};

export default FoldersContent;
