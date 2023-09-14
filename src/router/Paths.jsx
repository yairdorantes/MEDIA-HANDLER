import { Route, Routes } from "react-router-dom";
import FoldersContent from "../components/FoldersContent";
import ShowFolders from "../components/ShowFolders";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowFolders />} />
      <Route path="/:folder/" element={<FoldersContent />} />
    </Routes>
  );
};

export default MyRouter;
