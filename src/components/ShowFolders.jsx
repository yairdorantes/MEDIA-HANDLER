import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import { toast } from "react-hot-toast";
const ShowFolders = () => {
  const [folderList, setFolderList] = useState([]);
  const [newFolder, setNewFolder] = useState("");
  const addFolder = () => {
    if (newFolder.length > 0) {
      axios
        .post(`${api}/add_folder`, { name: newFolder })
        .then((res) => {
          console.log(res);
          setFolderList([
            ...folderList,
            { id_folder: folderList.length + 1, name: newFolder },
          ]);
          document.getElementById("my_modal_2").close();
        })
        .catch((err) => {
          console.log(err);
          toast.error("somethoing went wrong");
        });
    }
  };

  const getFolders = () => {
    axios
      .get(`${api}/get_folders`)
      .then((res) => {
        setFolderList(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFolders();
  }, []);

  return (
    <div>
      <div
        className=""
        onClick={() => {
          document.getElementById("my_modal_2").showModal();
        }}
      >
        <svg
          className="w-14 h-14 text-blue-500 cursor-pointer"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M20 5h-9.586L8.707 3.293A.997.997 0 008 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-4 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z" />
        </svg>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="mb-2">New Folder's Name: </div>
          <div>
            <input
              type="text"
              placeholder="Folder's name"
              value={newFolder}
              onChange={(e) => setNewFolder(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <button onClick={addFolder} className="btn mt-2">
              Create
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="flex justify-center gap-10  flex-wrap">
        {folderList.map((folder, i) => (
          <div key={i} className="w-16">
            <Link to={`${folder.name}`}>
              <div>
                <svg
                  className="w-14 h-14 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M20 5h-9.586L8.707 3.293A.997.997 0 008 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z" />
                </svg>
              </div>
              <div className="text-center truncate">{folder.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowFolders;
