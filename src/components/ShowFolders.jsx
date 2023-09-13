import { Link } from "react-router-dom";

const ShowFolders = () => {
  return (
    <div>
      <Link to="bey">
        <svg
          className="w-14 h-14 text-yellow-500"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M20 5h-9.586L8.707 3.293A.997.997 0 008 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z" />
        </svg>
      </Link>
    </div>
  );
};

export default ShowFolders;
